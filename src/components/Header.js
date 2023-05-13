import { useState } from 'react'
import logo from '../assets/logo.svg'

export default function Header() {
    const [theme, setTheme] = useState("light")
    
    // Change theme
    function changeTheme(event) {
        const chosenTheme = event.target.dataset.theme
        setTheme(chosenTheme)

        const htmlElement = document.documentElement
        // Remove previous class for theme
        htmlElement.removeAttribute("class")
        // Add new theme class
        htmlElement.classList.add(chosenTheme)
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span onClick={changeTheme} data-theme="light" className={theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={changeTheme} data-theme="medium" className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={changeTheme} data-theme="dark" className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={changeTheme} data-theme="gradientOne" className={theme === "gradientOne"? "gradientOne activeTheme" : "gradientOne"}></span>
                <span onClick={changeTheme} data-theme="gradientTwo" className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"}></span>
                <span onClick={changeTheme} data-theme="gradientThree" className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"}></span>
            </div>
        </header>
    )
}