import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express()


app.use(bodyParser.json({extended: true }))
app.use(bodyParser.urlencoded({extended: true }))
app.use(cors())


app.use('/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://memories:memories123@cluster0.jhywk.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at port: ${PORT}`)))
    .catch((error) => console.log(error.message))
