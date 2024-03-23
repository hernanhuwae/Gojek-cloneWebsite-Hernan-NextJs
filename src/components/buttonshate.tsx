import React from "react";

interface shareButton{
    bg?:string
    desc:string
}

export const IButton: React.FC<shareButton>=({bg,desc})=>{
    return(
        <button className="bg-[#00aa13] py-4 px-12 rounded-full text-white font-semibold hover:bg-green-700">
            {desc}
      </button>
    )
}