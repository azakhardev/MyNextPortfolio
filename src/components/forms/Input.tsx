import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input className="p-1 border" ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
