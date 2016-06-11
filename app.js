const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);
app.get('*', (req, res) => {
   res.end('Node.js REST service');
});

var server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});