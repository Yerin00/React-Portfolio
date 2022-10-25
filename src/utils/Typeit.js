import TypeIt from "typeit-react";
import React from 'react';

function Typeit() {

    const SuperStrong = ({ children }) => {
        return <strong style={{ fontSize: "60px", color: "black" }}>{children}</strong>;
    };


    return (
        <div className="container typeStyle text-center">
            <TypeIt className="typeit_md"
                options={{
                    speed: 150,
                    deleteSpeed: 200,
                    loop: true,
                    waitUntilVisible: true,
                }}
                getBeforeInit={(instance) => {
                    instance.type('반갑습니다.<br/><strong className="large">개발자</strong>').pause(1000).delete(2).pause(750).type('<strong>자이너</strong>를 목표로 공부하고 있습니다.');

                    // Remember to return it!
                    return instance;
                }}
            ><SuperStrong>Choi yerin</SuperStrong> 입니다.</TypeIt>
        </div>
    )
}

export default Typeit;