const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./listing.js");
const methodOverride = require("method-override");


const port = 8080;
const path = require("path");
const listings = require("./listing");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

app.get("/listings", async(req, res)=>{
    const listings = await Listing.find({});
     res.render("index.ejs",{listings});
 });


//Create route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs");
});

app.post("/listings", async(req, res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});


 //show route
app.get("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});



//edit route
app.get("/listings/:id/edit", async(req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

app.put("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
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
 
