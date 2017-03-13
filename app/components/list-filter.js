import Ember from 'ember';
let asyncOp = {};

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
                let prom = filter(inputValue).then(items => this.set('result', items));
                asyncOp = prom;
            }
            else {
                Promise.all([asyncOp]).then(() => {
                    this.set('result', []);
                });
            }
        }
    }
});
