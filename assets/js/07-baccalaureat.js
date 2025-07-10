let moyenneCandidat;
 
moyenneCandidat = parseFloat(prompt("Entrez la moyenne du candidat"));
 
if(moyenneCandidat < 10){
    document.write("<p>Le candidat est recalé</p> ");
}else if((moyenneCandidat >= 10) && (moyenneCandidat < 12)){
        document.write("<p>Le candidat est reçu</p> ");
}else if ((moyenneCandidat >= 12) && (moyenneCandidat <= 20)){
        document.write("<p>Le candidat est reçu avec mention</p> ");
}else{
        document.write("<p>Moyenne non valide<p/>")
}
 
console.log(moyenneCandidat);