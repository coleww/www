(function(root){
  "use strict";

  var Arp = root.Arp = (root.Arp || {});

  var Synth = Arp.Synth = function(){
    this.data = {
      // these will be like 0 - 80000000000000 or whatever range the human ear can hear
      freq: 750,
      envFreq: 0,
      pitch: 440.0,

      // these will be like 0-5...maybe draw an envelope?
      envAtt: 0.25,
      att:0,
      hol:0.5,
      rel:0,

      // 1-7
      octave: 3,

      // 0-2
      filt:0,

      // 0-3
      osc:0,

      // 0-3
      scale:0,

      // 0-11
      note:0,




    };

    this.osc = new Wad({
      source: 'triangle',
      volume: 0.2,
      globalReverb : true,
      filter: {
        type: 'lowpass',
        frequency: 750,
        q: 10,
        env: {
          frequency: 0,
          attack: 0.25
        }
      },
      env: {
        attack: 0.0,
        decay: 0.0,
        sustain: 1.0,
        hold: 0.5,
        release: 0
      }
    });
    this.oscs = ["sine", "sawtooth", "square", "triangle"];
    this.octave = 3;
    this.position = 0;

    this.notes = [];

    this.currentFilter = 0;
    this.filters = ['lowpass', 'highpass', 'bandpass'];

    this.currentScale = 0;
    this.scales = ["major", "minor", "pentMaj", "pentMin"];//

    this.currentNote = 0;
    this.allNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    this.getNotes();
  };

  Synth.prototype.getNotes = function(note){
    var tonic = this.allNotes[this.currentNote] + this.octave;
    this.notes = MusicTheory.arpeggiate(MusicTheory.getChord(tonic, this.scales[this.currentScale]));
  };

  Synth.prototype.advance = function(){
    this.position += 1;
    if (this.position > 7) this.position = 0;
    return this;
  };

  Synth.prototype.play = function(){
    var pitch = this.data.pitch = Wad.pitches[this.notes[this.position]];
    this.osc.play({pitch: pitch});
  };


  Synth.prototype.updateVolume = function(val){
    var msg = this.osc.defaultVolume += val;
    if (msg < 0) msg = this.osc.defaultVolume = 0;
    if (msg > 1) msg = this.osc.defaultVolume = 1;
    return "volume: " + msg;
  };


  Synth.prototype.updateOsc = function(){
    var src = this.osc.source;
    var idx = this.oscs.indexOf(src) + 1;
    if (idx >= this.oscs.length) idx = 0;
    this.osc.source = this.oscs[idx];
    return "wave: " + this.osc.source;
  };

  Synth.prototype.updateOctave = function(change){
    this.octave += change;
    if(this.octave > 7) this.octave = 7;
    if(this.octave < 1) this.octave = 1;
    var newNotes = [];
    var that = this;
    this.notes.forEach(function(note){
      newNotes.push(note.substr(0, note.length - 1) + that.octave);
    });
    this.notes = newNotes;
    return "octave: " + this.octave;
  };

  Synth.prototype.updateFilter = function(val){
    this.osc.filter.frequency += val;

    if(this.osc.filter.frequency < 0) this.osc.filter.frequency = 0;
    return "freq: " + this.osc.filter.frequency;
  };

  Synth.prototype.updateFilterType = function(){
    this.currentFilter += 1;
    if(this.currentFilter >= this.filters.length) this.currentFilter = 0;

    return "filter: " + (this.osc.filter.type = this.filters[this.currentFilter]);
  };

  Synth.prototype.updateFilterEnv = function(val){
    this.osc.filter.env.frequency += val;

    if(this.osc.filter.env.frequency < 0) this.osc.filter.env.frequency = 0;
    return "envfreq: " + this.osc.filter.env.frequency;
  };

  Synth.prototype.updateFilterQ = function(val){
    this.osc.filter.q += val;

    if(this.osc.filter.q < 0) this.osc.filter.q = 0;
    return "Q: " + this.osc.filter.q;
  };

  Synth.prototype.updateFilterAttack = function(val){
    this.osc.filter.env.attack += val;

    if(this.osc.filter.env.attack < 0) this.osc.filter.env.attack = 0;
    return "envAtt: " + this.osc.filter.env.attack;
  };

  Synth.prototype.updateAttack = function(val){
    this.osc.env.attack += val;

    if(this.osc.env.attack < 0)this.osc.env.attack = 0;
    return "att: " + this.osc.env.attack;
  };

  Synth.prototype.updateDecay = function(val){
    this.osc.env.decay += val;

    if(this.osc.env.decay < 0) this.osc.env.decay = 0;
    return "dec: " + this.osc.env.decay;
  };

  Synth.prototype.updateSustain = function(val){
    this.osc.env.sustain += val;

    if(this.osc.env.sustain < 0) this.osc.env.sustain = 0;
    return "sus: " + this.osc.env.sustain;
  };

  Synth.prototype.updateHold = function(val){
    this.osc.env.hold += val;
    if(this.osc.env.hold < 0) this.osc.env.hold = 0;
    return "hol: " + this.osc.env.hold;
  };

  Synth.prototype.updateRelease = function(val){
    this.osc.env.release += val;
    if(this.osc.env.release < 0)this.osc.env.release=0;
    return "rel: " + this.osc.env.release;
  };

  Synth.prototype.updateScale = function(){
    this.currentScale += 1;
    if (this.currentScale >= this.scales.length) this.currentScale = 0;
    this.getNotes();
    return this.scales[this.currentScale];
  };

  Synth.prototype.updateCurrentNote = function(){
    this.currentNote += 1;
    if (this.currentNote >= this.allNotes.length) this.currentNote = 0;
    this.getNotes();
    return this.allNotes[this.currentNote];
  };

  Synth.prototype.randomizeNotes = function(){
    this.notes = (function(o){ //v1.0 lol wat where did this come from even?
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    })(this.notes);
    return 'randomized';
  };

})(this);
  // updateFilter = function(padId, coord){
  //   var x = coord[0];
  //   var y = coord[1];
  //   var synth = this.synths[padId];
  //   synth.osc.filter.frequency = x * 100;
  //   synth.osc.filter.env.frequency = y * 100;
  //   return padId + ": " + x + ", " +  y;
  // };

  //   var status;
  //   for (var synth in this.synths){
  //     this.synths[synth].osc.globalReverb = !this.synths[synth].osc.globalReverb;
  //     status = this.synths[synth].osc.globalReverb;
  //   }
  //   return "Reverb: " + (status) ? "on" : "off";
  // };