const NotesService = require('../services').notesService;

module.exports = {
  create(req, res) {
    return NotesService.create(req.body)
      .then((response) => res.status(response.statusCode).send(response.data))
      .catch((error) => res.status(error.statusCode).send(error.message));
  },
  list(req, res) {
    return NotesService.list()
      .then((response) => res.status(response.statusCode).send(response.data))
      .catch((error) => res.status(error.statusCode).send(error.message));
  },
  retrieve(req, res) {
    const id = req.params.id;
    return NotesService.retrieve(id)
      .then((response) =>
        response.error
          ? res.status(response.statusCode).send(response.message)
          : res.status(response.statusCode).send(response.data)
      )
      .catch((error) => res.status(error.statusCode).send(error.message));
  },
  retrieveStats(req, res) {
    return NotesService.retrieveStats()
      .then((response) => res.status(response.statusCode).send(response.data))
      .catch((error) => res.status(error.statusCode).send(error.message));
  },
  update(req, res) {
    const id = req.params.id;
    const newData = req.body;
    return NotesService.update(id, newData)
      .then((response) =>
        response.error
          ? res.status(response.statusCode).send(response.message)
          : res.status(response.statusCode).send(response.data)
      )
      .catch((error) => res.status(error.statusCode).send(error.message));
  },
  destroy(req, res) {
    const id = req.params.id;
    return NotesService.destroy(id)
      .then((response) =>
        response.error
          ? res.status(response.statusCode).send(response.message)
          : res.status(response.statusCode).send(response.data)
      )
      .catch((error) => res.status(error.statusCode).send(error.message));
  },
};
