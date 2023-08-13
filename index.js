require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wn4h1rl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const db = client.db('pc-builder');
    const productCollection = db.collection('products');
    const processorCollection = db.collection('processor');
    const motherboardCollection = db.collection('motherboard');
    const ramCollection = db.collection('ram');
    const powerSupplyUnitCollection = db.collection('Power-supply-unit');
    const ssdCollection = db.collection('SSD');
    const gpuCollection = db.collection('gpu');
    const keyboardCollection = db.collection('keyboard');
    const monitorCollection = db.collection('monitor');
    const mouseCollection = db.collection('mouse');


    // all products
    app.get('/products', async (req, res) => {
      const cursor = productCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/product/:id', async (req, res) => {
      const id = req.params.id;

      const result = await productCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // processor
    app.get('/processor', async (req, res) => {
      const cursor = processorCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/processor/:id', async (req, res) => {
      const id = req.params.id;

      const result = await processorCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

     // motherboard
     app.get('/motherboard', async (req, res) => {
      const cursor = motherboardCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/motherboard/:id', async (req, res) => {
      const id = req.params.id;

      const result = await motherboardCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // ram
     app.get('/ram', async (req, res) => {
      const cursor = ramCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/ram/:id', async (req, res) => {
      const id = req.params.id;

      const result = await ramCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // power supply unit
    app.get('/power-supply-unit', async (req, res) => {
      const cursor = powerSupplyUnitCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/power-supply-unit/:id', async (req, res) => {
      const id = req.params.id;

      const result = await powerSupplyUnitCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // ssd 
    app.get('/ssd', async (req, res) => {
      const cursor = ssdCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/ssd/:id', async (req, res) => {
      const id = req.params.id;

      const result = await ssdCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // gpu
    app.get('/gpu', async (req, res) => {
      const cursor = gpuCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/gpu/:id', async (req, res) => {
      const id = req.params.id;

      const result = await gpuCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // keyboard
    app.get('/keyboard', async (req, res) => {
      const cursor = keyboardCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/keyboard/:id', async (req, res) => {
      const id = req.params.id;

      const result = await keyboardCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // monitor
    app.get('/monitor', async (req, res) => {
      const cursor = monitorCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/monitor/:id', async (req, res) => {
      const id = req.params.id;

      const result = await monitorCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // mouse 
    app.get('/mouse', async (req, res) => {
      const cursor = mouseCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.get('/mouse/:id', async (req, res) => {
      const id = req.params.id;

      const result = await mouseCollection.findOne({ _id: ObjectId(id) });
      res.send(result);
    });

  } finally {
  }
};

run().catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Please go to the /products route for data');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
