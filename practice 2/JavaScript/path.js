function createTrajectoryPoints() {
    const points = [];

    const p0x = 80,  p0y = 570;
    const p1x = 700, p1y = 400;
    const p2x = 700, p2y = 200;
    const p3x = 80,  p3y = 30;

    for (let t = 0; t <= 1; t += 0.1) {
        const mt = 1 - t;
        const x = mt*mt*mt*p0x + 3*mt*mt*t*p1x + 3*mt*t*t*p2x + t*t*t*p3x;
        const y = mt*mt*mt*p0y + 3*mt*mt*t*p1y + 3*mt*t*t*p2y + t*t*t*p3y;
        points.push({ x, y });
    }

    return points;
}

function drawTrajectory(svg) {
    const dataPoints = createTrajectoryPoints();

    const line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveCatmullRom.alpha(0.5));

    const path = svg.append("path")
        .attr("d", line(dataPoints))
        .attr("stroke", "blue")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    return path;
}