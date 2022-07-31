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