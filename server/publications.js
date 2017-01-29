Meteor.publish('positions', function() {
  return Positions.find();
});

Meteor.publish("legs", function(){
  return Legs.find();
});
