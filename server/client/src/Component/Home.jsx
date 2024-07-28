import React from "react";
import Simple from "./Templates/Simple";
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <div className="bg-gray-800 flex items-center justify-center min-h-screen w-[100vh] flex-col gap-10 redmi:w-[50vh]"> 
            <div className="text-center">
                <span
                    className="text-4xl font-bold text-white redmi:text-2xl"
                    style={{
                        textShadow: `
          1px 1px 0 #000,
          2px 2px 0 #000,
          3px 3px 0 #000,
          4px 4px 0 #000,
          5px 5px 0 #000
        `
                    }}
                >
                     Join my Instagram channel
                </span>
            </div>
            <Link to='/join' className=" bg-white-600">Member</Link>
            </div>
        </>
    )
}
export default Home