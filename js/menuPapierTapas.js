/*
 *  Copyright (c) 2025 Florian Nadin
 *   All rights reserved.
 *   Last modified 31/07/2022 18:13
 *
 *   Ce fichier fait partie du logiciel cédé conformément au contrat signé entre les parties.
 *
 *   Toute utilisation, modification ou distribution du code source est soumise aux conditions de la cession :
 *   - Le logiciel est fourni en l'état, sans garantie d'aucune sorte.
 *   - L'utilisation est restreinte à l'usage prévu par le cessionnaire.
 *   - Toute reproduction ou commercialisation du code sans autorisation expresse est interdite.
 *   - Le cessionnaire est tenu de préserver la confidentialité du code source.
 *
 *   Voir le fichier README.md pour plus de détails sur les conditions d'utilisation.
 *
 */

var database = firebase.firestore();



$(document).ready(function() {
    onLoadFunctions();

    function onLoadFunctions() {
        dispose25();
    }




    function dispose25(){
        database.collection("Tapas").where("nom","==","TapasREF").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const entree1 = document.getElementById("entree1");
                const prix1 = document.getElementById("Prixentree_25_1");
                entree1.innerText = "L'assiette de Tapas salées à partager";
                prix1.innerText = doc.data().petiteTapas + ",00 euros (par personne)";
                const entree2 = document.getElementById("entree2");
                const prix2 = document.getElementById("Prixentree_25_2");
                entree2.innerText = "Grande assiette de Tapas";;
                prix2.innerText = doc.data().grandeTapas + ",00 euros";
                const entree3 = document.getElementById("entree3");
                const prix3 = document.getElementById("Prixentree_25_3");
                entree3.innerText = "Assiette de Tapas sucrées";;
                prix3.innerText = doc.data().dessertTapas + ",00 euros";
                const plat1 = document.getElementById("plat1");
                const prix1P = document.getElementById("Prixplat_25_1");
                plat1.innerText = "La petite assiette de tapas salées et la sucrée";
                prix1P.innerText = doc.data().formulePetiteDessert + ",00 euros";
                const plat2 = document.getElementById("plat2");
                const prix2P = document.getElementById("Prixplat_25_2");
                plat2.innerText = "La grande assiette de tapas salées et la sucrée";
                prix2P.innerText = doc.data().formuleGrandeDessert + ",00 euros";
            });

        });

    }

})