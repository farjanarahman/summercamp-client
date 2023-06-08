import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }

  const navItems = (
    <>
      <li className="font-semibold"><Link to="/">Home</Link></li>

      {user?.email ? <>
        <li className="font-semibold"><Link to="/addToy">Add A Toy</Link></li>
        <li className="font-semibold"><Link to="/toys">All Toys</Link></li>
        <li className="font-semibold"><Link to="/mytoys">My Toys</Link></li>
        <li className="font-semibold"><Link to='/blog'>Blogs</Link></li>
        <li><button className="btn btn-info" onClick={handleLogout}>Log out</button></li>
      </>
        : <>
          <li className="font-semibold"><Link to="/allToy">All Toys</Link></li>
          <li className="font-semibold"><Link to='/blog'>Blogs</Link></li>
          <Link to='/login'>
            <button className="btn btn-info flex justify-end">Login</button>
          </Link>

        </>
      }

    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        {/* Logo and Name */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="navbar-logo" src='https://i.ibb.co/T2Kf6SY/charley-countdown-2.png' alt="" />
        </Link>
        <h3 className="navbar-title">RoboPlayground</h3>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.photoURL ? <img style={{ width: '50px', marginRight: "15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <></>

        }
      </div>
    </div>
  );
};

export default Navbar;