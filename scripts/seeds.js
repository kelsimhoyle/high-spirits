const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://localhost/highspirits", { useNewUrlParser: true }).then(
    () => { 
        console.log("connected")
       
  },
    err => { console.log(err)}
  );



const userSeed = [
    {
        username: "kelsi",
        password: "Password1234!",
        name: "kelsi",
    }
    ]
    

    db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    console.log(data.result.n = " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.err(err);
    process.exit(1)
});
 