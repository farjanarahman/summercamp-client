import { Outlet, NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaUsers } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const isInstructor = true;
    const [isAdmin] = useAdmin();

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <h2 className='text-2xl mt-4 font-semibold'>Admin Dashboard</h2>
                                <div className="divider"></div>
                                <li><NavLink to='/dashboard/uHome'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/mngCls'><FaBook></FaBook>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/mngUser'><FaUsers></FaUsers>Manage Users
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>

                            </> :
                                <>
                                    <h2 className='text-2xl mt-4 font-semibold'>User Dashboard</h2>
                                    <div className="divider"></div>
                                    <li><NavLink to='/dashboard/uHome'><FaHome></FaHome>User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/enrollCls'><FaBook></FaBook>My Enrolled Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/myCourse'><FaUsers></FaUsers>My Selected Classes
                                        <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>

                                    {/* <h2 className='text-2xl mt-4 font-semibold'>Instructor Dashboard</h2>
                                    <div className="divider"></div>
                                    <li><NavLink to='/dashboard/uHome'><FaHome></FaHome>User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/addCls'><FaBook></FaBook>Add a Class</NavLink></li>
                                    <li><NavLink to='/dashboard/myCls'><FaUsers></FaUsers>My Classes</NavLink></li> */}


                                </>
                        }

                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/instructor'><FaUsers></FaUsers>Instructors</NavLink></li>
                        <li><NavLink to='/classes'><FaBook></FaBook>Classes</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;