function Header() {
    return (
        <header>
            <nav className="navcontainer">
            <img id="logo" src={require('../images/amw.png')} alt="Logo strony głównej"/>
                <div className="nav-items">    
                    WYKAZ EWIDENCYJNY MATERIAŁÓW KATEDRY INFORMATYKI
                    <div className="cbd">
                        <button class="dropbtn">MENU</button>
                    <div className="dc">
                        <a>Dodaj:</a>
                        <hr></hr>
                        <a href="#">Miejsce </a>
                        <a href="#">Użytkownika Sprzętu</a>
                        <a href="#">Rodzaj</a>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
  }
  
  export default Header;
  