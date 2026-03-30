document.addEventListener("DOMContentLoaded", function () {
    const width = 600;
    const height = 600;
    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    const form = document.getElementById("setting");
    const animateBtn = document.getElementById("animateBtn");
    const clearBtn = document.getElementById("clearBtn");

    const runAnimation = (dataForm) => {
        const svg = d3.select("svg");
        svg.selectAll("*").remove();

        let path = drawTrajectory(svg);
        let pict = drawRocket(svg);

        const duration = Number(dataForm.duration.value);
        const scaleStart = Number(dataForm.scaleStart.value);
        const scaleEnd = Number(dataForm.scaleEnd.value);
        const rotateStart = Number(dataForm.rotateStart.value);
        const rotateEnd = Number(dataForm.rotateEnd.value);

        pict.transition()
            .duration(duration)
            .ease(d3.easeLinear)
            .attrTween("transform", function () {
                const length = path.node().getTotalLength();

                return function (t) {
                    const point = path.node().getPointAtLength(t * length);

                    const scaleX = scaleStart + (scaleEnd - scaleStart) * t;
                    const angle = rotateStart + (rotateEnd - rotateStart) * t;

                    return `translate(${point.x}, ${point.y}) scale(${scaleX}) rotate(${angle})`;
                };
            });
    };

    const clearSvg = () => {
        svg.selectAll("*").remove();
    };

    animateBtn.addEventListener("click", function () {
        runAnimation(form);
    });

    clearBtn.addEventListener("click", function () {
        clearSvg();
    });    
});