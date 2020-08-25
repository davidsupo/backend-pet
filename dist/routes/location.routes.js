"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_controller_1 = require("../controllers/location.controller");
const router = express_1.Router();
router.get('/deparments', location_controller_1.getDeparments);
router.get('/provinces/:deparment', location_controller_1.getProvinces);
router.get('/districts/:province', location_controller_1.getDistricts);
exports.default = router;
