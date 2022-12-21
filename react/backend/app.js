require('dotenv').config()
const {MongoClient} = require('mongodb')
const express = require('express')
const app = express()
port = 5000
cors = require('cors')
const uri = process.env.MONGODB_URI

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    client.connect(async err => {
        const collection = client.db("notes-app").collection("notes");
        if (err){
            res.send("error: ", err)
        }
        else{
            res.send("Connected to MongoDB")
        }
    })
})


app.listen(port, ()=> {
        console.log(`App listening at http://localhost:${port}`)
})