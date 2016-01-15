import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('friend');
	},
	resetController(controller, isExiting) {
		if (isExiting) {
			var model = controller.get('model');
			if (model.get('isNew')) {
				// We call DS#destroyRecord() which removes it from the store
				model.destroyRecord();
			}
		}
	}
});
