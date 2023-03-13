// import "../images/logo.png"
function Header() {
    return (
        <header>
            <nav className="navcontainer">
            <img src="./logo.png" alt="Logo"></img>
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
  