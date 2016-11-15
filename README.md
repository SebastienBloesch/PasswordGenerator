Passwd Generator
==
This is a simple plugin that generate a password.

How to use
==
Basically, the password generator can be used as:

    var passwdPlugin = Object.create(PasswdGenerator);
    passwdPlugin.init();

    var myPassword = passwdPlugin.generate();

Options
=========
You can also pass some params (this is defaults params):

    passwdPlugin.init({
      passwdLength: 8,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      pronounceable: false
    });
