let arraytekst = ["DISCRIMINATION", "MODERN SLAVERY", "BEING BULLIED AT WORK", "UNEQUAL RIGHTS", "CLASS DISCRIMINATION"];
let tekst2 = document.getElementById("ondertitel3");


setInterval(
function vervangwoord(){
let huidigwoord = arraytekst.pop();
tekst2.innerHTML= huidigwoord;
if(arraytekst==""){
    arraytekst = ["DISCRIMINATION", "MODERN SLAVERY", "BEING BULLIED AT WORK", "UNEQUAL RIGHTS", "CLASS DISCRIMINATION"];
    arraytekst = arraytekst.concat(arraytekst);
}
}, 4000)




