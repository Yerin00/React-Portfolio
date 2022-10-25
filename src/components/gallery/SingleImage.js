import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "./images";
import { descriptions } from "./Descriptions";



const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

// export const SingleImage = () => (
  
//   <motion.div className="single" initial="exit" animate="enter" exit="exit">
//     <motion.img
//       variants={imageVariants}
//       src={`assets/imgs/thumbnail_${
//         images[parseInt(params.id, 10)]
//       }.png`}
//       alt="The Barbican"
//     />
//     <motion.div className="back" variants={backVariants}>
//       <Link to="/">← Back</Link>
//     </motion.div>
//   </motion.div>
// );

const renderDescription = ({keyword}) => {
  if (keyword === "3d") {
    return (
      <div>
        <p>this is 3d page</p>
{/* <Blender /> */}
      </div>

    )
  }
}

function SingleImage() {

  const { id } = useParams();

  return (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
    <motion.img
      style={{height: "100%", width:"auto"}}
      variants={imageVariants}
      src={`/assets/imgs/thumbnail_${
        images[parseInt(id, 10)]
      }.png`}
      alt="Thumbnail"
    ></motion.img>
    <motion.div
      style={{ top: "20%", marginLeft: "50%", marginRight: "10%", position: "absolute"}}>
      <h2>{images[parseInt(id, 10)]}</h2>
      <h4>{descriptions[parseInt(id, 10)]}</h4>
    </motion.div>
    <motion.div className="back" variants={backVariants}>
      <Link to="/">← Back</Link>
    </motion.div>
  </motion.div>
  )
}

export default SingleImage
