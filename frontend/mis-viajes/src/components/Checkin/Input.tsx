import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";


const InputCheckin = ({ filter, setFilter }) => {
  const [inputValue, setInputValue] = React.useState("");
  useEffect(() => {
    setFilter(inputValue);
  }, [inputValue]);

  const handleEmptyFilter = () => {
    setInputValue("");
  };

  return (
    <div className="checkin-container__input-container">
      <AiOutlineSearch />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
        placeholder="Buscar lugar"
      />
      {inputValue.length > 0 && (
        <div
          onClick={handleEmptyFilter}
          className="checkin-container__remove-btn"
        >
          <RiCloseFill />
        </div>
      )}
      <FaLocationArrow className="blue-selector" />
    </div>
  );
};

export default InputCheckin;
