import React from 'react'
import {Link} from 'react-router-dom'

export default ()=>{
    return(
        <div>
            <h1><Link to='/persinfo'>Personal Info</Link></h1>
            <h1><Link to='/persBackgroundDisplay'>Personal Background</Link></h1>
        </div>
    )
}