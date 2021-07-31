const   expect      = require('chai').expect,
    request     = require('supertest'),
    mongoose = require('mongoose'),
    app         = require('../app/app');

describe('Todo integration test', ()=> {

    before((done) => {
        process.env.NODE_ENV = `./test/.env`;
        done();
    })

    after ((done) => {
        mongoose.connection.db.dropCollection('todos')
            .then(() => done())
            .catch((err) => done(err))
    })

    const id = `610229eb1d84e14c174dd692`;

    it('save todos with valid data', (done) => {
        let body = {_id: id, title:'Breakfast', desc: 'Have to take breakfast before 9:00 am'}
        request(app).post('/todos')
            .send(body)
            .then((res)=>{
                expect(res.status).to.equal(201);
                expect(res.body).to.include(body);
                done();
            })
            .catch((err) => done(err))
    })

    it('save todos with invalid data', (done) => {
        let body = {}
        request(app).post('/todos')
            .send(body)
            .then((res)=>{
                expect(res.status).to.equal(400);
                expect(res.body.message).to.include('Data save failed');
                done();
            })
            .catch((err) => done(err))
    })

    it('get todos with valid id', (done) => {
        request(app).get(`/todos/${id}`)
            .then((res)=>{
                expect(res.status).to.equal(200);
                expect(res.body._id).to.include(id);
                done();
            })
            .catch((err) => done(err))
    })

    it('get todos with invalid id', (done) => {
        request(app).get(`/todos/510229eb1d84e14c174dd693`)
            .then((res)=>{
                expect(res.status).to.equal(404);
                // expect(res.body.message).to.include(`Data not found with id 510229eb1d84e14c174dd693`);
                done();
            })
            .catch((err) => done(err))
    })
})
