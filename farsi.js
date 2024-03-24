let arraytekst = ["تبعیض ", "آزار و اذیت در سر کار ", "حقوق نابرابر ", "تبعیض طبقاتی"];
let tekst2 = document.getElementById("ondertitel3");


setInterval(
function vervangwoord(){
let huidigwoord = arraytekst.pop();
tekst2.innerHTML= huidigwoord;
if(arraytekst==""){
    arraytekst = ["تبعیض ", "آزار و اذیت در سر کار ", "حقوق نابرابر ", "تبعیض طبقاتی"];
    arraytekst = arraytekst.concat(arraytekst);
}
}, 6000)

let uitlijning = document.getElementsByTagName("body");
uitlijning[0].style.textAlign = "right" ;

let paragraaf = document.getElementsByTagName("p");
for (let i = 0; i < paragraaf.length; i++) {
    let str = paragraaf[i].style.fontSize = "1em" ;
}

