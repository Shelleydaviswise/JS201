
define(function() {
  return {
    queryFamily: function(newFamily) {
      console.log("newFamily in Object notation", newFamily);
      $.ajax({
          url: "https://shelley-family-quiz.firebaseio.com/family.json",
          method: "POST",
          data: JSON.stringify(newFamily)
          })
          .done(function(data) {
            console.log("stringified data", data);
          
          });   
    }
  };
});
