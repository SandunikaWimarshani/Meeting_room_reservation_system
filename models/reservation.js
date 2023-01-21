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

    reservationSchema.index( { roomNo: 1, startTime: 1 },
        { unique: true } )   

    module.exports = mongoose.model("Reservation", reservationSchema)