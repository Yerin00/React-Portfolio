import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Blender() {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closedβ');
  
    const onEntering = () => setStatus('Opening...π¬');
    const onEntered = () => setStatus('Openedβ­');
    const onExiting = () => setStatus('Closing...π¬');
    const onExited = () => setStatus('Closedβ');
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
                    λΈλ λλ₯Ό κ³΅λΆνλ©΄μ λ§λ  μμλ¬Όλ€ μλλ€. νμ΄ν΄λ¦¬ λμμλλ€. λμ§νΈ λλ‘μμ νλ κ²½νμ ν λλ‘ μ€μ»¬ν μμμ μ§ννλ λ°°μ°κΈ° λ μμνλ κ² κ°μ΅λλ€.
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