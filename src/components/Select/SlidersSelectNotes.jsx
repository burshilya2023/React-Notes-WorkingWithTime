import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./imageDate";
import styled from "styled-components";
const Body = styled(motion.div)`
  height: 500px;
  background: #151515;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }
  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }

  img {
    position: absolute;
    max-width: 100%;
  }
  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
export const Sliders = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Body>
      <Wrapper>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={({ offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </Wrapper>
    </Body>
  );
};
