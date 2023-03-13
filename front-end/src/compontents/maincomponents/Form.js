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
       const ShowMaterial = () => {
        Axios.get('http://localhost:3001/wykaz_materialow').then((response)=> {
        setMaterialList(response.data) ;
         });    
};

    return(
        <div className="container">
            <div className="form">
                <div className="fields">
                <div className="inputs">
                    <label>Nr Laboranta :</label>
                        <select id="usernumber" onChange={(event) =>{setUsernumber(event.target.innerText)}} >
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                        </select> 
                    <label>Ilosc :</label>
                        <input type="number" min="0" onChange={(event) =>{setAmount(event.target.innerText)}} ></input>
                    <label>Miejsce :</label>
                        <select id="place" onChange={(event) =>{setPlace(event.target.innerText)}}>
                            <option >sala102</option>
                            <option >sala103</option>
                            <option >sala104</option>
                        </select> 
                </div >
                    <div className="inputs">
                    <label>Nazwa :</label>
                        <input type="text"  onChange={(event) =>{setName(event.target.innerText)}}></input>
                    <label>Nr Inwentarzowy  :</label>
                        <input type="number" min="0" onChange={(event) =>{setRoomnumber(event.target.innerText)}}></input>
                    <label>Użytkownik sprzętu :</label>
                        <select id="user" onChange={(event) =>{setUser(event.target.innerText)}}>
                            <option >m.Kucko</option>
                            <option >m.Tycko</option>
                            <option >m.Nowak</option>
                        </select> 
                </div>
                <div className="inputs">   
                    <label>Rodzaj :</label>
                        <select id="kind" onChange={(event) =>{setKind(event.target.innerText)}}>
                            <option >Szafa rakowa</option>
                            <option >Tablet</option>
                            <option >Stół</option>
                        </select> 
                    <label>Typ :</label>
                        <select id="type" onChange={(event) =>{setType(event.target.innerText)}}>
                            <option >Stanowy</option>
                            <option >Bezstanowy</option>
                        </select> 
                    <label>Do wybrakowania :</label>
                        <select id="faulty" onChange={(event) =>{setFaulty(event.target.innerText)}}>
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
                                        <td>{val.usernumber}</td><td>{val.amount}</td><td>{val.place}</td><td>{val.name}</td>
                                        <td>{val.roomnumber}</td><td>{val.user}</td><td>{val.kind}</td><td>{val.type}</td>
                                        <td>{val.faulty}</td>
                                </tr>
                            </table>
                    
            );
           
          })}
        </div>
        </div>
    )
}
export default Form;