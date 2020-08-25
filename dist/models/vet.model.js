"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const vetSchema = new mongoose_1.Schema({
    comercialName: {
        type: String,
        required: true
    },
    ruc: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: [String]
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
exports.default = mongoose_1.model('Vet', vetSchema);
