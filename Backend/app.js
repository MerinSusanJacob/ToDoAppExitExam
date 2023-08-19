const express=require('express');
const app=express();
const morgan=require('morgan');
const cors = require('cors');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());

require('./db/mongodb');

const api=require("./routes/taskRoutes");
app.use('/api',api);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running in PORT ${PORT}`);
});