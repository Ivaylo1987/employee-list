import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('employees', function() {
    this.route('show', { path: '/:employee_id' });
  });
});

export default Router;
