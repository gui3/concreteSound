/*
*   CONVERSION MATRIX
*
*/
const note = require('...note')

function setupConversions ({ midi, pitch, bool, bang /**/ }) {
  // use this pattern
  // sourceType.to.targetType = (data, link) => processing

  midi.to.pitch = (data, link) => note.from.midi(data[0]).frequency
  midi.to.bool = (data, link) => data[1] || false
  midi.to.bang = (data, link) => data[1] ? link.target.bang() : false

  bool.to.midi = (data, link) => data ? midi.generate(/**/) : midi.generate(/**/)

  pitch.to.midi = (data, link) => midi.generate(note.from(data)/**/)

  bang.to.midi = (data, link) => midi(link.context.note/**/)
}

module.exports = setupConversions
