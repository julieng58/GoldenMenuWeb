var database = firebase.firestore();
var availableTagsVin = [];
var availableTagsVigneron = [];
var availableTagsAOC = [
    "01.01-Alsace grand cru",
    "01.02-Alsace",
    "01.03-Crémant d'Alsace",
    "02.01-Floc de Gascone",
    "03.01-Beaujolais",
    "03.02-Brouilly",
    "03.03-Chiroubles",
    "03.04-Fleurie",
    "03.05-Morgon",
    "03.06-Régnié",
    "03.07-Beaujolais Villages",
    "03.08-Chénas",
    "03.09-Côte de Brouilly",
    "03.10-Juliénas",
    "03.11-Moulin-à-Vent",
    "03.12-Saint-Amour",
    "04.01-Côtes de Bordeaux",
    "04.02-Blaye",
    "04.03-Bordeaux supérieur",
    "04.04-Canon Fronsac",
    "04.05-Côtes de Blaye",
    "04.06-Côtes de Bourg, Bourg et Bourgeais",
    "04.07-Entre-deux-Mers",
    "04.08-Graves",
    "04.09-Graves supérieures",
    "04.10-Lalande-de-Pomerol",
    "04.11-Loupiac",
    "04.12-Margaux",
    "04.13-Montagne-Saint-Emilion",
    "04.14-Neac",
    "04.15-Pessac-Léognan",
    "04.16-Premières Côtes de Bordeaux",
    "04.17-Saint-Emilion",
    "04.18-Saint-Estèphe",
    "04.19-Saint-Julien",
    "04.20-Sainte-Foy-Bordeaux",
    "04.21-Barsac",
    "04.22-Bordeaux",
    "04.23-Cadillac",
    "04.24-Cérons",
    "04.25-Côtes de Bordeaux-Saint-Macaire",
    "04.26-Crémant de Bordeaux",
    "04.27-Fronsac",
    "04.28-Graves de Vayres",
    "04.29-Haut-Médoc",
    "04.30-Listrac-Médoc",
    "04.31-Lussac-Saint-Emilion",
    "04.32-Médoc",
    "04.33-Moulis",
    "04.34-Pauillac",
    "04.35-Pomerol",
    "04.36-Puisseguin-Saint-Emilion",
    "04.37-Saint-Emilion grand cru",
    "04.38-Saint-Georges-Saint-Emilion",
    "04.39-Sainte-Croix-du-Mont",
    "04.40-Sauternes",
    "05.01-Aloxe-Corton",
    "05.02-Auxey-Duresses",
    "05.03-Bâtard-Montrachet",
    "05.04-Beaune",
    "05.05-Bienvenues-Bâtard-Montrachet",
    "05.06-Blagny",
    "05.07-Bonnes-Mares",
    "05.08-Bourgogne",
    "05.09-Bourgogne aligoté",
    "05.10-Bourgogne mousseux",
    "05.11-Bourgogne Passe-tout-grains",
    "05.12-Bouzeron",
    "05.13-Chablis",
    "05.14-Chablis Grand Cru",
    "05.15-Chambertin",
    "05.16-Chambertin-Clos de Bèze",
    "05.17-Chambolle-Musigny",
    "05.18-Chapelle-Chambertin",
    "05.19-Charlemagne",
    "05.20-Charmes-Chambertin",
    "05.21-Chassagne-Montrachet",
    "05.22-Chevalier-Montrachet",
    "05.23-Chorey-lès-Beaune",
    "05.24-Clos de la Roche",
    "05.25-Clos de Tart",
    "05.26-Clos de Vougeot",
    "05.27-Clos des Lambrays",
    "05.28-Clos Saint-Denis",
    "05.29-Corton",
    "05.30-Corton-Charlemagne",
    "05.31-Côte de Beaune",
    "05.32-Côte de Beaune-Villages",
    "05.33-Côte de Nuits-Villages",
    "05.34-Coteaux Bourguignons",
    "05.35-Crémant de Bourgogne",
    "05.36-Criots-Bâtard-Montrachet",
    "05.37-Echezeaux",
    "05.38-Fixin",
    "05.39-Gevrey-Chambertin",
    "05.40-Givry",
    "05.41-Grands-Echezeaux",
    "05.42-Griotte-Chambertin",
    "05.43-Irancy",
    "05.44-La Grande Rue",
    "05.45-La Romanée",
    "05.46-La Tâche",
    "05.47-Ladoix",
    "05.48-Latricières-Chambertin",
    "05.49-Mâcon",
    "05.50-Maranges",
    "05.51-Marsannay",
    "05.52-Mazis-Chambertin",
    "05.53-Mazoyères-Chambertin",
    "05.54-Mercurey",
    "05.55-Meursault",
    "05.56-Montagny",
    "05.57-Monthélie",
    "05.58-Montrachet",
    "05.59-Morey-Saint-Denis",
    "05.60-Musigny",
    "05.61-Nuits-Saint-Georges",
    "05.62-Pernand-Vergelesses",
    "05.63-Petit Chablis",
    "05.64-Pommard",
    "05.65-Pouilly-Fuissé",
    "05.66-Pouilly-Loché",
    "05.67-Pouilly-Vinzelles",
    "05.68-Puligny-Montrachet",
    "05.69-Richebourg",
    "05.70-Romanée-Conti",
    "05.71-Romanée-Saint-Vivant",
    "05.72-Ruchottes-Chambertin",
    "05.73-Rully",
    "05.74-Saint-Aubin",
    "05.75-Saint-Bris",
    "05.76-Saint-Romain",
    "05.77-Saint-Véran",
    "05.78-Santenay",
    "05.79-Savigny-lès-Beaune",
    "05.80-Viré-Clessé",
    "05.81-Volnay",
    "05.82-Vosne-Romanée",
    "05.83-Vougeot",
    "06.01-Champagne",
    "06.02-Coteaux champenois",
    "06.03-Rosé des Riceys",
    "07.01-Pineau des Charentes",
    "08.01-Arbois",
    "08.02-Château-Chalon",
    "08.03-Côtes du Jura",
    "08.04-Crémant du Jura",
    "08.05-L'Etoile",
    "08.06-Macvin du Jura",
    "09.01-Corbières-Boutenac",
    "09.02-Banyuls",
    "09.03-Banyuls grand cru",
    "09.04-Cabardès",
    "09.05-Clairette de Bellegarde",
    "09.06-Clairette du Languedoc",
    "09.07-Collioure",
    "09.08-Corbières",
    "09.09-Costières de Nîmes",
    "09.10-Côtes du Roussillon",
    "09.11-Côtes du Roussillon Villages",
    "09.12-Crémant de Limoux",
    "09.13-Faugères",
    "09.14-Fitou",
    "09.15-Grand Roussillon",
    "09.16-Languedoc",
    "09.17-Limoux",
    "09.18-Malepère",
    "09.19-Maury",
    "09.20-Minervois",
    "09.21-Minervois-La Livinière",
    "09.22-Muscat de Frontignan",
    "09.23-Muscat de Lunel",
    "09.24-Muscat de Mireval",
    "09.25-Muscat de Rivesaltes",
    "09.26-Muscat de Saint-Jean-de-Minervois",
    "09.27-Rivesaltes",
    "09.28-Saint-Chinian",
    "10.01-Anjou",
    "10.02-Anjou Villages",
    "10.03-Anjou Villages Brissac",
    "10.04-Anjou-Coteaux de la Loire",
    "10.05-Bonnezeaux",
    "10.06-Bourgueil",
    "10.07-Cabernet d'Anjou",
    "10.08-Cabernet de Saumur",
    "10.09-Châteaumeillant",
    "10.10-Cheverny",
    "10.11-Chinon",
    "10.12-Côte roannaise",
    "10.13-Coteaux d'Ancenis",
    "10.14-Coteaux de l'Aubance",
    "10.15-Coteaux de Saumur",
    "10.16-Coteaux du Giennois",
    "10.17-Coteaux du Layon",
    "10.18-Coteaux du Loir",
    "10.19-Coteaux du Vendômois",
    "10.20-Côtes d'Auvergne",
    "10.21-Côtes du Forez",
    "10.22-Cour-Cheverny",
    "10.23-Crémant de Loire",
    "10.24-Fiefs Vendéens",
    "10.25-Gros Plant du Pays Nantais",
    "10.26-Haut-Poitou",
    "10.27-Jasnières",
    "10.28-Menetou-Salon",
    "10.29-Montlouis-sur-Loire",
    "10.30-Muscadet",
    "10.31-Muscadet Coteaux de la Loire",
    "10.32-Muscadet Côtes de Grandlieu",
    "10.33-Muscadet Sèvre et Maine",
    "10.34-Orléans",
    "10.35-Orléans-Cléry",
    "10.36-Pouilly-Fumé",
    "10.37-Pouilly-sur-Loire",
    "10.38-Quarts de Chaume",
    "10.39-Quincy",
    "10.40-Reuilly",
    "10.41-Rosé d'Anjou",
    "10.42-Rosé de Loire",
    "10.43-Saint-Nicolas-de-Bourgueil",
    "10.44-Saint-Pourçain",
    "10.45-Sancerre",
    "10.46-Saumur",
    "10.47-Saumur-Champigny",
    "10.48-Savennières",
    "10.49-Touraine",
    "10.50-Touraine Noble Joué",
    "10.51-Valençay",
    "10.52-Vouvray",
    "11.01-Côtes de Toul",
    "11.02-Moselle",
    "12.01-Ajaccio",
    "12.02-Bandol",
    "12.03-Bellet",
    "12.04-Cassis",
    "12.05-Coteaux d'Aix-en-Provence",
    "12.06-Coteaux varois en Provence",
    "12.07-Côtes de Provence",
    "12.08-Les Baux de Provence",
    "12.09-Muscat du Cap Corse",
    "12.10-Palette",
    "12.11-Patrimonio",
    "12.12-Pierrevert",
    "12.13-Vin de Corse",
    "13.01-Beaumes de Venise",
    "13.02-Grignan-les-Adhémar",
    "13.03-Vinsobres",
    "13.04-Château-Grillet",
    "13.05-Châteauneuf-du-Pape",
    "13.06-Châtillon-en-Diois",
    "13.07-Clairette de Die",
    "13.08-Condrieu",
    "13.09-Cornas",
    "13.10-Côte Rôtie",
    "13.11-Coteaux de Die",
    "13.12-Coteaux du Lyonnais",
    "13.13-Côtes du Rhône",
    "13.14-Côtes du Rhône Villages",
    "13.15-Côtes du Vivarais",
    "13.16-Crémant de Die",
    "13.17-Crozes-Hermitage",
    "13.18-Gigondas",
    "13.19-Hermitage",
    "13.20-Lirac",
    "13.21-Luberon",
    "13.22-Muscat de Beaumes-de-Venise",
    "13.23-Rasteau",
    "13.24-Saint-Joseph",
    "13.25-Saint-Péray",
    "13.26-Tavel",
    "13.27-Vacqueyras",
    "13.28-Ventoux",
    "14.01-Bugey",
    "14.02-Roussette de Savoie",
    "14.03-Roussette du Bugey",
    "14.04-Seyssel",
    "14.05-Vin de Savoie",
    "15.01-Coteaux du Quercy",
    "15.02-Béarn",
    "15.03-Bergerac",
    "15.04Brulhois",
    "15.05-Buzet",
    "15.06-Cahors",
    "15.07-Côtes de Bergerac",
    "15.08-Côtes de Duras",
    "15.09-Côtes de Millau",
    "15.10-Côtes de Montravel",
    "15.11-Côtes du Marmandais",
    "15.12-Entraygues - Le Fel",
    "15.13-Estaing",
    "15.14-Fronton",
    "15.15-Gaillac",
    "15.16-Gaillac premières côtes",
    "15.17-Haut-Montravel",
    "15.18-Irouléguy",
    "15.19-Jurançon",
    "15.20-Madiran",
    "15.21-Marcillac",
    "15.22-Monbazillac",
    "15.23-Montravel",
    "15.24-Pacherenc du Vic-Bilh",
    "15.25-Pécharmant",
    "15.26-Rosette",
    "15.27-Saint-Mont",
    "15.28-Saint-Sardos",
    "15.29-Saussignac",
    "15.30-Tursan"];
var availableTagsIGP = [
    "02.01-Comté Tolosan",
    "02.02-Landes",
    "03.01-Comtés Rhodaniens",
    "03.02-Saône-et-Loire",
    "04.01-Atlantique",
    "04.02-Périgord",
    "05.01-Coteaux de l'Auxois",
    "05.02-Coteaux de Tannay",
    "05.03-Sainte-Marie-la-Blanche",
    "05.04-Saône-et-Loire",
    "05.05-Yonne",
    "06.01-Coteaux de Coiffy",
    "06.02-Haute-Marne",
    "07.01-Atlantique",
    "07.02-Charentais",
    "08.01-Franche-Comté",
    "09.01-Ariège",
    "09.02-Aude",
    "09.03-Cévennes",
    "09.04-Cité de Carcassonne",
    "09.05-Côte Vermeille",
    "09.06-Coteaux d'Ensérune",
    "09.07-Coteaux de Narbonne",
    "09.08-Coteaux de Peyriac",
    "09.09-Coteaux du Libron",
    "09.10-Coteaux du Pont du Gard",
    "09.11-Côtes Catalanes",
    "09.12-Côtes de Thau",
    "09.13-Côtes de Thongue",
    "09.14-Côtes du Brian",
    "09.15-Duché d'Uzès",
    "09.16-Gard",
    "09.17-Haute Vallée de l'Aude",
    "09.18-Haute Vallée de l'Orb",
    "09.19-Le Pays Cathare",
    "09.20-Pays d'Hérault",
    "09.21-Pays d'Oc",
    "09.22-Sable de Camargue",
    "09.23-Saint-Guilhem-le-Désert",
    "09.24-Vallée du Paradis",
    "09.25-Vallée du Torgan",
    "09.26-Vicomté d'Aumelas",
    "10.01-Calvados",
    "10.02-Comtés Rhodaniens",
    "10.03-Coteaux du Cher et de l'Arnon",
    "10.04-Côtes de la Charité",
    "10.05-Haute-Vienne",
    "10.06-Puy-de-Dôme",
    "10.07-Urfé",
    "10.08-Val de Loire",
    "11.01-Côtes de Meuse",
    "12.01-Alpes-de-Haute-Provence",
    "12.02-Alpes-Maritimes",
    "12.03-Alpilles",
    "12.04-Bouches-du-Rhone",
    "12.05-Hautes-Alpes",
    "12.06-Ile de Beauté",
    "12.07-Maures",
    "12.08-Méditerranée",
    "12.09-Mont Caume",
    "12.10-Var",
    "13.01-Ardèche",
    "13.02-Bouches-du-Rhone",
    "13.03-Cévennes",
    "13.04-Collines Rhodaniennes",
    "13.05-Comtés Rhodaniens",
    "13.06-Coteaux des Baronnies",
    "13.07-Coteaux du Pont du Gard",
    "13.08-Drôme",
    "13.09-Duché d'Uzès",
    "13.10-Gard",
    "13.11-Méditerranée",
    "13.12-Sable de Camargue",
    "13.13-Vaucluse",
    "14.01-Comtés Rhodaniens",
    "14.02-Coteaux de l'Ain",
    "14.03-Isère",
    "14.04-Vin des Allobroges",
    "15.01-Agenais",
    "15.02-Ariège",
    "15.03-Atlantique",
    "15.04-Aveyron",
    "15.05-Comté Tolosan",
    "15.06-Coteaux de Glanes",
    "15.07-Côtes de Gascogne",
    "15.08-Côtes du Lot",
    "15.09-Côtes du Tarn",
    "15.10-Gers",
    "15.11-Lavilledieu",
    "15.12-Périgord",
    "15.13-Thézac-Perricard",
    "15.14-Vins de la Corrèze"];



database.collection("Vin")
    .onSnapshot(function(querySnapshot) {
        availableTagsVigneron = [];
        querySnapshot.forEach(function(doc) {
            if(doc.data().vigneron !== "") {
                var nom = doc.data().vigneron;
                if (!availableTagsVigneron.includes(nom)) {
                    availableTagsVigneron.push(nom);
                }
            }

        });
        $("#nomVigneron").autocomplete({
            source: availableTagsVigneron
        });
    });


$('#dimensionMultiple').click(function() {
    $("#textNewPrixCarte").addClass('hidden');
    $("#textNewPrixVerre").addClass('hidden');
    $("#textNewPrixCarafe").addClass('hidden');
    $("#textNewPrixDemi").addClass('hidden');
    $("#textNewPrixMagnum").addClass('hidden');
    $('option:selected', $(this)).each(function() {
        if($(this).val()==='75'){
            $("#textNewPrixCarte").removeClass('hidden');
        }
        if($(this).val()==='150'){
            $("#textNewPrixMagnum").removeClass('hidden');
        }
        if($(this).val()==='37'){
            $("#textNewPrixDemi").removeClass('hidden');
        }
        if($(this).val()==='1'){
            $("#textNewPrixVerre").removeClass('hidden');
        }
        if($(this).val()==='45'){
            $("#textNewPrixCarafe").removeClass('hidden');
        }

    });
});

$(document).ready(function() {
    var submitBtn = $('#confirm-add');
    var submitWipeBtn = $('#confirm-and-wipe-add');
    $("#nomIGP").addClass('hidden');




    $("#nomVin").autocomplete({
        source: availableTagsVin
    });

    $("#nomVigneron").autocomplete({
        source: availableTagsVigneron
    });

    $("#nomIGP").autocomplete({
        source: availableTagsIGP
    });
    $("#nomAOC").autocomplete({
        source: availableTagsAOC
    });

    $('input[type=radio][name="appellationRadios"]').change(function() {
            if($(this).val()==="1"){
                $("#nomAOC").removeClass('hidden');
                $("#nomIGP").addClass('hidden');
            }
            else if($(this).val()==="2"){
                $("#nomAOC").addClass('hidden');
                $("#nomIGP").removeClass('hidden');
            }
            else{
                $("#nomAOC").addClass('hidden');
                $("#nomIGP").addClass('hidden');
            }
    });


    submitBtn.click(function () {

        var appellationValue = JSON.parse($("input[name='appellationRadios']:checked").val());
        var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
        var typeVin = $('#typeVin').val();
        var dimension = $('#dimensionMultiple').val();
        var millesime = $('#millesimeVin').val();
        var vigneron = $('#nomVigneron').val();
        var nom = $('#nomVin').val();
        var region = 0;
        var appelationNom = 0;
        var appellationLabel ="";
        //var prix = $('#textNewPrixCarte').val();
        var regex = new RegExp('^[0-9._-]{6}[a-zA-Z_-\s]+', 'g');
        var prix150 = '0';
        var prix75='0';
        var prix37 ='0';
        var prix1='0';
        var prix45 ='0';

        $('option:selected', $('#dimensionMultiple')).each(function() {
            if($(this).val()==='75'){
                prix75 = $('#textNewPrixCarte').val();
            }
            if($(this).val()==='150'){
                prix150 = $('#textNewPrixMagnum').val();
            }
            if($(this).val()==='37'){
                prix37 = $('#textNewPrixDemi').val();
            }
            if($(this).val()==='1'){
                prix1 = $('#textNewPrixVerre').val();
            }
            if($(this).val()==='45'){
                prix45 = $('#textNewPrixCarafe').val();
            }
        });



        
        if(appellationValue === 1 && regex.test($('#nomAOC').val())){
            var app = $('#nomAOC').val();
            appellationLabel = app.slice(6, app.length);;
            region = app.split('-')[0].split('.')[0];
            appelationNom = app.split('-')[0].split('.')[1];
        }else if(appellationValue === 2 && regex.test($('#nomIGP').val())){
            var app = $('#nomIGP').val();
            appellationLabel = app.split('-')[1];
            region = app.split('-')[0].split('.')[0];
            appelationNom = app.split('-')[0].split('.')[1];
        }


        var docDataNew = {
            nom: nom,
            millesime: parseInt(millesime),
            dispo: booleanDispo,
            vigneron: vigneron,
            type: parseInt(typeVin),
            contenant : dimension,
            appellation: parseInt(appellationValue),
            region: parseInt(region),
            appellationNom: parseInt(appelationNom),
            appellationLabel: appellationLabel,
            prix75: parseFloat(prix75),
            prix150:parseFloat(prix150),
            prix1:parseFloat(prix1),
            prix37:parseFloat(prix37),
            prix45:parseFloat(prix45)

        };

        var newEntree = database.collection("Vin").doc();
        newEntree.set(docDataNew);
        //onLoadFunctions()
        //clearInputs();
    });


    submitWipeBtn.click(function () {

        var appellationValue = JSON.parse($("input[name='appellationRadios']:checked").val());
        var booleanDispo = JSON.parse($("input[name='radioNewDispo']:checked").val());
        var typeVin = $('#typeVin').val();
        var dimension = $('#dimensionMultiple').val();
        var millesime = $('#millesimeVin').val();
        var vigneron = $('#nomVigneron').val();
        var nom = $('#nomVin').val();
        var region = 0;
        var appelationNom = 0;


        var prix150 = '0';
        var prix75='0';
        var prix37 ='0';
        var prix1='0';
        var prix45 ='0';

        $('option:selected', $('#dimensionMultiple')).each(function() {
            if($(this).val()==='75'){
                prix75 = $('#textNewPrixCarte').val();
            }
            if($(this).val()==='150'){
                prix150 = $('#textNewPrixMagnum').val();
            }
            if($(this).val()==='37'){
                prix37 = $('#textNewPrixDemi').val();
            }
            if($(this).val()==='1'){
                prix1 = $('#textNewPrixVerre').val();
            }
            if($(this).val()==='45'){
                prix45 = $('#textNewPrixCarafe').val();
            }
        });



        var regex = new RegExp('^[0-9._-]{6}[a-zA-Z_-\s]+', 'g');

        if(appellationValue === 1 && regex.test($('#nomAOC').val())){
            var app = $('#nomAOC').val();
            region = app.split('-')[0].split('.')[0];
            appelationNom = app.split('-')[0].split('.')[1];
        }else if(appellationValue === 2 && regex.test($('#nomIGP').val())){
            var app = $('#nomIGP').val();
            region = app.split('-')[0].split('.')[0];
            appelationNom = app.split('-')[0].split('.')[1];
        }


        var docDataNew = {
            nom: nom,
            millesime: parseInt(millesime),
            dispo: booleanDispo,
            vigneron: vigneron,
            type: typeVin,
            contenant : dimension,
            appellation: appellationValue,
            region: region,
            appellationNom: appelationNom,
            prix75: parseFloat(prix75),
            prix150:parseFloat(prix150),
            prix1:parseFloat(prix1),
            prix37:parseFloat(prix37),
            prix45:parseFloat(prix45)

        };

        var newEntree = database.collection("Vin").doc();
        newEntree.set(docDataNew);
        //onLoadFunctions()
        clearInputs();
    });


    function clearInputs() {
        $('#nomVin').val('');
        $('#nomIGP').val('');
        $('#nomAOC').val('');
        $('#nomVigneron').val('');
        $('#millesimeVin').val('');
        $('#typeVin').val(1);
        $('#textPrixCarte').val('');

    }
})