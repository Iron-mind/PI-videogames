const { Videogame, Platform, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame and Platform model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid data', () => {
        

        Videogame.create({ name: 'EA sports FiFA 12' ,
         description: 'Funny game'
       })
        .then(() => done())
        .catch(() =>done(new Error('It requires a valid data (name and description required )')) );
      });
       

      it('should create a new platform', () => {
        

        Platform.create({ 
          name:'xbox 360' 
       })
        .then(() => done())
        .catch(() =>done(new Error('It requires a valid data ')) );
      });


    });
  });
});
