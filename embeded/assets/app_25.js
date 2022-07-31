
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

    if(obj.aLaCarte === 25){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#entrees').on('itemAdded', function(event) {
    updateAlacarte("Entree",event.item.value,true,25);
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

    if(obj.aLaCarte === 25){
      elt.tagsinput('add',{ "value":  obj.value, "text": obj.text   , "dispo": obj.dispo })
    }
  }

// HACK: overrule hardcoded display inline-block of typeahead.js
  $(".twitter-typeahead").css('display', 'inline');

  $('#plat').on('itemAdded', function(event) {
    updateAlacarte("Plat",event.item.value,true,25);
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











