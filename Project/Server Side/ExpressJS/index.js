const express = require("express");
// const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const port = process.env.PORT ||  3219;
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
function topicHandler(list){
    let topicList = [];
    for(let i = 0; i < list.length; i++){
        topicList.push(...list[i].topic);
    }
    return(topicList);
}

const TopicListRow = topicHandler(productList.list);
// productList.topic = [... new Set(TopicListRow)];
const TopicList = [... new Set(TopicListRow)];
// console.log(TopicList);

///////////////////////////////////////////////////////////////////////////////////////////////////      
function getProductById(id) {
    let obj = {};

    // DB.ProductsDB.forEach((item, i)  => {
        productList.list.forEach((item, i)  => {
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
function newOrderCreater(data) {     //    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let newOrderObject = {
        personal: {},
        location: {},
        products: []
    }
    return (newOrderObject)
};

function topicSelectedHandler(list, topic) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        const el = list[i].topic;
        for (let j = 0; j < el.length; j++) {
            const topicsElement = el[j];
            if(topicsElement === topic){ newList.push(list[i]) }
        }
    }
    return(newList);
}

function catalogHandler(obj, query){  //  
    let selectedList = obj.list;
    let responceObject = {
        list: [],
        page: 1,
        limit: 20,
        // topic: TopicList
    }; 
    let page = responceObject.page;
    let limit = responceObject.limit;
    if (Object.keys(query).length > 0) {
        if(query.topic){
            selectedList = topicSelectedHandler(obj.list, query.topic);
            responceObject.topic = query.topic;
        }
        if(query.limit != null){
            limit = +query.limit;
        }
        if(query.page != null){
            page = +query.page;
        }

    } 
        responceObject.arrLength =  selectedList.length;
        const start = (page - 1) * limit ;
        const finish = start + limit ;
        responceObject.page = page;
        responceObject.limit = limit;
        responceObject.list = selectedList.slice(start, finish);

    return(responceObject)
};
//  -------------------------------------------------------------------------------

app.post("/newOrder", cors(), (req, res) => {        //    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let result = newOrderCreater(req.body);
        res.json(result);
});

app.post("/test", cors(), (req, res) => {
    const data = req.body;
    console.log(req.body.p);
    res.json({
        users : UserBase,
        main : checkUser(),
        status : DB,
        text : 'Kick!',
        back : req.body
    });
});
// -----------------------------------------------------------------
app.get("/catalog", cors(), (req, res) => {
    console.log(req.query);
    // console.log(productList.list);
    const result = catalogHandler(productList, req.query);
    setTimeout(() => {
        res.send( result );
    }, 2000)
});

app.get("/topics", cors(), (req, res) => { 
    setTimeout(() => {
        res.send( TopicList );
    }, 1000)
});


app.get("/product/:id", cors(), (req, res) => {
    // console.log(req.params.id);
    // console.log(req.query);
    setTimeout(() => {
        let productObject = getProductById(req.params.id);
        console.log(productObject);

        res.send(productObject );
    }, 1000)
});

app.get("/slides", cors(), (req, res) => {

    setTimeout(() => {
        res.send(slides );
    }, 2000)
});

app.get("/recommendedlist", cors(),(req, res) => {
    setTimeout(() => {
    res.send(recommendedlist.list);
        }, 2500)
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
// let prodArray = [];
// function productsArrayCreater(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++){
//         arr.push({
//             id: "A20" + i,
//             brande: "Koktail",
//             name: "kflkfg sdf",
//             photo : [
//                 'https://media.apteka366.ru/sys_master/product/h91/h2b/8817132765214.jpg',
//             ],
//             cost : {
//                 old : '',
//                 new : '1' + i
//             },
//             discribes : 'Подгузники-трусики Libero Up&Go (7-11кг.), 18 шт.',
//             topic: [""],
//         },
//         );
//     };
//     return arr;
// };
// prodArray = productsArrayCreater(100)
// productList.list.push(...prodArray)

// ======================================