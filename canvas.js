let c = document.querySelector("#c");
let ctx = c.getContext("2d");


window.onload = function() {
    document.querySelector('.draw_button').onclick = function() {
        drawDiamond();
    };
    document.querySelector('.clear_button').onclick = function() {
        clearField();
    }
};

function drawDiamond() {
    ctx.strokeStyle = "#A5D4FF";
    ctx.beginPath();
    // upper part
    ctx.moveTo(50, 250);
    ctx.lineTo(100, 200);
    ctx.lineTo(150, 250);
    ctx.lineTo(200, 200);
    ctx.lineTo(250, 250);
    ctx.lineTo(300, 200);
    ctx.lineTo(350, 250);
    ctx.lineTo(400, 200);
    ctx.lineTo(450, 250);
    ctx.lineTo(50, 250);
    // highest line
    ctx.moveTo(100, 200);
    ctx.lineTo(400, 200);
    // lower part
    ctx.moveTo(50, 250);
    ctx.lineTo(250, 500);
    ctx.lineTo(450, 250);

    ctx.moveTo(150, 250);
    ctx.lineTo(250, 500);

    ctx.moveTo(250, 250);
    ctx.lineTo(250, 500);

    ctx.moveTo(350, 250);
    ctx.lineTo(250, 500);

    ctx.lineWidth = 3;
    ctx.stroke();

    console.log("Diamond created");
}

function clearField() {
    ctx.clearRect (0, 0, 500, 500);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 500, 500);

    console.log("Canvas cleared - so easy, I bet you're jealous Rembrandt!");
}

// Border and background colours
// ctx.fillStyle = "white";

// ctx.fillRect(0, 0, 500, 500);

ctx.strokeStyle = "red";

ctx.strokeRect(0, 0, 500, 500);
