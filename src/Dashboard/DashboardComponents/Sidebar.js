import { useState } from "react"
import { Link, useLocation } from 'react-router-dom'

import {BsArrowLeftCircle} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {TbLogout} from 'react-icons/tb'
import { FaHospitalUser } from 'react-icons/fa';
import {GiMedicines} from 'react-icons/gi'
import {GrDocumentStore} from 'react-icons/gr'
import Logo from "./Logo"


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation()

    const Menus = [
        { title: 'Home', path: '/uhome',src: <AiFillHome/> },
        { title: 'Doctors', path: '/dashboard/doctors' ,src:<FaHospitalUser/> },
        { title: 'Medication', path: '/medication' ,src:<GiMedicines/> },
        { title: 'Reports', path: '/reports' ,src:<GrDocumentStore/> },
        { title: 'Logout', path: '/action' ,src:<TbLogout/> }
    ]


    return (
        <>  
          
            <div
                className={`${open ? 'w-52 transition-all' : 'w-fit'
                    }  sm:block h-screen relative  bg-gray-100 border-r p-4`}>
                <BsArrowLeftCircle
                    className={` ${!open && 'rotate-180'
                        } absolute  transition ease-in-out text-3xl  fill-white  bg-eswasthyaprim  rounded-full cursor-pointer top-9 -right-4 `}
                    onClick={() => setOpen(!open)} 
                />

                <Logo open = {open}/>

                <ul className="pt-2">
                    {
                        Menus.map((menu, index) => (
                            <Link to={menu.path} key={index}>
                                <li className={`flex items-center gap-x-5 p-3 text-base font-medium rounded-lg cursor-pointer text-black 
                                       ${menu.gap ? 'mt-9' : 'mt-1'} ${location.pathname === menu.path && 'bg-eswasthyaprim text-white'}`}>
                                    <span className='text-2xl'>{menu.src}</span>
                                    <span className={`${!open && 'hidden'} origin-left duration-300  hover:block ml-[1px] font-cera`}>
                                        {menu.title}
                                    </span>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar;