const { v4: uuidv4 } = require('uuid');
let notes = require('../constants').dummyNotes;
const noteCategories = require('../constants').noteCategories;

module.exports = {
  create(data) {
    const newNote = {
      ...data,
      id: uuidv4(),
      created: Date.now(),
    };
    notes = [...notes, newNote];
    return Promise.resolve(newNote);
  },
  findAll() {
    return Promise.resolve(notes);
  },
  findById(id) {
    const foundedNote = notes.find((note) => note.id === id);
    return Promise.resolve(foundedNote);
  },
  updateById(id, data) {
    notes = notes.map((note) => (note.id === id ? { ...note, ...data } : note));
    return Promise.resolve({});
  },
  deleteById(id) {
    notes = notes.filter((note) => note.id !== id);
    return Promise.resolve({});
  },
  getStats() {
    const noteStats = noteCategories.map((category, index) => ({
      id: `stat-${index}`,
      name: category,
      activeCount: getActiveNotesCountByCategory(category),
      archivedCount: getArchivedNotesCountByCategory(category),
    }));
    return Promise.resolve(noteStats);
  },
};

function getNotesByCategory(category) {
  return notes.filter(
    (note) => note.category.toUpperCase() === category.toUpperCase()
  );
}

function getActiveNotesByCategory(category) {
  return getNotesByCategory(category).filter((note) => !note.isArchived);
}

function getArchivedNotesByCategory(category) {
  return getNotesByCategory(category).filter((note) => note.isArchived);
}

function getActiveNotesCountByCategory(category) {
  return getActiveNotesByCategory(category).length;
}

function getArchivedNotesCountByCategory(category) {
  return getArchivedNotesByCategory(category).length;
}
