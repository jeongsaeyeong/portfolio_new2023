import React from 'react'

const Overlay = (props) => {
    return (
        <>
            <div className="overlayup"></div>
            <div className="overlaydown"></div>
            <div className={props.black === 'black' ? 'black' : 'black none'}>
                <div className="up"></div>
                <div className="down"></div>
            </div>
        </>
    )
}

export default Overlay