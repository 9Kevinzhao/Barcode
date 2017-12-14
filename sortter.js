const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");
const IsbnEanAdapter = require("./IsbnEanAdapter.js");
const BookFactory = require("./BookFactory.js");
const Random = require('./Random.js');
//bookfactory
function sort(){
    let list=[]
    let bf =new BookFactory()
    for(let i=0;i<10;i++){
        let year = Random().discreteRangeIn(1900,2017);
        let book = bf.createBook(year)
        if(year >=2007){
            list.unshift(book);
        }
        else{
            list.unshift(IsbnEanAdapter(book));
        }
    }

    list.sort(function(a,b){return a.code-b.code})
    console.log(list);

//    console.log(Number(list[2].sysCode)+1);
}
sort()
