// Express server setup in TypeScript
import express, { Express } from 'express';

const app: Express = express();
app.use(express.json());

// Define routes
// app.use('/api', apiRoutes);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
