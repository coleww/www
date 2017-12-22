(function(root){
  "use strict";

  var Arp = root.Arp = (root.Arp || {});

  var Sequencer = Arp.Sequencer = function(){

    // MAKE THIS CHANGEABLEEEE
    Wad.setGlobalReverb({wet : 1, impulse : './vendor/impulses/widehall.wav'});
    this.synth = new Arp.Synth();

    this.bpm = 120;
    Arp.installController(this);
  };

  Sequencer.prototype.startSeq = function(){
    var that = this;
    if(this.interval) clearInterval(this.interval);
    var beat = 60000.0 / this.bpm;
    this.interval = window.setInterval(function(){
      that.play();
    }, beat);
  };

  Sequencer.prototype.play = function(){
    // i should really just store the computer bpm as an attribute...i guess math is cheap. whatever
    this.synth.advance().play();
    console.log(this.synth.data);
  };

  Sequencer.prototype.updateBPM = function(change){
    this.bpm += change;
    if(this.bpm > 1000) this.bpm = 1000;
    if(this.bpm < 0) this.bpm = 0;
    this.startSeq();
    return "BPM: " + this.bpm;
  };

  Sequencer.prototype.updateReverb = function(change){
    Wad.reverb.gain.gain.value += change;
    if(Wad.reverb.gain.gain.value < 0) Wad.reverb.gain.gain.value = 0;
    return "Reverb: " + Wad.reverb.gain.gain.value;
  };

})(this);
