import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        
        <div  className='cover'>
            
            <div className='inside'>
                <div className="logo">
                    LOGO
                </div>

            
            <div class="sidebar">

                <div className='hello'><Link className='sidebar_item' to="/">Add Student</Link></div>
                <div className='hello'><Link className='sidebar_item' to="/manage">Manage Student</Link></div>
                <div className='hello'><Link className='sidebar_item'>Logout</Link></div>
            </div>
            </div>

            

           

        </div>
    )
}

export default Sidebar
