import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user: DS.belongsTo('user'),
  race: DS.attr('string'),
  char_class: DS.attr('string'),
  gender: DS.attr('string'),

  // RACE-BINDED ATTRIBUTES
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
  }.property('race'),

  // GENDER-BINDED ATTRIBUTES
  isMale: function() {
    if(this.get('gender') === 'male')
    {
      return true;
    }
    else
    {
      return false;
    }
  }.property('gender'),

  isFemale: function() {
    if(this.get('gender') === 'female')
    {
      return true;
    }
    else
    {
      return false;
    }
  }.property('gender'),

  newFemaleCharURL: function() {
    return 'assets/images/character/new/new_female_' + this.get('race') + '_' + this.get('char_class') + '.png';
  }.property('race','char_class'),

  newMaleCharURL: function() {
    return "assets/images/character/new/new_male_" + this.get('race') + "_" + this.get('char_class') + ".png";
  }.property('race','char_class')

});
