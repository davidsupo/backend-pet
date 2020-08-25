"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const provinceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    deparment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Deparment',
        required: true
    }
});
exports.default = mongoose_1.model('Province', provinceSchema);
