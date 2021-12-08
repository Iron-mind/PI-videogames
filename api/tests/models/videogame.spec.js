const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
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
         platforms:[
           "Xbox 360",
           "Play Station 3"
         ],
         description: 'Funny game'
       })
        .then(() => done())
        .catch(() =>done(new Error('It requires a valid data (name, platforms and description required )')) );
      });
    });
  });
});
