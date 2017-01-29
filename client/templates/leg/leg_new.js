Template.legNew.events({
  "submit form": function(e, template){
    e.preventDefault();

    var positionId = this._id;

    var leg = {
      positionId: positionId,
      optionType: $(e.target).find('[name=optionType]').val(),
      optionDirection: $(e.target).find('[name=optionDirection]').val(),
      entryPrice: $(e.target).find('[name=entryPrice]').val(),
      entryDate: $(e.target).find('[name=entryDate]').val()
    };

    Meteor.call("legInsert", leg, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
         Router.go('positionDetails', {_id: positionId});
      }
    });
  }
});
