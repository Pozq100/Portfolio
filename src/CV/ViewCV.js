import './ViewCV.css';

import { Link } from 'react-router-dom';

function ViewCV() {
    return (
        <div className='CVcontainer'>
            <div className='container'>
                <div className='title'>Chen JianCong</div>
                <div className='content'>Email: chenjc005@gmail.com</div>
                <div className='content'>Student at Singapore Polytechnic</div>
            </div>
            <div className='container'>
                <div className='title'>Education</div>
                <div className='content'>
                    <dl>
                        <dt> - Hougang Secondary School: 2018 - 2021</dt>
                        <dd> {'>'} Subjects Taken: A Math, E Math, Physics, Chemistry, Chinese, English, Social Studies, Geography</dd>
                        <br></br>
                        <dt> - Singapore Polytechnic: 2022 - Current</dt>
                        <dd> {'>'} Diploma in Computer Engineering</dd>
                        <dd> {'>'} Fundamentals of Electric Vehicles</dd>
                        <dd> {'>'} Fundamentals of Internet of Things</dd>
                        <dd> {'>'} Python Programming for Internet of Things </dd>
                    </dl>
                </div>
            </div>
            <div className='container'>
                <div className='title'>CCA</div>
                <div className='content'>
                    <dl>
                        <dt> - NPCC (Hougang Secondary School)</dt>
                        <dd> {'>'} Reached Sergeant Rank</dd>
                        <br></br>
                        <dt> - Mind Sports, International Chess (Singapore Polytechnic) </dt>
                        <dd> {'>'} Competitions </dd>
                        <dd> {'>>'} Participated in SUTD Blitz Tournament </dd>
                        <dd> {'>>'} Participated in SP Speed Chess Tournament 2023 (SPSCI 2023) </dd>
                        <dd> {'>>'} Participated in a Friendly Matches against Hwa Chong Institution </dd>
                    </dl>
                </div>
            </div>
            <div className='container'>
                <div className='title'>Events</div>
                <div className='content'>
                    <dl>
                        <dt> - Hilti IT Competition 2024</dt>
                        <br></br>
                        <dt> - Singapore Polytechnic SustHack Boot Camp and Hackathon</dt>
                        <dd> {'>'} Top 2 Finish</dd>
                    </dl>
                </div>
            </div>
            <div className='container'>
                <div className='title'>Skills</div>
                <div className='content'>
                    <dl>
                        <dt> - Front-End Development</dt>
                        <dd> {'>'} JavaScript, HTML, CSS </dd>
                        <dd> {'>'} ReactJS </dd>
                        <br></br>
                        <dt> - Back-End Development</dt>
                        <dd> {'>'} PHP, MySQL </dd>
                        <br></br>
                        <dt> - Machine Learning/AI </dt>
                        <dd> {'>'} Python </dd>
                        <br></br>
                        <dt> - Internet of Things </dt>
                        <dd> {'>'} Python (Raspberry Pi) </dd>
                        <dd> {'>'} C++ (Arduino) </dd>
                        <dd> {'>'} C (PIC18f4550) </dd>
                        <br></br>
                        <dt> - Cloud </dt>
                        <dd> {'>'} AWS </dd>
                        <br></br>
                        <dt> - Depolyment </dt>
                        <dd> {'>'} Kubernetes </dd>
                        <dd> {'>'} Docker </dd>
                    </dl>
                </div>
            </div>
            <div className='container'>
                <div className='title'>Others</div>
                <div className='content'>
                    <dl>
                        <dt> - LeetCode (Problem Solving) </dt>
                        <dd> {'>'} <Link to="https://leetcode.com/Pozq1/" target="_blank">Profile Url</Link> </dd>
                        <br></br>
                        <dt> - CSSBattle (Problem Solving) </dt>
                        <dd> {'>'} <Link to="https://cssbattle.dev/player/pozq1" target="_blank">Profile Url</Link> </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ViewCV;