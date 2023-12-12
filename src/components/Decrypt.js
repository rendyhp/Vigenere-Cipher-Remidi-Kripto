import { useEffect, useState } from "react";

import { decrypt } from "../utils/VigenereCipher";

const Decrypt = () => {
    const [outText, setInpText] = useState();
    const [key, setKey] = useState();
    const [encText, setEncText] = useState();

    useEffect(() => {
        setInpText(decrypt(encText, key));
    }, [encText, key]);

    return (
        <div className="flex flex-col items-center px-2 w-full md:w-3/5">
            

            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="inpText">Encrypted Text</label>
                <textarea 
                    id="inpText" 
                    cols="20" 
                    rows="4"
                    placeholder="Enter Text"
                    value={encText}
                    onChange={e => setEncText(e.target.value)} 
                    className="p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none resize-none font-mono uppercase bg-slate-700" 
                ></textarea>
            </div>

            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="inpKey">Key</label>
                <input 
                    type="text" 
                    id="inpKey" 
                    placeholder="Enter Key" 
                    value={key} 
                    onChange={e => setKey(e.target.value)} 
                    className="p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none uppercase bg-slate-700" 
                />
            </div>

            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="outText">Plain Text</label>
                <textarea 
                    id="outText" 
                    cols="20" 
                    rows="4"
                    value={outText}
                    className="p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none resize-none font-mono uppercase bg-slate-700" 
                    readOnly
                ></textarea>
            </div>
        </div>
    )
}

export default Decrypt;