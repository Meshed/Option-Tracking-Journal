Legs = new Mongo.Collection("legs");

Meteor.methods({
  legInsert:function(legAttributes){
     var leg = _.extend(legAttributes, {
       created: new Date()
     });

     var legId = Legs.insert(leg);

     return {
       _id: legId
     };
  } 
});
