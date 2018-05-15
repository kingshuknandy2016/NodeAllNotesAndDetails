var fs=require('fs');
var args=process.argv.length;

console.log(process.argv);

if(args < 3){
  console.log("Usage: node 04_readFile.js  <file>");  
  process.exit(1);
}

var total= 0;
for(i=2;i<args;i++){
  console.log(i);  
  total ++;

}

console.log("Total # of args provided to this program were: "+ total);


var fileToRead=process.argv[2];
var contents=fs.readFileSync(fileToRead);
var lines=contents.toString().split('\n').length;
console.log(fileToRead  + " had "+ lines + "lines in it");