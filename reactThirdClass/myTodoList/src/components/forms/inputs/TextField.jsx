import { forwardRef, useImperativeHandle } from "react";

const TextField = forwardRef(
  ({ placeholder, height, width, fontSize }, ref) => {
    
    useImperativeHandle(ref , ()=>{
      // console.log(ref);
      return {
        getChildData : () =>{
          return "this data"
        }
      }
    })
    return (
      <input
        placeholder={placeholder}
        ref={ref}
        style={{
          height: height,
          width: width,
          fontSize: fontSize,
        }}
        
      />
    );
  }
);

export default TextField;
