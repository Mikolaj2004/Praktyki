import {useState} from 'react'
import Axios from 'axios';
function Header() {

    const ShowFormPlace = () =>{
        var x = document.getElementsByClassName("formplace");
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i].style.display == 'table-cell') {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'table-cell';
            }
        }
    
    };
    const ShowFormUser = () =>{
        var x = document.getElementsByClassName("formuser");
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i].style.display == 'table-cell') {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'table-cell';
            }
        }
    };
    const ShowFormKind = () =>{
        var x = document.getElementsByClassName("formkind");
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i].style.display == 'table-cell') {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'table-cell';
            }
        }
    };

    //Adding new user

    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [Lista, setLista] = useState([]);
    const addUser = () => {
        Axios.post('http://localhost:3001/newuser',{
        imie : imie,
        nazwisko: nazwisko,
        })
        .then(() =>{
            setLista([
                ...Lista,{
                    imie:imie,
                    nazwisko:nazwisko
                }
            ]);
        });
    };
    //Adding new place
    
    const [miejsce, setMiejsce] = useState('');
    const [Listamiejsc, setListamiejsc] = useState([]);
    const addPlace = () => {
        Axios.post('http://localhost:3001/newplace',{
        miejsce : miejsce
        })
        .then(() =>{
            setListamiejsc([
                ...Listamiejsc,{
                    miejsce:miejsce
                }
            ]);
        });
    };
    //Adding new Kind
    
    const [rodzaj, setRodzaj] = useState('');
    const [Listarodzaji, setListarodzaji] = useState([]);
    const addKind = () => {
        Axios.post('http://localhost:3001/newkind',{
        rodzaj : rodzaj
        })
        .then(() =>{
            setListarodzaji([
                ...Listarodzaji,{
                    rodzaj:rodzaj
                }
            ]);
        });
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
                        <a>Dodaj:</a>
                        <hr></hr>
                        <a onClick={ShowFormPlace} >Miejsce </a>
                        <a onClick={ShowFormUser}>Użytkownika Sprzętu</a>
                        <a onClick={ShowFormKind}>Rodzaj</a>
                    </div>
                    </div>
                    <div className="formplace"><br/>
                        <label> Dodaj nowe miejsce </label><br/>
                        <label>Podaj Miejsce </label><br/>
                        <input type="text" onChange={(event) => {
                            setMiejsce(event.target.value)
                        }}></input><br/>
                        <button className="formbtn" onClick={addPlace}>Wyślij</button>
                    </div>
                    <div className="formuser">
                    <label> Dodaj nowego użytkownika </label><br/>
                        <label>Podaj Imie </label><br/>
                        <input type="text"onChange={(event) => {
                            setImie(event.target.value)
                        }}></input><br/>
                        <label>Podaj Nazwisko </label><br/>
                        <input type="text" onChange={(event) => {
                            setNazwisko(event.target.value)
                        }}></input><br/>
                        <button className="formbtn" onClick={addUser}>Wyślij</button>
                    </div>
                    <div className="formkind">
                    <label> Dodaj nowy rodzaj </label> <br/>
                        <label>Podaj Rodzaj </label>
                        <input type="text"onChange={(event) => {
                            setRodzaj(event.target.value)
                        }}></input><br/>
                        <button className="formbtn" onClick={addKind}>Wyślij</button>
                    </div>
                    </div>
                    
            </nav>
        </header>
    );
  }
  
  export default Header;
  