import { useState } from "react";
import { ActivityForm, ActivityInputWrap, ImgInputWrap } from "../../styles/dashboard/activityWrite.styles";


const ActivityCU = () => {
    const [imgUrl, setImgUrl] = useState('');

    const onImgSelected = (e) => {
        console.log(e);
        // e.target.files[0] // -> 내가 선택한 파일에 대한 여러가지 정보가 들어있는 객체
    
        // 용량검사 (용량이 2048kb보다 높다면 허용하는 용량을 초과했습니다..)
        // 내가 업로드한 파일을 url로 만들어야함
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onloadend = () => {
            console.log(reader.result);
            setImgUrl(reader.result);
        }
    }

    return(
        <section>
            <h1>새 게시글 작성하기</h1>
            <ActivityForm>
                <ActivityInputWrap>
                    <label htmlFor="title">게시글 제목</label>
                    <input id="title"/>
                    <p>오류메시지</p>
                </ActivityInputWrap>
                <ActivityInputWrap>
                    <label htmlFor="writerEmail">작성자</label>
                    <input id="writerEmail"/>
                    <p>오류메시지</p>
                </ActivityInputWrap>
                <ActivityInputWrap>
                    <label htmlFor="content">내용</label>
                    <textarea id="content"></textarea>
                    <p>오류메시지</p>
                </ActivityInputWrap>
                <ActivityInputWrap>
                    <h4>이미지</h4>
                    <ImgInputWrap>
                        <label>
                            {imgUrl === '' ? '+' : <img style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center' 
                            }} src={imgUrl}/>}                         
                            <input onChange={onImgSelected} accept="image/*" type="file" />
                        </label>
                    </ImgInputWrap>
                </ActivityInputWrap>
            </ActivityForm>
        </section>
    );
}

export default ActivityCU;