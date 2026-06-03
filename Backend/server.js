import express from 'express';

const app = express();

app.get('/api/bio', (req, res)=>{
    const bio = [
        {
            name: 'Rajdip Mondal',
            Dept: 'CSE',
            College: 'GMIT',
            Experience: 'Product Implementation Trainee at Uphead Management Consulting Pvt. Ltd.',
            Skills: 'Java, HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB'
        }
    ];
    res.send(bio);
});

// app.get('/', (req, res)=>{
//     res.send('Hello World!');
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server at http://localhost:${PORT}`);
});