let arraytekst = ["AYRIMCILIK ", "MODERN KÖLELİK ", "IŞ YERINDE ZORBALIĞA UĞRAMAK ", "EŞİT HAKLAR ", "SINIF AYRIMCILIĞI "];
let tekst2 = document.getElementById("ondertitel3");


setInterval(
function vervangwoord(){
let huidigwoord = arraytekst.pop();
tekst2.innerHTML= huidigwoord;
if(arraytekst==""){
    arraytekst = ["AYRIMCILIK ", "MODERN KÖLELİK ", "IŞ YERINDE ZORBALIĞA UĞRAMAK ", "EŞİT HAKLAR ", "SINIF AYRIMCILIĞI "];
    arraytekst = arraytekst.concat(arraytekst);
}
}, 4000)