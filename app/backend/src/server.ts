import express from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/alumnis', routes.AlumniRouter);
app.use('/associated', routes.associatedRouter);
app.use('/award', routes.awardRouter);
app.use('/conference', routes.conferenceRouter);
app.use('/faculty', routes.facultyRouter);
app.use('/journal', routes.journalRouter);
app.use('/postgraduates', routes.postGradRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})

export default app;