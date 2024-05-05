import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");


  const generatorPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+-=";


    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  
  
  }, [length, numberAllowed, charAllowed]);
 
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password)
  }


  useEffect(() => {
    generatorPassword()
  },[length,numberAllowed,charAllowed])


  return (
    <>
      <div className="w-full  max-w-xl shadow-md rounded-lg px-2 py-2 my-8 mx-auto">
        <h1 className="text-white text-center text-xl my-3">
          Password generator
        </h1>

        <div className="flex items-center justify-center shadow-sm rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            className="px-2 py-3 w-[80%] outline-none rounded-tl-lg rounded-bl-lg "
            placeholder="Password"
            readOnly
            value={Password}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-3 bg-indigo-700 text-white rounded-lg rounded-tl-none rounded-bl-none">
            Copy
          </button>
        </div>
        <div className="flex gap-x-4">
          <div className="flex gap-3">
            <input
              type="range"
              name="Password length"
              id=""
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            <label htmlFor="Password length" className="text-white">
              Password length : {length}
            </label>
          </div>

          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />

            <label htmlFor="Number" className="text-white">
              Number
            </label>
          </div>

          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name="charAllowed"
              id=""
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />

            <label htmlFor="charAllowed" className="text-white">
              Character Allowed
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
