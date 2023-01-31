create database quiz_db;

create table question(
    ques_id SERIAL primary key,
    ques_desp text,
    ques_option1 text,
    ques_option2 text,
    ques_option3 text,
    ques_option4 text,
    category int,
    level int,
    ans text
);

category=['gk','music','movie','history']
level=['hard','medium','low']

insert into question (ques_desp,ques_option1,ques_option2,ques_option3,ques_option4,category,level,ans)
 values ('Full form of UK ?','United Kniston','United Kingdom','Unite King','Unified Kingdom',1,1,'United Kingdom');

create table users(
    user_id varchar(25) primary key,
    user_name TEXT NOT NULL,
    user_password TEXT NOT NULL,
    score int
);

insert into users 
values('1','admin','admin');