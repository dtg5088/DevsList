const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    Name: { type: String, required: true },
    businessType: { type: String, required: true },
    businessSize: { type: String, required: true },
    webSiteGoal: { type: String, required: true },
    siteFunction: { type: String, required: true },
    siteInfoStorage: { type: String, required: true },
    siteBranding: { type: String, required: true },
    mobileApp: { type: String, required: true },
    mobileResponsive: { type: String, required: true },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;