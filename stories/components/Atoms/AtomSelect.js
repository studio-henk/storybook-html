/*
* Note: To programmatically set the for attribute, use htmlFor.
*
* <select
    name="select_country"
    id="country-select"
    className="atom-select"
    required
>
    <option value="nederland">Nederland</option>
    <option value="AT">Austria (€ 149)</option>
    <option value="BE">Belgium</option>
    <option value="DE">Germany (€ 149)</option>
    <option value="FR">France (€ 149)</option>
    <option value="IT">Italy (€ 199)</option>
    <option value="LU">Luxembourg (€ 149)</option>
</select>
* */
import './_atom-select.css';
import {Icon} from './atom-icon/_atom-icon';

export const createAtomSelect = ({
    name = '',
    id = '',
    required = false,
    disabled = false,
    autocomplete = 'off',
    form,
    initialValue
}) => {

    // create wrapper div
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['atom-select'].join(' ');

    // create field div
    const fieldElement = document.createElement('div');
    fieldElement.className = ['atom-select__field'].join(' ');

    const AtomSelect = document.createElement('select');
    AtomSelect.className = ['atom-select__select-element'].join(' ');
    AtomSelect.name = name;
    AtomSelect.id = id;
    AtomSelect.autocomplete = autocomplete;

    if (required) {
        AtomSelect.required = required;
    }

    if (disabled) {
        AtomSelect.disabled = disabled;
    }

    const AtomSelectOptions = `
        <option value="nederland">Nederland</option>
        <option value="AT">Austria</option>
        <option value="BE">Belgium</option>
        <option value="DE">Germany</option>
        <option value="FR">France</option>
        <option value="IT">Italy</option>
        <option value="LU">Luxembourg</option>
    `;

    AtomSelect.insertAdjacentHTML('beforeend', AtomSelectOptions);

    // add select to field
    fieldElement.appendChild(AtomSelect);

    // wrapperElement.appendChild(AtomSelect);
    wrapperElement.appendChild(fieldElement);

    wrapperElement.appendChild(
        Icon({
            icon: 'icon-disclosure-collapsed'
        })
    );

    return wrapperElement;
};