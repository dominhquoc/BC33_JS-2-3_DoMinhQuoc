//Bai 1: Tinh tien luong nhan vien

function Salary(){
    var dollar = +document.getElementById("Day").value;
var total = document.getElementById("Total");
pay = 100000 * dollar;

total.innerHTML = pay;
}

//Bai 2: Tinh gia tri trung binh

function SumTB() {
    var number = document.getElementById("Number").value;
    var number1 = document.getElementById("Number1").value;
    var number2 = document.getElementById("Number2").value;
    var number3 = document.getElementById("Number3").value;
    var number4 = document.getElementById("Number4").value;

    var num = parseFloat(number);
    var num1 = parseFloat(number1);
    var num2 = parseFloat(number2);
    var num3 = parseFloat(number3);
    var num4 = parseFloat(number4);

    var sum = (num + num1 + num2 + num3 + num4)/5;

    var total2 = document.getElementById("Total2");
    total2.innerHTML = sum;

}

//Bai 3: Quy doi tien

function Dollar(){
    var usd = +document.getElementById("USD").value;

    var currency = usd * 23500;

    var total3 = document.getElementById("Total3");
    total3.innerHTML = currency;
}

//Bai 4 : Tinh dien tich, chu vi hinh chu nhat

function DienTichChuVi(){
var dai = +document.getElementById("dai").value;
var rong = +document.getElementById("rong").value;

var S = dai*rong;
var P = (dai + rong)*2;

var total4 = document.getElementById("Total4");
total4.innerHTML = "Dien tich = " + S +"<br>" +"Chu vi ="+ P;
}

//Bai 5 : Tinh tong 2 ky so

function Kyso(){
    var sobatky = +document.getElementById("sobatky").value;

    var Sohangchuc = Math.floor(sobatky / 10);
    var Sohangdonvi = sobatky % 10;

    var sum = Sohangchuc + Sohangdonvi;

    var Total5 = document.getElementById("Total5");
    Total5.innerHTML = sum;
}