import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { SelectButton } from "./SelectButtonNote";
const Wrapper = styled(motion.div)`
  padding: 0% 8%;
  margin-bottom: 20px;
  .carousel {
    cursor: grab;
  }
`;

const InnerCarusel = styled(motion.div)`
  ul {
    display: flex;
    grid-gap: 10px;
    position: relative;
    z-index: 1;
    display: flex;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    list-style: none;
    margin: 0;
    padding: 0;
    grid-gap: 10px;
  }
`;

const SelectTodo = ({ notes, filter, setfilter }) => {
  const [width, setwidth] = React.useState(0);
  const carousel = React.useRef();
  React.useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [filter]);

  const [ActiveIndex, setActiveIndex] = useState(0);
  const select = notes.reduce(
    (acc, el) => {
      if (acc.includes(el.title)) {
        return acc;
      }
      return [...acc, el.title];
    },
    [""]
  );
  return (
    <Wrapper>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <InnerCarusel drag="x" dragConstraints={{ right: 0, left: -width }}>
          <ul>
            {select.map((sel, index) => (
              <SelectButton
                key={sel}
                sel={sel}
                ActiveIndex={ActiveIndex === index}
                handleIndexAndFilter={() => {
                  setActiveIndex(index);
                  setfilter({ ...filter, query: sel });
                }}
              />
            ))}
          </ul>
        </InnerCarusel>
      </motion.div>
    </Wrapper>
  );
};

export default SelectTodo;
