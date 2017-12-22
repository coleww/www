(function(root){
  "use strict";
  var MusicTheory = root.MusicTheory = (root.MusicTheory || {});

  MusicTheory.scaleKeys = {
    major: [2, 2, 1, 2, 2, 2],
    minor: [2, 1, 2, 2, 1, 2],
  pentMaj: [2, 2, 3, 2, 3],
  pentMin: [3, 2, 2, 3, 2]
  };

  MusicTheory.chordKeys = {
    major: [4, 3, 4, 1],
    minor: [3, 4, 3, 2],
    pentMaj: [4, 3, 5, 2],
    pentMin: [3, 4, 3, 5, 2]
  };

  MusicTheory.pitches = [
    'A0', 'A#0', 'B0', 'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1',
    'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2',
    'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3',
    'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4',
    'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5',
    'A5', 'A#5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6',
    'A6', 'A#6', 'B6', 'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7',
    'A7', 'A#7', 'B7', 'C8'
  ];

  // MusicTheory.getNote = function(index, tonic, octave, scale) {
  //   if(index === 0) return tonic + octave;
  //   var zero = this.pitches.indexOf(tonic + octave);
  //   var indexes = MusicTheory.scaleKeys[scale];
  //   var accum = 0;
  //   while(Math.abs(index) < indexes.length ){indexes = indexes.concat(indexes);}
  //   if(index > 0) for(var i = 0; i < index; i++){accum += indexes[i];}
  //   if(index < 0) for(var j = indexes.length - 1; j > index - 1; j--){accum += indexes[j];}
  //   if(zero + accum >= MusicTheory.pitches.length) return "fail";
  //   if(zero + accum < 0) return "fail";
  //   return MusicTheory.pitches[zero + accum];
  // };


//CHECK BOUNDS OF THE PITCHES ARRAY!
  MusicTheory.getChord = function(note, key){//modifiers?
    var that = this;
    var chord = [note];
    var i = this.pitches.indexOf(note);
    MusicTheory.chordKeys[key].forEach(function(iterator){
      chord.push(that.pitches[i += iterator]);
    });
    return chord;
  };

  MusicTheory.getScale = function(note, key){//moar keys!
    var that = this;
    var scale = [note];
    var i = this.pitches.indexOf(note);
    MusicTheory.scaleKeys[key].forEach(function(iterator){
      scale.push(that.pitches[i += iterator]);
    });
    return scale;
  };

  MusicTheory.arpeggiate = function(notes){
    var arpeggio = notes;
    for(var i = notes.length - 2; i > 0; i--){
      arpeggio.push(notes[i]);
    }
    return arpeggio;
  };
})(this);
