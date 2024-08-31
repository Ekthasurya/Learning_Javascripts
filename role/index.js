const express = require('express');
const connection = require('./config/db');
const userRouter = require("./routes/user.route")
const libraryRouter = require('./routes/library.route')
const auth = require('./middleware/auth.middleware')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/user',userRouter)
app.use("/library",auth,libraryRouter)


app.get('/',(req,res)=>{
    res.send('Hello World!');
})


app.listen(port,async()=>{
    try {
        await connection;
        console.log(`Connected to database and server is also running on port:${port}`);
    } catch (error) {
        console.log(`Error occured: ${error.message}`);
    }
})