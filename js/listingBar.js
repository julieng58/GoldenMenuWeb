var database = firebase.firestore();
var sgtTableElement =$('#plat-table')


$(document).ready(function() {
    /** Edit button handler */
    onLoadFunctions();

    sgtTableElement.on('click', '.edit-btn', function () {
        var vin_ID = $(this).data('id');
        var vinFirestoreRef = database.collection("Spiritueux").doc(vin_ID);
        vinFirestoreRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document trouvé");
                var valTemp = 0;
                $('#nomVinModif').val(doc.data().nom);
                $('#ordreModif').val(doc.data().ordre);
                $('#typeModif').val(doc.data().type);
                valTemp = doc.data().prix1;
                if(valTemp!=0){
                    $('#prix1Modif').val(valTemp);
                    $('#prix1Modif').prop('readonly', false);
                }
                else {
                    $('#prix1Modif').val("");
                    $('#prix1Modif').prop('readonly', true);
                }
                valTemp = doc.data().prix2;
                if(valTemp!=0){
                    $('#prix2Modif').val(valTemp);
                    $('#prix2Modif').prop('readonly', false);
                }
                else {
                    $('#prix2Modif').val("");
                    $('#prix2Modif').prop('readonly', true);
                }
                valTemp = doc.data().prix4;
                if(valTemp!=0){
                    $('#prix4Modif').val(valTemp);
                    $('#prix4Modif').prop('readonly', false);
                }
                else {
                    $('#prix4Modif').val("");
                    $('#prix4Modif').prop('readonly', true);
                }
                valTemp = doc.data().prix50;
                if(valTemp!=0){
                    $('#prix50Modif').val(valTemp);
                    $('#prix50Modif').prop('readonly', false);

                }
                else {
                    $('#prix50Modif').val("");
                    $('#prix50Modif').prop('readonly', true);
                }
                valTemp = doc.data().prix150;
                if(valTemp!=0){
                    $('#prix150Modif').val(valTemp);
                    $('#prix150Modif').prop('readonly', false);
                }
                else {
                    $('#prix150Modif').val("");
                    $('#prix150Modif').prop('readonly', true);
                }
                if(doc.data().dispo==true){
                    $('#radioDispo_0Modif').prop("checked", true);
                    $('#radioDispo_1Modif').prop("checked", false);
                }else{
                    $('#radioDispo_0Modif').prop("checked", false);
                    $('#radioDispo_1Modif').prop("checked", true);
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
        var platFirestoreRef = database.collection("Spiritueux").doc($(this).data('id'));
        var rowId = $(this).data('id');
        $('#' + rowId).remove();
        platFirestoreRef.delete().then(function() {
            console.log("Plat successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    });

    function vinEdit(vinID) {
        var prix1,prix2,prix4,prix50,prix150,ordre=0;
        var cellTemp=$('#prix1Modif').val()
        prix1=(cellTemp!=="")?parseFloat(cellTemp):0;
        cellTemp=$('#prix2Modif').val()
        prix2=(cellTemp!=="")?parseFloat(cellTemp):0;
        cellTemp=$('#prix4Modif').val()
        prix4=(cellTemp!=="")?parseFloat(cellTemp):0;
        cellTemp=$('#prix50Modif').val()
        prix50=(cellTemp!=="")?parseFloat(cellTemp):0;
        cellTemp=$('#prix150Modif').val()
        prix150=(cellTemp!=="")?parseFloat(cellTemp):0;

        var tempOrdre = $('#ordreModif').val();
        if(tempOrdre==="undefined"||tempOrdre==="0" || tempOrdre ===""){
            ordre = 0;
        }
        else{
            ordre =parseInt(tempOrdre);
        }
        database.collection("Spiritueux").doc(vinID).set({
            nom: $('#nomVinModif').val(),
            prix1: prix1,
            prix2: prix2,
            prix4: prix4,
            prix50: prix50,
            prix150: prix150,
            ordre: ordre,
            dispo: JSON.parse($("input[name='radioDispoModif']:checked").val())
        }, { merge: true });

    }

    function onLoadFunctions() {
        console.log("Here I am");
        const table = document.getElementById("contenuVins");
        table.innerHTML = "";
        database.collection("Spiritueux").get().then((querySnapshot) => {
            const table = document.getElementById("contenuVins");
            querySnapshot.forEach((doc) => {
                let row = table.insertRow();
                row.id = doc.id;
                let nomVin = row.insertCell(0);
                nomVin.innerHTML = doc.data().nom;
                let prix2 = row.insertCell(1);
                prix2.innerHTML = doc.data().prix2;
                let prix4 = row.insertCell(2);
                prix4.innerHTML = doc.data().prix4;
                let prix50 = row.insertCell(3);
                prix50.innerHTML = doc.data().prix50;
                let prix1 = row.insertCell(4);
                prix1.innerHTML = doc.data().prix1;
                let prix150 = row.insertCell(5);
                prix150.innerHTML = doc.data().prix150;
                let ordre = row.insertCell(6);
                ordre.innerHTML = doc.data().ordre;
                let dispo = row.insertCell(7);
                dispo.innerHTML = doc.data().dispo;
                let boutons = row.insertCell(8);
                boutons.innerHTML = "<button class=\"btn btn-info edit-btn\" data-id=" + doc.id + "><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>" +
                    "                <button class=\"btn btn-danger delete-btn\" data-id=" + doc.id + "><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>"
                console.log(`${doc.id} => ${doc.data().nom}`);
            });
        });

    }

})