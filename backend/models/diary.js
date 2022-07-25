import mongoose from "mongoose";

const diarySchema = mongoose.Schema({
  diaryId: Number,
  title: String,
  subtitle: String,
  creator: String,
  lastUpdate: {
    type: Date,
    default: new Date(),
  },
  locked: Boolean,
  unlockPassword: String,
});

const Diary = mongoose.model("Diary", diarySchema);

export default Diary;
