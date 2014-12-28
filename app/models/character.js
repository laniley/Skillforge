import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user: DS.belongsTo('user'),
  race: DS.attr('string'),
  char_class: DS.attr('string'),
  gender: DS.attr('string'),

  isHuman: function() {
    if(this.get('race') === 'human')
    {
      return true;
    }
    else
    {
      return false;
    }
  }.property('race'),

  isElf: function() {
    if(this.get('race') === 'elf')
    {
      return true;
    }
    else
    {
      return false;
    }
  }.property('race'),

  isDwarf: function() {
    if(this.get('race') === 'dwarf')
    {
      return true;
    }
    else
    {
      return false;
    }
  }.property('race'),

  isFairy: function() {
    if(this.get('race') === 'fairy')
    {
      return true;
    }
    else
    {
      return false;
    }
  }.property('race')
});
