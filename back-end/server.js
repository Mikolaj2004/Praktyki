const express = require('express');
const app = express();
const mysql =require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const conn= mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'database', 
});
app.post('/create', (req,res) =>{
    const usernumber = req.body.usernumber;
    const amount = req.body.amount;
    const place = req.body.place;
    const name = req.body.name;
    const roomnumber = req.body.roomnumber;
    const user = req.body.user;
    const kind = req.body.kind;
    const type = req.body.type;
    const faulty = req.body.faulty;

    conn.query('INSERT INTO wykaz_materialow (usernumber,amount,place,name,roomnumber,user,kind,type,faulty) VALUES (?,?,?,?,?,?,?,?,?)', 
    [usernumber,amount,place,name,roomnumber,user,kind,type,faulty], (err,result) =>{
        if(err){
            console.log("Oh no!, You have an error");
        }
        else{
            res.send("Values Inserted");
        }
    });

});

app.get('/wykaz_materialow',(req,res) => {
    conn.query("SELECT * FROM wykaz_materialow", (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.listen(3001, () =>{
    console.log("Great! Your server is available on port 3001 ")
});