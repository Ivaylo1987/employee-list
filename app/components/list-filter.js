import Ember from 'ember';

export default Ember.Component.extend({
    searchInput: '',
    init() {
        this._super(...arguments);

        let filter = this.get('filter');
        filter('').then(items => this.set('result', items));
    },
    actions: {
        runFilter() {
            let filter = this.get('filter');
            let inputValue = this.get('searchInput');
            filter(inputValue).then(items => this.set('result', items));
        }
    }
});
