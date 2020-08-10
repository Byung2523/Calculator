const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Route for the Regular Calculator (localhost:3000).
app.get('/', function (reg,res) {
	res.sendFile(__dirname + "/index.html")
});

//Route for the BMI calculator (localhost:3000/bmicalculator)
app.get('/bmicalculator', function (reg,res) {
	res.sendFile(__dirname + "/bmiCalculator.html")
});

// Result for the route "/"
app.post("/", function(req,res) {

	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1 + num2;

 	res.send("The result of the calculator is " + result);
})


// Result for route "/bmicalculator"
app.post("/bmicalculator", function(req,res) {

	var weight = Number(req.body.weight);
	var height = Number(req.body.height);

	var calcBmi = 703 * weight / Math.pow(height, 2);
    var roundedBmi = calcBmi.toFixed(1);

     if (roundedBmi <= 18.5) {
        res.send("Your BMI is " + roundedBmi + ", so you are underweight.");
    } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        res.send("Your BMI is " + roundedBmi + ", so you have a normal weight.");
    } else if (roundedBmi > 24.9) {
        res.send("Your BMI is " + roundedBmi + ", so you are overweight.");
    }

})

app.listen(3000, function() {
	console.log("Server Started on port 3000");
});