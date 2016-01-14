import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goToFriends: function() {
			this.transitionToRoute('friends');

			return false;
		}
	}
});
