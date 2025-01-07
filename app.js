import express from 'express';
import session from 'express-session';
import flash from 'express-flash';

// PORT
const port = 3000

const app = express();
app.use(flash());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}))
app.use(session({
    secret: 'will change later',
    resave: false,
    saveUninitialized: true,
}))
app.use((req, res, next) => {
    res.locals.errorMessages = req.flash('error');
    next()
});
// Route Imports
import signUp from './routes/signUp.js'


// Routes
app.use('/signup', signUp);

app.get('/', (req, res)=>{
    res.render('home')
})


app.listen(port, ()=>{
    console.log(`[+] Server Started On Port: ${port}`)
})