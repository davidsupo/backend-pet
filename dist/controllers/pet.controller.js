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
exports.getPet = exports.updatePet = exports.registerPet = void 0;
const pet_model_1 = __importDefault(require("../models/pet.model"));
exports.registerPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPet = new pet_model_1.default(req.body);
        yield newPet.save();
        return res.status(201).json(newPet);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.updatePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield pet_model_1.default.findById(req.params.id);
        if (!pet || pet.disabled)
            return res.status(404).json({ message: 'Pet not found with ID: ' + req.params.id });
        const updatePet = yield pet_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).json(updatePet);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield pet_model_1.default.findById(req.params.id).populate({ path: 'owners', match: { disabled: false } });
        if (!pet || pet.disabled)
            return res.status(404).json({ message: 'Pet not found with ID: ' + req.params.id });
        return res.status(200).json(pet);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
