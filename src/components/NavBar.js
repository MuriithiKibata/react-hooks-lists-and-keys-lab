import React from "react";

function NavBar(ref) {
  const links = ["home", "about", "projects"];
  const list = links.map((link,index)=>{
    return <a key={link} href="#home, #about, #projects">{link}</a>

  })
  
return <nav >{list} </nav>;
}

export default NavBar;
