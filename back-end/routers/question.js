const express = require('express')
const pool =require('../db');

const ques = express.Router();

ques.post('/',async(req,res)=>{
    try{
        const {q,op1,op2,op3,op4,ans,category,level} = req.body;
        const newQues = await pool.query("insert into question (ques_desp,ques_option1,ques_option2,ques_option3,ques_option4,ans,category,level) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
        [q,op1,op2,op3,op4,ans,category,level]);
        res.json(newQues.rows[0]) ;
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
ques.get('/',async(req,res)=>{
    const Ques = await pool.query('SELECT * FROM question;');
    res.json(Ques.rows);
})
ques.post('/limit/',async(req,res)=>{
    try{
        var {lev_choice,
            cat_choice,
            limit}=req.body;
            let data='';
            let arr=[];
            if(limit===null)
            {
                limit=10
            }
            if(lev_choice==='null' && cat_choice==='null'){
                data="SELECT * FROM question LIMIT $1;";
                arr=[limit];
            }
            else if(cat_choice==='null'){
                data="SELECT * FROM question where level=$1 LIMIT $2;";
                arr=[
                    lev_choice,
                    limit];
            }
            else if(lev_choice==='null'){
                data="SELECT * FROM question where category = $1 LIMIT $2;";
                arr=[
                    cat_choice,
                    limit];
            }else{
                data="SELECT * FROM question where category = $1 and level=$2 LIMIT $3;";
                arr=[
                    cat_choice,
                    lev_choice,
                    limit];
            }
            const questions = await pool.query(data,arr);
        res.json(questions.rows);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

ques.delete('/:id',async(req,res)=>{
    try{
        const questions = await pool.query("DELETE FROM question where ques_id=$1;",[req.params.id]);
        res.json(questions.rows);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

module.exports=ques;