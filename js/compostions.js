

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




