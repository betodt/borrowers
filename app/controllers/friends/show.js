import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		back: function() {
			this.transitionToRoute('friends');

			return false;
		}
	}
});
