import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        filterByNames(value = '') {
            if (value === '') {
                return this.get('store').findAll('employee');
            } else {
                return this.get('store').query('employee', { name: value });
            }
        }
    }
});
