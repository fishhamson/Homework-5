// Bài tập 1
// input: số ngày làm của nhân viên
// process:
// - tính tổng tiền lương nhân viên 
// - tiền lương 1 ngày * số ngày làm của nhân viên
// output: tổng tiền lương của nhân viên
document.getElementById('btn1').onclick = ()=>{
    var daysWorking = document.getElementById('daysworking').value;
    var sum = daysWorking * 100000;
    document.getElementById('result1').innerHTML = (sum).toLocaleString('de-DE');
    document.getElementById('hidden1').style.display = ('block');
}
// Bài tập 2
// input: nhập vào số thực
// process:
// - tính tổng số thực nhập vào 
// - tính trung bình
// output: giá trị trung bình của tổng số thực
document.getElementById('btn2').onclick = ()=>{
    var numberInput = document.getElementById('numberInput').value;
    var Array = numberInput.split(" ");
    var sum = Array.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
    document.getElementById('result2').innerHTML = sum / Array.length;
    document.getElementById('hidden2').style.display = ('block');
}
// Bài tập 3
// input: nhập vào số $
// process:
// - số $ * với VND(hiện tại)
// output: giá trị sau khi quy đổi
document.getElementById('btn3').onclick = ()=>{
    var moneyInput = document.getElementById('moneyInput').value;
    document.getElementById('result3').innerHTML = (moneyInput*23500).toLocaleString('de-DE');
    document.getElementById('hidden3').style.display = ('block');
}
// Bài tập 4    
// input: nhập vào chiều dài, chiều rộng
// process:
// - chu vi = dài + rộng *2;
// - diện tích = dài * rộng
// output: chu vi, diện tich
document.getElementById('btn4').onclick = ()=>{
    var lengthInput = +document.getElementById('lengthInput').value;
    var widthInput = +document.getElementById('widthInput').value;
    document.getElementById('result4').innerHTML = (lengthInput + widthInput) * 2;
    document.getElementById('result5').innerHTML = lengthInput * widthInput;
    document.getElementById('hidden4').style.display = ('block');
}
// Bài tập 5    
// input: nhập số
// process:
// - tách số nhập vào
// - tính tổng từng số
// output: tổng ký số
document.getElementById('btn5').onclick = ()=>{
    var numberInput1 = document.getElementById('numberInput1').value;
    var Array = numberInput1.split("");
    var sum = Array.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
    document.getElementById('result6').innerHTML = sum;
    document.getElementById('hidden5').style.display = ('block');
}