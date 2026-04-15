const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));



// Routes
app.use('/auth', require('./routes/auth'));
app.use('/courses', require('./routes/courses'));
app.use('/progress', require('./routes/progress'));
app.use('/quiz', require('./routes/quiz'));
app.use('/ai', require('./routes/ai'));
app.use('/code', require('./routes/code'));
app.use('/leaderboard', require('./routes/leaderboard'));
app.use('/games', require('./routes/games'));

// Socket.io for real-time leaderboard
io.on('connection', (socket) => {
  console.log('🔌 User connected:', socket.id);
  socket.on('disconnect', () => console.log('🔌 User disconnected:', socket.id));
});

app.set('io', io);

app.get('/', (req, res) => res.json({ message: 'AIML Platform API Running 🚀' }));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));