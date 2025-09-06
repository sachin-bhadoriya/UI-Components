import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import Loading from './Loading';
import "./inputField.css"

const InputField = () => {

  // for pwd eye close and open
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  // for disabling and enabling input field
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  // for loading
  const [isLoading, setIsLoading] = useState(false);

  // for input color change
  const [isInputBlank, setIsInputBlank] = useState(true);
  const [inputValue, setInputValue] = useState("");

  // font size
  const fontSizes = ["small", "medium", "large"];
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  // handle disabled button
  const handleDisabling = () => {
    setIsInputDisabled(!isInputDisabled);
    setIsLoading(true);

    // set timing for showing loading circle
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // handle font size button
  const handleFontSize = () => {
    setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fontSizes.length);
  };

  return (
    <div style={{ paddingTop: "70px" }} className='main-container-input'>
      <div className='input-field'>
        <div className='input-container'>
          <label htmlFor="input">Enter Something...</label>
          <input
            id='input'
            style={{ fontSize: fontSizes[currentFontIndex] }}
            type={isEyeOpen ? "text" : "password"}
            disabled={isInputDisabled}
            className={`input ${!isInputBlank ? "green" : "red"}`}
            placeholder='Enter Something...'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsInputBlank(e.target.value === "");
            }}
          />

          <div className="eye-icon" onClick={() => setIsEyeOpen(!isEyeOpen)}>
            {isEyeOpen ? <FaEye className='eye-open-icon' /> : <IoIosEyeOff className='eye-close-icon' />}
          </div>
        </div>
        <div className="btns">
          <div className="disabled-btn" onClick={handleDisabling}>
            <button>{isLoading ? <Loading /> : (!isInputDisabled ? "Disable Input" : "Enable Input")}</button>
          </div>
          <div className="clear-text-btn" onClick={() => setInputValue("")}>
            <button>Clear Input</button>
          </div>
          <div className="size-change-btn" onClick={handleFontSize}>
            <button>Font Size Change ({fontSizes[currentFontIndex]})</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputField