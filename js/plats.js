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
        var sgtTableElement =$('#plat-table'),
            submitBtn = $('#confirm-add');



        submitBtn.click(function () {

            var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
            var booleanglutenFree = JSON.parse($("input[name='radioNewGluten']:checked").val());
            var booleanVegan = JSON.parse($("input[name='radioNewVegan']:checked").val());

            var docDataNew = {
                nom: $('#textNewNomPlat').val(),
                prixCarte: parseFloat($('#textNewPrixCarte').val()),
                dispo: booleanDispo,
                glutenFree: booleanglutenFree,
                vegan: booleanVegan,
                aLaCarte : 0,
            };

            var newEntree = database.collection("Plat").doc();
            newEntree.set(docDataNew);
            onLoadFunctions()
            clearInputs();
        });

        function clearInputs() {
            $('#textNewNomPlat').val('');
            $('#textNewPrixCarte').val('');

                $('#radioNewDispo_0').prop("checked", false);
                $('#radioNewDispo_1').prop("checked", false);
                $('#radioNewGluten_0').prop("checked", false);
                $('#radioNewGluten_1').prop("checked", false);
                $('#radioNewVegan_0').prop("checked", false);
                $('#radioNewVegan_1').prop("checked", false);

        }

        /** Update Operations ======================
         * Click handler to update student data and send to firebase
         * Get the unique id of any student
         */

        /** Edit button handler */
        sgtTableElement.on('click', '.edit-btn', function () {
            var plat_ID = $(this).data('id');
            var platFirestoreRef = database.collection("Plat").doc(plat_ID);
            platFirestoreRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document trouvé");
                    $('#textNomPlat').val(doc.data().nom);
                    $('#textPrixCarte').val(doc.data().prixCarte);
                    if(doc.data().dispo==true){
                        $('#radioDispo_0').prop("checked", true);
                        $('#radioDispo_1').prop("checked", false);
                    }else{
                        $('#radioDispo_0').prop("checked", false);
                        $('#radioDispo_1').prop("checked", true);
                    }
                    if(doc.data().glutenFree==true){
                        $('#radioGluten_0').prop("checked", true);
                        $('#radioGluten_1').prop("checked", false);
                    }else{
                        $('#radioGluten_0').prop("checked", false);
                        $('#radioGluten_1').prop("checked", true);
                    }
                    if(doc.data().vegan==true){
                        $('#radioVegan_0').prop("checked", true);
                        $('#radioVegan_1').prop("checked", false);
                    }else{
                        $('#radioVegan_0').prop("checked", false);
                        $('#radioVegan_1').prop("checked", true);
                    }
                    $('#plat-id').val(doc.id);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
                $("#edit-modal").modal("show");

        });


        function platEdit(platID) {
            database.collection("Plat").doc(platID).set({
                nom: $('#textNomPlat').val(),
                prixCarte: parseFloat($('#textPrixCarte').val()),
                dispo: JSON.parse($("input[name='radioDispo']:checked").val()),
                glutenFree: JSON.parse($("input[name='radioGluten']:checked").val()),
                vegan: JSON.parse($("input[name='radioVegan']:checked").val()),
            }, { merge: true });

        }

        /** Click handler for modal confirm button */
        $("#edit-modal").on('click', '#confirm-edit', function () {
            platEdit($('#plat-id').val());
            $("#edit-modal").modal('hide');
            onLoadFunctions()
        })

        /** DELETE OPERATIONS ==================================
        /** Delete button handler */
        sgtTableElement.on('click', '.delete-btn', function () {
            var platFirestoreRef = database.collection("Plat").doc($(this).data('id'));
            var rowId = $(this).data('id');
            $('#' + rowId).remove();
            platFirestoreRef.delete().then(function() {
                console.log("Plat successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        });
    });


    function onLoadFunctions() {
        const table = document.getElementById("contenuPlats");
        table.innerHTML = "";
        database.collection("Plat").get().then((querySnapshot) => {
            const table = document.getElementById("contenuPlats");
            querySnapshot.forEach((doc) => {
                let row = table.insertRow();
                row.id = doc.id;
                let nomPlat = row.insertCell(0);
                nomPlat.innerHTML = doc.data().nom;
                let prixCarte = row.insertCell(1);
                prixCarte.innerHTML = doc.data().prixCarte;
                let dispo = row.insertCell(2);
                dispo.innerHTML = doc.data().dispo;
                let vegan = row.insertCell(3);
                vegan.innerHTML = doc.data().vegan;
                let glutenfree = row.insertCell(4);
                glutenfree.innerHTML = doc.data().glutenFree;
                let boutons = row.insertCell(5);
                boutons.innerHTML = "<button class=\"btn btn-info edit-btn\" data-id=" + doc.id + "><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>" +
                    "                <button class=\"btn btn-danger delete-btn\" data-id=" + doc.id + "><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>"
                console.log(`${doc.id} => ${doc.data().nom}`);
            });
        });

    }
    window.onload = onLoadFunctions;




