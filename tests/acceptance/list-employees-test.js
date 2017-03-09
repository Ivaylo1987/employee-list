import { test } from 'qunit';
import moduleForAcceptance from 'employee-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list employees');

test('should redirect to employees route', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/employees', 'should redirect automatically');
  });
});


test('should link to general information.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should filter the list of employees by name.', function (assert) {
  visit('/');
  fillIn('.list-filter', 'tom');
  keyEvent('.list-filter', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 2, 'should show 2 listing');
  });
});

test('should filter the list of employees by name.', function (assert) {
  visit('/');
  fillIn('.list-filter', 'gor');
  keyEvent('.list-filter', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 1, 'should show 2 listing');
  });
});

test('should show details for a specific rental', function (assert) {
  visit('/employees/5');
  andThen(function () {
    assert.equal(currentURL(), '/employees/5', 'should navigate to show route');
    assert.equal(find('h2.title').text(), "Ms. Holly Gregory", 'should detials for Gregory');
  });
});