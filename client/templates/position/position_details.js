Template.positionDetails.helpers({
  legs: function() {
    return Legs.find({positionId: this._id});
  }
});
