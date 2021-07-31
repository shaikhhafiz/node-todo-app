const express = require('express'),
    router = express.Router();
const userSchema = require('./UserSchema');

router.get('/', async(req, res) => {
    const users = await userSchema.find();
    return res.send(users);
});

router.get('/:id', async(req, res) => {
    const user = await userSchema.findById(req.params.id);
    if (user) {
        return res.status(200).send(user);
    }
    return res.status(401).send({'message': 'Data not found with id : ' + req.parmas.id});
});

router.post('/', async(req, res) => {
    const user = await userSchema.create(req.body);
    return res.status(201).send(user);
});

router.put('/:id', async(req, res) => {
    const user = await userSchema.findByIdAndUpdate(req.params.id, req.body);
    if (user) {
        return res.status(200).send(user);
    }
    return res.status(401).send({'message': 'Data not found with id : ' + req.parmas.id});
});
 
module.exports = router;