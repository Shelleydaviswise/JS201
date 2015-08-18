
define(['jquery', 'firebase'], function($, _firebase) {
  return {
    queryFamily: function(callbackfunction) {
      $.ajax({
          url: "https://https://shelley-family-quiz.firebaseio/family.json",
          method: "POST",
          data: JSON.stringify(newFamily)
          }).done(function(addedFamily) {
          console.log("Your added family member is", addedFamily);
          });   
    }
  };
});