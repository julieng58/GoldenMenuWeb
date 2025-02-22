

    /*
 *  Copyright (c) 2025 Florian Nadin
 *   All rights reserved.
 *   Last modified 31/07/2022 18:12
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


    async function getJSON(collection){
        if(collection==="Formule"){
            var concat = "";
            let result = await database.collection(collection).get().then((querySnapshot) => {const table = document.getElementById("contenuFormules");

                concat += "[";
                querySnapshot.forEach((doc) => {
                    concat += "{ \"value\":\"" + doc.id + "\" , \"text\":\"" + doc.data().nomPlat + "\",\"dispo\": \"" + doc.data().dispo +"\", \"aLaCarte\":"+ doc.data().aLaCarte +"},";

                });
                concat = concat.substring(0, concat.length-1);
                concat += "]";
                console.log(concat);
                return JSON.parse(concat);
            });
            //console.log(JSON.parse(concat));
            return result;
        }
        else{
            var concat = "";
            let result = await database.collection(collection).get().then((querySnapshot) => {const table = document.getElementById("contenuFormules");

                concat += "[";
                querySnapshot.forEach((doc) => {
                    concat += "{ \"value\":\"" + doc.id + "\" , \"text\":\"" + doc.data().nom + "\",\"dispo\": \"" + doc.data().dispo +"\", \"aLaCarte\":"+ doc.data().aLaCarte +"},";

                });
                concat = concat.substring(0, concat.length-1);
                concat += "]";
                console.log(concat);
                return JSON.parse(concat);
            });
            //console.log(JSON.parse(concat));
            return result;
        }

    }
    function updateAlacarte(collection,plat,dispo,carte=0) {
        var platRef = database.collection(collection).doc(plat);
        if(carte===0){
            platRef.set({
                aLaCarte: dispo
            }, { merge: true });
        }
        else{
            platRef.set({
                aLaCarte: carte
            }, { merge: true });
        }

    }


    //window.onload = onLoadFunctions;




