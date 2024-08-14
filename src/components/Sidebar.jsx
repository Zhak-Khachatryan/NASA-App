import React from 'react'

export default function Sidebar(props) {
    const { handleToggleModel, data } = props
    return (
        <div className='sidebar'>
            <div className="bgOverlay" onClick={handleToggleModel} >
                <div className="sidebar-contents">

                    <h2>{data?.title}</h2>
                    <div className='descriptionContainer'>
                        <p className="descriptionTitle"> {data?.date} </p>
                        <p>{data.explanation}</p>
                    </div>
                    <button  className="fa-solid fa-arrow-right" onClick={handleToggleModel}></button>
                </div>
            </div>
        </div>
    )
}
