import { render } from "react-dom";
import React, { useState, useCallback, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "./style.css";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  ),
];

const MySlider = () => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), [2000]);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        console.log(props);
        return <Page key={key} style={props} />;
      })}
    </div>
  );
};

export default MySlider;
