const BookFactory = require("./BookFactory.js");
const Random = require('./Random.js');

function sortedBook(){
    let list=[]
    let e=new BookFactory()
    for(let i=0;i<1000;i++){
        let pubYear=Random().discreteRangeIn(1900,2010)
        list.push(e.createBook(pubYear))
    }
    
}
