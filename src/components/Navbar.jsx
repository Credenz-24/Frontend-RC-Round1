import rclogo from "../images/rclogo.png";
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [nav, setNav] = useState(true);
    const [tokenExists, setTokenExists] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token exists in local storage
        const token = localStorage.getItem('jwt');
        if(token){
            setTokenExists(true)
        }
    }, []);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleLogout = () => {
        axios.get('https://api.rc.credenz.in/api/logout', {
                headers: {
                    'Authorization': `${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                localStorage.removeItem('jwt');
                navigate('/');
                toast.info("Logged Out!");
                location.reload();
            })
            .catch(err => {
                console.error(err.response ? err.response.data.detail : err.message);
            });
    }

    return (
        <div className='navbar h-24 w-full px-[5vw] text-white flex justify-between items-center bg-transparent '>

            <div className="nav-left flex justify-center items-center">
                <img src={rclogo} alt="" className='h-[80px] w-[120px]' />
            </div>
            <div className="nav-right text-[17px] font-normal justify-center items-center gap-[20px] hidden md:flex font-red-hat-display">
                {tokenExists && (
                    <>
                        <a href="/mcq" className='px-[20px] py-[10px] text-center'>Question Page</a>
                        <a href="/instruction" className='px-[20px] py-[10px] text-center'>Instructions</a>
                    </>
                )}
                <a href="/leaderboard" className='px-[20px] py-[10px] text-center'>Leaderboard</a>
                {tokenExists && (
                    <a onClick={handleLogout} className='px-[20px] py-[10px] text-center'>Logout</a>
                )}
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-[100%] bg-zinc-900 z-[9999] translate-x-0  duration-300 ' : 'fixed left-[-100%] top-0 w-[60%] h-[100%] bg-zinc-900 z-[9999] translate-x-3 duration-300'}>
                <div className="nav-left">
                    <h1 className='text-[30px] font-bold px-[19px] mt-[25.1px] '>LOGO.</h1>
                </div>
                <div className='flex flex-col justify-start items-start w-full gap-[40px] py-[25px] uppercase ' >
                    {tokenExists && (
                        <>
                            <a href="/mcq" className='p-4 border-b border-zinc-700 w-full'>Question Page</a>
                            <a href="/instruction" className='p-4 border-b border-zinc-700 w-full'>Instructions</a>

                            <a onClick={handleLogout} className='p-4 border-b border-zinc-700 w-full'>Logout</a>
                        </>
                    )}
                    <a href="/leaderboard" className='p-4 border-b border-zinc-700 w-full'>Leaderboards</a>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
