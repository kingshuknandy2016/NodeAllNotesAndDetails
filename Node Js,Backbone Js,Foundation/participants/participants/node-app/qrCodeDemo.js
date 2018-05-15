var qr=require('qr-image');
var fs=require('fs');

var code=qr.image('http://fleetingmoments.net/fm',
    {type : 'svg'});

    var output=fs.createWriteStream('fmQrcode.svg');
    code.pipe(output);
