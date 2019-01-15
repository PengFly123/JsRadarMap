var elem = document.querySelector('input[type="range"]');
var rangeValue = function () {
    var newValue = elem.value;
    var target = document.querySelector('.value');
    var max = elem.getAttribute("max");
    var width = (91.3 / max * newValue) + "%";

};


var mW = 600;
var mH = 600;

mData = [['zero', 100],
    ['one', 90],
    ['two', 80],
    ['three', 70],
    ['four', 60],
    ['five', 50],
    ['six', 40],
    ['seven', 30]];

var mCount = mData.length; //边数
var mCenter = mW / 2; //中心点
var mRadius = mCenter - 50; //半径(减去的值用于给绘制的文本留空间)
var mAngle = Math.PI * 2 / mCount; //角度
var mCtx = null;
var mColorPolygon = '#B8B8B8'; //多边形颜色
var mColorLines = '#B8B8B8'; //顶点连线颜色
var mColorText = 'gray';


//初始化
function init() {
    var canvas = document.getElementById("thecanvas");
    var canvas1 = document.getElementById("cans");
    var canvas2 = document.getElementById("cans1");
    var canvas3 = document.getElementById("cans2");
    var canvas4 = document.getElementById("cans3");
    canvas.height = mH;
    canvas.width = mW;
    canvas1.height = mH;
    canvas1.width = mW;
    canvas2.height = mH;
    canvas2.width = mW;
    canvas3.height = mH;
    canvas3.width = mW;
    canvas4.height = mH;
    canvas4.width = mW;
    mCtx = canvas.getContext("2d");
    Ctx1 = canvas1.getContext("2d");
    Ctx2 = canvas2.getContext("2d");
    Ctx3 = canvas3.getContext("2d");
    Ctx4 = canvas4.getContext("2d");
    mCtx.clearRect(0, 0, canvas.width, canvas.height);
    drawPolygon(mCtx);
    drawLines(mCtx);
    drawText(mCtx);
    drawcolor1(Ctx1);
    drawcolor2(Ctx2);
    drawcolor3(Ctx3);
    drawcolor4(Ctx4);
    drawRegion(mCtx);

};

// 绘制多边形边
function drawPolygon(ctx) {
    ctx.save();

    ctx.strokeStyle = mColorPolygon;
    var r = mRadius / 5; //单位半径
    //画6个圈
    for (var i = 0; i < 5; i++) {
        ctx.beginPath();
        var currR = r * (i + 1); //当前半径
        //画6条边
        for (var j = 0; j < mCount; j++) {
            var x = mCenter + currR * Math.cos(mAngle * j);
            var y = mCenter + currR * Math.sin(mAngle * j);

            ctx.lineTo(x, y);

        }
        ctx.closePath()
        ctx.stroke();
    }

    ctx.restore();
}

//顶点连线
function drawLines(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = mColorLines;

    for (var i = 0; i < mCount; i++) {
        var x = mCenter + mRadius * Math.cos(mAngle * i);
        var y = mCenter + mRadius * Math.sin(mAngle * i);

        ctx.moveTo(mCenter, mCenter);
        ctx.lineTo(x, y);


    }

    ctx.stroke();

    ctx.restore();
}

//绘制文本
function drawText(ctx) {
    ctx.save();

    var fontSize = mCenter / 12;
    ctx.font = fontSize + 'px Microsoft Yahei';
    ctx.fillStyle = mColorText;

    for (var i = 0; i < mCount; i++) {
        var x = mCenter + mRadius * Math.cos(mAngle * i);
        var y = mCenter + mRadius * Math.sin(mAngle * i);

        if (mAngle * i >= 0 && mAngle * i <= Math.PI / 2) {
            ctx.fillText(mData[i][0], x, y + fontSize);
        } else if (mAngle * i > Math.PI / 2 && mAngle * i <= Math.PI) {
            ctx.fillText(mData[i][0], x - ctx.measureText(mData[i][0]).width, y + fontSize);
        } else if (mAngle * i > Math.PI && mAngle * i <= Math.PI * 3 / 2) {
            ctx.fillText(mData[i][0], x - ctx.measureText(mData[i][0]).width, y);
        } else {
            ctx.fillText(mData[i][0], x, y);
        }

    }

    ctx.restore();
}

function drawRegion(ctx) {
    ctx.save();
    ctx.beginPath();
    for (var i = 0; i < mCount; i++) {
        var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 100;
        var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 100;

        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(204, 102, 51, 0.5)';
    ctx.fill();
    ctx.restore();
}

function drawcolor1(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(300, 300);
    ctx.strokeStyle = 'white';
    var a = 0;
    for (var i = 1; i < 9; i++) {
        ctx.lineTo(0, 50);
        ctx.rotate(Math.PI / 4);
        a = a + Math.PI / 4;
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fill();
    ctx.stroke();
}

function drawcolor2(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(300, 300);
    ctx.strokeStyle = 'white';
    var a = 0;
    for (var i = 1; i < 9; i++) {
        ctx.lineTo(0, 100);
        ctx.rotate(Math.PI / 4);
        a = a + Math.PI / 4;
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(211,211,211,0.3)';
    ctx.fill();
    ctx.stroke();
}

function drawcolor3(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(300, 300);
    ctx.strokeStyle = 'white';
    var a = 0;
    for (var i = 1; i < 9; i++) {
        ctx.lineTo(0, 150);
        ctx.rotate(Math.PI / 4);
        a = a + Math.PI / 4;
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fill();
    ctx.stroke();
}

function drawcolor4(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(400, 400);
    ctx.strokeStyle = 'white';
    var a = 0;
    for (var i = 1; i < 9; i++) {
        ctx.lineTo(0, 200);
        ctx.rotate(Math.PI / 4);
        a = a + Math.PI / 4;
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(211,211,211,0.3)';
    ctx.fill();
    ctx.stroke();
}

init();

//事件所调用函数
function paint() {
    mData[0][1] = document.getElementById("range_name1").value;
    mData[1][1] = document.getElementById("range_name2").value;
    mData[2][1] = document.getElementById("range_name3").value;
    mData[3][1] = document.getElementById("range_name4").value;
    mData[4][1] = document.getElementById("range_name5").value;
    mData[5][1] = document.getElementById("range_name6").value;
    mData[6][1] = document.getElementById("range_name7").value;
    mData[7][1] = document.getElementById("range_name8").value;
    init();
}