import React from "react";
import './Skills.css';

function Skills(){
    return(
        <div className="container mt-5">
            <h2 className="text-center mb-4">My Skills</h2>
            <div className="row text-center">
                <div className="col-md-3 skill-box">Java</div>
                <div className="col-md-3 skill-box">JavaScript</div>
                <div className="col-md-3 skill-box">Python</div>
                <div className="col-md-3 skill-box">MatLAb</div>
                <div className="col-md-3 skill-box">Vivado</div>
                <div className="col-md-3 skill-box">Git</div>
                <div className="col-md-3 skill-box">Linux</div>
            </div>
        </div>
    );
}

export default Skills;