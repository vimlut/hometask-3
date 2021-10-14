const Note = require('../models').noteModel;

module.exports = {
  create(newNote) {
    return Note.create(newNote)
      .then((data) => sendData(data, 201))
      .catch((error) => sendError(error));
  },
  retrieve(id) {
    return Note.findById(id)
      .then((data) =>
        !data ? sendError('Note not found!', 404) : sendData(data)
      )
      .catch((error) => sendError(error));
  },
  list() {
    return Note.findAll()
      .then((data) => sendData(data))
      .catch((error) => sendError(error));
  },
  retrieveStats() {
    return Note.getStats()
      .then((data) => sendData(data))
      .catch((error) => sendError(error));
  },
  update(id, newData) {
    return Note.findById(id).then((data) => {
      if (!data) {
        return sendError('Note not found!', 404);
      }
      return Note.updateById(id, newData)
        .then(() => sendData('Note updated!', 200))
        .catch((error) => sendError(error));
    });
  },
  destroy(id) {
    return Note.findById(id).then((data) => {
      if (!data) {
        return sendError('Note not found!', 404);
      }
      return Note.deleteById(id)
        .then(() => sendData('Note deleted!', 200))
        .catch((error) => sendError(error));
    });
  }
};

function sendError(message, statusCode = 400) {
  return {
    error: true,
    statusCode,
    message,
  };
}

function sendData(data, statusCode = 200) {
  return {
    error: false,
    statusCode,
    data,
  };
}
