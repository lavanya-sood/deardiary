import React from "react";
import "./style.css";

const DiaryIcon = ({colorDiary}) => {
  return (
    <div>
      <div id="bookDiv">
      <div class="book">
        <div class="back" style={{background: colorDiary}}></div>
        <div class="page6"></div>
        <div class="page5"></div>
        <div class="page4"></div>
        <div class="page3"></div>
        <div class="page2"></div>
        <div class="page1"></div>
        <div class="front" style={{background: colorDiary}}></div>
      </div>
      </div>
    </div>
  );
};

export default DiaryIcon;
