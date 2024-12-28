import express from 'express';
import morgan from 'morgan';
import adminRoutes from './routes/admin.routes.js';
import instrucRoutes from './routes/instruc.routes.js'
import superAdminRoutes from './routes/superadmin.routes.js'
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/clubleones/instructor", instrucRoutes);//instructor
app.use("/clubleones/admin",adminRoutes); //para el admin
app.use("/clubleones/superadmin", superAdminRoutes);//superadmin

export default app;
