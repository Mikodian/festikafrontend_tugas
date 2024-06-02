import React, { useMemo } from "react";

const Button = ({ title, onClick = () => {}, type }) => {
  const test = useMemo(() => {}, []);
  return (
    <button
      variant="contained"
      type={type}
      onClick={onClick}
      className="bg-[#789461] text-white rounded-full
  text-center px-6 py-2 w-[360px]"
    >
      {title}
    </button>
  );
};

export default Button;
