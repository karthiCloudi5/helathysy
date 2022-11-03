const mongoose=require("mongoose");

const healthsySchema=new mongoose.Schema({
    id:{
        type:Number
    },
    sNo:{
        type:Number
    },
    name: {
        type: String
    },
    mobile: {
        type: String,
        trim: true,
        // validate: {
        //     validator: function (v) {
        //     return /^[6,7,8,9][0-9]{0,9}/.test(v);
        //     },
        //     message: "{VALUE} is not a valid 10 digit number!",
        // },
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email",
        },
    },
    gender: {
        type: String
    },
    primarySpecialisation: {
        type: String
    },
    secondarySpecialisation: {
        type: String
    },
    medicalRegistrationNo: {
        type: String
    },
    membership: {
        type: String
    },
    experience: {
        type: String
    },
    educationalQualification: {
        type: String
    },
    typeCityTown: {
        type: String
    },
    pincode: {
        type: Number
    },
    fees: {
        type: Number
    },
    workingDays: {
        type: Number
    },
    timings: {
        type: String
    },
    establishmentDetails: {
        type: String
    },
    currentAssociationwithOtherPlatform: {
        type: String
    },
    listforOnlineDoctorConsultation: {
        type: String
    },
    listforInClinicAppointment: {
        type: String
    }

},{
    versionKey: false,
    timestamps: true
})

module.exports=mongoose.model("healthysyDoctor",healthsySchema)