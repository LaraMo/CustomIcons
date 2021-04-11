import * as React from "react"
import iconLib from "./iconLib"

function Icon(props) {
  let {color, icon} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconLib[icon].viewBox}
      {...props}
    >
      
      {iconLib[icon].d && iconLib[icon].d.map((def, i) => {
        return <path fill={color} key={i} d={def} />
      })}

      {/* <div style={{color: [color]}}> */}
        {iconLib[icon].customChildren}
      {/* </div> */}
    </svg>
  )
}

Icon.defaultProps = {
    size: 16,
    color: "#484848",
    style: {},
    width: "20px",
    height: "20px"
};

export default Icon
