    var database = firebase.firestore();

    $(document).ready(function() {
        var sgtTableElement =$('#formule-table'),
            submitBtn = $('#confirm-add');



        submitBtn.click(function () {

            var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
            var booleanWes = JSON.parse($("input[name='radioNewWES']:checked").val());
            var booleanglutenFree = JSON.parse($("input[name='radioNewGluten']:checked").val());
            var booleanVegan = JSON.parse($("input[name='radioNewVegan']:checked").val());

            var docDataNew = {
                nomPlat: $('#textNewNomPlat').val(),
                nomDessert: $('#textNewDessert').val(),
                prixCarte: parseFloat($('#textNewPrixCarte').val()),
                prixFormule: parseFloat($('#textNewPrixFormule').val()),
                dispo: booleanDispo,
                dispoWes: booleanWes,
                glutenFree: booleanglutenFree,
                vegan: booleanVegan,
                aLaCarte : false,
            };
            var newFormule = database.collection("Formule").doc();
            newFormule.set(docDataNew);
            onLoadFunctions()
            clearInputs();
        });

        function clearInputs() {
            $('#textNewNomPlat').val('');
            $('#textNewDessert').val('');
            $('#textNewPrixCarte').val('');
            $('#textNewPrixFormule').val('');

                $('#radioNewDispo_0').prop("checked", false);
                $('#radioNewDispo_1').prop("checked", false);
                $('#radioNewGluten_0').prop("checked", false);
                $('#radioNewGluten_1').prop("checked", false);
                $('#radioNewVegan_0').prop("checked", false);
                $('#radioNewVegan_1').prop("checked", false);
                $('#radioNewWES_0').prop("checked", false);
                $('#radioNewWES_1').prop("checked", false);

        };

        /** Update Operations ======================
         * Click handler to update student data and send to firebase
         * Get the unique id of any student
         */

        /** Edit button handler */
        sgtTableElement.on('click', '.edit-btn', function () {
            var formule_ID = $(this).data('id');
            var formuleFirestoreRef = database.collection("Formule").doc(formule_ID);
            formuleFirestoreRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document trouvé");
                    $('#textNomPlat').val(doc.data().nomPlat);
                    $('#textDessert').val(doc.data().nomDessert);
                    $('#textPrixCarte').val(doc.data().prixCarte);
                    $('#textPrixFormule').val(doc.data().prixFormule);
                    if(doc.data().dispo===true){
                        $('#radioDispo_0').prop("checked", true);
                        $('#radioDispo_1').prop("checked", false);
                    }else{
                        $('#radioDispo_0').prop("checked", false);
                        $('#radioDispo_1').prop("checked", true);
                    }
                    if(doc.data().glutenFree===true){
                        $('#radioGluten_0').prop("checked", true);
                        $('#radioGluten_1').prop("checked", false);
                    }else{
                        $('#radioGluten_0').prop("checked", false);
                        $('#radioGluten_1').prop("checked", true);
                    }
                    if(doc.data().vegan===true){
                        $('#radioVegan_0').prop("checked", true);
                        $('#radioVegan_1').prop("checked", false);
                    }else{
                        $('#radioVegan_0').prop("checked", false);
                        $('#radioVegan_1').prop("checked", true);
                    }
                    if(doc.data().dispoWes===true){
                        $('#radioWES_0').prop("checked", false);
                        $('#radioWES_1').prop("checked", true);
                    }else{
                        $('#radioWES_0').prop("checked", true);
                        $('#radioWES_1').prop("checked", false);
                    }
                    $('#formule-id').val(doc.id);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
                $("#edit-modal").modal("show");

        });

        function formuleEdit(formuleID) {
            console.log("Je suis ici");
           database.collection("Formule").doc(formuleID).set({
                 nomPlat: $('#textNomPlat').val(),
                 nomDessert: $('#textDessert').val(),
                 prixCarte: parseFloat($('#textPrixCarte').val()),
                 prixFormule: parseFloat($('#textPrixFormule').val()),
                 dispo: JSON.parse($("input[name='radioDispo']:checked").val()),
                 dispoWes: JSON.parse($("input[name='radioWES']:checked").val()),
                 glutenFree: JSON.parse($("input[name='radioGluten']:checked").val()),
                 vegan: JSON.parse($("input[name='radioVegan']:checked").val()),
            }, { merge: true });

        }

        /** Click handler for modal confirm button */
        $("#edit-modal").on('click', '#confirm-edit', function () {
            formuleEdit($('#formule-id').val());
            $("#edit-modal").modal('hide');
            onLoadFunctions()
        })

        /** DELETE OPERATIONS ==================================
        /** Delete button handler */
        sgtTableElement.on('click', '.delete-btn', function () {
            var formuleFirestoreRef = database.collection("Formule").doc($(this).data('id'));
            console.log($(this).data('id'));
            console.log('this on delete-btn is: ' + $(this).data('id'));
            var rowId = $(this).data('id');
            $('#' + rowId).remove();
            formuleFirestoreRef.delete().then(function() {
                console.log("Formule successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        });
    });


    function onLoadFunctions() {
        const table = document.getElementById("contenuFormules");
        table.innerHTML = "";
        database.collection("Formule").get().then((querySnapshot) => {const table = document.getElementById("contenuFormules");
            querySnapshot.forEach((doc) => {
                let row = table.insertRow();
                row.id = doc.id;
                let nomPlat = row.insertCell(0);
                nomPlat.innerHTML = doc.data().nomPlat;
                let nomEntree = row.insertCell(1);
                nomEntree.innerHTML = doc.data().nomDessert;
                let prixFormule = row.insertCell(2);
                prixFormule.innerHTML = doc.data().prixFormule;
                let prixCarte = row.insertCell(3);
                prixCarte.innerHTML = doc.data().prixCarte;
                let dispo = row.insertCell(4);
                let Dispotemp = doc.data().dispo;
                if(Dispotemp){
                    dispo.innerHTML = "Oui"
                }else{
                    dispo.innerHTML = "Non"
                }
                let WES = row.insertCell(5);
                let WEStemp = doc.data().dispoWes;
                if(WEStemp){
                    WES.innerHTML = "Non"
                }else{
                    WES.innerHTML = "Oui"
                }
                let vegan = row.insertCell(6);
                let vegantemp = doc.data().vegan;
                if(WEStemp){
                    vegan.innerHTML = "Non"
                }else{
                    vegan.innerHTML = "Oui"
                }
                let glutenfree = row.insertCell(7);
                let glutenfreetemp = doc.data().glutenFree;
                if(WEStemp){
                    glutenfree.innerHTML = "Non"
                }else{
                    glutenfree.innerHTML = "Oui"
                }
                let boutons = row.insertCell(8);
                boutons.innerHTML = "<button class=\"btn btn-info edit-btn\" data-id=" + doc.id + "><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>" +
                    "                <button class=\"btn btn-danger delete-btn\" data-id=" + doc.id + "><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>"
                console.log(`${doc.id} => ${doc.data().nomPlat}`);
            });
        });

    }
    window.onload = onLoadFunctions;




