function create(){
    let sub1 = parseInt(document.getElementById("sub1").value)
    let sub2 = parseInt(document.getElementById("sub2").value)
    let sub3 = parseInt(document.getElementById("sub3").value)
    let sub4 = parseInt(document.getElementById("sub4").value)
    let total = sub1 + sub2 + sub3 + sub4
    let avarage = parseFloat(total / 4)
    document.getElementById("total").innerHTML = "Total : " + total;
    document.getElementById("avarage").innerHTML = "avarage : " + avarage;
}