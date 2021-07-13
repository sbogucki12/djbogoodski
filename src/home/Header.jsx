import logoSmall from './logoSmall.jpg';

const Header = () => {
    return(
        <div className="headerContainer">
            <a href="/"><div><img src={logoSmall} alt="DJ Bogoodski logo" title="logo" style={{borderRadius:"5%"}} /></div></a>
            <div ><a href="/" className="headerLogoText">DJ Bogoodski</a></div>
        </div>
    )
};

export default Header; 