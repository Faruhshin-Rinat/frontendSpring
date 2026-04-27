function getActiveDataSource() {
    if (typeof players !== 'undefined' && Array.isArray(players) && players.length) {
        return players;
    }
    return [];
}

const createHeaderRow = (headers) => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.append(th);
    });
    return tr;
};

const createBodyRows = (data, headers) => {
    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = item[header];
            tr.append(td);
        });
        tbody.append(tr);
    });
    return tbody;
};

const clearTable = (idTable) => {
    const table = document.getElementById(idTable);
    if (table) {
        table.innerHTML = '';
    }
};

const createTable = (data, idTable) => {
    const table = document.getElementById(idTable);
    if (!table) {
        return;
    }

    clearTable(idTable);

    const source = getActiveDataSource();
    const headers = data.length > 0 ? Object.keys(data[0]) : Object.keys(source[0]);

    const headerRow = createHeaderRow(headers);
    table.append(headerRow);

    if (data.length > 0) {
        const bodyRows = createBodyRows(data, headers);
        table.append(bodyRows);
    }
};

const showTable = (idTable, data) => {
    createTable(data, idTable);
};