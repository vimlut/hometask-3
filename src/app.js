const express = require('express');

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');

const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`)
);
