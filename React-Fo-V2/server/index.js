const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())

app.get("/", async(req, res) => {
    res.send("this is working")
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

let getDataId = require('./extra').getData()


app.get("/data/json", cors(), async(req, res) => {
  await res.send(getDataId)
})

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const { Transform } = require('stream')
const fs = require('fs');
const res = require("express/lib/response");

function transform(filename, f) {
  const TransformStream = new Transform();

  TransformStream._transform = function(chunk, encoding, callback) {
    TransformStream.push(f(chunk.toString()))
    callback();
  }
  
  
  const readable = fs.createReadStream(filename);
  const writable = fs.createWriteStream("D:/documents d/React/React-node-app-fo/client/src/JSON/Conf2.json");

  readable.pipe(TransformStream).pipe(writable)
}    




// function resetJson(){

//   try {
//     fs.unlinkSync("../client/src/JSON/Conf.json");
//     console.log("File removed:", "../client/src/JSON/Conf.json");
//   } catch (err) {
//     console.error(err);
//   }

//   fs.rename("../client/src/JSON/Conf2.json", "../client/src/JSON/Conf.json", function(err) {
//         if ( err ) console.log('ERROR: ' + err);
//     });
//   setTimeout(resetJson, 5000);
// }

// resetJson();





app.post('/postApi', (req, res) => {
  const data = req.body.id;
  console.log("test")
  console.log(data)


  transform(
    "D:/documents d/React/React-node-app-fo/client/src/JSON/Conf.json", 
    function(value){
        let value2 = JSON.parse(value)
        value2.adherent.push({
          "name": data[0],
            "house": data[1],
            "link": data[2],
            "categorie": data[3],
            "id": data[4]
        })
        return JSON.stringify(value2, null, 2)
    }
       
  )
})


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});



