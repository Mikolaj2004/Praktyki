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
                        <a href="#">Filtrowanie</a>
                        <a href="#">Dodawanie</a>
                        <a href="#">Szukanie</a>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
  }
  
  export default Header;
  