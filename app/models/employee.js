import DS from 'ember-data';

export default DS.Model.extend({
    gender: DS.attr(),
    title: DS.attr(),
    firstName: DS.attr(),
    surName: DS.attr(),
    dateBirth: DS.attr(),
    age: DS.attr(),
    salary: DS.attr(),
    takeHome: DS.attr(),
    incomeTax: DS.attr(),
    nationaInsurance: DS.attr()
});
