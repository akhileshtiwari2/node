const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.get('/profile',(req, res)=>{
    const user={
        name:'Akhilesh',
        email:'akhi@gmail.com',
        city:'Ujjain',
        skils:['PHP','Node','C++','Java']
    }
    res.render('profile',{user});
})

app.get('/login',(req, res)=>{
    res.render('login');
})

app.listen(3000);