import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { Comment, CommentBtn, CommentDate, CommentHeader, CommentInput, CommentInputWrap, CommentItem, CommentListWrap, CommentWriteBtn, CommentWriter } from "../../styles/dashboard/activityComment.styles";

const ActivityCommentSection = (props)=>{
    const [commentList, setCommentList] = useState([]);
    const [content, setContents] = useState('');
    const {accessToken} = useContext(UserContext);

    // body에서 객체를 가져오려면 useEffect 써라
    useEffect(()=>{
        if(accessToken === null) return;
        let tmp = async ()=>{
            try{
                let res = await axios.get(`/api/comments?activityId=${props.activityId}`, {
                    headers:{Authorization: `Bearer ${accessToken}`}
                })
                setCommentList(res.data);
            }catch(err){
                alert('댓글목록 오류')
            }
        }

        tmp();
    }, [props.activityId, accessToken]);
    
    const onCommentClick = async() =>{
        try{
            let res = await axios.post('/api/comments', {
                    content, 
                    activityId: props.activityId
                },
                {headers:{Authorization:`Bearer ${accessToken}`}}
            );
            setCommentList([...commentList, res.data])
            alert('댓글 추가 성공!!');

        }catch(err) {
            alert('댓글 추가 중 오류 발생...!!!');
        }
    }

    // 댓글 id를 매개변수로 받아서 해당 id를 가진 댓글 삭제
    const onDeleteClick = async(id) => {
        // 삭제하는 것
        let ddd = window.confirm('정말 삭제하시겠습니까?');
        // console.log(ddd);
        if(ddd === false) return;

        // 확인 눌렀을때 실행됨
        // express 에게 삭제 요청
        try{
            await axios.delete('/api/comments', {data:{id: id}});
            // !== 하는 이유 id가 같은거 뺴고는 남겨두기 위해서 commentList에
            setCommentList(commentList.filter((el)=>{return el.id !== id}));
            alert('댓글 삭제 성공~');
        }catch(err){
            alert('댓글 삭제 실패, 잠시후 다시 시도해보세요!');
        }
    }

    return(
        <section>
            <CommentInputWrap>
                <CommentInput onChange={(e)=>{setContents(e.target.value)}} value={content}/>
                <CommentWriteBtn onClick={onCommentClick}>댓글달기</CommentWriteBtn>
            </CommentInputWrap>
            <CommentListWrap>
                {
                    commentList.map((comment)=><CommentItem key={comment.id}>
                    <CommentHeader>
                        <CommentWriter>
                            작성자 id : {comment.writer_email}
                        </CommentWriter>
                        <CommentDate>(작성일){comment.created_date}</CommentDate>   
                        <CommentDate>(수정일){comment.updated_date}</CommentDate>   
                        {comment.owner && <CommentBtn onClick={()=>onDeleteClick(comment.id)}>삭제</CommentBtn>}
                    </CommentHeader>
                    <Comment>{comment.content}</Comment>
                </CommentItem>)
                }
                
            </CommentListWrap>
        </section>
    );
}

export default ActivityCommentSection;