import express from 'express';
import { resolve } from 'path';
console.log(resolve('json-server')); // Equivalent to require.resolve('json-server')
import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { JSONFilePreset } from 'lowdb/node'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = 'your-secret-key';
const adapter = new JSONFile('db.json');
const db = await JSONFilePreset('db.json', { posts: [], users: [], products: [] })

// Middleware to ensure db is loaded
await db.read(); 

app.use((req, res, next) => {
  req.db = db;
  next();
});

// Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = req.db.data.users.find(u => u.username === username);
  if (user) return res.status(400).json({ message: 'User already exists' });

  const hashed = await bcrypt.hash(password, 8);
  req.db.data.users.push({ username, password: hashed });
  await req.db.write();
  res.status(201).json({ message: 'User registered' });
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = db.data.users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ 
    token:token,
    user:{
      username:username
    }
   });
});

// Auth Middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you're authenticated.` });
});

// Mount JSON Server (behind /api)

const middlewares = jsonServer.defaults();
//app.use('/api', authenticateToken, middlewares, router);

// Get all orders for logged-in user
app.get('/660/orders', authenticateToken, async (req, res) => {
  await db.read();
  const username = req.user.username;
  const orders = db.data.orders?.filter(order => order.username === username);
  res.json(orders || []);
});

// Post a new order for the logged-in user
app.post('/660/orders', authenticateToken, async (req, res) => {
  await db.read();
  const newOrder = req.body;
  const username = req.user.username;

  // Attach username for ownership
  newOrder.username = username;
  newOrder.id = Date.now(); // or use some unique generator

  db.data.orders = db.data.orders || [];
  db.data.orders.push(newOrder);
  await db.write();

  res.status(201).json(newOrder);
});


// GET user details (self-only)
app.get('/users/:username', authenticateToken, async (req, res) => {
  const { username } = req.params;
  console.log(username);
  if (username !== req.user.username) {
    return res.status(403).json({ message: 'Access denied' });
  }

  await db.read(); // Ensure latest data
  const user = db.data.users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const { password, ...safeUser } = user;
  res.json(safeUser);
});

const router = jsonServer.router('db.json');
//const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use(router);

// Start Server
app.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
  console.log('Protected JSON API at http://localhost:8000/api');
});

