import express from "express"
import homeController from '../controllers/homeController'

const router = express.Router()

/**
 * 
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get("/user", homeController.handerUserPage)
    router.post("/user/create-user", homeController.handleCreateUser)
    router.post("/delete-user/:id", homeController.handleDeleteUser)
    router.get("/update-user/:id", homeController.handleGetUser)
    router.post("/user/update-user", homeController.handleUpdateUser)

    return app.use("/", router)
}

export default initWebRoutes