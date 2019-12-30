const express = require('express')
const app = express()
const port = 8080
const fs = require("fs").promises;
const getDirectory = require('./helpers').getDirectory
const prepareResponseData = require('./helpers').prepareResponseData

app.get('/directory', (req, res) => {

    const path = req.query.path;

    if (!path) {
        return res.json({ err: "please provide a path in the quiery params" })
    }
    //check that path exists
    return fs.access(path).then(() => {
        return getDirectory(path).then(async files => {
            //TODO: fs opertaion is expensive? find a better solution (regex?)
            response = await prepareResponseData(path, files)
            return res.json(response)
        }).catch(err => {
            console.error("err", err)
            return res.json(err)
        })

    }).catch(err => {
        console.error("send res here", err)
        return res.json({ err: "path does not exists" })
    })
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

