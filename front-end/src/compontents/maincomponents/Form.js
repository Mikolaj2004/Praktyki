import {useState, useRef, useEffect} from "react";
import Axios from 'axios';
import {useReactToPrint} from 'react-to-print';
import ReactPaginate from 'react-paginate';
function Form() {

    const [usernumber,
        setUsernumber] = useState(0);
    const [amount,
        setAmount] = useState(0);
    const [place,
        setPlace] = useState('');
    const [name,
        setName] = useState('');
    const [roomnumber,
        setRoomnumber] = useState(0);
    const [user,
        setUser] = useState('');
    const [kind,
        setKind] = useState('');
    const [type,
        setType] = useState('');
    const [faulty,
        setFaulty] = useState('');

    //PDF
    const pdf = useRef();
    const generatePDF = useReactToPrint({
        content: () => pdf.current,
        documentTitle: "Wykaz ewidencji",
        onAfterPrint: () => console.log("Values Inserted to PDF")
    });

    //Paggination
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 30;
    const pagesVisited = pageNumber * usersPerPage
    //const displayUsers = MaterialList.slice(pagesVisited, pagesVisited + usersPerPage).map(MaterialList = >) 

    //Udapte
    const [newUsernumber,
        setNewUsernumber] = useState(0);
    const [newAmount,
        setNewAmount] = useState(0);
    const [newPlace,
        setNewPlace] = useState('');
    const [newName,
        setNewName] = useState('');
    const [newRoomnumber,
        setNewRoomnumber] = useState(0);
    const [newUser,
        setNewUser] = useState('');
    const [newKind,
        setNewKind] = useState('');
    const [newType,
        setNewType] = useState('');
    const [newFaulty,
        setNewFaulty] = useState('');

    const [MaterialList,
        setMaterialList] = useState([]);

        const [laboranci, setLaboranci] = useState([]);
        const [miejsca, setMiejsca] = useState([]);
        const [rodzaj, setRodzaj] = useState([]);
        const [uzytkownik, setUzytkownik] = useState([]);
    

    const addMaterial = () => {
        Axios
            .post('http://localhost:3001/create', {
            usernumber: usernumber,
            amount: amount,
            place: place,
            name: name,
            roomnumber: roomnumber,
            user: user,
            kind: kind,
            type: type,
            faulty: faulty
        })
            .then(() => {
                setMaterialList([
                    ...MaterialList, {
                        usernumber: usernumber,
                        amount: amount,
                        place: place,
                        name: name,
                        roomnumber: roomnumber,
                        user: user,
                        kind: kind,
                        type: type,
                        faulty: faulty
                    }
                ]);
            });
    };

    useEffect(()=>{
        fetch("http://localhost:3001/api/get/laboranci").then((data) => data.json()).then((val)=>setLaboranci(val))
      }, 
      []);
      useEffect(()=>{
        fetch("http://localhost:3001/api/get/miejsca").then((data) => data.json()).then((val)=>setMiejsca(val))
      }, 
      []);
      useEffect(()=>{
        fetch("http://localhost:3001/api/get/rodzaj").then((data) => data.json()).then((val)=>setRodzaj(val))
      }, 
      []);
      useEffect(()=>{
        fetch("http://localhost:3001/api/get/uzytkownik").then((data) => data.json()).then((val)=>setUzytkownik(val))
      }, 
      []);
      
    
    const updateRecord = (id) => {
        Axios
            .put("http://localhost:3001/update", {
            user: newUser,
            name: newName,
            usernumber: newUsernumber,
            place: newPlace,
            kind: newKind,
            roomnumber: newRoomnumber,
            type: newType,
            faulty: newFaulty,
            amount: newAmount,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            name: newName,
                            usernumber: newUsernumber,
                            place: newPlace,
                            kind: newKind,
                            roomnumber: newRoomnumber,
                            type: newType,
                            faulty: newFaulty,
                            amount: newAmount,
                            user: newUser
                        }
                        : val;
                }));
            });
    };

    // Order by DESC
    const SortUsernumberDESC = () =>{
        Axios.get('http://localhost:3001/sortdescusernumber')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortAmountDESC = () =>{
        Axios.get('http://localhost:3001/sortdescamount')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortPlaceDESC = () =>{
        Axios.get('http://localhost:3001/sortdescplace')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortNameDESC = () =>{
        Axios.get('http://localhost:3001/sortdescname')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortRoomnumberDESC = () =>{
        Axios.get('http://localhost:3001/sortdescroomnumber')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortUserDESC = () =>{
        Axios.get('http://localhost:3001/sortdescuser')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortKindDESC = () =>{
        Axios.get('http://localhost:3001/sortdesckind')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortTypeDESC = () =>{
        Axios.get('http://localhost:3001/sortdesctype')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortFaultyDESC = () =>{
        Axios.get('http://localhost:3001/sortdescfaulty')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    // Order by ASC

    const SortUsernumberASC = () =>{
        Axios.get('http://localhost:3001/sortascusernumber')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortAmountASC = () =>{
        Axios.get('http://localhost:3001/sortascamount')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortPlaceASC = () =>{
        Axios.get('http://localhost:3001/sortascplace')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortNameASC = () =>{
        Axios.get('http://localhost:3001/sortascname')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortRoomnumberASC = () =>{
        Axios.get('http://localhost:3001/sortascroomnumber')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortUserASC = () =>{
        Axios.get('http://localhost:3001/sortascuser')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortKindASC = () =>{
        Axios.get('http://localhost:3001/sortasckind')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortTypeASC = () =>{
        Axios.get('http://localhost:3001/sortasctype')
        .then((response) => {
            setMaterialList(response.data);
        });
    }
    const SortFaultyASC = () =>{
        Axios.get('http://localhost:3001/sortascfaulty')
        .then((response) => {
            setMaterialList(response.data);
        });
    }

    //On load display data
    useEffect(() => {
        Axios
            .get('http://localhost:3001/wykaz_materialow')
            .then((response) => {
                setMaterialList(response.data);
            });
    }, []);
    

    //Delete records from database
    const deleteRecord = (id) => {
        Axios
            .delete(`http://localhost:3001/delete/${id}`)
            .then((response) => {
                setMaterialList(MaterialList.filter((val) => {
                    return val.id !== id
                }))
            })
    }
    //Updateing 
    const UpdateMenu = () => {
        var x = document.getElementsByClassName("update-column");
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i].style.display == 'table-cell') {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'table-cell';
            }

        }
        var y = document.getElementsByClassName("update-input");
        var d;
        for (d = 0; d < y.length; d++) {
            if (y[d].style.display == 'block') {
                y[d].style.display = 'none';
            } else {
                y[d].style.display = 'block';
            }
        }
    }

    // Return html
    return (
        <div className="container">
            <div className="form">
                <div className="fields">
                    <div className="inputs">
                        <label>Nr Laboranta :</label>
                        <select
                            name="usernumber"
                            onChange={(event) => {
                            setUsernumber(event.target.value)
                        }}>
                            <option ></option>
                            {
            laboranci.map((val, key)=><option key={key}>{val.laborant}</option>)
          }

                        </select>
                        <label>Ilosc :</label>
                        <input
                            type="number"
                            min="0"
                            onChange={(event) => {
                            setAmount(event.target.value)
                        }}></input>
                        <label>Miejsce :</label>
                        <select
                            name="place"
                            onChange={(event) => {
                            setPlace(event.target.value)
                        }}>
                            <option ></option>
                            {
            miejsca.map((val, key)=><option key={key}>{val.miejsce}</option>)
          }
                        </select>
                    </div >
                    <div className="inputs">
                        <label>Nazwa :</label>
                        <input
                            type="text"
                            onChange={(event) => {
                            setName(event.target.value)
                        }}></input>
                        <label>Nr Inwentarzowy :</label>
                        <input
                            type="number"
                            min="0"
                            onChange={(event) => {
                            setRoomnumber(event.target.value)
                        }}></input>
                        <label>Użytkownik sprzętu :</label>
                        <select
                            name="user"
                            onChange={(event) => {
                            setUser(event.target.value)
                        }}>
                            <option ></option>
                            {
           uzytkownik.map((val, key)=><option key={key}>{val.imie}</option>)
          }
                        </select>
                    </div>
                    <div className="inputs">
                        <label>Rodzaj :</label>
                        <select
                            name="kind"
                            onChange={(event) => {
                            setKind(event.target.value)
                        }}>
                            <option ></option>
                            {
            rodzaj.map((val, key)=><option key={key}>{val.rodzaj}</option>)
          }

                        </select>
                        <label>Typ :</label>
                        <select
                            name="type"
                            onChange={(event) => {
                            setType(event.target.value)
                        }}>
                            <option ></option>
                            <option >Stanowy</option>
                            <option >Bezstanowy</option>
                        </select>
                        <label>Do wybrakowania :</label>
                        <select
                            name="faulty"
                            onChange={(event) => {
                            setFaulty(event.target.value)
                        }}>
                            <option ></option>
                            <option >Tak</option>
                            <option >Nie</option>
                        </select>
                    </div>
                </div>

                <button className="add" onClick={addMaterial}>
                    Dodaj do bazy</button>
                

            </div>
            <div className="show">

                <button onClick={UpdateMenu} className="dropbtn">Edytuj rekordy</button>

                <div ref={pdf}>
                    <table>

                        <th id="nr-laboranta"onClick={SortUsernumberDESC}onDoubleClick={SortUsernumberASC}>Nr Laboranta</th>
                        <th id="ilosc" onClick={SortAmountDESC}onDoubleClick={SortAmountASC}>Ilosc</th>
                        <th id="miejsce"onClick={SortPlaceDESC}onDoubleClick={SortPlaceASC}>Miejsce</th>
                        <th id="nazwa"onClick={SortNameDESC}onDoubleClick={SortNameASC}>Nazwa</th>
                        <th id="nr-inwentarzowy"onClick={SortRoomnumberDESC}onDoubleClick={SortRoomnumberASC}>Nr Inwentarzowy</th>
                        <th id="uzytkownik-sprzetu"onClick={SortUserDESC}onDoubleClick={SortUserASC}>Użytkownik sprzętu</th>
                        <th id="rodzaj"onClick={SortKindDESC}onDoubleClick={SortKindASC}>Rodzaj</th>
                        <th id="typ"onClick={SortTypeDESC}onDoubleClick={SortTypeASC}>Typ</th>
                        <th id="do-wybrakowania"onClick={SortFaultyDESC}onDoubleClick={SortFaultyASC}>Do wybrakowania</th>

                        {MaterialList.map((val, key) => {
                            return (
                                <tr>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>{val.usernumber}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="usernumber"
                                                    onChange={(event) => {
                                                    setNewUsernumber(event.target.value)
                                                }}>
                                                    {
            laboranci.map((val, key)=><option key={key}>{val.usernumber}</option>)
          }
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>
                                                    {val.amount}</p>
                                            </div>
                                            <div className="update-input">
                                                <input
                                                    type="text"
                                                    placeholder="Zmień ilość"
                                                    onChange={(event) => {
                                                    setNewAmount(event.target.value)
                                                }}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>
                                                    {val.place}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="place"
                                                    onChange={(event) => {
                                                    setNewPlace(event.target.value)
                                                }}>
                                                    {
            miejsca.map((val, key)=><option key={key}>{val.nr_miejsca}</option>)
          }
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>{val.name}</p>
                                            </div>
                                            <div className="update-input">
                                                <input
                                                    type="text"
                                                    placeholder="Zmień nazwę"
                                                    onChange={(event) => {
                                                    setNewName(event.target.value)
                                                }}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>{val.roomnumber}</p>
                                            </div>
                                            <div className="update-input">
                                                <input
                                                    type="text"
                                                    placeholder="Zmień numer inwentarzowy"
                                                    onChange={(event) => {
                                                    setNewRoomnumber(event.target.value)
                                                }}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>
                                                    {val.user}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="user"
                                                    onChange={(event) => {
                                                    setNewUser(event.target.value)
                                                }}>
                                                    <option >m.Kucko</option>
                                                    <option >m.Tycko</option>
                                                    <option >m.Nowak</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>
                                                    {val.kind}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="kind"
                                                    onChange={(event) => {
                                                    setNewKind(event.target.value)
                                                }}>
                                                    <option >Szafa rakowa</option>
                                                    <option >Tablet</option>
                                                    <option >Stół</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>
                                                    {val.type}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="type"
                                                    onChange={(event) => {
                                                    setNewType(event.target.value)
                                                }}>
                                                    <option >Stanowy</option>
                                                    <option >Bezstanowy</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>
                                                    {val.faulty}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="faulty"
                                                    onChange={(event) => {
                                                    setNewFaulty(event.target.value)
                                                }}>
                                                    <option >Tak</option>
                                                    <option >Nie</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="update-column">

                                        <div className="table-cell">

                                            <button
                                                onClick={() => {
                                                updateRecord(val.id)
                                            }}>Zaktualizuj</button>

                                            <button
                                                onClick={() => {
                                                deleteRecord(val.id)
                                            }}>Usuń</button>

                                        </div>

                                    </td>

                                </tr>
                            );
                        })}
                    </table>
                </div>
                <button onClick={generatePDF} className="dropbtn">Create PDF</button>
            </div>
        </div>
    )
}
export default Form;