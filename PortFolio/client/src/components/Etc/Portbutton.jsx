import React from 'react'

const Portbutton = () => {
    const toggleMenu = (e) => {
        e.preventDefault();

        const ulElements = document.querySelectorAll('.ham div ul');

        ulElements.forEach((ulElement) => {
            ulElement.style.display = ulElement.style.display === 'block' ? 'none' : 'block';
        });
    };

    return (
        <>
            <div className='button'>
                <ul>
                    <li><a href="/">SITE</a></li>
                    <li><a href="/">GITHUB</a></li>
                    <li><a href="/">NOTION</a></li>
                </ul>
            </div>
            <div className="ham" onClick={(e) => toggleMenu(e)}>
                <div>
                    <ul>
                        <li><a href="/">SITE</a></li>
                        <li><a href="/">GITHUB</a></li>
                        <li><a href="/">NOTION</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Portbutton