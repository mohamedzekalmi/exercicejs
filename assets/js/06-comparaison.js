console.log("coucou")
let boite1;
let boite2;
boite1 = prompt("donne moi un nombre");
boite2 = prompt("donne moi un nombre");
boite1 = parseInt(boite1);
boite2 = parseInt(boite2);

if( (!isNaN(boite1)) && (!isNaN(boite2)) ){
// si c'est un nombre 
        if(boite1 === boite2){
            alert(boite1 + " est égale à " + boite2 ); 
        }else if(boite1 < boite2){
            alert(boite1 + " est infèrieur à " + boite2 );
        }else if (boite1 > boite2){
            alert(boite1 + " est suppérieur à " + boite2);
        }
        

}else{
    alert("se n'est pas un chiffre")
}
