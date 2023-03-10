const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const port = 3000;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get("/",function (req,res){
    res.render("home")
})
