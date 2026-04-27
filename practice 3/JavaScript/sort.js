const createSortArr = (data) => {
    const sortArr = [];
    const sortSelects = data.getElementsByTagName('select');

    for (const item of sortSelects) {
        const keySort = Number(item.value);

        if (keySort === 0) {
            break;
        }

        const desc = document.getElementById(item.id + 'Desc').checked;
        sortArr.push({ column: keySort - 1, direction: desc });
    }

    return sortArr;
};

const sortTable = (idTable, formData) => {
    const sortArr = createSortArr(formData);

    if (sortArr.length === 0) {
        createTable(lastSortedTableData, idTable);
        return false;
    }

    const head = Object.keys(players[0]);
    const sortedData = [...currentTableData].sort((first, second) => {
        for (const { column, direction } of sortArr) {
            const key = head[column];
            const firstValue = first[key];
            const secondValue = second[key];

            const comparison = typeof firstValue === 'number'
                ? firstValue - secondValue
                : String(firstValue).localeCompare(String(secondValue), 'ru');

            if (comparison !== 0) {
                return direction ? -comparison : comparison;
            }
        }
        return 0;
    });

    createTable(sortedData, idTable);
};

const resetSort = (idTable, formData) => {
    resetSortControls(formData);
    createTable(lastSortedTableData, idTable);
};

const createSortOption = (value, text) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
};

const setupSortSelects = (data) => {
    if (!data.length) {
        return;
    }

    const keys = Object.keys(data[0]);
    const selectIds = ['sort1', 'sort2', 'sort3'];
    const descIds = ['sort2Desc', 'sort3Desc'];

    const rebuildOptions = () => {
        const selected = selectIds.map(id => document.getElementById(id).value);

        selectIds.forEach((selectId, i) => {
            const select = document.getElementById(selectId);
            const currentVal = select.value;

            select.innerHTML = '';
            select.append(createSortOption('0', '\u041D\u0435\u0442'));

            keys.forEach((key, index) => {
                const val = String(index + 1);
                if (!selected.some((s, j) => j !== i && s === val)) {
                    select.append(createSortOption(val, key));
                }
            });

            select.value = select.querySelector(`option[value="${currentVal}"]`) ? currentVal : '0';
        });

        const lvl2Disabled = document.getElementById('sort1').value === '0';
        const lvl3Disabled = lvl2Disabled || document.getElementById('sort2').value === '0';

        document.getElementById('sort2').disabled = lvl2Disabled;
        document.getElementById('sort3').disabled = lvl3Disabled;
        document.getElementById('sort2Desc').disabled = lvl2Disabled;
        document.getElementById('sort3Desc').disabled = lvl3Disabled;

        if (lvl2Disabled) { document.getElementById('sort2').value = '0'; }
        if (lvl3Disabled) { document.getElementById('sort3').value = '0'; }
    };

    selectIds.forEach(id => document.getElementById(id).addEventListener('change', rebuildOptions));
    rebuildOptions();
};

const resetSortControls = (formData) => {
    if (!formData) {
        return;
    }

    formData.reset();
    Array.from(formData.querySelectorAll('select')).forEach(select => {
        select.value = '0';
    });

    document.getElementById('sort1').dispatchEvent(new Event('change'));
};