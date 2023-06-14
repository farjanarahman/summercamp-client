import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin]=useAdmin()
    const [isInstructor]=useInstructor()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-neutral-700 text-white ">
                    {/* Sidebar content here */}
                    <li><AiFillHome className='bg-black-300'></AiFillHome> <Link to='/'>Users Home</Link></li>
                   
                   {
                    !isAdmin && !isInstructor && <>
                      <li><Link to="/dashboard/selectitem">My Selected Classes</Link></li>
                    <li><Link to="/dashboard/enrolled">My Enrolled Classes</Link></li>
                    </>
                   }

                   {isInstructor && <>
                    <li><Link to='/dashboard/class'>Add Class</Link></li>
                    
                    <li><Link to="/dashboard/myclass">My Classes</Link></li>
                   </>}
                    {isAdmin && <>
                        <li><Link to="/dashboard/allclass">Manage Classes</Link></li>
                        <li><Link to="/dashboard/action">Manage Users</Link></li>
                    </>}
                   
                    
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;