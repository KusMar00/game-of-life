import React, { useState } from "react";
import { MdModeEdit, MdEditOff, MdPlayArrow, MdPause } from "react-icons/md";
import "./Controls.css";

const Controls = () => {
  const [mode, setMode] = useState({ edit: false, play: false });

  function handleEditClick(e) {
    e.preventDefault();
    setMode({ ...mode, edit: !mode.edit });
    console.log(mode);
  }

  function handlePlayClick(e) {
    e.preventDefault();
    setMode({ ...mode, play: !mode.play });
    console.log(mode);
  }

  return (
    <div className="Controls-bar">
      <div className="Button" onClick={handleEditClick}>
        {mode.edit ? <MdEditOff /> : <MdModeEdit />}
      </div>
      <div className="Button" onClick={handlePlayClick}>
        {mode.play ? <MdPause /> : <MdPlayArrow />}
      </div>
    </div>
  );
};

export default Controls;
