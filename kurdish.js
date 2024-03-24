let arraytekst = ["CUDAŞÎ", "KOLETIYA MODERN", "LI SER KARÊ XEBATÊ LI SER KIRIN", "MAFÊN NEWEKHEV", "CUDAKARIYA ÇINA"];
let tekst2 = document.getElementById("ondertitel3");


setInterval(
function vervangwoord(){
let huidigwoord = arraytekst.pop();
tekst2.innerHTML= huidigwoord;
if(arraytekst==""){
    arraytekst = ["CUDAŞÎ", "KOLETIYA MODERN", "LI SER KARÊ XEBATÊ LI SER KIRIN", "MAFÊN NEWEKHEV", "CUDAKARIYA ÇINA"];
    arraytekst = arraytekst.concat(arraytekst);
}
}, 6000)
