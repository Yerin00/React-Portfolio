import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function WebDevelopment() {
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
            Web Development
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
                <h1 className="txtWhite"><strong>Web Development</strong></h1>
            </div>
            <Card>
                <CardBody>
                    Web Development
                </CardBody>
            </Card>
            <div className="row row-content justify-content-center">
                <div className="col-12 col-lg-4">
                    <section data-scroll className="box">
                        <img src="assets/imgs/firsthead.png" alt="firsthead"/>
                        <h2 className="txtWhite">
                            My First 3D Modeling : Animation Head
                        </h2>
                        <p className="txtWhite">
                            A Boy
                            2022
                        </p>
                    </section>
                </div>
                <div className="col-12 col-lg-4">
                    <section data-scroll className="box">
                        <img src="assets/imgs/sherlock.png" alt="sherlock"/>
                        <h2 className="txtWhite">
                            My Second 3D Modeling : Animation Head
                        </h2>
                        <p className="txtWhite">
                            Sherlock Benedict Cumberbatch
                            2022
                        </p>
                    </section>
                </div>
                <div className="col-12 col-lg-4">
                    <section data-scroll className="box">
                        <img src="assets/imgs/lupin.png" alt="lupin"/>
                        <h2 className="txtWhite">
                            My Third 3D Modeling : Animation Head
                        </h2>
                        <p className="txtWhite">
                            Remus Lupin David Thewlis
                            2022
                        </p>
                    </section>
                </div>
            </div>
        </Collapse>
      </>
    )
}

export default WebDevelopment