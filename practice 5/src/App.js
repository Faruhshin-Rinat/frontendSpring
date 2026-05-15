import './CSS/App.css';
import players from './data.js';
import Table from './components/Table.js';
import Chart from './components/Chart.js';
import { useState } from 'react';

function App() {
    const [filteredData, setFilteredData] = useState(players);

    return (
        <div className="App">
            <h1 align="center">Топ киберспортсменов по CS</h1>
            <hr width="100%" size="3" color="gray" />

            <ul>
                <li><a href="index.html"><font size="4">Главная страница</font></a></li>
                <li><a href="rating.html"><font size="4">Список лучших киберспортсменов</font></a></li>
            </ul>

            <hr width="100%" size="3" color="gray" />

            <h2 align="center">Рейтинг киберспортсменов</h2>

            <Chart data={filteredData} />

            <Table data={players} amountRows="10" paginate={true} onFilter={setFilteredData} />

            <hr width="100%" size="3" color="gray" />

            <p align="center">
                Группа: Б9123-09.03.04(3)<br />
                Разработчик: Фарухшин Ринат Рустамович
            </p>
        </div>
    );
}

export default App;