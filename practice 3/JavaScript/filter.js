const correspond = {
    'Никнейм': 'name',
    'Команда': 'team',
    'Роль': 'role',
    'Страна': 'country',
    'Количество MVP': ['mvp_from', 'mvp_to'],
    'Rating 3.0': ['rating_from', 'rating_to']
};

const dataFilter = (dataForm) => {
    const dictFilter = {};

    for (const item of dataForm.elements) {
        if (!item.id) {
            continue;
        }

        let valInput = item.value;

        if (item.type === 'text') {
            valInput = valInput.toLowerCase();
        }

        if (item.tagName === 'SELECT') {
            valInput = valInput.toLowerCase();
        }

        if (item.type === 'number') {
            if (valInput !== '') {
                valInput = Number(valInput);
            } else if (item.id.includes('from')) {
                valInput = -Infinity;
            } else if (item.id.includes('to')) {
                valInput = Infinity;
            }
        }

        dictFilter[item.id] = valInput;
    }

    return dictFilter;
};

const filterTable = (data, idTable, dataForm) => {
    const datafilter = dataFilter(dataForm);

    const tableFilter = data.filter(item => {
        let result = true;

        Object.entries(item).forEach(([key, val]) => {
            if (typeof val === 'string') {
                result &&= val.toLowerCase().includes(datafilter[correspond[key]]);
            } else {
                const [fromId, toId] = correspond[key];
                result &&= val >= datafilter[fromId] && val <= datafilter[toId];
            }
        });

        return result;
    });

    currentTableData = [...tableFilter];
    lastSortedTableData = [...tableFilter];
    createTable(tableFilter, idTable);
};

const clearFilter = (idTable, data, dataForm) => {
    dataForm.reset();
    fillFilterSelects(data);
    currentTableData = [...data];
    lastSortedTableData = [...data];
    createTable(data, idTable);
};

const fillSelectFromData = (selectId, values) => {
    const select = document.getElementById(selectId);
    const currentValue = select.value;
    select.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Все';
    select.append(defaultOption);

    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        if (value === currentValue) {
            option.selected = true;
        }
        select.append(option);
    });
};

const fillFilterSelects = (data) => {
    const roles = [...new Set(data.map(item => item['Роль']))].sort((a, b) =>
        a.localeCompare(b, 'ru', { sensitivity: 'base' })
    );

    const countries = [...new Set(data.map(item => item['Страна']))].sort((a, b) =>
        a.localeCompare(b, 'ru', { sensitivity: 'base' })
    );

    fillSelectFromData('role', roles);
    fillSelectFromData('country', countries);
};