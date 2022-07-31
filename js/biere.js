var database = firebase.firestore();
var sgtTableElement =$('#plat-table')

var availableTagsBrasseur = ["401DONJO", "401RURAL", "401OUCHE"];

$("#brasseur").autocomplete({
    source: availableTagsBrasseur
});


$(document).ready(function() {
    var submitBtn = $('#confirm-add');
    var submitWipeBtn = $('#confirm-and-wipe-add');


    submitBtn.click(function () {

        var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
        var nom = $('#nomBiere').val();
        var prix = $('#prixBiere').val();
        var brasseur = $('#brasseur').val();
        var description = $('#descBiere').val();


        var docDataNew = {
            nom: nom,
            dispo: booleanDispo,
            brasseur: brasseur,
            description: description,
            prix: parseFloat(prix)
        };

        var newEntree = database.collection("Biere").doc();
        newEntree.set(docDataNew);
        //onLoadFunctions()
        //clearInputs();
    });


    submitWipeBtn.click(function () {

        var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
        var nom = $('#nomBiere').val();
        var prix = $('#prixBiere').val();
        var brasseur = $('#brasseur').val();
        var description = $('#descBiere').val();


        var docDataNew = {
            nom: nom,
            dispo: booleanDispo,
            brasseur: brasseur,
            description: description,
            prix: parseFloat(prix)
        };

        var newEntree = database.collection("Biere").doc();
        newEntree.set(docDataNew);
        //onLoadFunctions()
        clearInputs();
    });





    /** Edit button handler */
    sgtTableElement.on('click', '.edit-btn', function () {
        var vin_ID = $(this).data('id');
        var vinFirestoreRef = database.collection("Biere").doc(vin_ID);
        vinFirestoreRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document trouvé");
                $('#EditnomBiere').val(doc.data().nom);
                $('#EditdescBiere').val(doc.data().description);
                $('#Editbrasseur').val(doc.data().brasseur);
                $('#EditprixBiere').val(doc.data().prix);
                if(doc.data().dispo==true){
                    $('#editradioNewDispo_0').prop("checked", true);
                    $('#editradioNewDispo_1').prop("checked", false);
                }else{
                    $('#editradioNewDispo_0').prop("checked", false);
                    $('#editradioNewDispo_1').prop("checked", true);
                }
                $('#vin-id').val(doc.id);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        $("#edit-modal").modal("show");

    });

    /** Click handler for modal confirm button */
    $("#edit-modal").on('click', '#confirm-edit', function () {
        vinEdit($('#vin-id').val());
        $("#edit-modal").modal('hide');
        onLoadFunctions()
    })
    /** DELETE OPERATIONS ==================================
     /** Delete button handler */
    sgtTableElement.on('click', '.delete-btn', function () {
        var platFirestoreRef = database.collection("Biere").doc($(this).data('id'));
        var rowId = $(this).data('id');
        $('#' + rowId).remove();
        platFirestoreRef.delete().then(function() {
            console.log("Biere successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    });

    function vinEdit(vinID) {
        database.collection("Biere").doc(vinID).set({
            nom: $('#EditnomBiere').val(),
            prix: parseFloat($('#EditprixBiere').val()),
            brasseur:$('#Editbrasseur').val(),
            dispo: JSON.parse($("input[name='EditradioNewDispo']:checked").val()),
            description:$('#EditdescBiere').val()
        }, { merge: true });

    }


    function clearInputs() {
        $('#EditnomBiere').val('');
        $('#Editbrasseur').val('');
        $('#EditdescBiere').val('');
        $('#EditprixBiere').val('');

    }


    function onLoadFunctions() {
        const table = document.getElementById("contenuVins");
        table.innerHTML = "";
        database.collection("Biere").get().then((querySnapshot) => {
            const table = document.getElementById("contenuVins");
            querySnapshot.forEach((doc) => {
                let row = table.insertRow();
                row.id = doc.id;
                let nomVin = row.insertCell(0);
                nomVin.innerHTML = doc.data().nom;
                let brasseur = row.insertCell(1);
                brasseur.innerHTML = doc.data().brasseur;
                let desc = row.insertCell(2);
                desc.innerHTML = doc.data().description;
                let prix = row.insertCell(3);
                prix.innerHTML = doc.data().prix;
                let dispo = row.insertCell(4);
                dispo.innerHTML = doc.data().dispo;
                let boutons = row.insertCell(5);
                boutons.innerHTML = "<button class=\"btn btn-info edit-btn\" data-id=" + doc.id + "><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>" +
                    "                <button class=\"btn btn-danger delete-btn\" data-id=" + doc.id + "><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>"
                console.log(`${doc.id} => ${doc.data().nom}`);
            });
        });

    }
    window.onload = onLoadFunctions;
})