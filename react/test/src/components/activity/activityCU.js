import { useState } from "react";
import { ActivityForm, ActivityInputWrap, ImgInputWrap } from "../../styles/dashboard/activityWrite.styles";


const ActivityCU = () => {
    const [imgList, setImgList] = useState([]);

    console.log(imgList);

    const onImgChanged = (id, e) => {
        // 이미 이미지가 업로드 되었던것을 다시 선택해서 실행될때는
        // 기존의 배열에서 기존에 선택된 이미지를 지우기
        // 기존의 배열에서 id가 동일한 요소 찾기
        // 기존 imgList 라는 state변수(배열) 은 변하면 안되기 떄문에 똑같은 요소를 갖고있는 복제본 생성
        let cpy = JSON.parse(JSON.stringify(imgList));

        let target = cpy.find((el)=>{return el.id === id});
        
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        // target.previewUrl = 'fwafasfa';
        reader.onload = () => {
            target.previewUrl = reader.result;
            target.origin = e.target.files[0];
            setImgList(cpy);
        }


    }

    const onImgSelected = (e) => {
        // 새롭게 선택한 이미지를 배열에 넣어준다
        let now = new Date();
        let id = now.toString();
        console.log(e);
        // e.target.files[0] // -> 내가 선택한 파일에 대한 여러가지 정보가 들어있는 객체
    
        // 용량검사 (용량이 2048kb보다 높다면 허용하는 용량을 초과했습니다..)
        // 내가 업로드한 파일을 url로 만들어야함
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onloadend = () => {
            console.log(reader.result);
            setImgList([...imgList, {id: id, previewUrl : reader.result, origin: e.target.files[0]}])
        }
    }

    const onImgDeleted = (id) => {
       setImgList(imgList.filter((e)=>e.id !== id));
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
                        {imgList.map((img)=>
                            <label style={{position: 'relative'}} key={img.id}>
                                <img style={{
                                    width:'100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center' 
                                }} src={img.previewUrl}/>                         
                                <input onChange={(e)=>onImgChanged(img.id, e)} accept="image/*" type="file" />
                                <button 
                                    style={{position: 'absolute', top: '0', right: '0'}} 
                                    type="button"
                                    onClick={()=>onImgDeleted(img.id)}
                                    >삭제하기</button>
                            </label>

                        )}
                        <label>
                            +                     
                            <input onChange={onImgSelected} accept="image/*" type="file" />
                        </label>
                    </ImgInputWrap>
                </ActivityInputWrap>
                <button>글 작성하기</button>
            </ActivityForm>
        </section>
    );
}

export default ActivityCU;