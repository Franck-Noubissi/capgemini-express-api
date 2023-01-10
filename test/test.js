//const request = require("supertest")
import request from "supertest"
//const app = require("../app.js")
import app from "../app.js"

describe("test the root path", () => {
    test("It should respond to the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
                done()
            })
    })

    test("It should return Xavier", done => {
        request(app)
            .get("/api/contacts")
            .then(response => {
                expect(response.statusCode).toBe(200)
                expect(response.body[0].nom).toBe("Xavier")
                done()
            })
    })

    test("It should return Xavier were", done => {
        request(app)
            .get("/api/contact/" + 1)
            .then(response => {
                expect(response.statusCode).toBe(200)
                expect(response.body.nom).toBe("Tulipe")
                done()
            })
    })
    test("It should return Xavier were bruh", done => {
        request(app)
            .get("/api/contact/" + 8)
            .then(response => {
                expect(response.statusCode).toBe(200)
                expect(response.body.nom).toBe(undefined)
                done()
            })
    })
})