import React from 'react';

const ColorButton = ({ floorRef }) => {
  const changeFloorColor = () => {
    if (floorRef.current && floorRef.current.maskMesh) {
      floorRef.current.maskMesh.material.color.set(Math.random() * 0xffffff);
    }
  };

  return (
    <button onClick={changeFloorColor}>Change Floor Color</button>
  );
};

export default ColorButton;
