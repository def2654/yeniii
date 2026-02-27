var sayi1=23;
var sayi2= 44;
var sayi3= 17;



var toplam= sayi1 + sayi3;

console.log("Toplam: " + toplam);

var fark= sayi2 - sayi3;

console.log("Fark: " + fark);

var carpim= sayi1*sayi2;

console.log("Çarpım: " + carpim);

var kalan= sayi2 % 3;

console.log("Kalan: " +kalan);


if( sayi3==17)   
{console.log("Sayi3 17 e esit")}

else{ console.log("sayi3 17ye esit degil")}

if( sayi2<=40)   
{console.log("Sayi2 40a kucuk esit")}

else{ console.log("sayi2 40 kucuk esit degil")}


var button= document.getElementById("butoncuk")


if(button.addEventListener("click", function(){
    console.log("Butona tıklandı");
    document.getElementById("bodyim").style.backgroundColor="pink";
})) {} else {
    console.log("Buton calisiyor");
}



var butonmavi= document.getElementById("mavibuton");
var butonpembe= document.getElementById("pembebuton");
var butonkirmizi= document.getElementById("kırmızıbuton");
var daire= document.getElementById("daire");

function changebackgroundtoblue(){
    daire.style.backgroundColor="blue";
    console.log("butona tıklandı")
}


function changebackgroundtopink(){
    daire.style.backgroundColor="pink";
}


function changebackgroundtored(){
    daire.style.backgroundColor="red";
}