import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle root path
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API that returns 500 without a body
app.get('/api/error-no-body', (req: Request, res: Response) => {
  res.status(500).end();
});

// API that returns 500 with a body
app.get('/api/error-with-body', (req: Request, res: Response) => {
  res.status(500).send('Internal Server Error with body');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 