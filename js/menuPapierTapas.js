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