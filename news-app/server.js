const express = require('express');

const app = express();


app.use(express.static('./dist/news-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/news-app/'}
  );
  });

  app.listen(process.env.PORT || 8080);

  console.log('app is running on port 8080')