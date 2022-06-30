



const { response, application } = require("express");
const express = require("express");
const app = express();

app.use(express.static(__dirname + '/client'))

const port = process.env.PORT || 3000
app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
})

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})



//JSON of images
var Img ={
        "abramsIMG":"https://upload.wikimedia.org/wikipedia/commons/e/e8/M1A1_Trophy_Technology_Demonstrator.jpg",
        "t72IMG":"https://upload.wikimedia.org/wikipedia/commons/f/fa/T-72_Ajeya1.jpg",
		"bradlyIMG":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Decisive_Action_Rotation_13-04_130218-A-ML570-001.jpg/1280px-Decisive_Action_Rotation_13-04_130218-A-ML570-001.jpg",
		"bmpIMG":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Army2016demo-011.jpg/1920px-Army2016demo-011.jpg"
}


app.get('/Img', (request, response) =>{
	console.log('Calling "Img" on the node.js server')
	response.type('application.json')
	response.send(JSON.stringify(Img, null, 4))

})