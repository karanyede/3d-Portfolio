const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(bodyParser.json());

// Mock data for projects
let projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1', image: 'https://picsum.photos/id/1/300/200', likes: 0 },
  { id: 2, title: 'Project 2', description: 'Description for Project 2', image: 'https://picsum.photos/id/2/300/200', likes: 0 },
  { id: 3, title: 'Project 3', description: 'Description for Project 3', image: 'https://picsum.photos/id/3/300/200', likes: 0 },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects/:id/like', (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(p => p.id === id);
  if (project) {
    project.likes++;
    io.emit('projectLiked', { id, likes: project.likes });
    res.json({ likes: project.likes });
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically send an email or save to a database
  console.log('Contact form submission:', { name, email, message });
  res.json({ message: 'Message received' });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});