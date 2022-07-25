import { Button } from "@mui/material";
import React from "react";
import DiaryIcon from "./DiaryIcon/DiaryIcon";
import "./style.css";

const AllDiaries = () => {
  return (
    <div>
      <div id="upperSection">
        <h1 id="sectionHeading">Your Diaries</h1>
        <div id="buttonContainer">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#701710",
              fontFamily: "JMH",
              marginRight: '20px',
              "&:hover": {
                backgroundColor: "#360c09",
              },
            }}
          >
            Create a new Diary
          </Button>
        </div>
      </div>

      <div id="diaryList">
        <DiaryIcon
          colorDiary={"pink"}
          title={"My life"}
          entries={3}
          time={"10 days ago"}
        />

        <DiaryIcon
          colorDiary={"green"}
          title={"word is spinning right roung right"}
          entries={10}
          time={"1 days ago"}
        />
        <DiaryIcon
          colorDiary={"green"}
          title={"word is spinning right roung right"}
          entries={10}
          time={"1 days ago"}
        />
        <DiaryIcon
          colorDiary={"green"}
          title={"word is spinning right roung right"}
          entries={10}
          time={"1 days ago"}
        />
        <DiaryIcon
          colorDiary={"green"}
          title={"word is spinning right roung right"}
          entries={10}
          time={"1 days ago"}
        />
      </div>
    </div>
  );
};

export default AllDiaries;
