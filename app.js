import 'dotenv/config';
import express from 'express'
import { indexRouter } from './routes/indexRoute.js';

const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public/stylesheets'));
app.listen(process.env.PORT,()=> console.log('Server Running'))

app.get('/', indexRouter)


app.use((err, req, res, next) => {
    console.error(err);
});
