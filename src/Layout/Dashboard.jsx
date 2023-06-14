import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
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

                    {/* {
                        !isAdmin && !isInstructor && <>
                            <li><Link to="/dashboard/selectitem">My Selected Classes</Link></li>
                            <li><Link to="/dashboard/enrolled">My Enrolled Classes</Link></li>
                        </>
                    } */}

                    <li><Link to="/dashboard/selectitem">My Selected Classes</Link></li>
                    <li><Link to="/dashboard/enrolled">My Enrolled Classes</Link></li>

                    {/* {isInstructor && <>
                        <li><Link to='/dashboard/class'>Add Class</Link></li>

                        <li><Link to="/dashboard/myclass">My Classes</Link></li>
                    </>} */}

                    <li><Link to='/dashboard/class'>Add Class</Link></li>

                    <li><Link to="/dashboard/myclass">My Classes</Link></li>

                    {/* {isAdmin && <>
                        <li><Link to="/dashboard/allclass">Manage Classes</Link></li>
                        <li><Link to="/dashboard/action">Manage Users</Link></li>
                    </>} */}

                    <li><Link to="/dashboard/allclass">Manage Classes</Link></li>
                        <li><Link to="/dashboard/action">Manage Users</Link></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;




// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { AiFillHome, AiOutlinePlusCircle, AiOutlineUnorderedList, AiOutlineUser } from 'react-icons/ai';
// import { motion } from 'framer-motion';
// import useInstructor from '../hooks/useInstructor';
// import useAdmin from '../hooks/useAdmin';

// const MenuItem = ({ icon, link, text }) => {
//   return (
//     <motion.li
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="menu-item"
//     >
//       {icon}
//       <Link to={link}>{text}</Link>
//     </motion.li>
//   );
// };

// const Dashboard = () => {
//   const [isAdmin] = useAdmin();
//   const [isInstructor] = useInstructor();

//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col items-center justify-center">
//         <Outlet />
//         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
//           Open drawer
//         </label>
//       </div>
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//         <ul className="menu p-4 w-80 h-full bg-neutral-700 text-white">
//           <MenuItem icon={<AiFillHome />} link="/" text="Users Home" />

//           {!isAdmin && !isInstructor && (
//             <>
//               <MenuItem icon={<AiOutlineUnorderedList />} link="/dashboard/selectitem" text="My Selected Classes" />
//               <MenuItem icon={<AiOutlineUnorderedList />} link="/dashboard/enrolled" text="My Enrolled Classes" />
//             </>
//           )}

//           {isInstructor && (
//             <>
//               <MenuItem icon={<AiOutlinePlusCircle />} link="/dashboard/class" text="Add Class" />
//               <MenuItem icon={<AiOutlineUnorderedList />} link="/dashboard/myclass" text="My Classes" />
//             </>
//           )}

//           {isAdmin && (
//             <>
//               <MenuItem icon={<AiOutlineUnorderedList />} link="/dashboard/allclass" text="Manage Classes" />
//               <MenuItem icon={<AiOutlineUser />} link="/dashboard/action" text="Manage Users" />
//             </>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
