const createHeaderRow = (headers) => {
    const tr = document.createElement('tr');

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.append(th);
    });

    return tr;
};

const createBodyRows = (data) => {
    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const tr = document.createElement('tr');

        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.append(td);
        });

        tbody.append(tr);
    });

    return tbody;
};

const clearTable = (idTable) => {
    const table = document.getElementById(idTable);
    table.innerHTML = '';
};

const createTable = (data, idTable) => {
    const table = document.getElementById(idTable);
    clearTable(idTable);

    const headers = data.length > 0 ? Object.keys(data[0]) : Object.keys(players[0]);
    const headerRow = createHeaderRow(headers);
    table.append(headerRow);

    if (data.length > 0) {
        const bodyRows = createBodyRows(data);
        table.append(bodyRows);
    }
};
