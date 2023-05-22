// Bài tập 1
document.getElementById('btn1').onclick = () => {
    const calcAreaTypeGrade = (area, type) => {
        if (area === 'A')
            area = 2;
        if (area === 'B')
            area = 1;
        if (area === 'C')
            area = 0.5;
        if (type === '1')
            type = 2.5;
        if (type === '2')
            type = 1.5;
        if (type === '3')
            type = 1;
        return area + type;
    }
    var course1 = +document.getElementById('course1').value;
    var course2 = +document.getElementById('course2').value;
    var course3 = +document.getElementById('course3').value;
    var benchmark = +document.getElementById('benchmark').value;
    var area = document.getElementById('area').value;
    var type = document.getElementById('type').value;
    var sumtotal = 0;
    var areatypeGrade = calcAreaTypeGrade(area, type)
    sumtotal = course1 + course2 + course3 + areatypeGrade
    document.getElementById('hidden1').style.display = ('block');
    if (benchmark <= sumtotal && course1 !== 0 && course2 !== 0 && course3 !== 0) {
        document.getElementById('result1').innerHTML = 'Đậu rồi nha <3'
        document.getElementById('result2').innerHTML = sumtotal;

    } else {
        document.getElementById('result1').innerHTML = 'Tạch rồi nha :<'
        document.getElementById('result2').innerHTML = sumtotal;
    }
}
// Bài tập 2
document.getElementById('btn2').onclick = () => {
    var numberInput = +document.getElementById('numberInput').value;
    const calc = (Input) => {
        var sum = 0;
        if (Input <= 50)
            return sum = 500 * Input
        if (Input > 50 && Input <= 100)
            return sum = (500 * 50 + (Input - 50) * 650)
        if (Input > 100 && Input <= 200)
            return sum = (500 * 50 + 50 * 650 + (Input - 100) * 850)
        if (Input > 200 && Input <= 350)
            return sum = (500 * 50 + 50 * 650 + 200 * 850 + (Input - 150) * 1100)
        if (Input > 350)
            return sum = (500 * 50 + 50 * 650 + 200 * 850 + 150 * 1100 + (Input - 350) * 1300)
    }
    var result = calc(numberInput)
    document.getElementById('result3').innerHTML = result.toLocaleString('de-DE') + 'đ'
    document.getElementById('hidden2').style.display = ('block');
}
// Bài tập 3
document.getElementById('btn3').onclick = () => {
    var numberInput1 = +document.getElementById('numberInput1').value;
    var memberInput = +document.getElementById('memberInput').value;
    var taxable = numberInput1 - 4e+6 - memberInput * 16e+5
    const calc = (Input) => {
        var sum = 0;
        if (Input <= 60e+6)
            return sum = 0.05 * Input
        if (Input > 60e+6 && Input <= 120e+6)
            return sum = (0.5 * 60e+6 + (Input - 60e+6) * 0.1)
        if (Input > 120e+6 && Input <= 210e+6)
            return sum = (0.5 * 60e+6 + 0.1 * 60e+6 + (Input - 120e+6) * 0.15)
        if (Input > 210e+6 && Input <= 384e+6)
            return sum = (0.5 * 60e+6 + 0.1 * 60e+6 + 0.15 * 90e+6 + (Input - 210e+6) * 0.2)
        if (Input > 384e+6 && Input <= 624e+6)
            return sum = (0.5 * 60e+6 + 0.1 * 60e+6 + 0.15 * 90e+6 + 174e+6 * 0.2 + (Input - 384e+6) * 0.25)
        if (Input > 624e+6 && Input <= 960e+6)
            return sum = (0.5 * 60e+6 + 0.1 * 60e+6 + 0.15 * 90e+6 + 174e+6 * 0.2 + 240e+6 * 0.25 + (Input - 624e+6) * 0.3)
        if (Input > 960e+6)
            return sum = (0.5 * 60e+6 + 0.1 * 60e+6 + 0.15 * 90e+6 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (Input - 960e+6) * 0.35)
    }
    if (taxable < 0) {
        document.getElementById('result4').innerHTML = 'Chưa cần phải đóng thuế má ơi :v'
        document.getElementById('hidden3').style.display = ('block');

    } else {
        var result = calc(taxable)
        document.getElementById('result4').innerHTML = result.toLocaleString('de-DE') + 'đ'
        document.getElementById('hidden3').style.display = ('block');
    }
}
// Bài tập 4    
const customerType = document.querySelector('#customerType');
const connections = document.querySelector('#connections');

customerType.addEventListener('change', (event) => {
    if (event.target.value === '1') {
        connections.style.display = 'inline-block';
    } else {
        connections.style.display = 'none';
    }
});
document.getElementById('btn4').onclick = () => {
    debugger
    var idInput = document.getElementById('idInput').value
    var type = +document.getElementById('customerType').value
    var channel = +document.getElementById('channel').value
    var connections = +document.getElementById('connections').value
    var sum = 0;
    if(type === 1){
        if(connections <= 10){
            sum = 15 + 75 + 50 * channel  
        }else{
            sum = 15 + 75 + (connections - 10)*5 + 50*channel
        }
    }
    if(type === 2){
        sum = 4.5 + 20.5 + 7.5*channel
    }
    document.getElementById('result5').innerHTML = idInput
    document.getElementById('result6').innerHTML = '$'+ sum.toFixed(2)
    document.getElementById('hidden4').style.display = ('block');
}
