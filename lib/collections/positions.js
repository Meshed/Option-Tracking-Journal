Positions = new Mongo.Collection('positions');

Meteor.methods({
  positionInsert:function(positionAttributes){
     var user = Meteor.user();
     var position = _.extend(positionAttributes, {
       userId: user._id,
       created: new Date()
     });

     var positionId = Positions.insert(position);

     return {
       _id: positionId
     };
  }
});
