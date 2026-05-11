import './CSS/App.css';
import players from './data.js';
import Table from './components/Table.js';
import GGG from './components/GGG.js'

function App() {
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

            <details>
                <summary><b>График</b></summary>
                <form>
                    <b>Значение по оси ОХ</b><br />
                    <label><input type="radio" name="x_axis" value="role" /> Роль</label><br />
                    <label><input type="radio" name="x_axis" value="country" /> Страна</label><br />
                    <label><input type="radio" name="x_axis" value="team" /> Команда</label><br /><br />

                    <b>Значение по оси OY</b><br />
                    <label><input type="checkbox" name="result" value="max" /> Максимальный рейтинг</label><br />
                    <label><input type="checkbox" name="result" value="min" /> Минимальный рейтинг</label><br />
                    <label><input type="checkbox" name="result" value="count" /> Количество выигранных турниров</label><br /><br />

                    <input type="submit" value="Построить" />
                </form>
            </details>

            <Table data={players} amountRows="10" paginate={true} />

            <GGG num1={5} num2={10} />

            <hr width="100%" size="3" color="gray" />

            <p align="center">
                Группа: Б9123-09.03.04(3)<br />
                Разработчик: Фарухшин Ринат Рустамович
            </p>
        </div>
    );
}

export default App;