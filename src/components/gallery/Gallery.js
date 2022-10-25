import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "./images";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  // 프레임 크기 줄임
  hover: { scale: 0.90 }
};

const imageVariants = {
  // 이미지 크기 키움
  hover: { scale: 1.3 },
};

const Thumbnail = ({ id, i }) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame thumbnail_div"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/image/${i}`}>
        <motion.img
          src={`assets/imgs/thumbnail_${id}.png`}
          alt="Thumbnail"
          variants={imageVariants}
          transition={transition}
        />
        <motion.img
          src={`assets/imgs/thumbnail_${id}_${id}.png`}
          className="thumbnail_back"
          alt="Thumbnail"
          variants={imageVariants}
          transition={transition}
        />
      </Link>
    </motion.div>
  </motion.div>
);

export const Gallery = () => (
  <>
    <div style={{height: "100px"}}>
      <p className="motto1">Things I love so much that I forget time</p>
    </div>
    <p className="motto2">Things I love so much that I forget time</p>
    <div className="gallery">
      <motion.div
        className="thumbnails"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {images.map((id, i) => (
          <Thumbnail key={id} id={id} i={i} />
        ))}
      </motion.div>
    </div>
  </>
);

// export default Gallery;