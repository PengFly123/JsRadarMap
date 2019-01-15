class Button {
    constructor(name, id, value, angle, x, y) {
        this.name = name;
        this.theaxis = document.createElement("input");
        this.theaxis.id = "range_name" + id;
        this.theaxis.type = "range";
        this.theaxis.min = 0;
        this.theaxis.value = value;
        this.theaxis.max = 100;
        this.theaxis.name = "range_name";
        this.theaxis.chinesename = name;
        this.theaxis.step = 1;
        var str = "transform:rotate(" + angle + "deg) ; position: absolute; left: " +
            x + "px;  width: 270px; top: " + y + "px; height: 0px;";
        this.theaxis.style = str;
    }

    add() {

        this.theaxis.onmousemove = function () {
            var value1 = document.getElementById(this.id).value;
            document.getElementById("radertextvalue").textContent = this.chinesename + ": " + value1;
            paint();
        }

        document.getElementById("thebody").appendChild(this.theaxis);
    }
}


function addAxis() {
    //名字 ID  默认 角度 左 上

    var Axis1 = new Button("zero", 1, 100, 0, 400, 410);
    var Axis2 = new Button("one", 2, 90, 45, 364, 498);
    var Axis3 = new Button("two", 3, 80, 90, 276, 534);
    var Axis4 = new Button("three", 4, 70, 135, 188, 498);
    var Axis5 = new Button("four", 5, 60, 180, 152, 410);
    var Axis6 = new Button("five", 6, 50, 225, 188, 323);
    var Axis7 = new Button("six", 7, 40, 270, 276, 286);
    var Axis8 = new Button("seven", 8, 30, 315, 364, 323);

    Axis1.add();
    Axis2.add();
    Axis3.add();
    Axis4.add();
    Axis5.add();
    Axis6.add();
    Axis7.add();
    Axis8.add();

    flag = true;

}

addAxis();


