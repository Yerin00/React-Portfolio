import React, { useEffect } from 'react';
import Rellax from 'rellax';
import ScrollOut from "scroll-out";
import TopButton from '../utils/TopButton';

import Typeit from '../utils/Typeit';
import WebDevelopment from './collapse/WebDevelopment';
import Blender from './collapse/Blender';
import Game from './collapse/Game';



function HomeComponent() {
    useEffect(() => {
        ScrollOut({
           
        });
    });

    return (
        <div className="container">
            <TopButton />
            <div className="row row-content justify-content-center">
                <div className="col-12 col-md-4">
                    <img src="assets/imgs/laptop_bg.png" height="auto" width="auto" alt="laptop"/>
                </div>
                <div className="col-12 col-md-7">
                    <Typeit />
                </div>
            </div>
            <div>
                <WebDevelopment />
            </div>
            <div>
                <Blender />
            </div>
            <div>
                <Game />
            </div>
            
        </div>
    )
}

export default HomeComponent