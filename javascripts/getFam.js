define(function() {
  return {
    queryFamily: function(callbackfunction) {
      $.ajax({ url: "https://https://shelley-family-quiz.firebaseio/family.json" }
        ).done(function(data) {
        console.log("This is my Family list", data);
        callbackfunction.call(this, data);
      });
    }
  };
});