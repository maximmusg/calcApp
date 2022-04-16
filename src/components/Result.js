import React from 'react'

const Result = (props) => {
    console.log(props)
    return ( 
        <div className="result">
            {props.value}
        </div>
     );
}
 
export default Result;