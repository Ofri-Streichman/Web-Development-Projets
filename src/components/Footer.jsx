import React from "react";

let year = new Date().getFullYear();

function Footer(){
    return <footer>
        <p>Made by Ofri Streichman</p>
        <p>Copyright ⓒ {year}</p>
    </footer>
}

export default Footer;