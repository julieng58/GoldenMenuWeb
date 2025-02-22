
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

getJSON("Entree").then(dataJSON => {
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
    maxTags:3,
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

    if(obj.aLaCarte === 32){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#entrees').on('itemAdded', function(event) {
    updateAlacarte("Entree",event.item.value,true,32);
  });

  $('#entrees').on('itemRemoved', function(event) {
    updateAlacarte("Entree",event.item.value,false, 0);
  });

});

getJSON("Plat").then(dataJSON => {
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
    maxTags:3 ,
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

    if(obj.aLaCarte === 32){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#plat').on('itemAdded', function(event) {
    updateAlacarte("Plat",event.item.value,true,32);
  });

  $('#plat').on('itemRemoved', function(event) {
    updateAlacarte("Plat",event.item.value,false,0);
  });

});


getJSON("Dessert").then(dataJSON => {
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

    if(obj.aLaCarte === 1){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#dessert').on('itemAdded', function(event) {
    updateAlacarte("Dessert",event.item.value,true,1);
  });

  $('#dessert').on('itemRemoved', function(event) {
    updateAlacarte("Dessert",event.item.value,false, 0);
  });

});











