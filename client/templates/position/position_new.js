Template.positionNew.helpers({
  currentDate: function() {
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if(month < 10)
        month = "0" + month;
    if(day < 10)
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    return today;
  }
});

Template.positionNew.events({
  "submit form": function(e, template){
    e.preventDefault();

    var position = {
      stock: $(e.target).find('[name=stock]').val(),
      entryPrice: $(e.target).find('[name=entryPrice]').val(),
      entryDate: $(e.target).find('[name=entryDate]').val()
    };

    Meteor.call("positionInsert", position, function(error, result){
      if(error){
        console.log("error", error);
      }
      else {
        Router.go('positionsList');
      }
    });
  }
});
