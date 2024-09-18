import 'dotenv/config';
import express from 'express'
import { indexRouter } from './routes/indexRoute.js';
import { gameRouter } from './routes/gameRoute.js';
import { developerRouter } from './routes/developerRoute.js';

const app = express()


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded());

app.listen(process.env.PORT,()=> console.log('Server Running'))

app.use('/', indexRouter)
app.use('/game',gameRouter)
app.use('/developer',developerRouter)

// Ignore building genre for now figure that out last


app.use((err, req, res, next) => {
    res.send('NO SUCH PAGE EXISTS');
    console.error(err);
});

