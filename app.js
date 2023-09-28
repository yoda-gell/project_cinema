const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const app = express();
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/cinemaDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);


app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("order.ejs");
});

app.get("/order", function(req, res){
  res.render("home.ejs");
});

app.get("/places", function(req, res){
  res.render("places.ejs");
});

app.get("/singup", function(req, res){
  // alert('places render')
  res.render("singup.ejs");
});
app.get("/payment", function(req, res){
  res.render("payment.ejs");
});
app.get("/result", function(req, res){
  res.render("result.ejs");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


