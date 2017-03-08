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
            let isOnlyWhiteSpace = (str) => {
                return !str.trim();
            };

            if (!isOnlyWhiteSpace(inputValue)) {
                filter(inputValue).then(items => this.set('result', items));
            }
            else {
                this.set('result', Ember.A([]));
            }
        }
    }
});
