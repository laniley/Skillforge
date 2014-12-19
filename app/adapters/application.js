import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:80/SF_backend'
});
