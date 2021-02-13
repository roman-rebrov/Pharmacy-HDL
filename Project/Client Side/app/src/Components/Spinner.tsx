import React from 'react'
import '../SASS/Spinner.sass'

const Spinner = () => {
    return(
        <div className="spinner-wrap">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default  Spinner;