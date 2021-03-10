import React from 'react'
import '../../SASS/HeaderNav.sass'
import { Link } from 'react-router-dom'

const HeaderNav : React.FC  = () => {
    return (
        <div className="block">
            <div className="header-nav">
                    <Link className="nav-header-catalog" to="/catalog" >
                        <i className="fas fa-bars"></i>
                        <div className="catalog-text">
                                Catalog
                        </div>
                    </Link>
                    <div className="header-nav-topic-list">
                        BADs
                    </div>
            </div>
        </div>
    )
}

export default HeaderNav


