import express from 'express';
import config from 'config';
import serverRender from 'renderes/server';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('*', (req, res) => {
    const initialContent = serverRender(req, {});
    res.render('index', { initialContent });
});

app.listen(config.port, function() {
    console.log(`Running on ${config.port} ... `);
});

