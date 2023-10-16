const mongoose = require("mongoose");

const budgetModel = require("./models/budget.schema ")

let url = 'mongodb://127.0.0.1:27017/mongodb_demo2';

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => 
        {
            console.log("connected");
            budgetModel.find({})
                .then((data) => {
                    console.log(data);
                    mongoose.connection.close();

                })
                .catch((connectionError) => {
                    console.log(connectionError)
                })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })