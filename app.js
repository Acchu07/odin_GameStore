import 'dotenv/config';
import express from 'express'
import { indexRouter } from './routes/indexRoute.js';
import { gameRouter } from './routes/gameRoute.js';
import { developerRouter } from './routes/developerRoute.js';

const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public/stylesheets'));
app.listen(process.env.PORT,()=> console.log('Server Running'))

app.use('/', indexRouter)
app.use('/game',gameRouter)
app.use('/developer',developerRouter)


app.use((err, req, res, next) => {
    console.error(err);
});


// Ignore building genre for now figure that out last