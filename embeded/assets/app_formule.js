
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

getJSON("Formule").then(dataJSON => {
  var plats = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: dataJSON,
  });
  plats.initialize();


  /**
   * Categorizing tags
   */
  elt = $('.example_tagclass > > input');
  elt.tagsinput({
    tagClass: function(item) {
      switch (item.dispo) {
        case 'true'   : return 'label label-success';
        case 'false'  : return 'label label-danger label-important';
        default : return 'label label-success';
      }
    },
    maxTags:4 ,
    itemValue: 'value',
    itemText: 'text',
    // typeaheadjs: {
    //   name: 'cities',
    //   displayKey: 'text',
    //   source: cities.ttAdapter()
    // }
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

    if(obj.aLaCarte === true){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('input').on('itemAdded', function(event) {
    updateAlacarte("Formule",event.item.value,true);
  });

  $('input').on('itemRemoved', function(event) {
    updateAlacarte("Formule",event.item.value,false);
  });



});











