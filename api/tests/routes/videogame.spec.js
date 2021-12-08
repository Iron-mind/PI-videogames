/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: "EA sports FiFA 12",
  platforms: ["Xbox 360", "Play Station 3"],
  description: "Funny game",
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Videogame.sync({ force: true }).then(() => {
      var game= Videogame.create(videogame)
    })
  );
  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames").expect(200));
    it("response should be json", function () {
      return agent.get("/videogames").expect("Content-Type", /json/);
    });
  });





  describe('GET /videogames/:ID', () => {

    it('should get 200', () =>{

      agent.get('/videogames/'+game.id).expect(200)
    });
    it('response should be json', function(){
      return agent.get('/videogames/'+game.id)
        .expect('Content-Type', /json/);
    })
    it('response should be FIFA 12 object', function(){
      return agent.get('/videogames/col')
        .expect(game);
    })
    it('no response when id is invalid', function(){
      return agent.get('/videogames/papaya')
        .expect(400);
    })

  });


  describe(`GET /videogames?name='...'`, () => {
    it('should get 200', () =>
      agent.get('/videogames?name=FIFA').expect(200)
    );
    it('response should be json', function(){
      return agent.get('/videogames?name=FIFA')
        .expect('Content-Type', /json/);
    })
    it('response should be a list', function(){
      return agent.get('/videogames?name=Colombia')
        .expect([game]);
    })
    it('no response when name is invalid or not found', function(){
      return agent.get('/videogames?name=quiensabe')
        .expect(400);
    })

})



});
