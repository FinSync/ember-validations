Ember.Validations.patterns = Ember.Namespace.create({
  numericality: /^(-|\+)?(?:(?:(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?)|(?:\.\d+))$/,
  blank: /^\s*$/
});
