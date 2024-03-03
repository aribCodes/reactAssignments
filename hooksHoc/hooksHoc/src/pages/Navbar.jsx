import React, { useEffect, useState } from "react";
import { Radio, Tabs } from "antd";

const Navbar = ({ isMobile }) => {
  const [mode, setMode] = useState("top");
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  console.log("got that", isMobile);
  useEffect(() => {
    console.log("mounted");
    if (isMobile) {
      setMode("left");
    } else {
      setMode("top");
    }
  },[isMobile]);
  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default Navbar;