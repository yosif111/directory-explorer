const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");
const getDirectory =

    app.get('/directory', (req, res) => {

        const path = req.query.path;

        if (!path) {
            return res.json({ err: "please provide a path in the quiery params" })
        }

        //check that path exists
        return fs.promises.access(path).then(() => {

            return getDirectory(path).then(files => {
                return res.json(files)
            }).catch(err => {
                console.error("err", err)
                return res.json(err)
            })

        }).catch(err => {
            console.error("send res here", err)
            return res.json({ err: "path does not exists" })
        })
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))