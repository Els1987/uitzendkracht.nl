let arraytekst = ["DISCRIMINATIE", "MODERNE SLAVERNIJ", "GEPEST OP DE WERKVLOER", "ONGELIJKE RECHTEN", "KLASSE DISCRIMINATIE"];
let tekst2 = document.getElementById("ondertitel3");


setInterval(
function vervangwoord(){
let huidigwoord = arraytekst.pop();
tekst2.innerHTML= huidigwoord;
if(arraytekst==""){
    arraytekst = ["DISCRIMINATIE", "MODERNE SLAVERNIJ", "GEPEST OP DE WERKVLOER", "ONGELIJKE RECHTEN", "KLASSE DISCRIMINATIE"];
    arraytekst = arraytekst.concat(arraytekst);
}
}, 4000)




