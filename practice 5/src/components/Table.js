import { useState } from 'react';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import Filter from './Filter.js';
import Sort, { NONE } from './Sort.js';

const INITIAL_SORT_STATE = {
    sort1: NONE, sort2: NONE, sort3: NONE,
    desc1: false, desc2: false, desc3: false,
};

const Table = (props) => {
    const { data, amountRows, paginate, onFilter } = props;

    const [filteredData, setFilteredData] = useState([...data]);
    const [displayData, setDisplayData] = useState([...data]);
    const [activePage, setActivePage] = useState(1);
    const [sortState, setSortState] = useState(INITIAL_SORT_STATE);
    const [sortApplied, setSortApplied] = useState(false);

    const columns = Object.keys(data[0]);

    const handleFilter = (result) => {
        setFilteredData(result);
        setDisplayData(result);
        if (onFilter) onFilter(result);
    };

    const handleSort = (sorted, applied) => {
        setSortApplied(applied);
        setDisplayData(sorted);
    };

    const handleSortStateChange = (newState) => {
        setSortState(newState);
    };

    const handleClearFilter = () => {
        setSortState(INITIAL_SORT_STATE);
        setSortApplied(false);
    };

    const resetPage = () => setActivePage(1);

    const showPagination = paginate && amountRows && Number(amountRows) > 0;
    const pageCount = showPagination ? Math.ceil(displayData.length / Number(amountRows)) : 1;
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <>
            <Filter fullData={data} filtering={handleFilter} onReset={resetPage} onClear={handleClearFilter} />
            <Sort
                columns={columns}
                data={filteredData}
                onSort={handleSort}
                onReset={resetPage}
                sortState={sortState}
                onSortStateChange={handleSortStateChange}
            />

            <hr width="100%" size="3" color="gray" />

            <table id="playersTable" border="1" cellPadding="8" cellSpacing="0" width="100%" className="players-table">
                <TableHead head={columns} />
                <TableBody
                    body={displayData}
                    amountRows={showPagination ? amountRows : 0}
                    numPage={activePage}
                />
            </table>

            {showPagination && (
                <div className="pagination">
                    {pages.map(p => (
                        <span
                            key={p}
                            className={p === activePage ? 'page-num active' : 'page-num'}
                            onClick={() => setActivePage(p)}
                        >
                            {p}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default Table;
