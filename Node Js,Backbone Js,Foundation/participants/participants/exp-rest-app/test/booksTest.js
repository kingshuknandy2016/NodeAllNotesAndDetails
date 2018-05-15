let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

//Test the get route
describe('GET /books', function(){
    it('It should GET all the books', function(done){
        chai.request(server)
        .get('/books')
        .end(function(err,res) {
             res.should.have.status(200);
             res.body.should.be.a('array');
             res.body.length.should.be.eql(2);
              done();
        });
    });
});//end of get





describe('POST /books', function(){
    it('It should not POST A BOOK without Name field', function(done){
           let book = {
               author: "J.R.R. Tokien",
               years:1954
           }
           chai.request(server)
           .post('/books')
           .send(book)
           .end(function(err,res){
               res.should.have.status(200);
               res.body.should.be.a('object');
               res.body.should.have.property('errors');
               res.body.should.have.property('errors').eql('Name is a required field!');
               done();
           });
    });
    it('It should  POST a book  successfully', function(done){
           let book = {
        
               name:"test qwww",
               author: "J.R.R. Tokien",
               years:1954
           }
           chai.request(server)
           .post('/books')
           .send(book)
           .end(function(err,res){
               res.should.have.status(200);
               res.body.should.be.a('object');
               res.body.should.have.property('message');
               res.body.should.have.property('message').eql('Book successfully added!');
               done();
           });
    });
});


describe('PUT /books/:id', function(){
   it('should update a SINGLE book Successfully', function(done) {
  
  let bookOther = {
        
               name:"TESt h1",
               author: "Demo",
               years:1954
           }
  
  chai.request(server)
    .get('/books')
    .end(function(err, res){
      chai.request(server)
        .put('/books/'+2)
        .send(bookOther)
        .end(function(error, response){
        //   response.should.have.status(200);
        //   response.should.be.json;
          response.body.should.have.property('message');
        //   response.body.should.have.property('UPDATED');
        //   response.body.UPDATED.should.be.a('object');
        //   response.body.UPDATED.should.have.property('name');
        //   response.body.UPDATED.should.have.property('_id');
        //   response.body.UPDATED.name.should.equal('Spider');
          done();
      });
    });
});
});


describe('DELETE /books/:id', function(){
   it('should DELETE Specific book Successfully', function(done) {

  chai.request(server)
    .get('/books')
    .end(function(err, res){
      chai.request(server)
        .delete('/books/'+1)
        .end(function(error, response){
          //res.body.should.have.property('message').eql('books has been removed');
            response.body.should.have.property('message');
            done();
      });
    });

});
});


