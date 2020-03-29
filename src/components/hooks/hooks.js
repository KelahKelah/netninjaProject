import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [button, setButton] = useState('');

    useEffect(() => {
        console.log('yes component mouted', button)
    });

    const onYespress = () => {
        setButton('No');
    }
    const onNopress = () => {
        setButton('No');
    }
    
    return(
        <div>
            <button style={{width: '50px', height: '30px' }} onClick={() => onYespress()}>Yes</button>
            <button style={{width: '50px', height: '30px'}} onClick={() => onNopress()}>No</button>
        </div>
    )
}
export default Hooks;


