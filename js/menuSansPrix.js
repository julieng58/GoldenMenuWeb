var database = firebase.firestore();



$(document).ready(function() {
    onLoadFunctions();

    function onLoadFunctions() {
        dispose25();
        dispose33();
        dispose22();
        //disposeFormH();
        //disposeFormB();
    }




    function dispose25(){
        database.collection("Entree").where("aLaCarte","==",25).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const entree1 = document.getElementById("entree1");
                        entree1.innerText = nom;
                        break;
                    case 1 :
                        const entree2 = document.getElementById("entree2");
                        entree2.innerText = nom;
                        break;
                    case 2 :
                        const entree3 = document.getElementById("entree3");
                        entree3.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<3){
                const ou23 = document.getElementById("Eou23");
                const plat3 = document.getElementById("entree3");
                const ou12 = document.getElementById("Eou12");
                const plat2 = document.getElementById("entree2");

                switch (i) {
                    case 2 :
                        plat3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        plat3.remove();
                        ou23.remove();
                        plat2.remove();
                        ou12.remove();
                        break;
                }
            }
        });

        database.collection("Plat").where("aLaCarte","==",25).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const plat1 = document.getElementById("plat1");
                        plat1.innerText = nom;
                        break;
                    case 1 :
                        const plat2 = document.getElementById("plat2");
                        plat2.innerText = nom;
                        break;
                    case 2 :
                        const plat3 = document.getElementById("plat3");
                        plat3.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<3){
                const ou23 = document.getElementById("Pou23");
                const plat3 = document.getElementById("plat3");
                const ou12 = document.getElementById("Pou12");
                const plat2 = document.getElementById("plat2");
                switch (i) {
                    case 2 :
                        plat3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        plat3.remove();
                        ou23.remove();
                        plat2.remove();
                        ou12.remove();
                        break;
                }
            }
        });

        database.collection("Dessert").where("aLaCarte","==",1).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const dessert1 = document.getElementById("dessert1");
                        dessert1.innerText = nom;
                        break;
                    case 1 :
                        const dessert2 = document.getElementById("dessert2");
                        dessert2.innerText = nom;
                        break;
                    case 2 :
                        const dessert3 = document.getElementById("dessert3");
                        dessert3.innerText = nom;
                        break;
                    case 3 :
                        const dessert4 = document.getElementById("dessert4");
                        dessert4.innerText = nom;
                        break;
                    case 4 :
                        const dessert5 = document.getElementById("dessert5");
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

                switch (i) {
                    case 4 :
                        dessert5.remove();
                        ou45.remove();
                        break;
                    case 3 :
                        dessert5.remove();
                        dessert4.remove();
                        ou45.remove();
                        ou34.remove();
                        break;
                    case 2 :
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        break;
                    case 1 :
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

    function dispose33(){
        database.collection("Entree").where("aLaCarte","==",32).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const entree1 = document.getElementById("33entree1");
                        entree1.innerText = nom;
                        break;
                    case 1 :
                        const entree2 = document.getElementById("33entree2");
                        entree2.innerText = nom;
                        break;
                    case 2 :
                        const entree3 = document.getElementById("33entree3");
                        entree3.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<3){
                const ou23 = document.getElementById("33Eou23");
                const plat3 = document.getElementById("33entree3");
                const ou12 = document.getElementById("33Eou12");
                const plat2 = document.getElementById("33entree2");

                switch (i) {
                    case 2 :
                        plat3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        plat3.remove();
                        ou23.remove();
                        plat2.remove();
                        ou12.remove();
                        break;
                }
            }
        });

        database.collection("Plat").where("aLaCarte","==",32).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const plat1 = document.getElementById("33plat1");
                        plat1.innerText = nom;
                        break;
                    case 1 :
                        const plat2 = document.getElementById("33plat2");
                        plat2.innerText = nom;
                        break;
                    case 2 :
                        const plat3 = document.getElementById("33plat3");
                        plat3.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<3){
                const ou23 = document.getElementById("33Pou23");
                const plat3 = document.getElementById("33plat3");
                const ou12 = document.getElementById("33Pou12");
                const plat2 = document.getElementById("33plat2");
                switch (i) {
                    case 2 :
                        plat3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        plat3.remove();
                        ou23.remove();
                        plat2.remove();
                        ou12.remove();
                        break;
                }
            }
        });

        database.collection("Dessert").where("aLaCarte","==",1).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const dessert1 = document.getElementById("33dessert1");
                        dessert1.innerText = nom;
                        break;
                    case 1 :
                        const dessert2 = document.getElementById("33dessert2");
                        dessert2.innerText = nom;
                        break;
                    case 2 :
                        const dessert3 = document.getElementById("33dessert3");
                        dessert3.innerText = nom;
                        break;
                    case 3 :
                        const dessert4 = document.getElementById("33dessert4");
                        dessert4.innerText = nom;
                        break;
                    case 4 :
                        const dessert5 = document.getElementById("33dessert5");
                        dessert5.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<5){
                const ou45 = document.getElementById("33Dou45");
                const ou34 = document.getElementById("33Dou34");
                const ou23 = document.getElementById("33Dou23");
                const ou12 = document.getElementById("33Dou12");
                const dessert5 = document.getElementById("33dessert5");
                const dessert4 = document.getElementById("33dessert4");
                const dessert3 = document.getElementById("33dessert3");
                const dessert2 = document.getElementById("33dessert2");

                switch (i) {
                    case 4 :
                        dessert5.remove();
                        ou45.remove();
                        break;
                    case 3 :
                        dessert5.remove();
                        dessert4.remove();
                        ou45.remove();
                        ou34.remove();
                        break;
                    case 2 :
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        break;
                    case 1 :
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

        database.collection("Dessert").where("aLaCarte","==",1).where("dispoWes","==",true).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const dessert1 = document.getElementById("33dessert1");
                        dessert1.innerText = nom;
                        break;
                    case 1 :
                        const dessert2 = document.getElementById("33dessert2");
                        dessert2.innerText = nom;
                        break;
                    case 2 :
                        const dessert3 = document.getElementById("33dessert3");
                        dessert3.innerText = nom;
                        break;
                    case 3 :
                        const dessert4 = document.getElementById("33dessert4");
                        dessert4.innerText = nom;
                        break;
                    case 4 :
                        const dessert5 = document.getElementById("33dessert5");
                        dessert5.innerText = nom;
                        break;
                }
                i++;
            });
            if(i<5){
                const ou45 = document.getElementById("33Dou45");
                const ou34 = document.getElementById("33Dou34");
                const ou23 = document.getElementById("33Dou23");
                const ou12 = document.getElementById("33Dou12");
                const dessert5 = document.getElementById("33dessert5");
                const dessert4 = document.getElementById("33dessert4");
                const dessert3 = document.getElementById("33dessert3");
                const dessert2 = document.getElementById("33dessert2");

                switch (i) {
                    case 4 :
                        dessert5.remove();
                        ou45.remove();
                        break;
                    case 3 :
                        dessert5.remove();
                        dessert4.remove();
                        ou45.remove();
                        ou34.remove();
                        break;
                    case 2 :
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        break;
                    case 1 :
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

    function dispose22() {
        database.collection("Entree").where("aLaCarte", "==", 22).get().then((querySnapshot) => {
            var i = 0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const entree1 = document.getElementById("22entree1");
                        entree1.innerText = nom;
                        break;
                    case 1 :
                        const entree2 = document.getElementById("22entree2");
                        entree2.innerText = nom;
                        break;
                    case 2 :
                        const entree3 = document.getElementById("22entree3");
                        entree3.innerText = nom;
                        break;
                }
                i++;
            });
            if (i < 3) {
                const ou23 = document.getElementById("22Eou23");
                const plat3 = document.getElementById("22entree3");
                const ou12 = document.getElementById("22Eou12");
                const plat2 = document.getElementById("22entree2");

                switch (i) {
                    case 2 :
                        plat3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        plat3.remove();
                        ou23.remove();
                        plat2.remove();
                        ou12.remove();
                        break;
                }
            }
        });

        database.collection("Plat").where("aLaCarte", "==", 22).get().then((querySnapshot) => {
            var i = 0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                switch (i) {
                    case 0 :
                        const plat1 = document.getElementById("22plat1");
                        plat1.innerText = nom;
                        break;
                    case 1 :
                        const plat2 = document.getElementById("22plat2");
                        plat2.innerText = nom;
                        break;
                    case 2 :
                        const plat3 = document.getElementById("22plat3");
                        plat3.innerText = nom;
                        break;
                }
                i++;
            });
            if (i < 3) {
                const ou23 = document.getElementById("22Pou23");
                const plat3 = document.getElementById("22plat3");
                const ou12 = document.getElementById("22Pou12");
                const plat2 = document.getElementById("22plat2");
                switch (i) {
                    case 2 :
                        plat3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        plat3.remove();
                        ou23.remove();
                        plat2.remove();
                        ou12.remove();
                        break;
                }
            }
        });

        database.collection("Dessert").where("aLaCarte", "==", 1).where("vegan", "==", true).get().then((querySnapshot) => {
            var i = 0;
            querySnapshot.forEach((doc) => {
                let nom = doc.data().nom;
                console.log(nom)
                switch (i) {
                    case 0 :
                        const dessert1 = document.getElementById("22dessert1");
                        dessert1.innerText = nom;
                        break;
                    case 1 :
                        const dessert2 = document.getElementById("22dessert2");
                        dessert2.innerText = nom;
                        break;
                    case 2 :
                        const dessert3 = document.getElementById("22dessert3");
                        dessert3.innerText = nom;
                        break;
                    case 3 :
                        const dessert4 = document.getElementById("22dessert4");
                        dessert4.innerText = nom;
                        break;
                    case 4 :
                        const dessert5 = document.getElementById("22dessert5");
                        dessert5.innerText = nom;
                        break;
                }
                i++;
            });
            if (i < 5) {
                const ou45 = document.getElementById("22Dou45");
                const ou34 = document.getElementById("22Dou34");
                const ou23 = document.getElementById("22Dou23");
                const ou12 = document.getElementById("22Dou12");
                const dessert5 = document.getElementById("22dessert5");
                const dessert4 = document.getElementById("22dessert4");
                const dessert3 = document.getElementById("22dessert3");
                const dessert2 = document.getElementById("22dessert2");
                const dessert1 = document.getElementById("22dessert1");
                switch (i) {
                    case 4 :
                        dessert5.remove();
                        ou45.remove();
                        break;
                    case 3 :
                        dessert5.remove();
                        dessert4.remove();
                        ou45.remove();
                        ou34.remove();
                        break;
                    case 2 :
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        dessert2.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        ou12.remove();
                        break;
                    case 0:
                        dessert5.remove();
                        dessert4.remove();
                        dessert3.remove();
                        dessert2.remove();
                        dessert1.remove();
                        ou45.remove();
                        ou34.remove();
                        ou23.remove();
                        ou12.remove();
                        break;

                }
            }
        });
    }

/*    function disposeFormH(){
        database.collection("Formule").where("aLaCarte","==",true).where("dispoWes","==",false).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nomPlat = doc.data().nomPlat;
                let nomDessert = doc.data().nomDessert;


                switch (i) {
                    case 0 :
                        const formule1 = document.getElementById("formule1H");
                        formule1.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                    case 1 :
                        const formule2 = document.getElementById("formule2H");
                        formule2.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                    case 2 :
                        const formule3 = document.getElementById("formule3H");
                        formule3.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                    case 3 :
                        const formule4 = document.getElementById("formule4H");
                        formule4.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                }
                i++;
            });
            if(i<4){
                const formule4 = document.getElementById("formule4H");
                const formule3 = document.getElementById("formule3H");
                const formule2 = document.getElementById("formule2H");
                const formule1 = document.getElementById("formule1H");
                const ou34 = document.getElementById("Fou34H");
                const ou23 = document.getElementById("Fou23H");
                const ou12 = document.getElementById("Fou12H");
                const WES = document.getElementById("WES");



                switch (i) {
                    case 3 :
                        formule4.remove();
                        ou34.remove();
                        break;

                    case 2 :
                        formule4.remove();
                        ou34.remove();
                        formule3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        formule4.remove();
                        ou34.remove();
                        formule3.remove();
                        ou23.remove();
                        formule2.remove();
                        ou12.remove();
                        let stringWES = WES.innerText;
                        WES.innerText = stringWES.replace("Les formules ci-dessus ne sont pas servies le soir","La formule ci-dessus n'est pas servie le soir");
                        break;
                    case 0 :
                        formule4.remove();
                        ou34.remove();
                        formule3.remove();
                        ou23.remove();
                        formule2.remove();
                        formule1.remove();
                        ou12.remove();
                        break;
                }
            }
        });

    }

    function disposeFormB(){
        database.collection("Formule").where("aLaCarte","==",true).where("dispoWes","==",true).get().then((querySnapshot) => {
            var i =0;
            querySnapshot.forEach((doc) => {
                let nomPlat = doc.data().nomPlat;
                let nomDessert = doc.data().nomDessert;


                switch (i) {
                    case 0 :
                        const formule1 = document.getElementById("formule1B");
                        formule1.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                    case 1 :
                        const formule2 = document.getElementById("formule2B");
                        formule2.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                    case 2 :
                        const formule3 = document.getElementById("formule3B");
                        formule3.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                    case 3 :
                        const formule4 = document.getElementById("formule4B");
                        formule4.innerHTML = nomPlat + "<b> ET </b>"  + nomDessert;
                        break;
                }
                i++;
            });
            if(i<4){
                const formule4 = document.getElementById("formule4B");
                const formule3 = document.getElementById("formule3B");
                const formule2 = document.getElementById("formule2B");
                const formule1 = document.getElementById("formule1B");
                const ou34 = document.getElementById("Fou34B");
                const ou23 = document.getElementById("Fou23B");
                const ou12 = document.getElementById("Fou12B");


                switch (i) {
                    case 3 :
                        formule4.remove();
                        ou34.remove();
                        break;

                    case 2 :
                        formule4.remove();
                        ou34.remove();
                        formule3.remove();
                        ou23.remove();
                        break;
                    case 1 :
                        formule4.remove();
                        ou34.remove();
                        formule3.remove();
                        ou23.remove();
                        formule2.remove();
                        ou12.remove();
                        break;
                    case 0 :
                        formule4.remove();
                        ou34.remove();
                        formule3.remove();
                        ou23.remove();
                        formule2.remove();
                        formule1.remove();
                        ou12.remove();
                        break;

                }
            }
        });

    }*/



})