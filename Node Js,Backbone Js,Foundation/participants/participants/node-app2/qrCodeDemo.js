var qr=require('qr-image');
var fs=require('fs');

var code=qr.image('http://www.tutorialspoint.com/nodejs/nodejs_first_application.htm',
    {type : 'svg'});

    var output=fs.createWriteStream('fmQrcode.svg');
    code.pipe(output);
