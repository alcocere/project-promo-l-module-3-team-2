import React from "react";

function Palette(props) {
  const handlePalettes = (ev) => {
    props.handleInput(ev.target.name, props.value);
  };

  return (
    <label className="design__squareLabel">
      <input
        type="radio"
        name="palette"
        value={props.value}
        checked={props.palettes === props.value}
        onChange={handlePalettes}
      />
      <ul className={`design__square palette-${props.value}`}>
        <li className="design__squareColor color-1"></li>
        <li className="design__squareColor color-2"></li>
        <li className="design__squareColor color-3"></li>
      </ul>
    </label>
  );
}

export default Palette;
