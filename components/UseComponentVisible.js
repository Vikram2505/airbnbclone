import { useState, useEffect, useRef } from "react";

function UseComponentVisible() {
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(!isComponentVisible);
        }else if(ref.current === null){
          setIsComponentVisible(isComponentVisible);            
        }
        
      };
   
      useEffect(() => {
        document.addEventListener("click", handleClickOutside, !isComponentVisible);
    
        return () => {
          document.removeEventListener(
            "click",
            handleClickOutside,
            !isComponentVisible
          );
        };
      });
    
      return { ref, isComponentVisible, setIsComponentVisible };
}

export default UseComponentVisible
