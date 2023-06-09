import {useState} from 'react'
import Axios from 'axios';
function Header() {

    const ShowFormPlace = () => {
        var x = document.getElementById('formplace');
        var y = document.getElementById('formuser');
        var z = document.getElementById('formkind');
        var a = document.getElementById('formsort');
        var b = document.getElementById('formusernumber');

        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        
    };

    const ShowFormUser = () => {
        var x = document.getElementById('formplace');
        var y = document.getElementById('formuser');
        var z = document.getElementById('formkind');
        var a = document.getElementById('formsort');
        var b = document.getElementById('formusernumber');

        x.style.display = 'none';
        y.style.display = 'block';
        z.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
    };

    const ShowFormKind = () => {
        var x = document.getElementById('formplace');
        var y = document.getElementById('formuser');
        var z = document.getElementById('formkind');
        var a = document.getElementById('formsort');
        var b = document.getElementById('formusernumber');

        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
       
    };
    const ShowFormSort = () => {
        let sort = document.getElementsByClassName("search-inputs")[0];
        if(sort.style.display=="none"){
            sort.style.display="block"
        }else{
        sort.style.display="none";
        }
    }
    const ShowFormUsernumber = () => {
        var x = document.getElementById('formplace');
        var y = document.getElementById('formuser');
        var z = document.getElementById('formkind');
        var a = document.getElementById('formsort');
        var b = document.getElementById('formusernumber');

        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'block';
    }

    
    //Adding new user

    const [imie,
        setImie] = useState('');
    const [Lista,
        setLista] = useState([]);
    const addUser = () => {
        Axios
            .post('http://localhost:3001/newuser', {imie: imie})
            .then(() => {
                setLista([
                    ...Lista, {
                        imie: imie
                    }
                ]);
            });
            window.location.reload();
    };
    //Adding new place

    const [miejsce,
        setMiejsce] = useState('');
    const [Listamiejsc,
        setListamiejsc] = useState([]);
    const addPlace = () => {
        Axios
            .post('http://localhost:3001/newplace', {miejsce: miejsce})
            .then(() => {
                setListamiejsc([
                    ...Listamiejsc, {
                        miejsce: miejsce
                    }
                ]);
            });
            window.location.reload();
    };
    //Adding new Kind

    const [rodzaj,
        setRodzaj] = useState('');
    const [Listarodzaji,
        setListarodzaji] = useState([]);
    const addKind = () => {
        Axios
            .post('http://localhost:3001/newkind', {rodzaj: rodzaj})
            .then(() => {
                setListarodzaji([
                    ...Listarodzaji, {
                        rodzaj: rodzaj
                    }
                ]);
            });
            window.location.reload();
    };

    const [laborant,
        setLaborant] = useState('');
    const [ListaLaborantow,
        setListaLaborantow] = useState([]);
    const addLaborant = () => {
        Axios
            .post('http://localhost:3001/newlaborant', {laborant: laborant})
            .then(() => {
                setListaLaborantow([
                    ...ListaLaborantow, {
                        laborant: laborant
                    }
                ]);
            });
            window.location.reload();
    };
    return (
        <header>
            <nav className="navcontainer">
                <img id="logo" src={require('../images/amw.png')} alt="Logo strony głównej"/>
                <div className="nav-items">
                    WYKAZ EWIDENCYJNY MATERIAŁÓW KATEDRY INFORMATYKI
                    <div className="cbd">
                        <button class="dropbtn">MENU</button>
                        <div className="dc">
                            
                            <a onClick={ShowFormUsernumber}>Dodaj Nr Laboranta</a>
                            <a onClick={ShowFormPlace}>Dodaj Miejsce</a>
                            <a onClick={ShowFormUser}>Dodaj Użytkownika Sprzętu</a>
                            <a onClick={ShowFormKind}>Dodaj Rodzaj</a>
                            
                            <a onClick={ShowFormSort}>Filtracja</a>
                        </div>
                    </div>
                    <div className="formplace" id="formplace">
                        <label>
                            Dodaj nowe miejsce
                        </label><br/>
                        <label>Podaj Miejsce
                        </label><br/>
                        <input
                            type="text"
                            onChange={(event) => {
                            setMiejsce(event.target.value)
                        }}></input><br/>
                        <button className="formbtn" onClick={addPlace}>Wyślij</button>
                    </div>

                    <div className="formuser" id="formuser">
                        <label>
                            Dodaj nowego użytkownika
                        </label><br/>
                        <label>Podaj Imie
                        </label><br/>
                        <input
                            type="text"
                            onChange={(event) => {
                            setImie(event.target.value)
                        }}></input><br/>
                        <button className="formbtn" onClick={addUser}>Wyślij</button>
                    </div>

                    <div className="formkind" id="formkind">
                        <label>
                            Dodaj nowy rodzaj
                        </label>
                        <br/>
                        <label>Podaj Rodzaj
                        </label>
                        <input
                            type="text"
                            onChange={(event) => {
                            setRodzaj(event.target.value)
                        }}></input><br/>
                        <button className="formbtn" onClick={addKind}>Wyślij</button>
                    </div>
                    <div className="formusernumber" id="formusernumber">
                        <label>
                            Dodaj Laboranta
                        </label><br/>
                        <br/>
                        <input
                            type="text"
                            onChange={(event) => {
                                setLaborant(event.target.value)
                            }}></input><br/>
                        <button className="formbtn" onClick={addLaborant}>Wyślij</button>
                    </div>
                    <div className="formsort" id="formsort">
                        <label>
                            Szukaj 
                        </label><br/>
                        <br/>
                        <input
                            type="text"
                            ></input><br/><br/>
                        <button  className="formbtn">Wyślij</button>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Header;
