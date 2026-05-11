import TableRow from './TableRow.js';

const TableBody = (props) => {
    const { body, numPage, amountRows } = props;

    const paginate = amountRows && Number(amountRows) > 0;
    const begRange = paginate ? (Number(numPage) - 1) * Number(amountRows) : 0;
    const endRange = paginate ? begRange + Number(amountRows) : body.length;

    const tbody = body.map((item, index) => (
        <tr
            key={index}
            className={
                !paginate || (index >= begRange && index < endRange) ? 'show' : 'hide'
            }
        >
            <TableRow row={Object.values(item)} isHead="0" />
        </tr>
    ));

    return <tbody>{tbody}</tbody>;
};

export default TableBody;