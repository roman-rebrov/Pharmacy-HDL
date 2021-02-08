// import Products from './src/products'

const express = require("express");
// const bodyParser = require("body-parser")
const DB = require("./db")
// import './db.js'
const cors = require("cors");
const app = express();
const port = 3219;
app.use(express.urlencoded({ extended : true })) 
app.use(express.static('public'))
app.use(express.json({ limit : '1mb' }))
app.use(cors({
    origin : 'http://127.0.0.1:5500'
}))

let  productList = require('./src/products');
let  slides = require('./src/slides');

//////////////////////////////////////////////////////////////////////////////////////////      
// ==================== DB ========================


const products = {    
  list: [
      {
          id: '001',
          name: 'JProduct name',
          img: [
              '../img/image.png'
          ],
          category: '',
          brand: 'Adidas',
          cost: {
              old: '350',
              new: '299'
          },
          rating: {
              votes: ['5', '5', '5'],
          },
          color: 'Black',
          size: 'L'
      },

  ]
}
// /////////////////////////////////////////////////////////////////////////////////////
function checkUser(){
    let usersBase = []
    for ( let i = 0; i < UserBase.length; i++ ){
        usersBase[i] = UserBase[i].User.accesses.userSession
        if ( usersBase[i].sessionKey === UserBase[i].User.accesses.userSession.sessionKey ){
            usersBase.push(true)
        }
    }
    return usersBase
}

app.post("/test", cors(), (req, res) => {
    const data = req.body
    console.log(req.body.p);
    console.log('Hiiii');
    res.json({
        users : UserBase,
        main : checkUser(),
        status : DB.poop,
        text : 'Kick!',
        back : req.body
    })
})
// ------------------------------------------------
app.get("/", cors(), (req, res) => {
    setTimeout(() => {
        res.send(productList );
    }, 2000)
});

app.get("/slides", cors(), (req, res) => {
    setTimeout(() => {
        res.send(slides );
    }, 2000)
});
// ------------------------------------------------
app.get("/newUser", cors(),  (req,res) => {
    res.send([checkUser()])
})
// app.post("/checkUser", async (req, res) => {
//    const check =  req
//     // console.log(req);
//     // await res.send(products)
// })
app.get("/checkUser",cors(),  (req, res) => {
    res.send(products)
} )

app.get("/persons", cors(), (req, res) => {
  console.log("persons");
  res.send( products);
}); 

app.listen(port, () => console.log("http://localhost:" + port));    
  
