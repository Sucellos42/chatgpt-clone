import React from 'react'
import {NewChat} from "@/components/NewChat";

export const SideBar = () => {

  return (
     <div className="p-2 flex flex-col h-screen">
       <div className="flex-1">
         <div>
           {/* New Chat */}
           <NewChat/>
           <div>
             {/*  Modal section  */}
           </div>

           {/*  Map through the ChatRows*/}
         </div>
       </div>
     </div>
  )
}
