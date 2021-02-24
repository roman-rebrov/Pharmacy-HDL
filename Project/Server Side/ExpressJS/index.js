const express = require("express");
// const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const port = 3219;
app.use(express.urlencoded({ extended : true })) 
app.use(express.static('public'))
app.use(express.json({ limit : '1mb' }))
app.use(cors({
    origin : 'http://127.0.0.1:5500'
}))
app.listen(port, () => console.log("http://localhost:" + port));    


let DB = require("./db")
let  productList = require('./src/products');
let  slides = require('./src/slides');
let recommendedlist = require('./src/recommendedList')

///////////////////////////////////////////////////////////////////////////////////////////////////      
/**
 * 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////      
function getProductById(id) {
    let obj = {};

    DB.ProductsDB.forEach((item, i)  => {
        if( item.id === id ){
            obj = item;
        }
    })
    return obj;
};

function checkUser(){
    let usersBase = [];
    for ( let i = 0; i < UserBase.length; i++ ){
        usersBase[i] = UserBase[i].User.accesses.userSession;
        if ( usersBase[i].sessionKey === UserBase[i].User.accesses.userSession.sessionKey ){
            usersBase.push(true);
        }
    }
    return usersBase;
};

app.post("/test", cors(), (req, res) => {
    const data = req.body
    console.log(req.body.p);
    res.json({
        users : UserBase,
        main : checkUser(),
        status : DB,
        text : 'Kick!',
        back : req.body
    })
})
// ------------------------------------------------
app.get("/", cors(), (req, res) => {
    console.log("OK");
    setTimeout(() => {
        res.send(productList );
    }, 2000)
});

app.get("/product/:id", cors(), (req, res) => {
    console.log(req.params.id);
    console.log(req.query);
    setTimeout(() => {
        let productObject = getProductById(req.params.id);
        console.log(productObject);

        res.send(productObject );
    }, 2000)
});

app.get("/slides", cors(), (req, res) => {
    console.log("Yes");

    setTimeout(() => {
        res.send(slides );
    }, 2000)
});

app.get("/recommendedlist", cors(),(req, res) => {
    setTimeout(() => {
    res.send(recommendedlist.list);
        }, 5000)
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

// ===================================
app.get("/home/populars", cors(),(req, res) => {
    try{
        res.send(' ');
    } catch(e) {
        
    }
})
// ======================================
let prodArray = [];
function productsFabrice(num) {
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push({
            id: "A20" + i,
            brande: "Koktail",
            name: "kflkfg sdf",
            photo : [
                'https://media.apteka366.ru/sys_master/product/h91/h2b/8817132765214.jpg',
            ],
            cost : {
                old : '',
                new : '1' + i
            },
            discribes : 'Подгузники-трусики Libero Up&Go (7-11кг.), 18 шт.'
        },
        );
    };
    return arr;
};
prodArray = productsFabrice(10)
// productList.list.push(...prodArray)

// ======================================