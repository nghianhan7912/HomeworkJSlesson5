// Bài 1 :
// Input
// + Điểm chuẩn, loại khu vực, loại đối tượng, điểm 3 môn
// Process
// B1: Tạo hàm xử lý loại khu vực và đối tượng lấy điểm tương ứng
// B2: Tạo sự kiện cho nút button
// B3: DOM để lấy value điểm chuẩn và điểm 3 môn
// B4: Tính điểm total : + điểm 3 môn lại và + điểm khu vực + điểm đối tượng 
// B5: So sánh điểm total với điểm chuẩn xét đậu rớt 
// Output
// Kết quả đậu rớt và điểm thí sinh đó đạt đc
function selectArea(area){
    if (area === "A") return 2;
    if (area === "B") return 1;
    if (area === "C") return 0.5;
    return 0;
}
function selectType(object){
    if (object === "1") return 2.5;
    if (object === "2") return 1.5;
    if (object === "3") return 1;
    return 0;
}
document.getElementById("btn").onclick = function(){
    var point = document.getElementById("point").value*1;
    var sub1 = document.getElementById("sub1").value*1;
    var sub2 = document.getElementById("sub2").value*1;
    var sub3 = document.getElementById("sub3").value*1;
    var area = document.getElementById("area").value;
    var object = document.getElementById("object").value;
    var total = sub1 + sub2 + sub3 + selectArea(area) + selectType(object);
    if (total >= point && sub1 !== 0 && sub2 !== 0 && sub3 !== 0){
        document.getElementById("text").innerHTML = "Bạn đã trúng tuyển.Điểm của bạn là: " + total
    } else {
        document.getElementById("text").innerHTML = "Bạn đã trượt.Điểm của bạn là: " + total
    }
}
// Bài 2
function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function electricityBill(kw){
    var money;
    if (kw <= 50){
        money = kw * 500;
    } else if (kw <=100){
        money = 25000 + (kw - 50) * 650;
    } else if (kw <= 200){
        money = 57500 + (kw - 100) * 850;
    } else if ( kw <= 350){
        money = 142500 + (kw - 200) * 1100;
    } else {
        money = 307500 + (kw - 350) * 1300;
    }
    return money;
}
document.getElementById("btn2").onclick = function(){
    var name = document.getElementById("name").value;
    name = jsUcfirst(name);
    var kw = document.getElementById("kw").value;
    document.getElementById("text2").innerHTML = "Chủ hộ: " + name + "<br/>" + " Số tiền điện cần thanh toán là: " + electricityBill(kw).toLocaleString() +" VND";
}
//Bài 3
function taxBill(){
    debugger
    var totalIncome = document.getElementById("totalIncome").value*1;
    var dependentPerson = document.getElementById("dependentPerson").value*1;
    var money = totalIncome - 4e+6 - (dependentPerson * 16e+5);
    if(money<=60e+6) return 0.05;
    if(money<=120e+6) return 0.1;
    if(money<=210e+6) return 0.15;
    if(money<=384e+6) return 0.2;
    if(money<=624e+6) return 0.25;
    if(money<=926e+6) return 0.3;
    return 0.35;
} 
document.getElementById("btn3").onclick = function(){
    var name = document.getElementById("name2").value;
    name = jsUcfirst(name);
    var totalIncome = document.getElementById("totalIncome").value*1;
    var dependentPerson = document.getElementById("dependentPerson").value*1;
    var money = totalIncome - 4e+6 - (dependentPerson * 16e+5);
    var money1 = money * taxBill();
    document.getElementById("text3").innerHTML ="Xin chào " + name + ".Thuế xuất tính theo thu nhập 1 năm của bạn là: " + (taxBill()*100) +"%" + " Số tiền thuế bạn cần phải đóng là: " + money1.toLocaleString()
}
// Bài 4
function changeClientType(){
    var option = document.getElementById("clientType").value;
    if(option === "house"){
        document.getElementById("connectNumber").style.display ="none"
    }else if(option === "company"){
        document.getElementById("connectNumber").style.display ="inline-block"
    }
    return
}
document.getElementById("clientType").onchange = changeClientType;
function moneyBill(){
    // var option = document.getElementById("clientType").value;
    // var connectNumber = document.getElementById("connectNumber").value*1;
    // var bill, basic, high,money;
    // if (option==="house"){
    //     bill = 4.5;
    //     basic = 20.5;
    //     high = 7.5;
    // } else if(option==="company"){
    //     bill = 15;
    //     high = 50;
    //     if(connectNumber<=10){
    //         basic = 75;
    //     } else{
    //         basic = 75 + ((connectNumber - 10)*5);
    //     }
    // }
    return
}
document.getElementById("btn4").onclick = function(){
    var numPerChannel = document.getElementById("numPerChannel").value*1;
    var connectNumber = document.getElementById("connectNumber").value*1;
    var option = document.getElementById("clientType").value;
    var bill, basic, high,money;
    if (option==="house"){
        bill = 4.5;
        basic = 20.5;
        high = 7.5;
        money = bill + basic + high * numPerChannel;
    } else if(option==="company"){
        bill = 15;
        high = 50;
        if(connectNumber<=10){
            basic = 75;
        } else{
            basic = 75 + ((connectNumber - 10)*5);
        }
        money = bill + high * numPerChannel + basic;
    }
    document.getElementById("text4").innerHTML ="Số tiền cáp quý khách cần thanh toán là: " + money.toLocaleString()+"$";
}
