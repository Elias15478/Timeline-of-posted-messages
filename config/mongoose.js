const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Timeline:MDBtimeline@cluster0.v01d8.mongodb.net/?retryWrites=true&w=majority')
        .then( () => {
            console.log('DB is connected')
        })
        .catch( err => {
            console.log(err)
        })