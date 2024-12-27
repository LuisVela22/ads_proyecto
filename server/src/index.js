import app  from './app.js';
import { connectDB } from './dbMongodb.js';

const PORT = process.env.PORT ?? 3001


connectDB();
app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})
