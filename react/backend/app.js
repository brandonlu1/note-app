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

app.get('/', async (req, res) => {
    console.log("landing page")
    client.connect(async err => {
        if (err){
            res.send("Unable to connect to MongoDB")
        }
        else{
            res.send("Connected to MongoDB")
        }
    })
})

app.get('/get-notes', async (req, res) => {
    client.connect(async err => {
        const collection = client.db("notes-app").collection("notes");
        const notes = await collection.find({}).toArray();
        res.send(notes)
    })
})

app.post('/upload-note', async (req, res) => {
    const {note:noteDB} = req.body;
    let newNote = {
        note:noteDB,
    }
    client.connect(async err => {
        const collection = client.db("notes-app").collection("notes");
        if (noteDB.length > 0){
            collection.insertOne(newNote)
            res.sendStatus(200)
        }
    
    })
})

app.put('/delete-note', async (req, res) => {
    console.log("deleting")
    const {note:noteDB} = req.body;
    client.connect(async err => {
        const collection = client.db("notes-app").collection("notes")
        collection.findOneAndDelete({note:noteDB})
        res.sendStatus(200)
        console.log("success")
    })

})
//sss
app.listen(port, ()=> {
        console.log(`App listening at http://localhost:${port}`)
})