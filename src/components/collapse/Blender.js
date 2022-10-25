import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Blender() {
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
            Blender
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
                <h1 className="txtWhite"><strong>Blender</strong></h1>
            </div>
            <Card>
                <CardBody>
                    블렌더를 공부하면서 만든 작업물들 입니다. 하이폴리 두상입니다. 디지털 드로잉을 했던 경험을 토대로 스컬핑 작업을 진행하니 배우기 더 수월했던 것 같습니다.
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

export default Blender