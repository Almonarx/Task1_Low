(function () {
  const btn = document.getElementById('run'),
        table = document.getElementById('table');

  btn.addEventListener('click', () => {
    let fullTable = '',
        rowValue = parseInt(document.getElementById('rows').value),
        columnValue = parseInt(document.getElementById('columns').value)

    for (let i = 0; i < rowValue; i++) {
      fullTable += createTr(columnValue);
    };

    table.innerHTML = fullTable;
  });

  function createTr (val) {
    let td = '';

    for (let i = 0; i < val; i++) {
      td += `<td></td>`;
    };

    return `<tr>${td}</tr>`;
  };
})();
