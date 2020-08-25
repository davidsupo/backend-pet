"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const deparmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('Deparment', deparmentSchema);
