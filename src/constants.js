const noteCategories = ['Task', 'Random Thought', 'Idea', 'Quote'];

const dummyNotes = [
  {
    id: 'task-1',
    name: 'Task 1',
    created: 1632914002039,
    category: 'Task',
    content: 'Lorem ipsum 5/5/2021 d awd da 6/5/2021',
    isArchived: false,
  },
  {
    id: 'task-2',
    name: 'Task 2',
    created: 1632914019093,
    category: 'Random Thought',
    content: 'Lorem ipsum',
    isArchived: false,
  },
  {
    id: 'task-3',
    name: 'Task 3',
    created: 1632914025810,
    category: 'Task',
    content: 'Lorem ipsum',
    isArchived: false,
  },
  {
    id: 'task-4',
    name: 'Task 4',
    created: 1632914032270,
    category: 'Idea',
    content: 'Lorem ipsum',
    isArchived: false,
  },
  {
    id: 'task-5',
    name: 'Task 5',
    created: 1632914038157,
    category: 'Quote',
    content: 'Lorem ipsum',
    isArchived: true,
  },
  {
    id: 'task-6',
    name: 'Task 6',
    created: 1632914044524,
    category: 'Quote',
    content: 'Lorem ipsum',
    isArchived: true,
  },
];

module.exports = { noteCategories, dummyNotes };
