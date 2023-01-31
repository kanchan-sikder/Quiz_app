const express = require('express')
const pool =require('../db');
const jwt = require('jsonwebtoken')

const jwtTokens = require ('../utils/jwt-helper')

const user = express.Router();

user.post('/login',async(req,res)=>{
    try{
        
        const users = await pool.query("SELECT * FROM users where user_id=$1 and user_password=$2;",[req.body.user_id,req.body.user_password]);
        if(users.rows.length===0) return res.status(404).json({error:"Id or Password is incorrect"});
        let tokens= jwtTokens(users.rows[0]);
        res.cookie('refresh_token',tokens.refreshtoken,{httpOnly:true});
        console.log(res.cookie('refresh_token'))
        res.json({tokens,users});
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

user.get('/',async(req,res)=>{
    try{
        const newUser = await pool.query("SELECT * FROM users;");
        res.json(newUser.rows);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

user.delete('/',(req,res)=>{
    try{
        res.clearCookie('refresh_token');
        return res.status(200).json({message:'Logout'})

    }catch(error){
        res.status(401).json({error:error.message})
    }
})

module.exports=user;