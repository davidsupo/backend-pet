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
exports.getDistricts = exports.getProvinces = exports.getDeparments = void 0;
const district_model_1 = __importDefault(require("../models/district.model"));
const department_model_1 = __importDefault(require("../models/department.model"));
const province_model_1 = __importDefault(require("../models/province.model"));
exports.getDeparments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deparments = yield department_model_1.default.find();
        return res.status(200).json(deparments);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getProvinces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provinces = yield province_model_1.default.find({ deparment: req.params.deparment });
        return res.status(200).json(provinces);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getDistricts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const districts = yield district_model_1.default.find({ province: req.params.province });
        return res.status(200).json(districts);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
