const express = require("express");
// const bodyParser = require("body-parser")
const DB = require("./db")
// import './db.js'
const cors = require("cors");
const app = express();
const port = 3200;
app.use(express.urlencoded({ extended : true })) 
app.use(express.static('public'))
app.use(express.json({ limit : '1mb' }))
app.use(cors({
    origin : 'http://127.0.0.1:5500'
}))
//////////////////////////////////////////////////////////////////////////////////////////      
// ==================== DB ========================

let UserBase = [      
    {
        "User" : {
            "id" : "154788321",
            "name" : "Alex",
            "nickname" : "Rolf",
            "password" : "123789",
            "e-mail" : "",
            "" : "",
            "myBooking" : [],
            "myComments" : [],
            "assasment" : [],
            "accesses" : {
                "userSession" : {
                    "sessionKey" : "j90cKfL78Hd8hR77t5",
                    "sessionDate" : "20.07.2020"
                }
            },
            "myNotifications" : [],
            "myChat" : {},
            "myFavoritePosts" : [],
            "myFavoriteProduct" : [],
            "mCart" : [{}],
            "history" : { 
                "myPurchases" : [
                    {"idProduct" : "789877787"}
                ]
            }
        }
    }
]
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
          get discount() {
              let count = +this.cost.old - +this.cost.new,
              proc = +this.cost.old / 100,
              res = Math.floor(count / proc)
              return res 
          },
          rating: {
              votes: ['5', '5', '5'],
          },
          color: 'Black',
          size: 'L'
      },
      {
          id: '002',
          name: 'HProduct name',
          img: [
              '../img/image.png'
          ],
          category: '',
          brand: 'Nike',
          cost: {
              old: '',
              new: '159'
          },
          get discount() {
              let count = +this.cost.old - +this.cost.new,
              proc = +this.cost.old / 100,
              res = Math.floor(count / proc)
              return res 
          },
          rating: {
              votes: ['5',  '2', '3', '4', '5', '4', '4', '5', '3', '3'],
          },
          color: 'Blue',
          size: 'S'
      },
      {
          id: '003',
          name: 'BProduct name',
          img: [
              '../img/image.png'
          ],
          category: '',
          brand: 'Tissot',
          cost: {
              old: '155',
              new: '99'
          },
          get discount() {
              let count = +this.cost.old - +this.cost.new,
              proc = +this.cost.old / 100,
              res = Math.floor(count / proc)
              return res 
          },
          rating: {
              votes: ['5', '4', '4', '4', '4', '4']
          },
          color: 'White',
          size: 'M'
      },
      {
          id: '004',
          name: 'AProduct name',
          img: [
              '../img/image.png'
          ],
          category: '',
          brand: 'Montblance',
          cost: {
              new: '199'
          },
          get discount() {
              let count = +this.cost.old - +this.cost.new,
              proc = +this.cost.old / 100,
              res = Math.floor(count / proc)
              return res 
          },
          rating: {
              votes: ['3']
          },
          color: 'White',
          size: 'S'
      },
      {
          id: '005',
          name: 'AProduct name',
          img: [
              '../img/image.png'
          ],
          category: '',
          brand: 'Montblance',
          cost: {
              old: '399',
              new: '199'
          },
          get discount() {
              let count = +this.cost.old - +this.cost.new,
              proc = +this.cost.old / 100,
              res = Math.floor(count / proc)
              return res 
          },
          rating: {
              votes: ['5', '5', '5', '4'],
              // get voters(){return this.votes.length} ,
              // get rate() {  
              //     let res = +this.votes[0]
              //     for( let i = 1; i < this.votes.length; i++ ){
              //         res += +this.votes[i]
              //     }
              //     res = Math.floor(res/this.votes.length)
              //     return res
              // } 
          },
          color: 'Blue',
          size: 'M'
      }
  ]
}
let mainData = {
    d: [1,5,7,100]
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

app.get("/", cors(), (req, res) => {
  res.send(["no 7897894IIIII"]);
});
app.get("/persons", cors(), (req, res) => {
  console.log("persons");
  res.send( products);
}); 

app.listen(port, () => console.log("http://localhost:" + port));    
  
