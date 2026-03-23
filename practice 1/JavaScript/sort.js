const createSortArr = (data) => {
    const sortArr = [];
    const sortSelects = data.getElementsByTagName('select');

    for (const item of sortSelects) {
        const keySort = Number(item.value);

        if (keySort === 0) {
            break;
        }

        const desc = document.getElementById(item.id + 'Desc').checked;

        sortArr.push({
            column: keySort - 1,
            direction: desc
        });
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

            let comparison = 0;

            if (typeof firstValue === 'number' && typeof secondValue === 'number') {
                comparison = firstValue - secondValue;
            } else {
                comparison = String(firstValue).localeCompare(String(secondValue), 'ru');
            }

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
