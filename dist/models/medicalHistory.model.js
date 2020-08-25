"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const medicalHistorySchema = new mongoose_1.Schema({
    createAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('MedicalHistory', medicalHistorySchema);
