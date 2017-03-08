import Ember from 'ember';

export default Ember.Component.extend({
    searchInput: '',
    asyncOp: {},

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
                let prom = filter(inputValue).then(items => this.set('result', items));
                this.set('asyncOp', prom);
            }
            else {
                Promise.all([this.get('asyncOp')]).then(value => {
                    this.set('result', Ember.A([]));
                });
            }
        }
    }
});
