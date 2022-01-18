import express from 'express'
import messageController from './controllers/message'

const app: express.Express = express()

/**
 * サーバー増強
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * controllers
 */
app.use("/message", messageController)

/**
 * serve
 */
app.listen(3000, () => {
    console.log('open port 3000.')
})
