process.env.DATABASE_URL='mongodb+srv://admin:admin@cluster0.fj1qtwe.mongodb.net/test_database?retryWrites=true&w=majority'

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
var mongoose = require("mongoose");


var server = require('../server');
var reservation = require('../routes/form');

  
var Book = require("../models/reservation");

chai.use(chaiHttp);

describe('testing reservation', function() {

    beforeEach(function(done) {
        Book.deleteMany({}, function(err){})
        done()
    });

    afterEach(function(done) {
        Book.deleteMany({}, function(err){})
        done();
    });

    
    it('should load all reservations', function(done) {
        chai.request(server)
            .get('/book/book')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });



   
    it('should add a new reservation', function(done) {
        chai.request(server)
            .post('/form/form')
            .send({
                roomNo:'2',
                empName:'john',
                empEmail:'eml@gmail.com',
                empPhone: '0712589632',
                date:'2023-01-26',
                startTime:'10:30',
                endTime:'12:30',
                status: true
            })
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });


    
})