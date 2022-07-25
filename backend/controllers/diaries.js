import Diary from "../models/diary.js";
export const getDiaries = async (req, res) => {
    try {
        const diaries = await Diary.find();

        console.log(diaries);

        res.status(200).json(diaries); 
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
};

export const createDiary = async (req, res) => {
    const diary = req.body;

    const newDiary = new Diary(diary);
    try {
       await newDiary.save();

       res.status(201).json(newDiary);
    } catch(error) {
        res.status(409).json({message: error.message}); 
    }
  };
