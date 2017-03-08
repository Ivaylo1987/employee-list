import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        filterByNames(value) {
            if (value) {
                return this.get('store').query('employee', { name: value });
            }
            else{
                return Promise.resolve(Ember.A([]));
            }
        }
    }
});
