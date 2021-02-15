import React from 'react'
import '../../SASS/HeaderNav.sass'
import { Link } from 'react-router-dom'

const HeaderNav : React.FC  = () => {
    return (
        <div className="block">
            <div className="header-nav">
                    <Link to="/catalog" >
                            Catalog
                    </Link>
            </div>
        </div>
    )
}

export default HeaderNav


