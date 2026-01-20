const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zwzwq5a.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    // await client.connect();
    const database = client.db('bookLibrary');
    const booksCollection = database.collection('books');

    // Add a book
    app.post('/books', async (req, res) => {
      const book = req.body;
      book.createdAt = new Date();
      const result = await booksCollection.insertOne(book);
      res.send(result);
    });

    // Get all books
    app.get('/books', async (req, res) => {
      const result = await booksCollection.find().toArray();
      res.send(result);
    });

    // Get single book by ID
    app.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // Check both string _id and ObjectId _id
    const book = await booksCollection.findOne({
      $or: [
        { _id: id },               // string _id
        { _id: new ObjectId(id) }  // ObjectId _id
      ]
    });
    if (!book) return res.status(404).send({ message: "Book not found" });
    res.send(book);
  } catch (err) {
    return res.status(400).send({ message: "Invalid ID format" });
  }
});



    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('Hello developer')
})

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
    
})