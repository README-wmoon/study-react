import { useEffect, useState } from "react";
import axios from "axios";

const BoardListAxios = () => {

    const[boardList, setBoardList] = useState([]);
    
    useEffect(()=> {
        axios.get('https://koreanjson.com/posts')
        .then((res) => {setBoardList(res.data)})    
    }, [])
    return (
        <>
            <h1>axios 를 통해 get 요청하기</h1>
            {
                boardList.map((e) => <div>
                    <h1>제목  : {e.title}</h1>
                    <h1>내용  : {e.content}</h1>
                    <p>작성일 : {e.createdAt}</p>
                    <p>업데이트날짜 : {e.updatedAt}</p>
                </div>)
            }
        </>
    )
}

export default BoardListAxios;