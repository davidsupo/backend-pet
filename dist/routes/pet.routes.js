"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_controller_1 = require("../controllers/pet.controller");
const router = express_1.Router();
router.post('/pets', pet_controller_1.registerPet);
router.put('/pets/:id', pet_controller_1.updatePet);
router.get('/pets/:id', pet_controller_1.getPet);
exports.default = router;
