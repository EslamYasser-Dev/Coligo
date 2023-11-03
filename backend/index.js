import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import quizesRoute from './routes/quizesRoute.js'
import announcmentRoute from './routes/announcmentRoute.js'
import cors from 'cors';

const app = express();

// //get method takes callbak (http route is /)
// app.get('/',(requset, response)=>{
//     console.log(requset);
//     return response.status(234).send("hello");
// });

//middleware for parsing requset body
app.use(express.json());

//===================================================================
//middleware to handle cors policy
//To allow all origins with defualt of cors
app.use(cors());

//allow custom origins 
// app.use(cors({
//     origin:'http://localhost:5173',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['content-type'],
// })
// );
//==================================================================
//port
app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`);
});

//mongo DB conncetion
mongoose.connect(mongoDBURL).then(() => {
    console.log("database connection success");
})
    .catch((error) => {
        console.log(error);
        console.error("\t======== check MongoDB ==========\n\n");
    });
app.use('/Quizes', quizesRoute);
app.use('/announcments', announcmentRoute);



