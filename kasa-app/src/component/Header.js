
function Header({ showTitle = true, backgroundImage = '' }) {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        
    };
    
    return (
        <div className="headerClasse" style={headerStyle}>
            {showTitle && <h1 className='home-title'>Chez vous, partout et ailleurs</h1>}
        </div>
    );
}

export default Header;

