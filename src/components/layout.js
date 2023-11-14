import { Link , Outlet } from "react-router-dom";
import './style1.css'
function Layout(){
    return(
        <>
            
            <nav>
                <ul>
                    <li>
                        <Link to='/' className="link">HOME</Link>
                    </li>
                    <li>
                        <Link to='/signin' className="link">SIGN IN</Link>
                    </li>
                    <li>
                        <Link to='/login'className="link" >LOG IN</Link>
                    </li>
                    <li>
                        <Link to='/demo' className="link">COUNT</Link>
                    </li>
                    <li>
                        <Link to='/hello'>Data</Link>
                    </li>
                    <li>
                        <Link to='/sum'>SUM</Link>
                    </li>
                    <li>
                        <Link to='/form'>FORM</Link>
                    </li>
                    <li>
                        <Link to='/register'>REGISTER</Link>
                    </li>
                    <li>
                        <Link to='/fetch'>FETCH</Link>
                    </li>
                    <li>
                        <Link to='/fetch1'>FETCH1</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;