import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <div id="homePage">
    <div className="typewriter">
    <h1 id="pageHeading">Dear Diary...</h1>
    </div>
      <h2 id="pageSubheading">A place for you to note down your thoughts</h2>
      <Button variant="contained" sx={{
        backgroundColor: '#701710',
        fontFamily: 'JMH',
        fontSize: '2.5em',
        borderRadius: 8,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        '&:hover' : {
            backgroundColor: '#360c09',
        }
      }}>Start</Button>
      {/* <button id="startButton">Start</button> */}
    </div>
  );
};

export default HomePage;
