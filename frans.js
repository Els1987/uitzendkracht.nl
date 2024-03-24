let arraytekst = ["DISCRIMINATION", "L'ESCLAVAGE MODERNE", "&#202;TRE VICTIME D'INTIMIDATION AU TRAVAIL", "DROITS IN&Eacute;GAUX", "DISCRIMINATION DE CLASSE"];
let tekst2 = document.getElementById("ondertitel3");


setInterval(
function vervangwoord(){
let huidigwoord = arraytekst.pop();
tekst2.innerHTML= huidigwoord;
if(arraytekst==""){
    arraytekst = ["DISCRIMINATION", "L'ESCLAVAGE MODERNE", "&#202;TRE VICTIME D'INTIMIDATION AU TRAVAIL", "DROITS IN&Eacute;GAUX", "DISCRIMINATION DE CLASSE"];
    arraytekst = arraytekst.concat(arraytekst);
}
}, 4000)