const express = require('express')
const cors = require('cors')
const app = express()

const PORT = require("./config").PORT
const fs = require("fs").promises;
const getDirectory = require('./helpers').getDirectory
const prepareResponseData = require('./helpers').prepareResponseData


app.use(cors())

app.get('/directory', (req, res) => {

    const path = req.query.path;

    if (!path) {
        res.status(400);
        return res.json({ err: "please provide a path in the quiery params" })
    }
    //check that path exists
    return fs.access(path).then(() => {
        return getDirectory(path).then(async files => {
            //TODO: fs opertaion is expensive? find a better solution (regex?)
            response = await prepareResponseData(path, files)
            res.status(200);
            return res.json(response)
        }).catch(err => {
            console.error("err", err)
            res.status(500);
            return res.json(err)
        })

    }).catch(err => {
        console.error("send res here", err)
        res.status(404);
        return res.json({ err: "path does not exists" })
    })
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))