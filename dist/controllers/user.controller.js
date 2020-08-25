"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.updateUser = exports.signUp = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.default.jwtSecret, {
        expiresIn: 86400
    });
}
exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new user_model_1.default(req.body);
        yield newUser.save();
        newUser.password = '';
        return res.status(201).json(newUser);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById(req.params.id);
        if (!user || user.disabled)
            return res.status(404).json({ message: 'User not found with ID: ' + req.params.id });
        const updateUser = yield user_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).json(updateUser);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Please. Send your email and password' });
    }
    const user = yield user_model_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: 'The user does not exists' });
    }
    const isMatch = yield user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(200).json({ token: createToken(user) });
    }
    return res.status(400).json({ message: 'Email or password are incorrect' });
});
