Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
      Meteor.subscribe('positions'),
      Meteor.subscribe('legs')
    ]
  }
});

Router.route('/', {
  name: 'positionsList'
});

Router.route("/position/new", {
  name: 'positionNew'
});

Router.route('/position/:_id/details', {
  name: 'positionDetails',
  data: function() {
    return Positions.findOne(this.params._id);
  }
});

Router.route('/newLeg/:_id', {
  name: 'legNew',
  data: function() {
    return Positions.findOne(this.params._id);
  }
});

Router.route('/leg/:_id/details', {
  name: 'legDetails',
  data: function() {
    return Legs.findOne(this.params._id);
  }
});

Router.route('/leg/:_id/update', {
  name: 'legUpdate'
});

Router.route('/closeLeg', {name: 'legClose'});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin);
