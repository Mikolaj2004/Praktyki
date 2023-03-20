
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
    conn.query('INSERT INTO uzytkownik (imie) VALUES (?)', 
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
        conn.query('INSERT INTO miejsce (miejsce) VALUES (?)', 
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
            conn.query('INSERT INTO rodzaj (rodzaj) VALUES (?)', 
            [rodzaj], (err,result) =>{
                if(err){
                    console.log("err");
                }
                else{
                    res.send("Values Inserted");
                }
            });
        });
// Dodanie nowego laboranta

app.post('/newlaborant',(req,res)=>{

    const laborant = req.body.laborant;
        conn.query('INSERT INTO laboranci (laborant) VALUES (?)', 
        [laborant], (err,result) =>{
            if(err){
                console.log("err");
            }
            else{
                res.send("Values Inserted");
            }
        });
    });


app.get('/sortdescamount',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY amount DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdescusernumber',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY usernumber DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdescplace',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY place DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdescname',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY name DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdescroomnumber',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY roomnumber DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdescuser',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY user DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdesckind',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY kind DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.get('/sortdesctype',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY type DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortdescfaulty',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY faulty DESC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})


// SORT BY ASC

app.get('/sortascamount',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY amount ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortascusernumber',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY usernumber ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortascplace',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY place ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortascname',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY name ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortascroomnumber',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY roomnumber ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortascuser',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY user ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortasckind',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY kind ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.get('/sortasctype',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY type ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/sortascfaulty',(req,res) => {
 

    conn.query("SELECT * FROM wykaz_materialow ORDER BY faulty ASC" , (err, result) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
//
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