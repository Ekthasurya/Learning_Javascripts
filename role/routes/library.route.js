const express = require('express');
const authorize = require('../middleware/authorization.middleware')

const libraryRouter = express.Router();

libraryRouter.get('/manage-books',authorize(["librarian"]),(req,res)=>{
    res.send('Manage Books');
})

libraryRouter.get('/Borrow-books',authorize(["librarian","member"]),(req,res)=>{
    res.send('Borrow Books');
})

libraryRouter.get('/return-books',(req,res)=>{
    res.send('return Books');
})

libraryRouter.get('/manage-members',(req,res)=>{
    res.send('Manage Members');
})

libraryRouter.get('/update-profile',(req,res)=>{
    res.send('update-profile');
})

libraryRouter.get('/browse-catelog',(req,res)=>{
    res.send('browse-catlog');
})

module.exports = libraryRouter