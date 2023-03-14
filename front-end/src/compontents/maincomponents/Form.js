import {useState} from "react";
import Axios from 'axios'
function Form (){
    const [usernumber, setUsernumber] = useState(0);
    const [amount, setAmount] = useState(0);
    const [place, setPlace] = useState('');
    const [name, setName] = useState('');
    const [roomnumber, setRoomnumber] = useState(0);
    const [user, setUser] = useState('');
    const [kind, setKind] = useState('');
    const [type, setType] = useState('');
    const [faulty, setFaulty] = useState('');

    //Udapte
    const [newUsernumber, setNewUsernumber] = useState(0);
    const [newAmount, setNewAmount] = useState(0);
    const [newPlace, setNewPlace] = useState('');
    const [newName, setNewName] = useState('');
    const [newRoomnumber, setNewRoomnumber] = useState(0);
    const [newUser, setNewUser] = useState('');
    const [newKind, setNewKind] = useState('');
    const [newType, setNewType] = useState('');
    const [newFaulty, setNewFaulty] = useState('');

    const [MaterialList, setMaterialList]= useState([]);

    const addMaterial = () => {
      Axios.post('http://localhost:3001/create', {
       usernumber: usernumber,
       amount: amount,
       place: place,
       name: name, 
       roomnumber: roomnumber,
       user: user,
       kind: kind,
       type: type,
       faulty: faulty }).then(()=> {
        setMaterialList([...MaterialList,
            {usernumber: usernumber,
            amount: amount,
            place: place,
            name: name, 
            roomnumber: roomnumber,
            user: user,
            kind: kind,
            type: type,
            faulty: faulty,
           },
          ]);
       });
    };
    const updateRecord = (id) => {
        Axios.put("http://localhost:3001/update", { 
        user: newUser,
        name: newName,
        usernumber: newUsernumber,
        place: newPlace,
        kind: newKind,
        roomnumber: newRoomnumber,
        type: newType,
        faulty: newFaulty,
        amount: newAmount,  id: id }).then(
          (response) => {
            setMaterialList(
              MaterialList.map((val) => {
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
                      user: newUser,
                    }
                  : val;
              })
            );
          }
        );
      };
       const ShowMaterial = () => {
        Axios.get('http://localhost:3001/wykaz_materialow').then((response)=> {
        setMaterialList(response.data) ;
         });    
};
        const deleteRecord =(id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
        setMaterialList(MaterialList.filter((val) =>{
        return val.id !== id
      }))
    })
}
    return(
        <div className="container">
            <div className="form">
                <div className="fields">
                <div className="inputs">
                    <label>Nr Laboranta :</label>
                        <select name="usernumber" onChange={(event) =>{setUsernumber(event.target.value)}} >
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                        </select> 
                    <label>Ilosc :</label>
                        <input type="number" min="0" onChange={(event) =>{setAmount(event.target.value)}} ></input>
                    <label>Miejsce :</label>
                        <select name="place" onChange={(event) =>{setPlace(event.target.value)}}>
                            <option >sala102</option>
                            <option >sala103</option>
                            <option >sala104</option>
                        </select> 
                </div >
                    <div className="inputs">
                    <label>Nazwa :</label>
                        <input type="text"  onChange={(event) =>{setName(event.target.value)}}></input>
                    <label>Nr Inwentarzowy  :</label>
                        <input type="number" min="0" onChange={(event) =>{setRoomnumber(event.target.value)}}></input>
                    <label>Użytkownik sprzętu :</label>
                        <select name="user" onChange={(event) =>{setUser(event.target.value)}}>
                            <option >m.Kucko</option>
                            <option >m.Tycko</option>
                            <option >m.Nowak</option>
                        </select> 
                </div>
                <div className="inputs">   
                    <label>Rodzaj :</label>
                        <select name="kind" onChange={(event) =>{setKind(event.target.value)}}>
                            <option >Szafa rakowa</option>
                            <option >Tablet</option>
                            <option >Stół</option>
                        </select> 
                    <label>Typ :</label>
                        <select name="type" onChange={(event) =>{setType(event.target.value)}}>
                            <option >Stanowy</option>
                            <option >Bezstanowy</option>
                        </select> 
                    <label>Do wybrakowania :</label>
                        <select name="faulty" onChange={(event) =>{setFaulty(event.target.value)}}>
                            <option >Tak</option>
                            <option >Nie</option>
                        </select>
                </div>
                </div>
                 
            <button className="add" onClick={addMaterial}> Dodaj do bazy</button>
            
        </div>
        <div className="show">
            <button onClick={ShowMaterial}>Pokaż wykaz materiałów</button>
                <table>
                    <tr>
                        <td>Nr Laboranta</td><td>Ilość</td><td>Miejsce</td><td>Nazwa</td><td>Nr Inwentarzowy</td>
                        <td>Użytkownik sprzętu</td><td>Rodzaj</td><td>Typ</td><td>Do wybrakowania</td>
                    </tr>

                </table>

           
                {MaterialList.map((val,key) =>{
                    return ( 
                            <table>
                                <tr>
                                    <td>{val.usernumber}<div><select name="usernumber" onChange={(event) =>{setNewUsernumber(event.target.value)}} >
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                </select> </div></td>
                                    <td>{val.amount}<div><input type="text" placeholder="1..."onChange={(event) =>{setNewAmount(event.target.value)}}/></div></td>
                                    <td>{val.place}<div><select name="place" onChange={(event) =>{setNewPlace(event.target.value)}}>
                                    <option >sala102</option>
                                    <option >sala103</option>
                                    <option >sala104</option>
                                    </select> </div> </td>
                                    <td>{val.name}<div><input type="text" placeholder="Tablet.."onChange={(event) =>{setNewName(event.target.value)}}/></div></td>
                                    <td>{val.roomnumber}<div><input type="text" placeholder="2000..."onChange={(event) =>{setNewRoomnumber(event.target.value)}}/></div></td>
                                    <td>{val.user}<div><select name="user" onChange={(event) =>{setNewUser(event.target.value)}}>
                                    <option >m.Kucko</option>
                                    <option >m.Tycko</option>
                                    <option >m.Nowak</option>
                                    </select> </div></td>
                                    <td>{val.kind}<div><select name="kind" onChange={(event) =>{setNewKind(event.target.value)}}>
                                    <option >Szafa rakowa</option>
                                    <option >Tablet</option>
                                    <option >Stół</option>
                                    </select> </div></td>
                                    <td>{val.type}<div><select name="type" onChange={(event) =>{setNewType(event.target.value)}}>
                                    <option >Stanowy</option>
                                    <option >Bezstanowy</option>
                                    </select> </div></td>
                                    <td>{val.faulty}<div><select name="faulty" onChange={(event) =>{setNewFaulty(event.target.value)}}>
                                    <option >Tak</option>
                                    <option >Nie</option>
                                    </select></div></td>         
                                    <button onClick={()=>{updateRecord(val.id)}}>Zaktualizuj</button>
                                    <button onClick={() => {deleteRecord(val.id)}}>Usuń</button>                                      
                                </tr>
                            </table>
                            
                    
            );
           
          })}
        </div>
        </div>
    )
}
export default Form;