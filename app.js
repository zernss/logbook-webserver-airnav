const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB Connection
const mongoURI = 'your_mongodb_connection_string';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Define schemas and models
const formSchema = new mongoose.Schema({
    name: String,
    age: Number,
    // add other fields as necessary
});

const SelexLocalizer = mongoose.model('SelexLocalizer', formSchema);
const SelexGlidePath = mongoose.model('SelexGlidePath', formSchema);
const SelexMiddleMarker = mongoose.model('SelexMiddleMarker', formSchema);
const MopiensLocalizer = mongoose.model('MopiensLocalizer', formSchema);
const MopiensGlidePath = mongoose.model('MopiensGlidePath', formSchema);
const MopiensMiddleMarker = mongoose.model('MopiensMiddleMarker', formSchema);

// Routes
app.post('/submit/selexlocalizer', async (req, res) => {
    const newEntry = new SelexLocalizer(req.body);
    try {
        await newEntry.save();
        res.status(200).send('Selex Localizer data submitted successfully');
    } catch (err) {
        res.status(500).send('Error submitting data');
    }
});

app.post('/submit/selexglidepath', async (req, res) => {
    const newEntry = new SelexGlidePath(req.body);
    try {
        await newEntry.save();
        res.status(200).send('Selex Glide Path data submitted successfully');
    } catch (err) {
        res.status(500).send('Error submitting data');
    }
});

app.post('/submit/selexmiddlemarker', async (req, res) => {
    const newEntry = new SelexMiddleMarker(req.body);
    try {
        await newEntry.save();
        res.status(200).send('Selex Middle Marker data submitted successfully');
    } catch (err) {
        res.status(500).send('Error submitting data');
    }
});

app.post('/submit/mopienslocalizer', async (req, res) => {
    const newEntry = new MopiensLocalizer(req.body);
    try {
        await newEntry.save();
        res.status(200).send('Mopiens Localizer data submitted successfully');
    } catch (err) {
        res.status(500).send('Error submitting data');
    }
});

app.post('/submit/mopiensglidepath', async (req, res) => {
    const newEntry = new MopiensGlidePath(req.body);
    try {
        await newEntry.save();
        res.status(200).send('Mopiens Glide Path data submitted successfully');
    } catch (err) {
        res.status(500).send('Error submitting data');
    }
});

app.post('/submit/mopiensmiddlemarker', async (req, res) => {
    const newEntry = new MopiensMiddleMarker(req.body);
    try {
        await newEntry.save();
        res.status(200).send('Mopiens Middle Marker data submitted successfully');
    } catch (err) {
        res.status(500).send('Error submitting data');
    }
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
