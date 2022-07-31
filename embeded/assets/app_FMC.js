
getJSON("EntreeCOVID").then(dataJSON => {
  var plats = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: dataJSON,
  });

  plats.initialize();

  console.log(dataJSON);
  /**
   * Categorizing tags
   */
  elt = $('#entrees');
  elt.tagsinput({
    tagClass: function(item) {
      switch (item.dispo) {
        case 'true'   : return 'label label-success';
        case 'false'  : return 'label label-danger label-important';
        default : return 'label label-warning';
      }
    },
    maxTags:8,
    itemValue: 'value',
    itemText: 'text',
    typeaheadjs: [
      {
        hint: true,
        highlight: true,
        minLength: 2
      },
      {
        name: 'cities',
        displayKey: 'text',
        source: plats.ttAdapter()
      }
    ]
  });

  for(var i = 0; i < dataJSON.length; i++) {
    var obj = dataJSON[i];

    if(obj.aLaCarte === 50){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#entrees').on('itemAdded', function(event) {
    updateAlacarte("EntreeCOVID",event.item.value,true,50);
  });

  $('#entrees').on('itemRemoved', function(event) {
    updateAlacarte("EntreeCOVID",event.item.value,false, 0);
  });

});

getJSON("PlatCOVID").then(dataJSON => {
  var plats = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: dataJSON,
  });
  plats.initialize();


  /**
   * Categorizing tags
   */
  elt = $('#plat');
  elt.tagsinput({
    tagClass: function(item) {
      switch (item.dispo) {
        case 'true'   : return 'label label-success';
        case 'false'  : return 'label label-danger label-important';
        default : return 'label label-success';
      }
    },
    maxTags:8 ,
    itemValue: 'value',
    itemText: 'text',
    typeaheadjs: [
      {
        hint: true,
        highlight: true,
        minLength: 2
      },
      {
        name: 'cities',
        displayKey: 'text',
        source: plats.ttAdapter()
      }
    ]
  });

  for(var i = 0; i < dataJSON.length; i++) {
    var obj = dataJSON[i];

    if(obj.aLaCarte === 50){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#plat').on('itemAdded', function(event) {
    updateAlacarte("PlatCOVID",event.item.value,true,50);
  });

  $('#plat').on('itemRemoved', function(event) {
    updateAlacarte("PlatCOVID",event.item.value,false,0);
  });

});


getJSON("DessertCOVID").then(dataJSON => {
  var plats = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: dataJSON,
  });
  plats.initialize();


  /**
   * Categorizing tags
   */
  elt = $('#dessert');
  elt.tagsinput({
    tagClass: function(item) {
      switch (item.dispo) {
        case 'true'   : return 'label label-success';
        case 'false'  : return 'label label-danger label-important';
        default : return 'label label-success';
      }
    },
    maxTags:5 ,
    itemValue: 'value',
    itemText: 'text',
    typeaheadjs: [
      {
        hint: true,
        highlight: true,
        minLength: 2
      },
      {
        name: 'cities',
        displayKey: 'text',
        source: plats.ttAdapter()
      }
    ]
  });

  for(var i = 0; i < dataJSON.length; i++) {
    var obj = dataJSON[i];

    if(obj.aLaCarte === 50){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#dessert').on('itemAdded', function(event) {
    updateAlacarte("DessertCOVID",event.item.value,true,50);
  });

  $('#dessert').on('itemRemoved', function(event) {
    updateAlacarte("DessertCOVID",event.item.value,false, 0);
  });



});

function onLoadFunctions() {
  database.collection("Tapas").get().then((querySnapshot) => {
    const pteAss = document.getElementById("prixPteAss");
    const grdAss = document.getElementById("prixGrdAss");
    const desAss = document.getElementById("prixDesAss");
    const pteFor = document.getElementById("prixForPte");
    const grdFor = document.getElementById("prixForGrd");
    const ref = document.getElementById("ref");


    querySnapshot.forEach((doc) => {
      ref.value = doc.id;
      pteAss.value = doc.data().petiteTapas;
      grdAss.value = doc.data().grandeTapas;
      desAss.value = doc.data().dessertTapas;
      pteFor.value = doc.data().formulePetiteDessert;
      grdFor.value = doc.data().formuleGrandeDessert;
          });
  });

}

function refreshPrice(){
  const ref = document.getElementById("ref");
  const pteAss = document.getElementById("prixPteAss");
  const grdAss = document.getElementById("prixGrdAss");
  const desAss = document.getElementById("prixDesAss");
  const pteFor = document.getElementById("prixForPte");
  const grdFor = document.getElementById("prixForGrd");
  database.collection("Tapas").doc(ref.value).set({
    petiteTapas: parseFloat(pteAss.value),
    grandeTapas: parseFloat(grdAss.value),
    dessertTapas: parseFloat(desAss.value),
    formulePetiteDessert: parseFloat(pteFor.value),
    formuleGrandeDessert: parseFloat(grdFor.value),
  }, { merge: true });
  onLoadFunctions();
}
window.onload = onLoadFunctions;












