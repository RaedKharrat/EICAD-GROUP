const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/carolinashort/asimovian/master/fonts/ttf/Asimovian-Regular.ttf';
const file = fs.createWriteStream('./public/Asimovian-Regular.ttf');

https.get(url, function(response) {
  if(response.statusCode === 200) {
     response.pipe(file);
     file.on('finish', function() {
       file.close();
       console.log('Download complete');
     });
  } else {
     console.log('Failed to download: ' + response.statusCode);
  }
}).on('error', function(err) {
  fs.unlink('./public/Asimovian-Regular.ttf');
  console.log('Error: ', err.message);
});
