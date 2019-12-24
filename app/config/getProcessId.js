let incrementId = 0

function getProcessId (id) {
  if (!id) {
    id = '#' + incrementId
    incrementId += 1
  }

  return id
}

module.exports = getProcessId
