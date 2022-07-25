import express from "express";
import { getDiaries, createDiary } from "../controllers/diaries.js";

const router = express.Router();

//localhost:5005/diaries

router.get("/", getDiaries);
router.post("/",createDiary); 

export default router;
