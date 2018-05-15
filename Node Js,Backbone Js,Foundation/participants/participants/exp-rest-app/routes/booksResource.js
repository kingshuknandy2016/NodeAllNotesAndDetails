var express = require('express');
var router = express.Router();

var books=[
      {'id':1,name:'Catch22',author:'Joseph Heller',year:'1992'},
      {'id':2,name:'The camera',author:'Ansel adams',year:'1950'}

]

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.send(books);
});

function findbook(id){
  for(var i=0;i<books.length;i++){
    if(books[i].id===id){
      return {"book":books[i],"index":i};
    }
  }
  return null;
}


router.get("/:id",function(req,res,next){
    var returnVal= findbook(parseInt(req.params.id,10));
    if(returnVal==null){
      res.sendStatus(404);
    }else{
      res.json (returnVal.book);
    }
});

router.post("/",function(req,res,next){
   var book=req.body;
   if(!book.name){
      res.json({errors:"Name is a required field!"});
   }else{
      lastId=books[books.length-1].id;
      book.id=lastId+1;
      books.push(book);
      res.json({message:"Book successfully added!",book});
   }
   
});

router.put("/:id",function(req,res){
   var book=req.body;
   var returnVal= findbook(parseInt(req.params.id,10));
   if(returnVal==null){
     console.log('could not find book'+ returnVal);
      res.sendStatus(404);
    }else{
      books[returnVal.index]=book;
      res.json ({message:"Book updated!",book});
    }
});

router.delete("/:id",function(req,res){
   var book=req.body;
   var returnVal= findbook(parseInt(req.params.id,10));
   if(returnVal==null){
     console.log('could not find book'+ returnVal);
      res.sendStatus(404);
    }else{
      // books[returnVal.index]=book;
      // res.json ({message:"Book updated!",book});
      if(returnVal.index>-1){
        books.splice(returnVal.index,1);
        console.log("book successfully removed");
        res.json({message:"books has been removed"});
      }
    }
});




module.exports = router;
