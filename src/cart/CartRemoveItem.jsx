import React from "react";

function RemoveItem({item, removeFunction}){
    return(
        <div className="removeItemBox">
            <button className="remItem bg-slate-100 hover:bg-slate-300 font-bold py-2 px-4 rounded-lg " onClick={()=> removeFunction(item)}>Remover</button>
        </div>
    )
}

export default RemoveItem;