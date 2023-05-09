import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header class="header">
            <div className="logo">
                <img src={logo} alt="" />
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span className="light activeTheme"></span>
                <span className="medium"></span>
                <span className="dark"></span>
                <span className="gradientOne"></span>
                <span className="gradientTwo"></span>
                <span className="gradientThree"></span>
            </div>
        </header>
    )
}