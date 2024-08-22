import React from "react";
import "./App.css"
import { Tooltip } from "@mui/joy";

const App=()=>{
  return(
    <>
    <div className="main">
<div className="personalIMG"></div>{/* /personalIMG */}

<div className="description ">
  <h2 className="bodoni-moda-sc-header">Tasneem Youssef</h2>
  <p className="quicksand-span">junior MERN stack developer </p>
</div>{/* description */}
<div className="Links">

  
  <a target="_blank" href="https://portfolio-76.netlify.app/" className="portolioLink LINK">
    <div className="quicksand-span linkText">
portfolio
    </div>
  </a>

<a target="_blank" href="https://github.com/Nemo97-76" className="githubLink LINK">
<div className="quicksand-span linkText">
  github
</div>
</a>

<Tooltip title="comming soon">
  <a className="InstegramLink LINK">
    <div className="quicksand-span linkText">
      Instagram
    </div>
  </a>
</Tooltip>

<a target="_blank" href="https://www.facebook.com/tasn13eem/" className="facebookLink LINK">
<div className="quicksand-span linkText">
  facebook
</div>
</a>
</div>{/* /Links */}
    </div>{/* /main */}
    </>
  )
}
export default App