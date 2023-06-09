import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})

export default app;