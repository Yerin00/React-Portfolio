import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Game() {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed❌');
  
    const onEntering = () => setStatus('Opening...💬');
    const onEntered = () => setStatus('Opened⭕');
    const onExiting = () => setStatus('Closing...💬');
    const onExited = () => setStatus('Closed❌');
    const toggle = () => setCollapse(!collapse);

    return (
      <>
        <Button block color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>
            Game Development
        </Button>
        <h5>{status}</h5>
        <Collapse
            isOpen={collapse}
            onEntering={onEntering}
            onEntered={onEntered}
            onExiting={onExiting}
            onExited={onExited}
        >
            <div className="row row-header">
                <h1 className="txtWhite"><strong>Game Development</strong></h1>
            </div>
            <Card>
                <CardBody>
                Game Development
                </CardBody>
            </Card>
            <div className="row row-content justify-content-center">
                <div className="col-12 col-lg-4">
                    <section data-scroll className="box">
                        <img src="assets/imgs/Shooting_Star_of_Galaxy.png" alt="game_1"/>
                        <h2 className="txtWhite">
                            Shooting Star of Galaxy
                        </h2>
                        
                        <a href="https://choi-yerin.itch.io/shooting-star-of-the-galaxy" target="_blank">
                        <Button color="danger">Play Now !</Button>
                        </a>
                    </section>
                </div>
                <div className="col-12 col-lg-4">
                    <section data-scroll className="box">
                    <img src="assets/imgs/Box_Shooter.png" alt="game_1"/>
                        <h2 className="txtWhite">
                            Box Shooter
                        </h2>
                        
                        <a href="https://choi-yerin.itch.io/box-shooter" target="_blank">
                        <Button color="danger">Play Now !</Button>
                        </a>
                    </section>
                </div>
                <div className="col-12 col-lg-4">
                    <section data-scroll className="box">
                    <img src="assets/imgs/Solar_System.png" alt="game_1"/>
                        <h2 className="txtWhite">
                            Solar System
                        </h2>
                        
                        <a href="https://choi-yerin.itch.io/solar-system" target="_blank">
                        <Button color="danger">Play Now !</Button>
                        </a>
                    </section>
                </div>
            </div>
        </Collapse>
      </>
    )
}

export default Game