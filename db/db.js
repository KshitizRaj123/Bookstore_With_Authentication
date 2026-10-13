const mongoose = require('mongoose');

async function connectDb()
{
    try
    {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected sucessfully!!!')
    }
    catch(e)
    {
        console.log(`The following error ${e} occured!!!`)
    }
}

module.exports = connectDb