const express = require('express'),
    router = express.Router();
const todoSchema = require('./TodoSchema');

router.get('/', async(req, res) => {
    const todos = await todoSchema.find();
    return res.send(todos);
});

router.get('/:id', async(req, res) => {
    const todo = await todoSchema.findById(req.params.id);
    if (todo) {
        return res.status(200).send(todo);
    }
    return res.status(404).send({'message': 'Data not found with id : ' + req.params.id});
});

router.post('/', async(req, res) => {
    try {
        const todo = await todoSchema.create(req.body);
        return res.status(201).send(todo);
    } catch {
        return res.status(400).send({'message': 'Data save failed'});
    }
});

router.put('/:id', async(req, res) => {
    try {
        const todo = await todoSchema.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(todo);
    } catch {
        return res.status(400).send({'message': 'Data update failed'});
    }
});
 
module.exports = router;
