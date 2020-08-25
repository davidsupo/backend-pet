"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const petSchema = new mongoose_1.Schema({
    avatar: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['MACHO', 'HEMBRA']
    },
    color: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    features: {
        type: [String],
        required: false
    },
    origin: {
        type: String,
        required: true,
        enum: ['ADOPTADO', 'PROPIO', 'RESCATADO']
    },
    owners: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
    medicalHistory: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'MedicalHistory',
        required: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    disabledAt: {
        type: Date
    }
});
exports.default = mongoose_1.model('Pet', petSchema);
