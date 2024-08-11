import express from 'express';
import { allBookings, bookVisit, createUser, cancelBooking, toFav, allFav } from "../controllers/userCtrl.js";
import jwtCheck from '../config/auth0Config.js';


const router = express.Router();
router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit)
router.post("/allBookings", allBookings)
router.post("/removeBooking/:id", jwtCheck, cancelBooking)
router.post("/toFav/:rid", jwtCheck, toFav)
router.post("/allFav/", jwtCheck, allFav)
export { router as userRoute }