import mongoose from "mongoose";

export const dbConnection = ()=>{
  mongoose.connect("mongodb+srv://rajpootashishd:ashu0000@cluster0.klwxskr.mongodb.net/?retryWrites=true",{dbName:"EVENT_MESSAGE"}).then(
    ()=>{
      console.log("Connect to the database")
}).catch(err=>{
  console.log("some errr connecting on database :", err);
});
  

};