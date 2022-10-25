import { motion } from 'framer-motion'
import React from 'react'

function InfoComponent() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">

            </div>
            <div className="col">

</div>
            {/* 프로필 */}
            <h2>최예린</h2>
            <ul>
                <li>2000.03.11</li>
                <li>경북대학교 컴퓨터학부 글로벌소프트웨어융합전공</li>
                <li>예술대학 미디어아트 전공 </li>
                <li>대구 거주</li>
            </ul>

        </div>
        <motion.div
            className="myBtn"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <a role="button" className="btn btn-dark" href="https://github.com/Yerin00?tab=repositories" target="_blank">
            <i className="fa fa-envelope-o"></i> Github
        </a>
        <a role="button" className="btn btn-success" href="https://velog.io/@zlekfl0311" target="_blank">
            <i className="fa fa-envelope-o"></i> velog
        </a>
        <a role="button" className="btn btn-danger" href="https://choi-yerin.itch.io/" target="_blank">
            <i className="fa fa-envelope-o"></i> itch
        </a>

        {/* 아코디언 구현하기 */}
        <div className="row">
            {/* 경험해본 기술 */}
        </div>

        <div className="row">
            {/* 프로젝트 */}
        </div>
        <div className="row">
            {/* 클론코딩 */}
        </div>
        <div className="row">
            {/* 이수완료한 외부강의 */}
            코세라
        </div>

    </div>

    // 
    // 
    // 
  )
}

export default InfoComponent