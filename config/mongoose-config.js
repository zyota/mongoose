import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://1234:mrvEAuP2RIpBuVQ8@cluster0.585lspq.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connected");
  })
  .catch(console.log("Failed"));

export default mongoose.connection;
