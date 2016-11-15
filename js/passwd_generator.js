/*
 * Passwd Generator Plugin v1.0
 *
 * Created by Sébastien Bloesch
 * Released under the MIT License (Feel free to copy, modify or redistribute this plugin.)
 *
 */

var PasswdGenerator = {

  defaults: {
    passwdLength: 8,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    pronounceable: false
  },

  chars: {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%&*()+?",
    vowels: "aeiouy".split(''),
    consonants: "bcdfghjklmnpqrstvwxz".split('')
  },

  // Initialize the password
  init: function(args){
    if (typeof(args) != 'object' || args === 'undefined')
      this.settings = this.defaults
    else
      this.settings = $.extend({}, this.defaults, args);
  },

  // Generate the password
  generate: function(){
    var text = ''

    if (this.settings.uppercase)
      text += this.chars.uppercase
    if (this.settings.lowercase)
      text += this.chars.lowercase
    if (this.settings.numbers)
      text += this.chars.numbers
    if (this.settings.symbols)
      text += this.chars.symbols

    // Make an array
    text = text.split('')

    // Create the password
    var pwd = ''
    var flag = true   // Alternate vowels and consonants

    for (var i = 0; i < this.settings.passwdLength; i++) {

      // Pick a random char
      // Generate a pronounceable password ...
      if (this.settings.pronounceable){
        if (flag){
          var randomCase = Math.floor((Math.random() * (this.chars.vowels.length - 1)) + 0)
          pwd += this.chars.vowels[randomCase]
          flag = false
        } else {
          var randomCase = Math.floor((Math.random() * (this.chars.consonants.length - 1)) + 0)
          pwd += this.chars.consonants[randomCase]
          flag = true
        }
      } else {
        // Generate a password with params in this.settings
        var randomCase = Math.floor((Math.random() * (text.length - 1)) + 0)
        pwd += text[randomCase]
      }
    }

    return pwd
  }

};
