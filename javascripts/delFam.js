
define(function() {
  return {
    fmlyMbr:function(database, delBtn) {
     var key = delBtn.parent().attr("id");
  
      database.child('family').child(key).remove();
       
    }
  };
});
