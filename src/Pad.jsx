import { useEffect, useState } from "react";

const Pad = ({ switchOn, name, keyCode, kit_no, displayKey, setDisplayKey, keyPressed, setDisplayText }) => { 
    const [active, setActive] = useState(false);

    const handleClick = () => {
        const audio = document.getElementById(keyCode);
        audio.currentTime = 0;
        if(switchOn) audio.play();
        setDisplayKey(keyCode);
        setDisplayText(name);
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 100);
    }

  return (
    <div id={`audio-pad-${keyCode}`} className={`shadow-lg drum-pad w-8/9 h-8/9 bg-purple-800 rounded-md flex items-center justify-center ease-in-out ${(active || (keyPressed && (keyCode.toUpperCase() === displayKey.toUpperCase()))) ? 'shadow-lg shadow-blue-700' : ''}`}
    onClick={() => {
            handleClick();
        }}>
        <audio src={kit_no} className="clip" id={keyCode} preload="auto"></audio>
        <button
        className={`w-8/9 h-8/9 bg-purple-900 rounded-md block hover:bg-violet-900" ${(active || (keyPressed && (keyCode.toUpperCase() === displayKey.toUpperCase()))) ? 'inset-shadow' : ''}`}
        >
            <span className="text-white">{keyCode}</span>
        </button>
    </div>
  )
}

export default Pad