import { Annoucment } from "../models/AnnoucmentModel.js";
import express from 'express';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        //ensure that all fields are not null
        if (!request.body.title || !request.body.author || !request.body.message) {
            return response.status(400).send({
                message: 'Send all required info fields: Title, Author and Message',
            });
        }
        //save the data in an Object 
        const newAnnoucment = {
            title: request.body.title,
            author: request.body.author,
            message: request.body.message
        }

        //save the data(newAnnoucment) in a variable called Annoucment from Annoucment type 
        const annoucment = await Annoucment.create(newAnnoucment);

        //send them to mongo
        return response.status(201).send(annoucment);


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//Route to Get All Annoucments from Database(mongo)
router.get('/', async (request, response) => {
    try {
        const annoucments = await Annoucment.find({});
        return response.status(200).json({
            count: annoucments.length, //this to return count of Annoucments inside object {count:5,data:{....}}
            data: annoucments,
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Method to get specific Annoucment (search)
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const annoucment = await Annoucment.findById(id); // we used params here 
        return response.status(200).json(annoucment);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route to update a Annoucment
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.message) {
            return response.status(400).send({
                message: 'Send all required info fields: Title, Author and Message',
            });
        }
        const { id } = request.params;
        const result = await Annoucment.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Announcement not found' })
        }
        return response.status(200).send({ message: 'Announcement has been Updated Successfully' })
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to Delete a Announcement
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Annoucment.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).send({ message: "Announcement is not found" });
        }
        return response.status(200).send({ message: "Announcement Cleared Successfully" });


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
    