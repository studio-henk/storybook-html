import './molecule-table.css';

export const createTable = ({
  label,
  placeholder,
  buttonText,
  tableData = [
        {
            rowId: 1,
            columns: [
                {
                    columnId: 1,
                    columnText: 'row 1, column 1'
                },
                {
                    columnId: 2,
                    columnText: 'row 1, column 2'
                }
            ],
            /*cellText: 'cell item 1',*/
        },
        {
            rowId: 2,
            columns: [
                {
                    columnId: 1,
                    columnText: 'row 2, column 1'
                },
                {
                    columnId: 2,
                    columnText: 'row 2, column 2'
                }
            ],
            /*cellText: 'cell 2',*/
        }
    ]
}) => {
  const mclTable = document.createElement('table');
  mclTable.className = ['molecule-table'].join(' ');
  mclTable.data = tableData;
  /*
    <thead>
    <tr>
      <th colSpan="2">The table header</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    </tbody>
  */
    mclTable.data.forEach(
    dataElement => {
        // create tr
        const tableRow = document.createElement('tr');
        // tableRow.innerHTML = '<td>' + dataElement.cellText + '</td>';

        // create td's
        dataElement.columns.forEach(
            column => {
                // create td
                const tableTD = document.createElement('td');
                tableTD.innerHTML = column.columnText;

                // add cell
                tableRow.append(tableTD);
            }
        )

        // add row
        mclTable.append(tableRow);
    }
  )

  return mclTable;
};
