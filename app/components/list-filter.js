import Ember from 'ember';

export default Ember.Component.extend({
    searchInput: '',
    init() {
        this._super(...arguments);
        this.set('result', []);
    },
    actions: {
        runFilter() {
            let filter = this.get('filter');
            let inputValue = this.get('searchInput');
            if (!inputValue) {
                this.set('result', []);
            }
            else {
                filter(inputValue).then(items => this.set('result', items));
            }
        }
    }
});
