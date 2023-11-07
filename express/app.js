// 옛날 문법 coomonjs 모듈
// 요즘 문법 es 모듈(exporess가 아직 es모듈로 작성했을때는 올바르게 동작하지 않는 경우가 있음)
// import styled from "@emotion/styled"
// import express from "express"

const express = require('express');     // 옛날문법
const mysql = require('mysql2')

const app = express();

const port = 3000;

// 앞에있는 req는 요청에 대한 정보가 객체로 들어있다
// 뒤에있는 res는 응답에 대한 정보가 객체로 드렁있다
app.get('/', (req, res)=>{
    // 데이터베이스 가서 조회해줘
    // 데이터베이스에 가져온 데이터를 클라이언트롤 보내야하네? 이때 사용하는 것이 res객체
    res.send("hello world")
});

// /a 로 get 요청시 응답으로 age is 10
app.get('/a', (req, res) => {
    let html = `
        <h1>메인페이지 입니다</h1>
        <p>안녕하세요</p>
    `;
    res.send(html);
});

app.get('/b', (req, res) => {
    res.json({age:10, name:'홍길동'});
});

app.get('/c', (req, res) => {
    console.log("삭제완료"); // DELETE FROM USER WHERE name='베상엽'
    res.end();
});

app.get('/d', (req, res) => {
    pool.query('select * from tbl_users', (err, results, fields) => {
        console.log(err);
        console.log('res에는',results);
        console.log('field에는',fields);
        res.json(results);
    });
});

const pool = mysql.createPool({
    host:'localhost',
    database:'board23',
    user:'board23user',
    password:'1234',
    port:3306
});

app.listen(port, ()=> {console.log(`app listening on port ${port}`)});
// listen 함수
// ***함수를 무조건 알아야 할때 3가지
// 1. 인자
// 2. 동작
// 3. 결과값 메모장에 있음

