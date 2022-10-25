import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Info from './InfoComponent';
import {Gallery} from './gallery/Gallery';
import SingleImage from './gallery/SingleImage';


function MainComponent() {


  return (
    <div className="App">
        <Header />
        <Routes>
          {/* <Route
          render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
              <Routes location={location} key={location.pathname}>
                  <Route exact path="/" element={<Gallery />} />
                  <Route exact path="/image/:id" element={<SingleImage />} />
              </Routes>
              </AnimatePresence>
          )}
          /> */}
          <Route exact path="/" element={<Gallery />} />
          <Route exact path="/image/:id" element={<SingleImage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default MainComponent