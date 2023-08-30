import logo from '../../assets/fireballLogo.jpg'
const Footer = function () {
    return (

        <footer>
            <div id='logo'>
                <img className="logo" src={logo} alt="header logo" />
            </div>
            <div id='madeBy'>
                <h2>App Created By:</h2>
                <ul>
                    <a href="">
                        <li>Alex</li>
                    </a>
                    <a href="">
                        <li>Crystal</li>
                    </a>
                    <a href="">
                        <li>Chris</li>
                    </a>
                    <a href="">
                        <li>Younes</li>
                    </a>
                    <a href="">
                        <li>Sarita</li>
                    </a>
                    <a href="Photo by Felix Mittermeier: https://www.pexels.com/photo/blue-and-purple-cosmic-sky-956999/">
                        <li>Background Image</li>
                    </a>
                </ul>

            </div>
        </footer>


    )
}

export default Footer;