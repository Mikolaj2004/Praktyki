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

app.put('/update',(req,res)=>{
    const id = req.body.id;
    const place = req.body.place;
    const usernumber = req.body.usernumber;
    const name = req.body.name;
    const kind = req.body.kind;
    const type = req.body.type;
    const faulty = req.body.faulty;
    const roomnumber = req.body.roomnumber;
    const amount = req.body.amount;
    const user = req.body.user;
    conn.query("UPDATE wykaz_materialow SET usernumber = ?, amount = ?, place = ?, name = ?, roomnumber = ?, user = ?, kind = ?, type = ?, faulty = ? WHERE id = ?", [usernumber,amount,place,name,roomnumber,user,kind,type,faulty, id],(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    }
    );
})
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

// Adding new user to database
app.post('/newuser',(req,res)=>{

const imie = req.body.imie;
const nazwisko = req.body.nazwisko;
    conn.query('INSERT INTO user (imie,nazwisko) VALUES (?,?)', 
    [imie,nazwisko], (err,result) =>{
        if(err){
            console.log("err");
        }
        else{
            res.send("Values Inserted");
        }
    });
});

//Adding new place to database

app.post('/newplace',(req,res)=>{

    const miejsce = req.body.miejsce;
        conn.query('INSERT INTO place (miejsce) VALUES (?)', 
        [miejsce], (err,result) =>{
            if(err){
                console.log("err");
            }
            else{
                res.send("Values Inserted");
            }
        });
    });

//Adding new kind to database

    app.post('/newkind',(req,res)=>{

        const rodzaj = req.body.rodzaj;
            conn.query('INSERT INTO kind (rodzaj) VALUES (?)', 
            [rodzaj], (err,result) =>{
                if(err){
                    console.log("err");
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

//Delete entire resource
app.delete('/delete/:id', (req,res)=>{
    const id = req.params.id
    conn.query("DELETE FROM wykaz_materialow WHERE id = ?", id, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
//Checking that server is available
app.listen(3001, () =>{
    console.log("Great! Your server is available on port 3001 ")
});