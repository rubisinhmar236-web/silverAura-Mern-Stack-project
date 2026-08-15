const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./listing.js");


const port = 8080;
const path = require("path");
const listings = require("./listing");

main()
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/silverAura');
};
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));


app.get("/", (req, res)=>{
     res.send("Working");
 });

app.get("/post", async(req, res)=>{
    const listings = await Listing.find({});
     res.render("index.ejs",{listings});
 });



// app.get("/postlisting", async (req, res)=>{
//     let sampleListing = new Listing({
//         name: "JW",
//         price: 1200,
//         image: "img.jpg"
//     });
//     await sampleListing.save();
//     console.log("sample saved");
//     res.send("Succcessfully");
// });



app.listen(port,()=>{
    console.log("app is listing on 8080");  
});
 
