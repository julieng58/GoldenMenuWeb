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
var sgtTableElement =$('#plat-table')




$('#dimensionMultiple').click(function() {
    $("#textNewPrix1").addClass('hidden');
    $("#textNewPrix2").addClass('hidden');
    $("#textNewPrix4").addClass('hidden');
    $("#textNewPrix50").addClass('hidden');
    $("#textNewPrix150").addClass('hidden');
    $('option:selected', $(this)).each(function() {
        if($(this).val()==='1'){
            $("#textNewPrix1").removeClass('hidden');
        }
        if($(this).val()==='2'){
            $("#textNewPrix2").removeClass('hidden');
        }
        if($(this).val()==='4'){
            $("#textNewPrix4").removeClass('hidden');
        }
        if($(this).val()==='50'){
            $("#textNewPrix50").removeClass('hidden');
        }
        if($(this).val()==='150'){
            $("#textNewPrix150").removeClass('hidden');
        }

    });
});

$(document).ready(function() {
    var submitBtn = $('#confirm-add');
    var submitWipeBtn = $('#confirm-and-wipe-add');




    submitBtn.click(function () {

        var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
        var typeVin = $('#typeVin').val();
        var dimension = $('#dimensionMultiple').val();
        var nom = $('#nomVin').val();
        var prix1 = '0';
        var prix2='0';
        var prix4 ='0';
        var prix50='0';
        var prix150 ='0';
        var ordre = 0;
        var tempOrdre = $('#ordre').val();
        if(tempOrdre==="undefined"||tempOrdre==="0" || tempOrdre ===""){
            ordre = 0;
        }
        else{
            ordre =parseInt(tempOrdre);
        }

        $('option:selected', $('#dimensionMultiple')).each(function() {
            if($(this).val()==='1'){
                prix1 = $('#textNewPrix1').val();
            }
            if($(this).val()==='2'){
                prix2 = $('#textNewPrix2').val();
            }
            if($(this).val()==='4'){
                prix4 = $('#textNewPrix4').val();
            }
            if($(this).val()==='50'){
                prix50 = $('#textNewPrix50').val();
            }
            if($(this).val()==='150'){
                prix150 = $('#textNewPrix150').val();
            }
        });


        var docDataNew = {
            nom: nom,
            dispo: booleanDispo,
            type: parseInt(typeVin),
            contenant : dimension,
            prix1: parseFloat(prix1),
            prix2:parseFloat(prix2),
            prix4:parseFloat(prix4),
            prix50:parseFloat(prix50),
            prix150:parseFloat(prix150),
            ordre:parseInt(ordre)

        };

        var newEntree = database.collection("Spiritueux").doc();
        newEntree.set(docDataNew);
        //onLoadFunctions()
        //clearInputs();
    });


    submitWipeBtn.click(function () {

        var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
        var typeVin = $('#typeVin').val();
        var dimension = $('#dimensionMultiple').val();
        var nom = $('#nomVin').val();
        var prix1 = '0';
        var prix2='0';
        var prix4 ='0';
        var prix50='0';
        var prix150 ='0';
        var ordre = 0;
        var tempOrdre = $('#ordre').val();
        if(tempOrdre==="undefined"||tempOrdre==="0" || tempOrdre ===""){
            ordre = 0;
        }
        else{
            ordre =parseInt(tempOrdre);
        }

        $('option:selected', $('#dimensionMultiple')).each(function() {
            if($(this).val()==='1'){
                prix1 = $('#textNewPrix1').val();
            }
            if($(this).val()==='2'){
                prix2 = $('#textNewPrix2').val();
            }
            if($(this).val()==='4'){
                prix4 = $('#textNewPrix4').val();
            }
            if($(this).val()==='50'){
                prix50 = $('#textNewPrix50').val();
            }
            if($(this).val()==='150'){
                prix150 = $('#textNewPrix150').val();
            }
        });


        var docDataNew = {
            nom: nom,
            dispo: booleanDispo,
            type: parseInt(typeVin),
            contenant : dimension,
            prix75: parseFloat(prix75),
            prix150:parseFloat(prix150),
            prix1:parseFloat(prix1),
            prix37:parseFloat(prix37),
            prix45:parseFloat(prix45),
            ordre:parseInt(ordre)

        };

        var newEntree = database.collection("Spiritueux").doc();
        newEntree.set(docDataNew);
        clearInputs();
    });


    /** Edit button handler */
    sgtTableElement.on('click', '.edit-btn', function () {
        var vin_ID = $(this).data('id');
        var vinFirestoreRef = database.collection("Spiritueux").doc(vin_ID);
        vinFirestoreRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document trouvé");
                $('#EditnomVin').val(doc.data().nom);
                $('#EditmillesimeVin').val(doc.data().millesime);
                $('#EditnomVigneron').val(doc.data().vigneron);
                $('#EdittextNewPrixCarte').val(doc.data().prix);
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
        var platFirestoreRef = database.collection("Vin").doc($(this).data('id'));
        var rowId = $(this).data('id');
        $('#' + rowId).remove();
        platFirestoreRef.delete().then(function() {
            console.log("Plat successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    });

    function vinEdit(vinID) {
        database.collection("Vin").doc(vinID).set({
            nom: $('#EditnomVin').val(),
            prix: parseFloat($('#EdittextNewPrixCarte').val()),
            vigneron:$('#EditnomVigneron').val(),
            dispo: JSON.parse($("input[name='editradioDispo']:checked").val()),
            millesime:$('#EditmillesimeVin').val()
        }, { merge: true });

    }


    function clearInputs() {
        $('#nomVin').val('');
        $('#nomIGP').val('');
        $('#nomAOC').val('');
        $('#nomVigneron').val('');
        $('#millesimeVin').val('');
        $('#typeVin').val(1);
        $('#textPrixCarte').val('');

    }


    function onLoadFunctions() {
        const table = document.getElementById("contenuVins");
        table.innerHTML = "";
        database.collection("Vin").where("prix",'>=',0).get().then((querySnapshot) => {
            const table = document.getElementById("contenuVins");
            querySnapshot.forEach((doc) => {
                let row = table.insertRow();
                row.id = doc.id;
                let nomVin = row.insertCell(0);
                nomVin.innerHTML = doc.data().nom;
                let vigneron = row.insertCell(1);
                vigneron.innerHTML = doc.data().vigneron;
                let millesime = row.insertCell(2);
                millesime.innerHTML = doc.data().millesime;
                let prix = row.insertCell(3);
                prix.innerHTML = doc.data().prix75;
                let concat = doc.data().region +"."+ doc.data().appellationNom;
                let idapp = row.insertCell(4);
                idapp.innerHTML = concat;
                let dispo = row.insertCell(5);
                dispo.innerHTML = doc.data().dispo;
                let boutons = row.insertCell(6);
                boutons.innerHTML = "<button class=\"btn btn-info edit-btn\" data-id=" + doc.id + "><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>" +
                    "                <button class=\"btn btn-danger delete-btn\" data-id=" + doc.id + "><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>"
                console.log(`${doc.id} => ${doc.data().nom}`);
            });
        });

    }
    //window.onload = onLoadFunctions;
})