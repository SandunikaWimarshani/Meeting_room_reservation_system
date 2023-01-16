const mongoose = require('mongoose')

var reservationSchema = mongoose.Schema(
    {
        roomNo:String,
        empName:String,
        empEmail:String,
        empPhone: String,
        date:String,
        startTime:String,
        endTime:String
    });

    module.exports = mongoose.model("Reservation", reservationSchema)