(function(root){
  "use strict";
  var Arp = root.Arp = (root.Arp || {});

  Arp.installController = function(arpeggiator){

    var map = {
      "one" : "1", "two" : "2", "three" : "3", "four" : "4", "five" : "5",
      "six" : "6", "seven" : "7", "eight" : "8", "nine" : "9", "zero" : "0",
      "openBracket" : "[", "closeBracket" : "]", "backSlash" : "\\", "semicolon" :";",
      "apostrophe" : "'", "comma" : ",", "period" : ".", "slash" : "/", "backTick" : "`",
      "minus" : "-", "equals" : "="
    };

    var flash = function ($key){
      $key.classList.add("active");
      window.setTimeout(function(){$key.classList.remove("active");}, 100);
    };

    var msg = document.getElementById("msgSpace");

    var keys = Arp.keyMap(arpeggiator);

    keys.forEach(function(keyParams){
      key(map[keyParams.keyName] || keyParams.keyName, function(){
        flash(document.getElementById(keyParams.keyName));
        msg.textContent= keyParams.action(keyParams.value).substr(0, 12);
      });

    });

  };
})(this);
