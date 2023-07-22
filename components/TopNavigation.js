import {FaConnectdevelop} from "react-icons/fa"

export default function TopNavigation(){
    return(
        <div className='flex justify-between border-2 border-red-500 p-4'>
            <div className="flex items-center gap-2">
                <FaConnectdevelop size={30}/>
                <div className="flex items-center gap-2">KYVConnect</div>
            </div>
            <div className="border-2 border-green-500">SEARCH</div>
            <div className="border-2 border-blue-500">USER</div>
        </div>
    );
};