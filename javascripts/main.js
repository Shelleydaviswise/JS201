// Pull in all the various javascript libraries
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'bootstrap-rating': '../bower_components/bootstrap-rating/bootstrap-rating.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ['jquery', 'firebase','hbs', 'bootstrap', 'addFam', 'getFam', 'delFam'], 
  function($, _firebase, Handlebars, bootstrap, add, get, del) {

    var myFirebaseRef = new Firebase("https://shelley-family-quiz.firebaseio.com/");
    myFirebaseRef.child("family").on("value", function(snapshot) {
      var family = snapshot.val();

      require(
        ['hbs!../templates/familymbrs'],
        function(familyTemplate){
          $("#listFamily").html(familyTemplate(family));
        }
      );     
    });
    
    $("#postFamily").click(function(){
      console.log(add);

      var newFamily = {
        name:   $("#name-input").val(),
        age:    $("#age-input").val(),
        gender: $("#gender-input").val(),
        skills: $("#skills-input").val()
      };


      console.log(newFamily);

      add.queryFamily(newFamily);

    });
  }
);    















