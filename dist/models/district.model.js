"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const districtSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    province: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Province',
        required: true
    }
});
exports.default = mongoose_1.model('District', districtSchema);
