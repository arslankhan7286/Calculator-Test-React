import React from 'react';
import './Style.css'

const ShowResult = ({Result}) => {
    return (
        <div className="result">
            <p>{Result}</p>
        </div>
    );
}
export default ShowResult;