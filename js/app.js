// Shorter way for $(document).ready()
$(function(){

  var passwdPlugin = Object.create(PasswdGenerator);
  passwdPlugin.init(); // you can pass params

  // Use it !
  var myPassword = passwdPlugin.generate();
  console.log(myPassword);

});
