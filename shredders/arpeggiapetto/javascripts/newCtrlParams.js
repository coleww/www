(function(root){
  "use strict";

  var Arp = root.Arp = (root.Arp || {});
  Arp.keyMap = function(arp){
    return [

      // {keyName: "backTick", value: "",  msgTarget: 0, action: function(){return "ADD ME";}},
      // {keyName: "space", value: "",  msgTarget: 0, action: function(){return "ADD ME";}},


      {keyName: "down", value: -5,  msgTarget: 0, action: function(val){return arp.updateBPM(val);}},
      {keyName: "up", value: 5,  msgTarget: 0, action: function(val){return arp.updateBPM(val);}},
      {keyName: "left", value: -0.05,  msgTarget: 0, action: function(val){return arp.updateReverb(val);}},
      {keyName: "right", value: 0.05,  msgTarget: 0, action: function(val){return arp.updateReverb(val);}},


      // {keyName: "equals", value: 0.05,  msgTarget: 0, action: function(val){return arp.updateMasterProb(val);}},
      // {keyName: "openBracket", value: -0.05,  msgTarget: 0, action: function(val){return arp.updateNoteProb(val);}},
      // {keyName: "closeBracket", value: 0.05,  msgTarget: 0, action: function(val){return arp.updateNoteProb(val);}},
      // {keyName: "backSlash", value: "",  msgTarget: 0, action: function(){return arp.drumMeasure();}},


      {keyName: "one", value: "",  msgTarget: 1, action: function(){return arp.synth.updateFilterType();}},
      {keyName: "two", value: -0.05,  msgTarget: 1, action: function(val){return arp.synth.updateRelease(val);}},
      {keyName: "three", value: 0.05,  msgTarget: 1, action: function(val){return arp.synth.updateRelease(val);}},
      {keyName: "four", value: -50,  msgTarget: 1, action: function(val){return arp.synth.updateFilter(val);}},
      {keyName: "five", value: 50,  msgTarget: 1, action: function(val){return arp.synth.updateFilter(val);}},
      {keyName: "six", value: -1,  msgTarget: 1, action: function(val){return arp.synth.updateOctave(val);}},
      {keyName: "seven", value: 1,  msgTarget: 1, action: function(val){return arp.synth.updateOctave(val);}},
      {keyName: "eight", value: "",  msgTarget: 1, action: function(){return arp.synth.updateOsc();}},
      {keyName: "nine", value: "",  msgTarget: 1, action: function(val){return arp.synth }}, // AIDGHAODGAODGAIUDGHAIUDHFGAUDGHFAODHFGOADIGHOAIDGJ
      {keyName: "zero", value: "",  msgTarget: 1, action: function(val){return arp.synth.randomizeNotes();}},
      {keyName: "minus", value: '',  msgTarget: 1, action: function(){return arp.synth.updateScale();}},

      {keyName: "q", value: -50,  msgTarget: 1, action: function(val){return arp.synth.updateFilterEnv(val);}},
      {keyName: "w", value: 50,  msgTarget: 1, action: function(val){return arp.synth.updateFilterEnv(val);}},
      {keyName: "e", value: -0.05,  msgTarget: 1, action: function(val){return arp.synth.updateFilterAttack(val);}},
      {keyName: "r", value: 0.05, msgTarget: 1, action: function(val){return arp.synth.updateFilterAttack(val);}},
      {keyName: "t", value: -0.5, msgTarget: 1, action: function(val){return arp.synth.updateAttack(val);}},
      {keyName: "y", value: 0.5, msgTarget: 1, action: function(val){return arp.synth.updateAttack(val);}},
      {keyName: "u", value: "",  msgTarget: 1, action: function(){return arp.synth.updateCurrentNote();}},
      {keyName: "i", value: "", msgTarget: 1, action: function(){return arp.synth.updateCurrentNote();}},
      {keyName: "o", value: -0.5, msgTarget: 1, action: function(val){return arp.synth.updateHold(val);}},
      {keyName: "p", value: 0.5, msgTarget: 1, action: function(val){return arp.synth.updateHold(val);}},

      // {keyName: "a", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.updateFilterType();}},
      // {keyName: "s", value: -0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateRelease(val);}},
      // {keyName: "d", value: 0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateRelease(val);}},
      // {keyName: "f", value: -50,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateFilter(val);}},
      // {keyName: "g", value: 50,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateFilter(val);}},
      // {keyName: "h", value: -1,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateOctave(val);}},
      // {keyName: "j", value: 1,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateOctave(val);}},
      // {keyName: "k", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.updateOsc();}},
      // {keyName: "l", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.updateBeat();}},
      // {keyName: "semicolon", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.randomizeNotes();}},
      // {keyName: "apostrophe", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.updateScale();}},

      // {keyName: "z", value: -50,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateFilterEnv(val);}},
      // {keyName: "x", value: 50,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateFilterEnv(val);}},
      // {keyName: "c", value: -0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateFilterAttack(val);}},
      // {keyName: "v", value: 0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateFilterAttack(val);}},
      // {keyName: "b", value: -0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateAttack(val);}},
      // {keyName: "n", value: 0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateAttack(val);}},
      // {keyName: "m", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.updateCurrentNote();}},
      // {keyName: "comma", value: "",  msgTarget: 2, action: function(){return arp.synths.osc2.updateCurrentNote();}},
      // {keyName: "period", value: -0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateHold(val);}},
      // {keyName: "slash", value: 0.05,  msgTarget: 2, action: function(val){return arp.synths.osc2.updateHold(val);}}





    ];
  };
})(this);
