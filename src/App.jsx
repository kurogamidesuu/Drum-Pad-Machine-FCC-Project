import { use, useEffect, useRef, useState } from "react";
import Pad from "./Pad"

const App = () => {
    const [displayKey, setDisplayKey] = useState('');
    const [keyPressed, setKeyPressed] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [switchOn, setSwitchOn] = useState(true);
    const [kit, setKit] = useState(true);

    const switchRef = useRef(switchOn);

    useEffect(() => {
      switchRef.current = switchOn;
    }, [switchOn]);

    useEffect(() => {
      kit ? setDisplayText('Kit: Heater Kit') : setDisplayText('Kit: Smooth Piano Kit');
    }, [kit]);

    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      const audio = document.getElementById(key);
      if(audio) {
        audio.currentTime = 0;
        if(switchRef.current) {
          audio.play();
        }
        setDisplayKey(key);

        const pad = pads.find((pad) => pad.keyCode === key);
        if(pad) {
          setDisplayText(kit ? pad.name_1 : pad.name_2);
        }

        setKeyPressed(true);
        setTimeout(() => {
            setKeyPressed(false);
        }, 100);
      }
    }

    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      setDisplayText('Kit: Heater Kit');
    }, []);

   const pads = [
      { keyCode:'Q', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', name_1: 'Heater-1', name_2: 'Chord 1' },
      { keyCode:'W', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', name_1: 'Heater-2', name_2: 'Chord 2' },
      { keyCode:'E', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', name_1: 'Heater-3', name_2: 'Chord 3' },
      { keyCode:'A', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3', name_1: 'Heater-4', name_2: 'Shaker' },
      { keyCode:'S', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', name_1: 'Clap', name_2: 'Open HH' },
      { keyCode:'D', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', name_1: 'Open HH', name_2: 'Closed HH' },
      { keyCode:'Z', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', name_1: 'Kick n Hat', name_2: 'Punchy Kick' },
      { keyCode:'X', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', name_1: 'Kick', name_2: 'Side Stick' },
      { keyCode:'C', kit_1:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', kit_2: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', name_1: 'Closed HH', name_2: 'Snare' }
    ]

  return (
    <div className="bg-zinc-900 text-slate-200 h-screen w-full flex flex-col items-center justify-center" >
      <div className="w-full fixed top-2 text-center text-green-700 text-4xl font-bold font-sans border-b-3">
        <h1>Drum Pad Machine</h1>
      </div>
      <div id="drum-machine" className="h-120 w-210 bg-teal-900 rounded-xl p-10 flex items-center">
        <div id="pad-area" className="w-90 h-90 grid grid-cols-3 gap-1 flex items-center justify-center">
           {pads.map((pad) => (
            <Pad switchOn={switchOn} name={kit ? pad.name_1 : pad.name_2} key={pad.keyCode} keyCode={pad.keyCode} kit_no={kit ? pad.kit_1 : pad.kit_2} displayKey={displayKey} setDisplayKey={setDisplayKey} keyPressed={keyPressed} setDisplayText={setDisplayText} />
           ))}
        </div>
        <div id='display-window' className="w-110" >
          <div className="text-slate-300 w-fit block ml-auto mr-25 mb-2">Drum Pad Machine</div>
          <div className="bg-zinc-800 w-25 ml-auto mr-30 block rounded-sm cursor-pointer" onClick={() => {
                setSwitchOn(!switchOn);
              }}>
            <button className={`transition-all duration-200 ease-in-out ${switchOn ? 'bg-indigo-200 text-black translate-x-13' : 'bg-violet-900'} py-1 px-3 rounded-sm cursor-pointer block mb-8`}>{switchOn ? 'ON' : 'OFF'}</button>
          </div>
          <div id="display" className="w-80 h-10 bg-zinc-900 text-center p-1.5 rounded-md ml-auto mr-5">{displayText}</div>
          <button className="transition-all duration-100 ease w-20 h-10 bg-indigo-200 text-black rounded-md block mt-5 ml-auto mr-35 cursor-pointer hover:bg-zinc-900 hover:text-white"
          onClick={() => {
            setKit(!kit);
          }}>Switch Kit</button>
        </div>
      </div>
      <div className="w-full fixed bottom-2 text-center text-violet-900 text-lg font-sans">
        <h1>Made by Hempushp Chauhan</h1>
      </div>
    </div>
  )
}

export default App