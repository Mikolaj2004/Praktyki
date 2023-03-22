import {useState, useRef, useEffect} from "react";
import Axios from 'axios';
import {useReactToPrint} from 'react-to-print';


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

    const [MaterialList,
        setMaterialList] = useState([]);

    const [laboranci, setLaboranci] = useState([]);
    const [miejsca, setMiejsca] = useState([]);
    const [rodzaj, setRodzaj] = useState([]);
    const [uzytkownik, setUzytkownik] = useState([]);

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


    //PDF
    const pdf = useRef();
    const generatePDF = useReactToPrint({
        content: () => pdf.current,
        documentTitle: "Wykaz ewidencji",
        onAfterPrint: () => console.log("Values Inserted to PDF")
    });
    //Display all record
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
      
    //Update all records
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
//Update one record
    const updateRecordusernumber = (id) => {
        Axios
            .put("http://localhost:3001/updateusernumber", {
            usernumber: newUsernumber,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            usernumber: newUsernumber,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
 const updateRecordamount = (id) => {
        Axios
            .put("http://localhost:3001/updateamount", {
            amount: newAmount,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            amount: newAmount,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
    
 const updateRecordplace = (id) => {
        Axios
            .put("http://localhost:3001/updateplace", {
            place: newPlace,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            place: newPlace,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
    
 const updateRecordname = (id) => {
        Axios
            .put("http://localhost:3001/updatename", {
            name: newName,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            name: newName,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
 const updateRecordroomnumber = (id) => {
        Axios
            .put("http://localhost:3001/updateroomnumber", {
            roomnumber: newRoomnumber,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            roomnumber: newRoomnumber,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
 const updateRecorduser = (id) => {
        Axios
            .put("http://localhost:3001/updateuser", {
            user: newUser,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            user: newUser,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };


    
 const updateRecordkind = (id) => {
        Axios
            .put("http://localhost:3001/updatekind", {
            kind: newKind,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            kind: newKind,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
 const updateRecordtype = (id) => {
        Axios
            .put("http://localhost:3001/updatetype", {
            type: newType,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            type: newType,
                                                }
                        : val;
                }));
            });
            window.location.reload();
    };
    const updateRecordfaulty = (id) => {
        Axios
            .put("http://localhost:3001/updatefaulty", {
            faulty: newFaulty,
            id: id
        })
            .then((response) => {
                setMaterialList(MaterialList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            faulty: newFaulty,
                                                }
                        : val;
                }));
            });
            window.location.reload();
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
    function szukanie0() {
        var input, filter, table, tr, td, i, txtValue,p;
        input = document.getElementById("myInput0");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            const p = tr[i].querySelectorAll("td")[0].querySelector("div div p");
            if (p) {
              const txtValue = p.textContent || p.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
        function szukanie1() {
            var input, filter, table, tr, td, i, txtValue,p;
            input = document.getElementById("myInput1");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                const p = tr[i].querySelectorAll("td")[1].querySelector("div div p");
                if (p) {
                  const txtValue = p.textContent || p.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
                }
              }
            }
            function szukanie2() {
                var input, filter, table, tr, td, i, txtValue,p;
                input = document.getElementById("myInput2");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    const p = tr[i].querySelectorAll("td")[2].querySelector("div div p");
                    if (p) {
                      const txtValue = p.textContent || p.innerText;
                      if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                      } else {
                        tr[i].style.display = "none";
                      }
                    }
                  }
                }
                function szukanie3() {
                    var input, filter, table, tr, td, i, txtValue,p;
                    input = document.getElementById("myInput3");
                    filter = input.value.toUpperCase();
                    table = document.getElementById("myTable");
                    tr = table.getElementsByTagName("tr");
                    for (i = 0; i < tr.length; i++) {
                        const p = tr[i].querySelectorAll("td")[3].querySelector("div div p");
                        if (p) {
                          const txtValue = p.textContent || p.innerText;
                          if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                          } else {
                            tr[i].style.display = "none";
                          }
                        }
                      }
                    }
                    function szukanie4() {
                        var input, filter, table, tr, td, i, txtValue,p;
                        input = document.getElementById("myInput4");
                        filter = input.value.toUpperCase();
                        table = document.getElementById("myTable");
                        tr = table.getElementsByTagName("tr");
                        for (i = 0; i < tr.length; i++) {
                            const p = tr[i].querySelectorAll("td")[4].querySelector("div div p");
                            if (p) {
                              const txtValue = p.textContent || p.innerText;
                              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                tr[i].style.display = "";
                              } else {
                                tr[i].style.display = "none";
                              }
                            }
                          }
                        }
                        function szukanie5() {
                            var input, filter, table, tr, td, i, txtValue,p;
                            input = document.getElementById("myInput5");
                            filter = input.value.toUpperCase();
                            table = document.getElementById("myTable");
                            tr = table.getElementsByTagName("tr");
                            for (i = 0; i < tr.length; i++) {
                                const p = tr[i].querySelectorAll("td")[5].querySelector("div div p");
                                if (p) {
                                  const txtValue = p.textContent || p.innerText;
                                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                    tr[i].style.display = "";
                                  } else {
                                    tr[i].style.display = "none";
                                  }
                                }
                              }
                            }
                            function szukanie6() {
                                var input, filter, table, tr, td, i, txtValue,p;
                                input = document.getElementById("myInput6");
                                filter = input.value.toUpperCase();
                                table = document.getElementById("myTable");
                                tr = table.getElementsByTagName("tr");
                                for (i = 0; i < tr.length; i++) {
                                    const p = tr[i].querySelectorAll("td")[6].querySelector("div div p");
                                    if (p) {
                                      const txtValue = p.textContent || p.innerText;
                                      if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                        tr[i].style.display = "";
                                      } else {
                                        tr[i].style.display = "none";
                                      }
                                    }
                                  }
                                }
                                function szukanie7() {
                                    var input, filter, table, tr, td, i, txtValue,p;
                                    input = document.getElementById("myInput7");
                                    filter = input.value.toUpperCase();
                                    table = document.getElementById("myTable");
                                    tr = table.getElementsByTagName("tr");
                                    for (i = 0; i < tr.length; i++) {
                                        const p = tr[i].querySelectorAll("td")[7].querySelector("div div p");
                                        if (p) {
                                          const txtValue = p.textContent || p.innerText;
                                          if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                            tr[i].style.display = "";
                                          } else {
                                            tr[i].style.display = "none";
                                          }
                                        }
                                      }
                                    }
                                    function szukanie8() {
                                        var input, filter, table, tr, td, i, txtValue,p;
                                        input = document.getElementById("myInput8");
                                        filter = input.value.toUpperCase();
                                        table = document.getElementById("myTable");
                                        tr = table.getElementsByTagName("tr");
                                        for (i = 0; i < tr.length; i++) {
                                            const p = tr[i].querySelectorAll("td")[8].querySelector("div div p");
                                            if (p) {
                                              const txtValue = p.textContent || p.innerText;
                                              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                                tr[i].style.display = "";
                                              } else {
                                                tr[i].style.display = "none";
                                              }
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
                            type="text"
                            
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
                        }} >
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

                <button onClick={UpdateMenu} className="buttons">Edytuj rekordy</button>

                <div className="search-inputs">
                <input type="text" id="myInput0" placeholder="Szukaj po Nr Laboranta" onChange={szukanie0}></input>
                <input type="text" id="myInput1" placeholder="Szukaj po Ilości" onChange={szukanie1}></input>
                <input type="text" id="myInput2" placeholder="Szukaj po Miejscu" onChange={szukanie2}></input>
                <input type="text" id="myInput3" placeholder="Szukaj po Nazwie" onChange={szukanie3}></input>
                <input type="text" id="myInput4" placeholder="Szukaj po Nr Inwentarzowym" onChange={szukanie4}></input>
                <input type="text" id="myInput5" placeholder="Szukaj po Użytkowniku sprzętu" onChange={szukanie5}></input>
                <input type="text" id="myInput6" placeholder="Szukaj po Rodzaju" onChange={szukanie6}></input>
                <input type="text" id="myInput7" placeholder="Szukaj po Typie" onChange={szukanie7}></input>
                <input type="text" id="myInput8" placeholder="Szukaj po Do Wybrakowania" onChange={szukanie8}></input>
                </div>

                <div className="druk" ref={pdf}>
                    

                    <table id="myTable">
                    

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
                                    <td onDoubleClick={() => {
                                    updateRecordusernumber(val.id)
                                }}>
                                        <div className="table-cell">
                                            <div className="value">
                                                <p>{val.usernumber}</p>
                                            </div>
                                            <div className="update-input">
                                                <select
                                                    name="usernumber"
                                                    onChange={(event) => {
                                                    setNewUsernumber(event.target.value)
                                                }} >
                                                    
                                                    {
            laboranci.map((val, key)=><option key={key}>{val.laborant}</option>)
          }
                                                </select>
                                                  
                                            </div>
                                        </div>
                                        
                                    </td>   
                                    <td onDoubleClick={() => {
                                                    updateRecordamount(val.id)
                                                }}>
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
                                                }} />
                                                
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td onDoubleClick={() => {
                                                updateRecordplace(val.id)
                                            }}>
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
                                    <td onDoubleClick={() => {
                                                    updateRecordname(val.id)
                                                }}>
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
                                    <td onDoubleClick={() => {
                                                    updateRecordroomnumber(val.id)
                                                }}> 
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
                                                }}
                                                />
                                                    
                                            </div>
            
                                        </div>
                                    </td>
                                    <td onDoubleClick={() => {
                                                updateRecorduser(val.id)
                                            }}>
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
                                                    updateRecorduser(val.id)
                                                }}>
                                                    {
            uzytkownik.map((val, key)=><option key={key}>{val.imie}</option>)
          }
                                                </select>                                             
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td onDoubleClick={() => {
                                                updateRecordkind(val.id)
                                            }}>
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
                                                    {
            rodzaj.map((val, key)=><option key={key}>{val.rodzaj}</option>)
          }
                                                </select>
                                                
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td onDoubleClick={() => {
                                                updateRecordtype(val.id)
                                            }}>
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
                                    <td onDoubleClick={() => {
                                                updateRecordfaulty(val.id)
                                            }}>
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
                <button onClick={generatePDF} className="buttons">Stwórz PDF/Wydrukuj</button>
            </div>
        </div>
    )
                    }
export default Form;