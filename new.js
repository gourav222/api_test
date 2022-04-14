var express = require("express");
var app = express();

var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send("<h1>Gourav</h1>");
})
app.post("/",(req,res) => {
    var a = {};
    var body = req.body;
    var name = "Gourav";
    var odd = [];
    var even = [];
    var cnt_odd = 0,cnt_even = 0;
    var f = true;

    for(i = 0;i<body.numbers.length;i++){
        tmp = parseInt(body.numbers[i]);
        if(tmp % 2 == 0)
            even[cnt_even++] = tmp;
        else    
            odd[cnt_odd++]  = tmp;   
    }
    a={is_success:f ,name : name, odd:odd, even:even}
    res.json(a);
})
app.listen("3000");