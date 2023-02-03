import './_molecule-label-radio.css';
import {createAtomRadio} from "../../Atoms/atom-radio/AtomRadio";
import {createAtomLabel} from "../../Atoms/AtomLabel";

export const createMoleculeLabelRadio = ({
  legendText= 'Legend text',
  required,
  order,
  customRadio,
  layout,
  dataStyle,
  data = [
      {
          id: 'radio1',
          checked: true,
          disabled: false,
          groupName: 'group1',
          customRadio: false,
          labelText: 'Radio label text',
          forAttr: 'radio1',
          value: 'value 1'
      },
      {
          id: 'radio2',
          checked: false,
          disabled: false,
          groupName: 'group1',
          customRadio: false,
          labelText: 'Radio label text',
          forAttr: 'radio2',
          value: 'value 2',
      }
  ],
}) => {
  // create div
  const moleculeLabelRadio = document.createElement('div');
  moleculeLabelRadio.className = ['molecule-label-radio'].join(' ');

  if (layout) {
    moleculeLabelRadio.setAttribute('data-layout', layout);
  }

  // fieldset
  const fieldSet = document.createElement('fieldset');
  fieldSet.className = 'molecule-label-radio__fieldset';

  // legend
  const legend = document.createElement('legend');
  // legend.innerHTML = 'Select a maintenance drone:';
  legend.innerHTML = legendText;
  legend.className = 'molecule-label-radio__legend';

  if (dataStyle) {
    moleculeLabelRadio.setAttribute('data-style', dataStyle);
    legend.className = ['screen-reader'].join(' ');
  }

  // asterisk when required
  if (required) {
    const asteriskElement = `
      <span class="molecule-label-radio__hint-required">*</span>
    `;

    legend.insertAdjacentHTML('beforeend', asteriskElement);
  }

  fieldSet.appendChild(legend);

  // order
  if (order) {
    moleculeLabelRadio.setAttribute('data-order', order);
  }

  // loop over data-items
  fieldSet.data = data;
  fieldSet.data.forEach(
    element => {
        // radio+label container
        const container = document.createElement('div');
        container.className = 'molecule-label-radio__container';
        // custom
        if (customRadio === true) {
            container.setAttribute('data-custom-radio', customRadio);
        }

        // input
        container.appendChild(
          createAtomRadio({
              checked: element.checked,
              // checked: checked,
              id: element.id,
              name: element.groupName,
              disabled: element.disabled,
              required: required,
              value: element.value,
          })
        )

        // label
        container.appendChild(
          createAtomLabel({
              labelText: element.labelText,
              forAttr: element.forAttr,
              // checkmarkCircle: checkmarkCircle
          })
        )

        fieldSet.appendChild(container);
    }
  );

  moleculeLabelRadio.appendChild(fieldSet);

  return moleculeLabelRadio;
};