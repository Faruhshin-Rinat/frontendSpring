function drawRocket(svg) {
    const rocket = svg.append("g")

    rocket.append("ellipse")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("rx", 42)
        .attr("ry", 18)
        .attr("fill", "#f2f2f2")
        .attr("stroke", "#444")
        .attr("stroke-width", 2);

    rocket.append("polygon")
        .attr("points", "42,0 18,-14 18,14")
        .attr("fill", "#4d79ff")
        .attr("stroke", "#444")
        .attr("stroke-width", 2);

    rocket.append("circle")
        .attr("cx", -8)
        .attr("cy", 0)
        .attr("r", 8)
        .attr("fill", "#99d6ff")
        .attr("stroke", "#444")
        .attr("stroke-width", 2);

    rocket.append("polygon")
        .attr("points", "-10,12 -28,30 4,14")
        .attr("fill", "#ff6666")
        .attr("stroke", "#444")
        .attr("stroke-width", 2);

    rocket.append("polygon")
        .attr("points", "-10,-12 -28,-30 4,-14")
        .attr("fill", "#ff6666")
        .attr("stroke", "#444")
        .attr("stroke-width", 2);

    rocket.append("polygon")
        .attr("points", "-42,0 -60,-10 -60,10")
        .attr("fill", "#ff9933")
        .attr("stroke", "#444")
        .attr("stroke-width", 2);

    return rocket;
}