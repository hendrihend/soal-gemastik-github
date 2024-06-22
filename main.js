let BtnHitung = document.getElementById('btnHitung');

BtnHitung.onclick = function(e) {
    let a = document.getElementById('vA').value;
    let b = document.getElementById('vB').value;
    let c = document.getElementById('vC').value;
    let d = document.getElementById('vD').value;
    const hasil = a*d, hasil2 = c*b;
    var steps = "";

    console.log("a/b =",a,"/",b,"=", hasil);
    console.log("c/d =",c,"/",d,"=", hasil2,"\n");
    console.log(steps);
    
    steps += "⇔" + " " +"a/b = "+a+"/"+b+" = "+ hasil + "\n";
    steps += "⇔" + " " +"c/d = "+c+"/"+d+" = "+ hasil2 + "\n";
    steps += "⇔" + " " +"(a/b) x (c/d) = (a) x (d) dan (c) x (b)\n";
    steps += "⇔" + " " +"(" + a + "/" + b + ")" + " x " + "(" + c + "/" + d + ")" + " = " + "(" + a + ")" + " x " + "(" + d + ") = " + hasil + " dan " + "(" + c + ")" + " x " + "(" + b + ") = " + hasil2 + "\n";

    document.getElementById('output').innerText = steps;

    if (hasil == hasil2) {
        document.getElementById('outputKondisi').innerText = ("nilai a/b sama dengan nilai c/d!");
    } else if (hasil <= hasil2) {
        document.getElementById('outputKondisi').innerText = ("nilai a/b kurang dari nilai c/d!");
    } else if (hasil >= hasil2) {
        document.getElementById('outputKondisi').innerText = ("nilai a/b lebih besar dari nilai c/d!");
    } else {
        document.getElementById('outputKondisi').innerText = ("tidak memenuhi!");
    }

}
