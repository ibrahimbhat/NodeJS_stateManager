var express = require('express');
var app = express();
var x;
app.get('/',function(req,res){
    if(typeof x == "undefined")
    {x="NA"
     res.send("NA")
    }
    else{
    res.send(x);}
})

app.get('/state/:tagId', function(req, res) {
    x=req.params.tagId
    res.send("state is set to " + req.params.tagId);
  });



app.listen(8080);
