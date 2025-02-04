const request = require("supertest");
const app = require("../server"); // Importation de l'API Express

describe("API Express - Tests", () => {
    it("Devrait retourner 'Hello, World!'", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("Hello, World!");
    });
});
