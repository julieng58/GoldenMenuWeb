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
        refresh()
    }
})


function refresh(){
    database.collection("MessageTemp").get().then((querySnapshot) => {
        var i =0;
        var messages = "";
        querySnapshot.forEach((doc) => {
            let message = doc.data().message;
            if(messages !== "") messages = messages + "\r\n" + message;
            else messages = message;
        });
        const zoneMessage = document.getElementById("infoTempText");
        zoneMessage.innerHTML = messages;
    });


}



function clickMettreAJour(){
    const zoneMessage = document.getElementById("infoTempText");
    let stringMessages = zoneMessage.value;
    let arrayMessages = stringMessages.split("\n");

    database.collection("MessageTemp")
        .get()
        .then(res => {
            res.forEach(element => {
                element.ref.delete();
            });
            for(var messageVal in arrayMessages){
                var docDataNew = {
                    message : arrayMessages[messageVal]
                };
                var newEntree = database.collection("MessageTemp").doc();
                newEntree.set(docDataNew);
            }
        });




    refresh();

}