var database = firebase.firestore();



$(document).ready(function() {
    onLoadFunctions();

    function onLoadFunctions() {
        dispose25();
        table();

    }


    function table() {
        const table = document.getElementById("contenuPlats");
        table.innerHTML = "";
        database.collection("PlatCOVID").where("aLaCarte","==",50).orderBy("prixCarte", "asc").get().then((querySnapshot) => {
            const table = document.getElementById("contenuPlats");
            querySnapshot.forEach((doc) => {
                let row = table.insertRow();
                row.id = doc.id;
                let nomPlat = row.insertCell(0);
                nomPlat.innerHTML = doc.data().nom;
                let prixCarte = row.insertCell(1);
                prixCarte.innerHTML = doc.data().prixCarte + ",00 €";
                let dispo = row.insertCell(2);
                dispo.innerHTML = doc.data().prixPD+ ",00 €";
                let vegan = row.insertCell(3);
                vegan.innerHTML = doc.data().prixEPD+ ",00 €";
                console.log(`${doc.id} => ${doc.data().nom}`);
            });
        });

    }

    function dispose25(){
        database.collection("EntreeCOVID").where("aLaCarte","==",50).orderBy("prixCarte", "asc").get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                let prixCarte = doc.data().prixCarte;
                switch (i) {
                    case 0 :
                        const entree1 = document.getElementById("entree1");
                        const prix1 = document.getElementById("Prixentree_25_1");
                        entree1.innerText = nom;
                        prix1.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        break;
                    case 1 :
                        const entree2 = document.getElementById("entree2");
                        const prix2 = document.getElementById("Prixentree_25_2");
                        entree2.innerText = nom;
                        prix2.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        break;
                    case 2 :
                        const entree3 = document.getElementById("entree3");
                        const prix3 = document.getElementById("Prixentree_25_3");
                        prix3.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        entree3.innerText = nom;
                        break;
                    case 3 :
                        const entree4 = document.getElementById("entree4");
                        const prix4 = document.getElementById("Prixentree_25_4");
                        prix4.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        entree4.innerText = nom;
                        break;
                    case 4 :
                        const entree5 = document.getElementById("entree5");
                        const prix5 = document.getElementById("Prixentree_25_5");
                        prix5.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        entree5.innerText = nom;
                        break;
                    case 5 :
                        const entree6 = document.getElementById("entree6");
                        const prix6 = document.getElementById("Prixentree_25_6");
                        prix6.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        entree6.innerText = nom;
                        break;
                    case 6 :
                        const entree7 = document.getElementById("entree7");
                        const prix7 = document.getElementById("Prixentree_25_7");
                        prix7.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        entree7.innerText = nom;
                        break;
                    case 7 :
                        const entree8 = document.getElementById("entree8");
                        const prix8 = document.getElementById("Prixentree_25_8");
                        prix8.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        entree8.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<8){
                const ou56 = document.getElementById("Eou56")
                const ou67 = document.getElementById("Eou67")
                const ou78 = document.getElementById("Eou78")
                const ou45 = document.getElementById("Eou45");
                const ou34 = document.getElementById("Eou34");
                const ou23 = document.getElementById("Eou23");
                const ou12 = document.getElementById("Eou12");
                const entree6 = document.getElementById("entree6");
                const entree7 = document.getElementById("entree7");
                const entree8 = document.getElementById("entree8");
                const entree5 = document.getElementById("entree5");
                const entree4 = document.getElementById("entree4");
                const entree3 = document.getElementById("entree3");
                const entree2 = document.getElementById("entree2");
                const prix7 = document.getElementById("Prixentree_25_7");
                const prix8 = document.getElementById("Prixentree_25_8");
                const prix6 = document.getElementById("Prixentree_25_6");
                const prix5 = document.getElementById("Prixentree_25_5");
                const prix4 = document.getElementById("Prixentree_25_4");
                const prix3 = document.getElementById("Prixentree_25_3");
                const prix2 = document.getElementById("Prixentree_25_2");

                switch (i) {
                    case 7 :
                        prix8.remove();
                        entree8.remove();
                        ou78.remove();
                        break;
                    case 6 :
                        prix8.remove();
                        entree8.remove();
                        ou78.remove();
                        prix7.remove();
                        entree7.remove();
                        ou67.remove();
                        break;
                    case 5 :
                        prix8.remove();
                        entree8.remove();
                        ou78.remove();
                        prix7.remove();
                        entree7.remove();
                        ou67.remove();
                        prix6.remove();
                        entree6.remove();
                        ou56.remove();
                        break;
                    case 4 :
                        prix8.remove();
                        entree8.remove();
                        prix5.remove();
                        entree5.remove();
                        ou45.remove();
                        ou78.remove();
                        prix7.remove();
                        entree7.remove();
                        ou67.remove();
                        prix6.remove();
                        entree6.remove();
                        ou56.remove();
                        break;
                    case 3 :
                        prix8.remove();
                        entree8.remove();
                        prix5.remove();prix4.remove();
                        entree5.remove();
                        entree4.remove();
                        ou45.remove();
                        ou34.remove();
                        ou78.remove();
                        prix7.remove();
                        entree7.remove();
                        ou67.remove();
                        prix6.remove();
                        entree6.remove();
                        ou56.remove();
                        break;
                    case 2 :
                        prix8.remove();
                        entree8.remove();
                        prix5.remove();prix4.remove();prix3.remove();
                        entree5.remove();
                        entree4.remove();
                        entree3.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        ou78.remove();
                        prix7.remove();
                        entree7.remove();
                        ou67.remove();
                        prix6.remove();
                        entree6.remove();
                        ou56.remove();
                        break;
                    case 1 :
                        prix8.remove();
                        entree8.remove();
                        prix5.remove();prix4.remove();prix3.remove();prix2.remove();
                        entree5.remove();
                        entree4.remove();
                        entree3.remove();
                        entree2.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        ou12.remove();
                        ou78.remove();
                        prix7.remove();
                        entree7.remove();
                        ou67.remove();
                        prix6.remove();
                        entree6.remove();
                        ou56.remove();
                        break;
                }
            }
        });


        database.collection("DessertCOVID").where("aLaCarte","==",50).orderBy("prixCarte", "asc").get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                let prixCarte = doc.data().prixCarte;
                switch (i) {
                    case 0 :
                        const dessert1 = document.getElementById("dessert1");
                        const prix1 = document.getElementById("Prixdessert_25_1");
                        dessert1.innerText = nom;
                        prix1.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        break;
                    case 1 :
                        const dessert2 = document.getElementById("dessert2");
                        const prix2 = document.getElementById("Prixdessert_25_2");
                        dessert2.innerText = nom;
                        prix2.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        break;
                    case 2 :
                        const dessert3 = document.getElementById("dessert3");
                        const prix3 = document.getElementById("Prixdessert_25_3");
                        prix3.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        dessert3.innerText = nom;
                        break;
                    case 3 :
                        const dessert4 = document.getElementById("dessert4");
                        const prix4 = document.getElementById("Prixdessert_25_4");
                        prix4.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        dessert4.innerText = nom;
                        break;
                    case 4 :
                        const dessert5 = document.getElementById("dessert5");
                        const prix5 = document.getElementById("Prixdessert_25_5");
                        prix5.innerText = "(Prix à la carte : " + prixCarte + ",00 euros)";
                        dessert5.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<5){
                const ou45 = document.getElementById("Dou45");
                const ou34 = document.getElementById("Dou34");
                const ou23 = document.getElementById("Dou23");
                const ou12 = document.getElementById("Dou12");
                const dessert5 = document.getElementById("dessert5");
                const dessert4 = document.getElementById("dessert4");
                const dessert3 = document.getElementById("dessert3");
                const dessert2 = document.getElementById("dessert2");
                const prix5 = document.getElementById("Prixdessert_25_5");
                const prix4 = document.getElementById("Prixdessert_25_4");
                const prix3 = document.getElementById("Prixdessert_25_3");
                const prix2 = document.getElementById("Prixdessert_25_2");

                switch (i) {
                    case 4 :
                        prix5.remove();
                        dessert5.remove();
                        ou45.remove();
                        break;
                    case 3 :
                        prix5.remove();prix4.remove();
                        dessert5.remove();
                        dessert4.remove();
                        ou45.remove();
                        ou34.remove();
                        break;
                    case 2 :
                        prix5.remove();prix4.remove();prix3.remove();
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        prix5.remove();prix4.remove();prix3.remove();prix2.remove();
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        dessert2.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        ou12.remove();
                        break;
                }
            }
        });

    }




})