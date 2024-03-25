const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"

const dbName = "task-5"

mongoClient.connect(connectionURL, (error, res) => {
    if(error){
        console.log("ERROR HAS OCCURED!")
    }
    console.log("Connection Done")
    const db = res.db(dbName)

    // db.collection('users').insertOne({
    //     name: "Yousif",
    //     age: 21
    // }, (error, data) => {
    //     if(error){
    //         console.log("Unable to insert!")
    //     }
    //     console.log(data.insertedId)
    // })

    // db.collection('users').insertOne({
    //     name: "Adel",
    //     age: 30
    // }, (error, data) => {
    //     if(error){
    //         console.log("Unable to insert!")
    //     }
    //     console.log(data.insertedId)
    // })

    // db.collection('users').insertMany(
    // [
    //     {
    //         name: "Yahia",
    //         age: 27,
    //         city: "cairo"
    //     },
    //     {
    //         name: "Magdy",
    //         age: 27,
    //         city: "mansoura"
    //     },
    //     {
    //         name: "Abdo",
    //         age: 27,
    //         city: "Giza"
    //     },
    //     {
    //         name: "Sief",
    //         age: 30,
    //         city: "cairo"
    //     },
    //     {
    //         name: "Osama",
    //         age: 27,
    //         city: "Giza"
    //     },
    //     {
    //         name: "Islam",
    //         age: 21,
    //         city: "cairo"
    //     },
    //     {
    //         name: "Khalid",
    //         age: 27,
    //         city: "Sohag"
    //     },
    //     {
    //         name: "Ahmed",
    //         age: 25,
    //         city: "alexandria"
    //     },
    //     {
    //         name: "mohamed",
    //         age: 28,
    //         city: "cairo"
    //     },
    //     {
    //         name: "waleed",
    //         age: 33,
    //         city: "cairo"
    //     }
    // ], (error, data) => {
    //     if(error){
    //         console.log("Unable to insert items!")
    //     }
    //     console.log(data.insertedCount + " items inserted!")
    // }
    // )

    // db.collection('users').find({age:27}).limit(3).toArray((error, data) => {
    //     if(error){
    //         console.log("Cannot find this ID")
    //     }
    //     console.log(data)
    // })

    // db.collection('users').find({ age: 27 }).limit(4).toArray((err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return; 
    //     }
    //     const userIds = data.map(user => user._id); 
    //     db.collection('users').updateMany(
    //         { _id: { $in: userIds } }, 
    //         {
    //             $set: { name: "ALI" },
    //             $inc: { age: 5 }
    //         }
    //     ).then((result) => {
    //         console.log(result.modifiedCount);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // })

    // db.collection('users').updateOne({_id:mongodb.ObjectId('66019eb0e74869f951de443f')},{
    //     $inc: {age: 5}
    // }).then((data)=>{
    //     console.log(data.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateMany({},{
    //     $inc: {age: 10}
    // }).then((data)=>{
    //     console.log(data.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({ age: 42 })
    // .then((result) => {
    //     console.log(result.deletedCount);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
    

})