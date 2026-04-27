let currentTableData = [];
let lastSortedTableData = [];

const getPlayersData = () => players;

const buildCurrentChart = (allData) => {
    const oxNode = document.querySelector('input[name="ox"]:checked');
    const oyChecked = Array.from(document.querySelectorAll('input[name="oy"]:checked')).map(item => item.value);
    const chartTypeNode = document.getElementById('chartType');
    const oyGroup = document.getElementById('oy-group');
    const oyError = document.getElementById('oy-error');

    const showMax = oyChecked.includes('max');
    const showMin = oyChecked.includes('min');

    if (!showMax && !showMin) {
        oyGroup.style.border = '1px solid red';
        oyError.textContent = 'Выберите хотя бы одно значение по оси OY';
        d3.select('#chart').selectAll('*').remove();
        return;
    }

    oyGroup.style.border = 'none';
    oyError.textContent = '';

    drawGraph(allData, {
        ox: oxNode ? oxNode.value : 'Команда',
        oyKey: 'Rating 3.0',
        showMax,
        showMin,
        chartType: chartTypeNode ? chartTypeNode.value : 'scatter'
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const data = getPlayersData();
    const tableId = 'playersTable';
    const filterForm = document.getElementById('filterForm');
    const sortForm = document.getElementById('sortForm');
    const graphForm = document.getElementById('graphForm');
    const findBtn = document.getElementById('findBtn');
    const clearFilterBtn = document.getElementById('clearFilterBtn');
    const sortBtn = document.getElementById('sortBtn');
    const resetSortBtn = document.getElementById('resetSortBtn');

    currentTableData = [...data];
    lastSortedTableData = [...data];

    createTable(data, tableId);
    fillFilterSelects(data);
    setupSortSelects(data);
    buildCurrentChart(data);

    if (graphForm) {
        graphForm.addEventListener('submit', function (event) {
            event.preventDefault();
            buildCurrentChart(data);
        });
    }

    document.querySelectorAll('input[name="oy"]').forEach(item => {
        item.addEventListener('change', function () {
            document.getElementById('oy-group').style.border = 'none';
            document.getElementById('oy-error').textContent = '';
        });
    });

    if (findBtn) {
        findBtn.addEventListener('click', function () {
            filterTable(data, tableId, filterForm);
        });
    }

    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', function () {
            clearFilter(tableId, data, filterForm);
            resetSortControls(sortForm);
        });
    }

    if (sortBtn) {
        sortBtn.addEventListener('click', function () {
            sortTable(tableId, sortForm);
        });
    }

    if (resetSortBtn) {
        resetSortBtn.addEventListener('click', function () {
            resetSort(tableId, sortForm);
        });
    }
});