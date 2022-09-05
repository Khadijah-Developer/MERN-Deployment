require('dotenv').config();
const express = require('express');
const exp = require("constants")
const cors = require('cors') 
const app = express();




require('./server/config/mongoose.config'); // This connection
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./server/routes/pet.routes')(app); 

const server = app.listen(8000, () => {
    console.log("Listening at Port 8000 in Pet Shelter")
})


const io = require('socket.io')(server, { cors: true });

const pet = require("./server/models/pet.model")

io.on("connection", socket => {
    console.log(`User connected ${socket.id}`);


    // socket.on('updateLike', data => {
    //     data.pet[data.index].value++
    //     vote.findByIdAndUpdate(data.pet._id, data.pet)
    //           .then(res => console.log(res))
    //           .catch(err => console.log(err));
    //     console.log(data.index)
    //     io.emit('setLikes', "hi")
    // })
})