import { useState } from "react";
import ChartDraw from './ChartDraw.js';

const Chart = (props) => {
  const [ox, setOx] = useState("Команда");
  const [oy, setOy] = useState([true, false]);
  const [chartType, setChartType] = useState("scatter");
  const [error, setError] = useState("");
  const [showChart, setShowChart] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOy = [
      event.target["oy"][0].checked,
      event.target["oy"][1].checked
    ];

    if (!newOy[0] && !newOy[1]) {
      setError("Выберите хотя бы одно значение по оси OY!");
      setShowChart(false);
      return;
    }

    setError("");
    setShowChart(true);
    setOx(event.target["ox"].value);
    setOy(newOy);
    setChartType(event.target["chartType"].value);
  };

  const handleOyChange = (event) => {
    const checkboxes = event.target.form["oy"];
    if (checkboxes[0].checked || checkboxes[1].checked) {
      setError("");
    }
  };

  const createArrGraph = (data, key) => {
    const groups = {};

    data.forEach(item => {
      const k = item[key];
      if (!groups[k]) {
        groups[k] = [];
      }
      groups[k].push(item["Rating 3.0"]);
    });

    const entries = Object.entries(groups);

    return entries.map(([label, ratings]) => ({
      labelX: label,
      values: [Math.min(...ratings), Math.max(...ratings)]
    }));
  };

  return (
    <>
      <details open>
        <summary><b>График</b></summary>

        <form onSubmit={handleSubmit}>
          <b>Значение по оси OX</b><br />
          <label>
            <input type="radio" name="ox" value="Команда" defaultChecked={ox === "Команда"} />
            {" "}Команда
          </label><br />
          <label>
            <input type="radio" name="ox" value="Страна" defaultChecked={ox === "Страна"} />
            {" "}Страна
          </label><br /><br />

          <b>Значение по оси OY</b><br />
          <div className={error ? "oy-error" : "oy-block"}>
            <label>
              <input
                type="checkbox"
                name="oy"
                defaultChecked={oy[0]}
                onChange={handleOyChange}
              />
              {" "}Максимальный рейтинг
            </label><br />
            <label>
              <input
                type="checkbox"
                name="oy"
                defaultChecked={oy[1]}
                onChange={handleOyChange}
              />
              {" "}Минимальный рейтинг
            </label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <p>
            Тип диаграммы{" "}
            <select name="chartType" defaultValue={chartType}>
              <option value="scatter">Точечная диаграмма</option>
              <option value="bar">Гистограмма</option>
            </select>
          </p>

          <input type="submit" value="Построить" />
        </form>

        {showChart && (
          <ChartDraw
            data={createArrGraph(props.data, ox)}
            oy={oy}
            chartType={chartType}
          />
        )}
      </details>
    </>
  );
};

export default Chart;