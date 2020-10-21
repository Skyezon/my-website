import React  from "react"


const Shape = ({shape, color, rotation, width, height, className}) => {
  let boderRadius = 0;
  if (shape === "circle"){
   boderRadius = "50%";
  }

  return(
    <div className={className} style={{
      borderRadius : boderRadius,
      width : width,
      height : height,
      backgroundColor : color,
      transform : `rotate(${rotation})`
    }}></div>
  )
}

export default Shape