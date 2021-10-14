const express = require('express');
const notesController = require('../controllers').notes;
const SchemaValidator = require('../middlewares/SchemaValidator');

const validateRequest = SchemaValidator();

const router = express.Router();

// Retrieve all notes
router.get('/', notesController.list);

// Retrieve  stats
router.get('/stats', notesController.retrieveStats);

// Retrieve a single note by Id
router.get('/:id', notesController.retrieve);

// Create note
router.post('/', validateRequest, notesController.create);

// Update note by Id
router.patch('/:id', validateRequest, notesController.update);

// Delete a notes by Id
router.delete('/:id', notesController.destroy);

module.exports = router;
