import express from 'express'
const app: express.Express = express()
app.get("/", (req:express.Request, res:express.Response) => {
    res.send("hello.")
})

app.listen(3000, () => {
    console.log('open port 3000.')
})
