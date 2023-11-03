import { Quiz } from "../models/QuizModel.js";
import express from 'express';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        //ensure that all fields are not null
        if (!request.body.title || !request.body.course || !request.body.topic || !request.body.dueDate) {
            return response.status(400).send({
                message: 'Send all required info fields: Title, Course, Topic and Due Date',
            });
        }
        //save the data in an Object 
        const newQuiz = {
            title: request.body.title,
            course: request.body.course,
            topic: request.body.topic,
            dueDate: request.body.dueDate
        }

        //save the data(newQuiz) in a variable called quiz from quiz type 
        const quiz = await Quiz.create(newQuiz);
        //send them to mongo
        return response.status(201).send(quiz);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});


//Route to Get All Quizes from Database(mongo)
router.get('/', async (request, response) => {
    try {
        const quizes = await Quiz.find({});
        return response.status(200).json({
            count: quizes.length, //this to return count of quizes inside object {count:5,data:{....}}
            data: quizes,
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


//Method to get spicefic quiz (search)
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const quiz = await Quiz.findById(id); // we used params here 
        return response.status(200).json(quiz);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route to update a quiz
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title||!request.body.course || !request.body.topic || !request.body.dueDate) {
            return response.status(400).send({
                message: 'Send all required info fields:title, Course, topic and Due Datw',
            });
        }
        const { id } = request.params;
        const result = await Quiz.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Quiz not found' })
        }
        return response.status(200).send({ message: 'Quiz has been Updated Successfully' })
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to Delete a quiz
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Quiz.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).send({ message: "Quiz is not found" });
        }
        return response.status(200).send({ message: "Quiz Cleared Successfully" });


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
