const { request, response } = require('express');
const express = require('express');
const blogRouter = require('./routes/blogs')
const app = express()
//st template enjin
app.set('view engine','ejs');


app.get('/',(request,response)=>{
    const blogs=[
        {
            title:'The information we do not need',
            snippt:'you ve probably herd of ispus before he is a great guy he is like a iron man of england',
            author:'samtea codes',
            createdAt: Date.now(),
            img:'placeholder.img'
        }
    ]
    response.render("index",{blogs: blogs})    
});

app.use('/blogs', blogRouter);

//listen port
app.listen(5000)