function createArrGraph(data, keyX, keyY) {
    const groupObj = d3.group(data, d => d[keyX]);

    let arrGraph = [];

    for (let entry of groupObj) {
        let values = entry[1].map(d => +d[keyY]);
        let minMax = d3.extent(values);

        arrGraph.push({
            labelX: entry[0],
            values: minMax
        });
    }

    arrGraph.sort((a, b) => a.labelX > b.labelX ? 1 : -1);

    return arrGraph;
}

function createAxis(svg, data, attr_area, showMax, showMin) {
    let yValues = [];

    data.forEach(d => {
        if (showMax) yValues.push(d.values[1]);
        if (showMin) yValues.push(d.values[0]);
    });

    const [min, max] = d3.extent(yValues);
    const diff = max - min;
    const padding = diff * 0.1;

    const scaleX = d3.scaleBand()
        .domain(data.map(d => d.labelX))
        .range([0, attr_area.width - 2 * attr_area.marginX]);

    const scaleY = d3.scaleLinear()
        .domain([min - padding, max + padding])
        .range([attr_area.height - 2 * attr_area.marginY, 0]);

    const axisX = d3.axisBottom(scaleX);
    const axisY = d3.axisLeft(scaleY);

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.height - attr_area.marginY})`)
        .call(axisX)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("transform", "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .call(axisY);

    return [scaleX, scaleY];
}

function createScatterChart(svg, data, scaleX, scaleY, attr_area, showMax, showMin) {
    const r = 4;

    if (showMax) {
        svg.selectAll('.dot-max')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot-max')
            .attr('r', r)
            .attr('cx', d => {
                const baseX = scaleX(d.labelX) + scaleX.bandwidth() / 2;
                return (showMin && d.values[1] === d.values[0]) ? baseX - r : baseX;
            })
            .attr('cy', d => scaleY(d.values[1]))
            .attr('transform', `translate(${attr_area.marginX}, ${attr_area.marginY})`)
            .style('fill', 'red');
    }

    if (showMin) {
        svg.selectAll('.dot-min')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot-min')
            .attr('r', r)
            .attr('cx', d => {
                const baseX = scaleX(d.labelX) + scaleX.bandwidth() / 2;
                return (showMax && d.values[1] === d.values[0]) ? baseX + r : baseX;
            })
            .attr('cy', d => scaleY(d.values[0]))
            .attr('transform', `translate(${attr_area.marginX}, ${attr_area.marginY})`)
            .style('fill', 'blue');
    }
}

function createBarChart(svg, data, scaleX, scaleY, attr_area, showMax, showMin) {
    const barGroup = svg.append('g')
        .attr('transform', `translate(${attr_area.marginX}, ${attr_area.marginY})`);

    const barWidth = scaleX.bandwidth();
    const enabledSeries = (showMax ? 1 : 0) + (showMin ? 1 : 0);
    const singleBarWidth = enabledSeries === 2 ? barWidth / 2 : barWidth * 0.7;

    if (showMax) {
        barGroup.selectAll('.bar-max')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar-max')
            .attr('x', d => scaleX(d.labelX) + (showMin ? 0 : (barWidth - singleBarWidth) / 2) + 5)
            .attr('y', d => scaleY(d.values[1]))
            .attr('width', singleBarWidth - 5)
            .attr('height', d => attr_area.height - 2 * attr_area.marginY - scaleY(d.values[1]))
            .attr('fill', 'red');
    }

    if (showMin) {
        barGroup.selectAll('.bar-min')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar-min')
            .attr('x', d => scaleX(d.labelX) + (showMax ? singleBarWidth : (barWidth - singleBarWidth) / 2))
            .attr('y', d => scaleY(d.values[0]))
            .attr('width', singleBarWidth - 5)
            .attr('height', d => attr_area.height - 2 * attr_area.marginY - scaleY(d.values[0]))
            .attr('fill', 'blue');
    }
}

function createLineChart(svg, data, scaleX, scaleY, attr_area, showMax, showMin) {
    const lineMax = d3.line()
        .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .y(d => scaleY(d.values[1]))
        .curve(d3.curveNatural);

    const lineMin = d3.line()
        .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .y(d => scaleY(d.values[0]))
        .curve(d3.curveNatural);

    const g = svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`);
    
    r = 4;

    if (showMax) {
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("d", lineMax);
        
        g.selectAll('.line-dot-max')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'line-dot-max')
            .attr('r', r)
            .attr('cx', d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
            .attr('cy', d => scaleY(d.values[1]))
            .style('fill', 'red');
    }

    if (showMin) {
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("d", lineMin);

        g.selectAll('.line-dot-min')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'line-dot-min')
            .attr('r', r)
            .attr('cx', d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
            .attr('cy', d => scaleY(d.values[0]))
            .style('fill', 'blue');
    }
}

function drawGraph(data, settings) {
    const keyX = settings ? settings.ox : "�������";
    const keyY = "Rating 3.0";
    const showMax = settings ? settings.showMax : true;
    const showMin = settings ? settings.showMin : false;
    const chartType = settings ? settings.chartType : "scatter";

    const arrGraph = createArrGraph(data, keyX, keyY);

    let svg = d3.select("#chart");
    svg.selectAll("*").remove();

    const attr_area = {
        width: parseFloat(svg.attr("width")),
        height: parseFloat(svg.attr("height")),
        marginX: 50,
        marginY: 60
    };

    const [scX, scY] = createAxis(svg, arrGraph, attr_area, showMax, showMin);

    if (chartType === "scatter") {
        createScatterChart(svg, arrGraph, scX, scY, attr_area, showMax, showMin);
    } else if (chartType === "bar") {
        createBarChart(svg, arrGraph, scX, scY, attr_area, showMax, showMin);
    } else {
        createLineChart(svg, arrGraph, scX, scY, attr_area, showMax, showMin);
    }
}