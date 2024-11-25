const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connect=await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`databse connected : ${connect.connection.host} , ${connect.connection.name} `)
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};

module.exports = dbConnect;
