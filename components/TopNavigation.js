import {FaConnectdevelop} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {FiSettings} from "react-icons/fi"

import Link from 'next/Link'

export default function TopNavigation(){
    return(
        <div className='flex justify-between gap-20 border-2 border-red-500 p-4'>
            <div className="flex items-center gap-2">
                <FaConnectdevelop size={30}/>
                <div className="flex items-center gap-2">KYVConnect</div>
            </div>
            <div className="flex rounded-xl flex-grow border-2 gap-4 p-2 border-zinc-500">
                <input type="search" 
                    placeholder="Find Jobs" 
                    className="flex w-full bg-transparent outline-none items-center">
                </input>
                <div className="flex items-center">
                    <AiOutlineSearch size={20}/>
                </div>
            </div>
            <div className="flex gap-4 p-2">
                <div>
                    <CgProfile size={25}/>
                </div>
                <div>
                    <FiSettings size={24}/>
                </div>
            </div>
        </div>
    );
};