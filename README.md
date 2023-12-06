# **코리아 IT 아카데미**
## React 수업정리

### React.js
- V(view)에 집중하여 개발할 수 있도록 고안된 라이브러리
- 개발을 주도하는 회사(페이스북)
- 핵심개념 : 화면단에서 자주 쓰이거나 반복이 되는 부분을 <br>
  쉽게 다루자 

### 컴포넌트(Component)
UI상의 특정 부분(개발자가 결정)을 일컫는 말
- 리액트 숙련도의 기준은 UI에서 컴포넌트를 어떻게 분리 할 것인가?
```
1. 반복이 된다(여러페이지에 사용이 된다)
  레이아웃

2. 데이터가 변경이 된다

3. 최소한의 기능을 가지고 있다
  버튼
```

### 렌더링(Rendering)
화면에 UI를 사용자에게 보여주는 행위(그려주는 행위)
- 초기 렌더링(Initial rendering)
  - 빈 도화지에 최초로 UI 그려지는 행위
- 리렌더링(re-rendering)
  - 이미 그려져있는 UI가 다시 그려지는 행위

### node.js 다운로드
```
nodejs 설치 여부 확인하기 
mac --> terminal 
window --> cmd
```

### node.js란?
```
Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.
Node.js는 크롬 V8 엔진을 기반으로 만들어져있는 자바스크립트 실행기
nodejs를 설치할 때 같이 설치가 되는 
npm(파일 관리자 프로그램(여러가지 라이브러리를 다운로드받을 수 있는 사이트))
  을 사용하기 위해서 nodejs를 설치한다
yarn(파일관리자 프로그램)
```

### 리액트 라이브러리
1. 리액트 프로젝트 폴더 만들기
2. 주소를 파악해야한다
3. 내가 만들고자 하는 위치까지 이동(cd 폴더/폴더)
4. 이동이 다 되었으면
```
npx create-react-app 프로젝트이름
```
※ 프로젝트이름을 지을 때는 띄어쓰기가 있거나 대문자가 있으면 안된다(나중에 만들고 바꿔주면 됨)

### 리액트 프로젝트 실행시키기
폴더 경로를 내가 실행시키고자 하는 리액트 프로젝트까지 이동
```
npm start
```

### 보일러플레이트(기본 리액트 프로젝트 구조)
- node_modules 폴더
  - 리액트 프로젝트를 실행시키는 데에 필요한 여러가지 라이브러리(코드모음)가 들어있는 폴더
  - 만약 node_modules 가 없으면 컴퓨터가 코드 해석 못함
  - 기본적으로 만들어지는 리액트 시작 파일들이 모여있는 프로젝트 폴더
  
1. public 폴더
```
이미지, 영상 등 리소스를 모아놓는 폴더 
  favicon.ico
    탭부분에 표현되는 아이콘
  index.html 
    body 태그 안쪽에 오로지 
    id가 root인 비어있는 div 하나만 갖고 있는 html 파일
    html파일은 index.html 파일 하나만 있어야 한다
      <div id="root"></div> 
    안쪽에 내용물은 누가 넣어주는 것인가? -> index.js
```
2. src 폴더
- index.js 
  - index.html의 root div의 자식으로 요소를 추가해준다

- App.test.js
  - App.js에 만들어놓은 코드가 버그가 없는지 확인하는 파일
  - 초기단계에는 필요없으니 삭제(테스트할때 다시만들면 됨)

- .gitignore 파일
  - 깃허브에 올라가면 안되는 파일이나 폴더를 명시하는 파일,
  - .gitignore파일에있는 폴더나 파일은 깃허브에 올라가지 않는다

- package-lock.json 파일
  - 설치된 라이브러리의 버전을 잠금(유지)하는 파일
  - 수정XX 
  
- package.json 파일
  - 리액트 프로젝트 자체의 설정 파일
  - 이 프로젝트의 버전 , 만든사람에 대한 정보,
  - 이 프로젝트를 실행하는 데에 필요한 라이브러리 ... 다양한 정보들이 들어있다

- README.md 파일
  - 이프로젝트에 대한 설명 
```
js 파일은 코드를 자바스크립트로 해석하는 파일
js 파일 안에있는 <div></div> 이런 코드는 
마치 html으로 해석하는 것처럼 보이게 착시를 일으킬
뿐 엄연히 js 코드이다
js 안에서 사용하는 태그형태의 코드를 
jsx(javascript extensible) 라고 한다. 
```

### 리액트 동작원리 
html 파일이 오로지 한 개만 존재한다 <br>
리액트로 만든 웹사이트는 페이지가 하나만 존재한다 (페이스북 , 인스타그램 , ...) <br>
Single Page Application

### SPA vs MPA
- SPA는 한개의 페이지로만 만들어져있는 웹 혹은 앱을 의미한다
- MPA는 여러개의 페이지(html파일이 여러개)로 만들어져있는 웹 혹은 앱을 의미한다

## 기존 html css 자바스크립트를 활용하여 만든 페이지
### mpa(html파일이 여러개)
```
로그인.html   --> 로그인에대한 그림 도화지에 그려넣기
회원가입.html --> 회원가입에 대한 그림을 도화지에 그려넣기 
메인화면.html --> 메인화면 그림을 도화지에 그려넣기 
....

주소
www.naver.com --> 메인화면 그림보여주기
www.naver.com/login --> 로그인에대한 그림보여주기 
www.naver.com/join --> 메인화면 그림보여주기 
```

### spa(html 파일이 하나)
도화지(화이트보드) 한개
```
메인페이지 보여줘 --> 화이트보드에 메인페이지 그려서 보여주기 
내프로필페이지 보여줘 --> 화이트보드에 그려져있던 메인페이지를 지우고, 프로필페이지를 그려서 보여주기
```
react 프로젝트에 있는 index.html에서 <br> 
root div를 찾아 온다음에 그 속에다가 <br>
그려주는 행위를 하는 파일 : index.js 

### 리액트
바뀌는 부분만 지웠다가 그려주면 되지 않음? <br>
  
물리적 DOM과 동일한 가상의 DOM을 만들고, <br>
변해야 하는 부분이 있다면 <br>
변하기 전의 가상 DOM 구조와 <br>
변한 후의 가상 DOM 구조를 비교하여 <br>
변한 부분만 <br>
물리적 DOM에 반영하도록 코드를 짜놓아서 <br>
속도를 향상시키는 방법을 사용한다

### index.js
```
index.js안에있는 
  ReactDOM.createRoot(물리적인DOM태그)
  --> 물리적DOM태그를 루트(뿌리)로 하는 
      가상의 DOM 태그를 만들어줘 

render(태그)
  --> 가상 DOM 태그 안에 자식으로 특정 태그를 추가해줘
```

### Document Object Model
모든 태그들은 객체이다 <br>
※ javascript xml(JSX)

### XML(eXtensible Markup Language)
Markup Language : <> 로 이루어진 언어

### 정보전달
```
사람이있는데, 이름은 배상엽이고
나이는 15살이고 학교는 다람쥐중학교
사람이있는데, 이름은 김철수이고
나이는 20살이고 학교는 다람쥐대학교
사람이있는데, 이름은 홍길동이고
나이는 30살이고

과거 
  13사람배상엽15다람쥐중학교13사람김철수20다람쥐대학교7사람홍길동30

xml 
  <사람 이름="배상엽" age="15" 학교="다람쥐중학교">
  <사람 이름="김철수" age="20" 학교="다람쥐대학교">
  <사람 이름="홍길동" age="30">
```

### jsx 는 자바스크립트로 구현한 XML
자바스크립트로 XML을 구현하기 위해서는 함수로 구현
```
function 사람(이름, age, 학교){
  
}

사람('배상엽', 15, '다람쥐중학교');

--> <사람 이름="배상엽" age=15 학교="다람쥐중학교">
--> 파일확장자를 .jsx --> 현재는 .js로 써도 알아서 해석해줌
(타입스크립트는 아직 구분 필요)
```

### React.StrictMode
엄격검사모드, 최초로 그린 후 다시 지웠다가 그리는 과정을 <br>
실행하여 두번 그렸을 때도 이상이 없는지 확인하기 위한 용도
- jsx 중 기존 html 태그 이름과 똑같은 이름으로 만들어져있는 태그들이 있다
- 해석할 때 html 태그와 동일하게 해석
- 만들 때 몇 가지 차이점이있음
- html에는 없는 속성을 써도 된다

### html
```
<h1 onclick="f()" aaa="배상엽" id="title" class="important">안녕</h1>
  --> html h1태그 속성으로는 aaa가 없으므로 무시됨
```

### jsx
- class로 설정하고 싶은 대상은 className에 값을 넘겨줘야한다
- 이벤트 카멜표기법(대문자)으로 변경, 함수를 실행하는 것이 아닌 함수자체를 넘겨줘야한다
```
<h1 onClick=f aaa="배상엽" id="title" className="important">안녕</h1>

--> h1(onClick=f, aaa="배상엽", id="title", className="important", children="안녕");
  내부적인 함수의 코드를 거쳐서 
  결과로 나오는 것은 
  <h1 id="title" class="important" onclick="f()">안녕</h1>
  이러한 html 태그객체가 결과로 나오게 되어있음
```

### jsx vs html
jsx 중에서 html태그와 똑같은 이름이 아닌 태그 : 컴포넌트
1. 컴포넌트는 반드시 대문자로 시작해야한다
    * 컴포넌트도 어쨋든 jsx이기 때문에 함수로만들어진다 
    * 과거에는 클래스로 만들었음 --> 권장X --> 함수로만들게 발전
2. return 될 때 한 개만 return 되어야 한다(묶여서)
```
보통은 div 로 묶어서 return을 하는데, 
이 div가 정말 의미없이 묶어주기 위해서만 사용한다면 불필요하기 때문에 
그럴 경우에는 fragment <></> 비어있는 태그를 사용하여 묶어줄 수 있다
```
3. 내용이 없는 jsx 는 어떻게 표기?   
```
html          --> jsx 
<img>           <img />
<input>         <input />
<p>안녕</p>     <p>안녕</p>
                <Bae>안녕</Bae>
<p></p>         <p /> or <p></p>
                <Bae />      
```
4. jsx로 해석해야하는 경우와 js로 해석해야하는 경우는 어떻게 구분할까?
    - <>의 시작과 끝을 기준으로 jsx로 해석, 그외는 javascript로 해석,
    - jsx 안쪽에서 javascript 명령어로 해석해야하는 경우는 ??
    - {} 를 통해 알려준다
    - {} 안쪽은 js로 해석
    - 주석도 마찬가지의 의미로
    - {/*주석*/} 하면 자바스크립트로 해석 되어도 주석이니 주석으로 사용된다

### export 와 export default 의 차이점 
export의 이유? **다른 파일에서 해당 코드(함수, 변수, 컴포넌트,...)를 이용해야 할 경우에** <br>
export를 할 때는 반드시 {} 안쪽에다가 export할 <br>
함수나 변수나 컴포넌트 들을 콤마로 연결하면 된다
```
ex) export {a, b, c};
```
import의 이유? **다른 파일에서 export된 코드를 사용할 경우에** 
import 할 때는 반드시 {}를 써서 import를 해야 하며 <br>
export 된 대상 중 사용하고싶은 요소만 중괄호 <br> 
안쪽에 콤마로 연결해서 받아오면 된다 
```
ex) import {a, c} from '경로';
```
- export default ?
    - 기본값으로 내보내겠다
    - 한개만 기본값으로 설정할 수 있음 
    - {}를 사용하지 않고 내보내기가 가능  
```
ex) export default a;
```
-  import ?
    - 중괄호를 사용하지 않고 import 할 수 있으며 <br>
    export된 이름하고 다른 이름으로 import 할수 있다
```
ex) import www from '경로';
```

### javascript 기능
객체를 쉽게 만들 수 있는 방법
```
{키:value, 키:value}

{키:변수, 키:변수}
만약 설정한 키값과 value로 설정하려 하는
변수의 이름이 서로 같다면 
{변수, 변수}
이런식으로 축약해서 만들 수 있다
let a = 10;
let b = '홍길동';
let target = {a, b};
```
target은?? -> **객체**
```
target안에 있는 key 
  a
  b
target.a
  10
target.b
  '홍길동'
```

### 구조분해 할당 
```
구조화되어있는 데이터
(객체, 배열)를 분해하여 
각각의 변수에 할당하겠다 

{
  title:'대모험',
  page:20,
  price:3500,
  writer:'김철수',
  issudedAt: '2020-01-01',
  like:36,
  age:20
}
```
```
여러개의 값이 저장되어있는 객체 속에서 
변수에다가 값을 저장하고 싶을때 
변수 like에는 36을 
변수 writer에는 '김철수'를 할당하고 싶다
tmp = {
  title:'대모험',
  page:20,
  price:3500,
  writer:'김철수',
  issudedAt: '2020-01-01',
  like:36,
  age:20
}

let writer = tmp.writer;
let like = tmp.like;

let {like, writer} = tmp;
console.log(writer )
console.log(like)
```
배열 구조분해할당 
```
let ar = [10, 20, 30, 40, 50, 60, 70];
  
let a = ar[0] 
let b = ar[1]
let c = ar[2]

let [a, b, c] = ar;
```

### 리액트의 css 적용 방법
1. css 파일
    - css파일을 한 개 만든다
    - 해당 css 파일을 사용하고 싶은 js 파일에서 import를 한다
    - 모든 컴포넌트에 영향을 미친다
    - html 파일이 하나, 그속에 영향을 미치는 대상은 전체

2. html안에서 style태그
    - 리액트에서 사용 XXX

3. 인라인
```
html과 동일한 이름으로 만들어진 jsx(p, h1....)에
style 속성에다 적용시키고자 하는 css 스타일을 
자바스크립트 객체로 만들어서 대입한다
이때 css 속성 이름이 객체의 key되고, 
css 속성 값이 객체의 value가 되는데, value는 반드시
문자열로 작성을 해야하며, key는 특수문자 사용이 안되기에 
카멜표기법으로 변경하여 적용 
```
보통 공통적으로 모든 페이지에 대해서 적용되어야 하는 css <br>
(전역 css, global css)는 css 파일로 만들고 <br>
나머지는 각각의 컴포넌트 별로 css를 만든다

4. 컴포넌트 별로 스타일 주기 
html X --> js만 사용하면 되네? <br>
css파일도 js로 만들면 안되나?
```
css in js 
  css를 js 파일로 만들자 
  컴포넌트 단위로 css를 만들자 
  --> 내가 만든 컴포넌트를 남이 사용할수 있음 + 내가 다른
      프로젝트 할때도 갖다 쓸수있다 

library 설치 
  emotion 
  
  styled-components
```

### 라이브러리 설치
설치할 위치(내가 설치할 프로젝트 폴더 안에서 설치)
```
npm install 라이브러리이름
```

### 리액트 이벤트 주기
```
unction f(){
    // 버튼이 클릭 되면 실행시키고 싶은 함수
}

html
    <button onclick="f(); f2();">버튼!</button>
    --> 이름없는 함수가 만들어짐
    ()=> {
        f(); f2();
    }

react
    <button onClick={f}>버튼!</button>
```
- 특정 변수 속에 있는 값이 달라진다면 화면을 다시 그려줘(re-rendering) 라고 명령
- 리액트의 hook함수(use로 시작하는 함수) useState 함수를 사용해야 한다.

### 함수
1. 인자? <br>
    값1개, state변수의 초기값
2. 동작? <br>
    state변수와 setState함수를 만들어준다
3. 함수사용결과? <br>
    2칸짜리 배열, [ state변수, setState함수 ]

### state 변수
컴포넌트안에서 변수 안에 들어있는 값이 달라지면 <br>
다시 그 컴포넌트를 그려줘야하는 경우에는 그 변수를 state변수로 만들어서 <br>
관리한다

### setState함수
- 만들어진 state변수속의 값을 변경시켜주는 함수
- state 변수 속에 대입해야하는 값을 설정해주는 삼수
- state변수에 대입연산자를 사용하여 직업 변경하면 원본이 훼손되기때문에 <br>
절대로 state변수에 대입연산자 쓰면안되고 --> setState함수를 통해 변경해줘야 한다

### 구조분해할당
```
let [a, b] = [10, 20];
//a 속에는 무엇이? --> 10
//b 속에는 ? --> 20

function tmp() {
    function abc() {
        return 500;
    }
    return [10, abc];
}

let [a,b] = tmp();

//a ? --> 10
//b ? --> abc


let [a,b] = [10, abc];

// a ? 10
// b ? 함수
```
### 함수사용결과?
```
2칸짜리 배열, [ state변수, setState함수 ]

let [a,b] = useState();
// a ? : state 변수
// b ? : setState함수
```
변수속에 있는 값이 변하면 다시 그려져야할 경우에 <br>
그 변수를 state변수로 만든다 <br>
대신 state변수 속에 있는 값을 변경할 때는 대입연산자로 직업 변경하는 것이 <br>
아니라 setState변수를 통해서 값을 변경해준다

### 자식 컴포넌트 (컴포넌트 분리)
```
state변수의 상태가 바뀌어서 re-rendering된다면
자기 자신이 속해있는 컴포넌트가 다시 re-rendering된다

이벤트가 발생하면 실행되는 함수의 매개변수에는 자동으로
발생한 이벤트에대한 정보(어떤이벤트인지? x좌표, .. , 어떤태그에서발생한이벤트인지)들이 
들어있을 이벤트객체가 인자로 전달이 된다

클릭이벤트가 발생하면
    이벤트객체.target에는 클릭이벤트가 발생한 html태그(요소)가 객체로 들어있다

input태그에서 이벤트가 발생하면 
    이벤트객체.target에 발생한 input태그객체가 들어있고,
    input태그에 입력한 값은 input태그 안에 들어있다

    --> 이벤트객체.target.value --> 사용자가 input태그에 입력한 값
```

### 리액트에서 반복되는 컴포넌트 혹은 요소를 쉽게 그릴 수 있는 방법
javascript 에 있는 배열안에 map 함수 <br>
map함수는 기존에 존재하는 배열을 바탕으로 <br>
새로운 배열을 만들고 싶을 때 사용한다
```
let ar = [10, 20, 30];

ar.map(()=>{ return 5; })
```
※ *** ar.map( (a, b, c)=>{ return 새로만드는 배열속 요소} ); --> 매개변수 3개가 전달된다
1. 인자 : 함수를 전달한다 <br>
          인자로 전달되는 함수는 매개변수 3개를 설정할수있다 <br>
          각각 요소, 인덱스번호, 원본배열 이 <br>
          매개변수에 대입된다
2. 동작 : 콜백함수를 기반으로 <br>
          새로운 배열을 만들어준다 
3. 결과 : 새롭게 만들어진 배열

### react에서 배열의 존재
배열을 그대로 jsx자리에 써도 해석하여 그려준다 <br>
배열 속에 jsx들이 요소로 들어있고, 이를 <br>
그려줄 때는 각각의 요소들을 구분할 수 있도록 <br>
key 라는 props를 꼭 사용해야한다.

### 서버로부터 데이터 받아오기
```
fetch(주소)
axios 라이브러리
*** 비동기함수와 Promise 타입
fetch('koreanjson.com/posts')
```
1. 비동기함수이기 때문에 결과가 나오지 않았음에도 <br>
일단 Promise 타입이 결과로 나온다
```
Promise = {
    [status] : 'pending',
    [result] : X
}

아직 실직적 결과는 안나왔기에
result는 없고, status는 pending상태이다
```
2. 다른거 먼저 실행
3. 데이터 가져오기 완료
```
Promise = {
    [status] : 'fullfilled',
    [result] : {응답객체} ?? --> 복불복 {} 아니면 '배상엽' --> 만든사람 마음대로 나옴(응답객체)
}

catch 안에 있는 함수는
중간에 오류가 발생하거나 
rejected가 되면 오류가 실행이 된다.

then 안에있는 함수는 언제 실행될까?
promise의 status가 pending에서 fullfilled로
바뀌면 실행되는 함수이면서, 해당 함수의
매개변수에는 result에 들어있던 값이 전달된다
```
4. 데이터 가져오기 완료(실패)
```
Promise = {
    [status] : 'rejected',
    [result] : {응답객체}
}

fetch('koreanjson.com/posts')
.then(함수)
.then((aaa-->응답객체) => {})  --> 얘가 실패하면
.catch(함수)            --> 얘가 실행이 된다.


Promise = {
    [status] : 'pending',
    [result] : X
}
```
- re-rendering 될떄마다 다시 실행되어야 하는 코드
- 최초로 렌더링할떄만 한번만 실행되어야 하는 코드
- 컴포넌트가 사라질때 한번만 실행되어야하는 코드   -----> useEffect

### hook함수
useState 함수 : state변수를 만들고 싶을 때 사용
```
let a = 10;

a = 15; // --> re-rendering XXX

let[a, setA] = useState(10);
setA(15); // --> re-redering OO

useState --> re-rendering 떄문에 쓰는것
```

### useEffect
기존게 있던게 사라지고 새롭게 저장되는것
```
useEffect(함수, 의존성배열);
        만일 의존성 배열이 비어있는 배열이라면
    앞에있는 함수는 최초 렌더링 될때만 실행이 된다

    만일 의존성 배열에 변수가 들어있다면
    그 변수가 변할때 마다 앞에있는 함수가 실행이 된다

    useEffect의 인자로 전달되는 함수 부분에 함수를 return 할 수 있다.
    이 때 return되는 함수를 cleanup 함수라고 한다

useEffect(()=>{return ()=> {//cleanup 함수}}, []);

    cleanup 함수는 unmount 되기전에 실행이 되는 함수를 의미한다

특정 코드가 특정 상황에서만 실행이 되어야 할때
특정상황?
    컴포넌트가 최초로 그려질떄 한번만
    컴포넌트가 re-rendering 될떄마다 실행
    컴포넌트가 사라질때(unmount) 될때 실행
```

### map 함수
기존 배열 기반으로 같은 크기의 새로운 배열만들기

### filter함수
기존 배열 기반으로 조건에 맞는 요소들만 추출하여 새로운 배열 만들기
```
배열.filter((e, idx, ar)=>{return true/false});

기존 배열의 요소갯수만큼 반복 하면서
true가 return되는 요소들만 모아 새로운
배열로 만든다

ar = [10, 50, 61, 50, 71, 231];
ar.filter((e)=>{return e > 50});

[61, 71, 231]

number = 1;
ar = [1,2,3];
ar.filter((e) => {return e !== number})

[1 , 3]

ar은 여전히 [1,2,3]
```

### 게시글목록을 보여주는 컴포넌트 그려질때
서버로부터 게시글 목록을 가져와줘!( fetch / axios.get )(최초 렌더링 되때만 실행) <br>
이미 화면에 렌더링이되고, <br>
서버로부터 게시글 목록을 가져오는것이 완료가 되면 state변수가 변하게 됨 <br>
state변수가 변했으니깐 컴포넌트가 다시 그려진다

### express와 react를 동시에 실행
concurrently 라이브러리를 설치하여 <br>
package.json에 start 명령어를 둘다 실행할 수 있도록 설정하여 <br>
npm start를 하면 동시에 서버와 클라이언트가 켜지게 설정 <br><br>
같은 컴퓨터 안에서 서로 다른 프로그램이 <br>
다른 포트에서 동작하는 프로그램에 접근을 하려면 <br>
CORS 정책을 수정해줘야 한다.

### ☆★☆★☆★☆★클라이언트쪽에서 설정
```
http-proxy-middleware
라는 라이브러리를 설치

setupProxy.js 파일을 만들고,
주소 끝에 '/api'로 끝나면
서버 포트쪽으로 보내게 설정을 만들어준다
localhost:3001/api 로 get
실질적으로는
localhost:3002/api 로 get 요청이 가버린다
--> react에서는 주소 끝을 api로 끝나는 주소는 사용할 수 없다
```

### 서버쪽에서 설정(express 파일에서 설정하는 방법)
```
cors 라이브러리를 설치한다
app.use(cors({origin: 'http://localhost:3001'}));

해당 코드 한줄 추가
(3001번포트 허용하겠다는 의미)

리액트에서는 요청할 때
localhost:3002 get요청 직접적으로 해도 상관없음 
```

### express(axios)
```
res.json('배상엽')--> res.data에 '배상엽' 이 들어있음
res.json(10)      --> res.data에 10 이 들어있음
res.json([1,2,3])--> res.data에 [1,2,3] 이 들어있음
```

### express(react fetch)
```
res.json('배상엽')--> res.json() --> data에 '배상엽' 이 들어있음
res.json(10)      --> res.json() --> data에 10 이 들어있음
res.json([1,2,3])--> res.json() --> data에 [1,2,3] 이 들어있음
```

### .env 로 시작하는 파일
node가 실행되면서(react, express 등 이 실행될때) 사용하는 <br>
환경 변수를 설정해주는 파일
```
 .env
    가장 최상위, (우선순위가 낮다)
.env.local
    .env보다 우선순위가 높은 파일로서 test환경 제외하고 모든환경에서
    로딩됨
.env.development
    개발환경에서 로딩되는 환경변수들
.env.test
    테스트 환경에서 로딩되는 환경 변수들
...
```
.env 파일에 있는 환경변수를 <br>
실행중인 프로그램의 env 객체 안에 넣는 방법 <br>
dotenv 라이브러리를 활용한다

### *** dotenv.config()
함수를 사용하면 기본적으로 .env 안에있는 <br>
변수들을 process.env 안에 만들어준다 <br><br>

이때 만들고 싶은 변수가 .env.local 안에있는 <br>
변수라면 <br>
dotenv.config({path:'경로'}); <br>
옵션은 추가하여 만들 수 있다 <br>

### 유효성 검사의 논리
1. input 태그의 값이 변화할떄마다 state변수에 저장해준다
2. 버튼을 클릭 했을때 state변수에 저장된 값이 <br>
    유효한 값인지 검사한다 <br>
    그리고 유효한 값이 아니라면 에러메시지state변수를 변화해 <br>
    준다. 에러메시지 state변수가 바뀌었으니까 <br>
    re-rendering이 된다(에러메시지가 보인다) <br>
    모든 input state변수의 값이 유효한 값임을 확인했다면 <br>
    값을 서버쪽으로 전송한다

### 유효성 검사를 쉽게 하도록 도와주는 라이브러리
```
formik
yup
```

### 리액트의 스테이트 변수 관리 원칙
나중에 한번에 바꿔준다 <br>
예를들어
```
const [number, setNumber] = useState(0);

function a() {
    setNumber(100);
    number에는 100이이겠지? -- 이렇게 생각하면 안된다xxx
    setNumber(200);
    setNumber(300);
}

<button onClick={a}>클릭!</button> 
```
※ 버튼을 클릭하면 <br>
number라는 state변수에는 100이 대입되야해 -- 아직까지 기억하고있음 <br>
number를 300대입하자

### 비동기들
```
fetch
axios.get
axios.post
axios...

pool.query
```

### async await 문법 javascript
- 비동기 함수를 동기 함수처럼 사용하고 싶어
- 비동기 함수 앞에 await를 사용하면 동기함수로 해석한다
- await를 썼으면 await를 감싸고있는 함수를 async함수라고 <br>
알려줘야 한다!!!
```
일반적인 함수
    async function 함수이름() {
        await
    }
    익명함수
    async function (){

    }

    화살표 함수
    async ()=> {

    }


axios.get('/users').then((res)=>{
    // get함수가 정상적으로 끝났을때 실행되는 공간(동기적으로)
    // res 에는 객체(status, statusCode, statustext, data, ...)

}).catch((err)=> {
    // get함수가 오류가 발생하면서 끝났을때 실행되는 공간(동기적으로)
    // err에는 에러 객체(에러정보, 에러이름, response, ...)
})


****pool.query('SELECT * FROM tmp, (err, result, fields)=> {
    // 이공간은 sql이 끝나고 동기적으로 실행되는 곳
    // err 에는 오류발생하면 err객체 오류 안발생하면 null

    // result에는 ? 정상적으로 끝나면 결과(배열, 객체) 오류발생시 undefined

    // feilds에는 ? 정상적으로 끝나면 각 컬럼에대한 정보 오류발생 혹은 SELECT 아닌경우 undefined
}');
```

### 기존 동기함수가 비동기 함수라면
```
let res = await ceil(3.5);
console.log(res + 7); 4 + 7 => 11

axios.get('/users').then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
});

try{
    let res = await axios.get('/users');
}catch(err){
    console.log(err);
}

// 비동기
doubleMath(3.5).then((a,b)=>{
    console.log(a);
    console.log(b);
});

// 동기적

let res = await doubleMath(3.5); --> [4,3] 기다렸다가 올림하고 내림해라 그래서 두개가 출력됨
console.log(res[0]); --> 4
console.log(res[1]); --> 3 내림

// 비동기
pool.query('SELECT * FROM tmp, (err, result, fields)=> {
    if(err != null){
        console.log(err);
    }else{
        console.log(result);
        console.log(fields);
    }
})

// 동기적으로 바꾸기
try{
    let [result, fields] = await pool.query('SELECT * FROM tmp'); // [ , ]
    console.log(result);
    console.log(fields);
}catch(err) {
     console.log(err);
}


doubleMath(3.5).then((a,b)=>{
    doubleMath( a + 7.2).then((a,b)=>{
        console.log(a);
        doubleMath(b+ 3.2).then((a,b)=> {

        }).catch((err)=> {

        });
    }).catch((err)=>{

    })
}).catch((err)=> {
    console.log(err);
}); // 알기가 어렵다

비동기 함수로 바꾸기
try{
    let [res1, res2] = await doubleMath(3.5);
    let [res3, res4] = await doubleMath(res1 + 7.2);
    console.log(res3);
    let [res5, res6] = await doubleMath(res4 + 3.2);
}.catch(err) {
    console.log(err);
}
```

### 로그인 성공시 로직
리액트에서 로그인 요청
- express는 mysql에서 해당 사용자 있는지 확인
- 사용자가 있다면 jwt 토큰 발급하여 react로 전달
```
react jwt토큰 저장해놓고
앞으로 로그인 한 사람만 접근할 수 있는 페이지가 있다면
jwt토큰을 함께 담아서 요청

express에서는 jwt토큰을 받아서, 토큰이 유효한지 검사하여
해당 토큰이 유효하면 응답하고,
유효하지 않으면 오류 발생(권한이 없습니다 로그인을 다시해주세요)
```

### 전역 스테이트변수
- state변수는 만들어져있는 컴포넌트 안에서밖에 사용을 못한다
- token은 a컴포넌트, b컴포넌트, c컴포넌트에서 모두 사용을 해야하는데..?
- 전역 스테이트변수는 스테이트변수는 스테이트변수인데 <br>
모든 컴포넌트에서 접근할 수 있는 스테이트변수를 의미한다 <br>
※ 전역스테이트변수 라이브러리
```
redux, context api, ....

context api

1. context를 만든다
    createContext 를 활용하여
    ex)
        const ABC = createContext();

2. 해당 내가 만든 context provider를 활용하여
    감싸준다(provider로 감싼 자식들에서는 모두 사용가능)

    ex)
        <ABC.Provider>
            이안에그려지는 자식 컴포넌트에서는 모두 값 접근가능
        </ABC.Provider>

3. 이떄 자식에서 사용할 수 있도록 하고 싶은 값들은
    provioder의 value에다 넘겨준다
    ex)
        <ABC.Provider value={{a:값, b:값, c:값}}>
            이안에그려지는 자식 컴포넌트에서는 모두 값 접근가능
            {a:값, b:값, c:값} 값 접근가능
        </ABC.Provider>

4. 자식 컴포넌트에서는 useContext를 사용하여 어떤 context에서
    어떤 값을 사용하고 싶은지 명시한다

    ex)
        const value = useContext(ABC);
    구조분해할당도 사용가능

        const {b, c} = useContext(ABC);
```

### 리액트 변수
리액트에서 변수는 크게 세가지
1. 일반변수
     - 값이 변경되어도 re-rendering되지 않음
     - re-rendering 될때 초기값이 대입됨
2. state변수
      - 값이 변경되면 re-rendering을 함
      - re-rendering 되더라도 초기값이 대입되지 않음(자기값을 기억)
3. ref객체
      - 값이 변경되더라도 re-rendering 되지 않음
      - re-rendering되더라도 초기값이 대입되지 않음(자기 값을 기억)
```
const MyComponent = () => {
    let a = 10; // 일반변수

    // re-rendering되어도 자기자신 값을 기억
    // 자기자신이 변하면 re-rendering 시키는것
    let [b,setB] = useState(10); // state변수

    // re-rendering될때 자기 자신의 값을 기억
    // 자기자신의 값이 수정되어도
    // re-rendering은 안시키고싶은
    let c = useRef(null);

    return (
        <>
            {a}
            {b}
            <input ref={c} />
            //{c.current}
            <button>a버튼 클릭시 a를 1더한값으로 변경해줌</button>
            <button>b버튼 클릭시 b를 1더한값으로 변경해줌</button>
            <button>c버튼 클릭시 c를 1더한값으로 변경해줌</button>
            <h1>안녕</h1>)
        </>
    );
}
```

### Ref 객체의 current에 태그 객체를 대입하는 방법
```
const ref객체이름 = useRef(null);


<h1 ref={ref객체이름}>안녕</h1>

--> ref객체이름.current에는 h1태그객체가 들어있다

Ref 객체의 current에다 배열을 만들고, 그 배열 속에 여러개의 태그
객체를 대입하는 방법

const ref객체이름 = useRef([]); // ref객체이름.current에는 비어있는배열

<h1 ref={(el)=>{ref객체이름.current}}>안녕</h1>
<p ref={(el)=>{ref객체이름.push(el)}}>반가워</p>
<input ref={(el)=>{ref객체이름.push(el)}} />

--> ref객체이름.current에는 [h1태그객체, p태그객체, input태그객체]
```

### DashboardHeader & CareerViewTable
```
로그인을 해야지만 볼 수 있는 컴포넌트들이 존재
--> accessToken을 사용하는 컴포넌트 들

항상 accessToken이 잘 존재하는지를 검사
--> useEffect 에다가 accessToken이 있는지 없는지 확인 필요하다

매번 useEffect를 길게 쓰기 귀찮으니깐 custom hook을 만들 수 있다
```

### front에서 server로 데이터 넘기기
GET요청의 경우에는 주소에다가 데이터를 넘긴다
```
1. 쿼리 스트링
    리액트에서
        '/api/users' GET요청해줘!!! --> 회원전체조회야
        '/api/users?family_name=배&order=like' GET요청 -> 두개의 값 전달

    익스프레스 주소 
    'api/users'     GET요청하면 회원전체 조회
    조회하고자 하는 성씨는 react에서 family_name이라는 변수에 담아왔다


    회원전체 조회하고 싶은데 성씨가 '김'씨인 회원전체조회
    

2. 파라미터(시멘틱) -> 언제 사용? -> 각각을 유일하게 구분할수 있을때
    /api/users/abc@naver.com
    /api/users/test@naver.com

    /api/users/:email

    /api/users/email=abc@naver.com  GET

```
※ POST 요청의 경우에는 body에다 담아서 넘긴다

### query-string
```
/api/activites?order=aaa&page=4&limit=10

order, page, limit 은 변수가 된다
주소에다가 ? 이후에 나오는 부분은
변수가 되며 & 로 연결이 된다
order에는 'aaa'
page에는 '4'
limit에는 '10'
이 각각 대입되어있음
```
이러한 방식을 query-string 이라고 얘기한다

### sql 테이블 합치기
```
join
서브쿼리
```

### sql 조건 like
```
select 컬럼1, 컬럼2
    from 테이블이름
    where 컬럼 like '패턴';
```
※ 패턴
```
%   : ~로 해석
_   : 자릿수 로 해석
```

### 검색버튼없이 검색기능을 수행할때
```
change 이벤트가 연이어 발생하기 때문에
비효율적으로 여러번 서버쪽으로 요청을 하는 문제가 발생
--> 디바운싱 Loadash 라이브러리
```

### 디바운스 (Debounce)
```
반복적인 동작을 강제적으로 대기하는 것
  ㅇ
  ㅕ
  ㅎ
  ㅐ
  ㅇ 
    --> change 이벤트 실행

import {debounce} from 'lodash';

const changeSearch = debounce(()=>{}, 시간)
```

### 전개연산자
- 배열에서 사용 가능
- 객체에서 사용 가능
※ 배열 예시
```
let ar = [ 10, 20, 30 ];

let ar2 = [ 0, ...ar , 90 ] ; // ar2 : 


ar2[0] = 100;
// ar2 : [100, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// ar : [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```
※ 객체 예시
```
let book = { title:'대모험', page: 20, author:'홍길동' }
let book2 = { title:book.title, page:book.page, author:book.author };

let book2 = { ...book , price:100 , title:'홍길동전'};
```
