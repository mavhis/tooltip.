import React ,{ useState } from "react";
import"./index.css";
const Tooltip =({position})=>{
    const[ isVisble, setIsVisible]=useState(false);
    const handleMouseEnter=()=>{
        setIsVisible(true);
    };

const handleMouseLeave=()=>{
    setIsVisible(false);
};
const getTooltipPosition=()=>{
    switch(position){
        case "top":
            return "tooltip tooltip-top";
        case"bottom":
            return "tooltip tooltip-bottom";
        case "left":
           return "tooltip tooltip-left";
        case "right":
            return "tooltip tooltip-right";
default:
    return"tooltip tooltip-top";
    }
};
return(
    <div
    className="tooltip-container"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
  <span id="over">Hover over me!</span>
      <div className={isVisble ? getTooltipPosition() : "tooltip"}>
        <span>Thanks for hovering! im a</span>
        <span>tooltip</span>
</div>
</div>
);
};
 export default Tooltip;   
//  echo "# tooltip." >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/mavhis/tooltip..git
// git push -u origin main










