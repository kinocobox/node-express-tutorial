import express, { Router } from 'express'

var router: Router = express.Router()
router.get('/', (req, res) => {
    res.send({ text: "hello world!!" })
})

export default router;