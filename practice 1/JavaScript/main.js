let currentTableData = [];
let lastSortedTableData = [];

const createOption = (str, val) => {
    const item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
};

const setSortSelect = (arr, sortSelect) => {
    sortSelect.innerHTML = '';
    sortSelect.append(createOption('Нет', 0));

    arr.forEach((item, index) => {
        sortSelect.append(createOption(item, index + 1));
    });
};

const setSortSelects = (data, dataForm) => {
    const head = Object.keys(data);
    const allSelect = dataForm.getElementsByTagName('select');

    for (let i = 0; i < allSelect.length; i++) {
        setSortSelect(head, allSelect[i]);
        allSelect[i].disabled = i !== 0;
        allSelect[i].value = 0;
    }

    document.getElementById('sort1Desc').checked = false;
    document.getElementById('sort2Desc').checked = false;
    document.getElementById('sort3Desc').checked = false;
};

const changeNextSelect = (curSelect, nextSelectId) => {
    const nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;
    nextSelect.innerHTML = curSelect.innerHTML;

    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.value);
        nextSelect.value = 0;
    } else {
        nextSelect.disabled = true;
        nextSelect.value = 0;
    }

    document.getElementById(nextSelectId + 'Desc').checked = false;
};

const resetSelect = (selectId) => {
    const select = document.getElementById(selectId);
    select.value = 0;
    select.disabled = true;
    document.getElementById(selectId + 'Desc').checked = false;
};

const resetSortControls = (formData) => {
    setSortSelects(players[0], formData);
};

document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterForm');
    const sortForm = document.getElementById('sortForm');

    currentTableData = [...players];
    lastSortedTableData = [...players];

    fillFilterSelects(players);
    createTable(players, 'playersTable');
    setSortSelects(players[0], sortForm);

    document.getElementById('findBtn').addEventListener('click', () => {
        resetSortControls(sortForm);
        filterTable(players, 'playersTable', filterForm);
    });

    document.getElementById('clearFilterBtn').addEventListener('click', () => {
        clearFilter('playersTable', players, filterForm);
        resetSortControls(sortForm);
    });

    document.getElementById('sort1').addEventListener('change', function () {
        changeNextSelect(this, 'sort2');

        if (this.value == 0) {
            resetSelect('sort3');
        }
    });

    document.getElementById('sort2').addEventListener('change', function () {
        changeNextSelect(this, 'sort3');
    });

    document.getElementById('sortBtn').addEventListener('click', () => {
        sortTable('playersTable', sortForm);
    });

    document.getElementById('resetSortBtn').addEventListener('click', () => {
        resetSort('playersTable', sortForm);
    });
});