import express from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/alumnis', routes.AlumniRouter);
app.use('/associated', routes.associatedRoute);

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})

export default app;