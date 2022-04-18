import express from "express"
import apiController from '../controllers/apiController'

const router = express.Router()

/**
 * 
 * @param {*} app : express app
 */

const initApiRoutes = (app) => {
    //rest api
    //GET - R, POST = C , PUT - U , Delete - D
    router.get("/test-api", apiController.testApi)
    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)

    return app.use("/api/v1/", router)
}

export default initApiRoutes