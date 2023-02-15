//requiring Express and Multer
const express = require('express')
const multer = require('multer')
//creating a new instance of the Express application and multer package
const app = express()
const upload = multer({ dest: 'uploads/' })

//Define an API endpoint using the HTTP get method
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded!')
})

//file retrieval route
app.get


//starting the Express server
app.listen(3000, () => {
  console.log('Server started on port 3000')
})