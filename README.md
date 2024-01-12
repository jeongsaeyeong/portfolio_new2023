## 개요 
 두 번째로 만든 포트폴리오이다. 기존 GSAP만 사용하여 움직임을 줬으나 이번에는 motion을 사용하여 보다 부드러운 움직임을 주었다.
 Next.js 예제를 React로 바꾸는 과정에서 motion의 기초적인 운용을 배웠다. 

## 본론

### 한 페이지에서 해결하기 
 보통 포트폴리오 하면, GSAP의 ScrollTrigger을 사용해 동적인 효과를 주거나 페이지를 이동해 다른 내용을 담아낸다. 
 다만 나는 변칙구를 주어 페이지 이동 없이 section을 보여주고 감추기로 했다. 
 그렇다면 무엇을 바꿀 것인가? 아마 포트폴리오를 들어가보았다면 알겠지만 구조가 이렇다. 

 1. 각기 다른 다섯 개의 메인 페이지를 만든다.
 2. 한 가지 포트폴리오에 들어가면, 다섯 개 중 번호에 배정된 메인 페이지 컨셉으로 포트폴리오를 보여준다.
 3. 뒤로 가기를 누르면 메인 페이지가 바뀐다.

 하나를 선택했을 때 그 반응이 연쇄적으로 일어나 마치 연결된 애니메이션을 보는 듯한 효과를 주고 싶었다. 

### 어떻게 구현했나 

<details>
  <summary>useState</summary>
  각 애니메이션을 제어할 useState를 만들었다. 

 1. currentSection은 section1의 메인페이지 위치를 관리한다.
 2. currentPort는 section2의 포트폴리오 위치를 관리한다.
 3. color, textcolor,chatcolor 는 각각 변화하는 backGorund나 color을 포트폴리오에 맞게 변경한다.

 특정 이미지나 nav를 눌렀을 때 useState를 사용하여 계속 새로 색 코드를 바꾸고, 메인페이지와 포트폴리오의 className을 넣어줄 수 있다. 
  
</details>

<details>
  <summary>gsap</summary>
 
  1. gsap.set()을 사용하여 기본 상태를 세팅한다. useEffect를 사용해 color가 변경될 때마다 기본 세팅이 된다.
  2. showPort와 showPort01을 분리한 건 애니메이션이 끝나는 걸 확인한 뒤, Port를 보여주기 위해서이다.
  3. Back 버튼을 누르면 setshow에 false를 넣은 뒤 사라지는 애니메이션을 넣어준다. 이때 바로 메인 화면으로 넘어가면 어색하기 때문에 setTime을 걸어 텀을 주었다.
  4. 각 메인페이지 문구마다 SplitText를 사용했기 때문에 다른 효과를 주었다. 
  
</details>

### 댓글  

<details>
    <summary>Setting</summary>

  <details>
    <summary>Client</summary>
   
   1) axios
   2) firebase
   3) http-proxy-middleware
    
  </details>
  
  <details>
    <summary>server</summary>
   
   1) express
   2) mongoose
   3) multer
   4) nodemon
   5) path
  
  이때 package.json의   "scripts"의  "start"는 "node index.js" nodemon index.js로 변경한다.<br />
  이러면 서버에 수정사항이 생길 때마다 Teminal에 곧바로 보여주기 때문에 수월히 개발 가능하다. 
    
  </details>
 </details>

<h3>댓글 쓰기</h3>

1) useState 만들기 
`
  const [content, setContent] = useState(''); <br />
  const [password, setPassword] = useState('');
`

댓글의 내용을 받아오는 content와, 삭제 기능을 위한 password를 함께 받는다. 
각각 input을 통해 받아오게 되며 각각의 value를 content와 password로 설정해야 변하는 것을 확인할 수 있다.

2) axios로 server에 보내기 

댓글을 작성한 뒤 버튼을 누르면, onSubmit이라는 함수가 작동된다. 
content와 password의 값이 공백이 아니어야 입력이 가능하다.
후에 body를 만들어 content와 password의 값을 한 데 묶은 뒤, axios로 서버에 함께 보낸다.
이때 돌아온 값이 success면 댓글 작성 완료를 알린다. 
참고로 댓글을 새로 작성할 때마다 list를 불러오는 함수인 fetchComments를 실행해야 한다.

3) server schema 만들기

우선 server와 client를 연결하기 위해서는 express 사용해야 한다. 
이 연결을 위해 path라는 다리를 놓고, 데이터베이스는 mongoDb이며 제어하기 위해 mongoose를 사용한다.
express는 app으로 설정하며 port 번호는 3000번을 이용한다. 

MongoDB에 데이터를 넣을 때는 Schema 라는 걸 사용한다. 

<details>
<summary>스키마(Schema)</summary>

정의: 스키마는 데이터베이스에서 전체 데이터 구조를 나타내는 개념이다.
내용: 스키마는 테이블, 뷰, 프로시저, 함수 등의 데이터베이스 객체들 간의 관계, 제약 조건, 데이터 타입 등을 정의한다.
용도: 데이터베이스의 설계를 나타내며, 데이터의 구조와 조작 방법에 대한 전반적인 규칙을 정의한다.

</details>

<details>
<summary>테이블(Table)</summary>

정의: 테이블은 실제 데이터가 저장되는 공간으로, 행과 열로 이루어진 이차원 구조이다.
내용: 테이블은 실제 데이터를 포함하며, 각 열(Column)은 특정 데이터 유형을 나타내고, 각 행(Row)은 실제 데이터 레코드를 나타낸다.
용도: 데이터베이스에서 정보를 구조적으로 저장하고 관리하기 위한 기본 단위로 사용된다.
</details>

Reple Schema에서는 password와 content, repleNum의 구성을 가진다. 

이후 index.js에서
`const { Reple } = require("./server/model/Reple.js");`
으로 불러오면 된다.

4) mongoDB연결하기

Express.js 애플리케이션에서 웹 서버를 시작하는 메서드인 listen을 사용해 port번호에 접속한다.
mongoDB와 연겨랗기 위해서는 connect라는 것을 사용하며, 연결이 성공적으로 이루어진 뒤 connect 됐음을 알린다. 

> 주의점
* Network Access의 주소가 0.0.0.0으로 설정되어 있어야 접근이 가능하다. 
* 사용자 권한이 read와 write 모두 설정되어 있는지 확인해야 한다. 

5) DB에 입력하기 

* `"/api/reple/submit"` 주소로 server와 client가 연결되면, req와 res를 생성할 수 있다. 
* 이때 body에서 보내온 것은 password와 content이며, repleNum은 따로 입력을 해주어야 한다. 
* 새롭게 Counter schema를 만들어 repleNum을 만들어준다. 
* req.body.repleNum에 현재 counter의 repelNum을 입력한다.
* 이후 Reple 스키마에 req.body를 넣어 새 데이터를 생성하고, 저장시킨다. 
* Counter의 repleNum을 updateOne 메서드를 써 증가시키고 res에 json 형식으로 true를 보낸다. 
* 혹시라도 오류가 발생하면 false를 보낸다. 

<h3>댓글 불러오기</h3>

1) 댓글을 불러온 뒤 담을 useState, List를 만들어준다.
2) fetchComments함수를 만들어 axios로 list를 server에 요청한다.
3) Reple에서 find를 사용해 모든 정보를 찾아 list에 넣고 client로 반환한다.
4) 반환된 정보를 map을 사용해 뿌려준다. 

<h3> 댓글 삭제하기 </h3>

1) 필요한 데이터 받아오기

* 삭제를 위해 입력하는 비밀번호
* 삭제 버튼을 누른 댓글의 아이디값

input을 사용해 비밀번호를 받아오면 되며, repleId는 useState를 만들어 x를 클릭한 댓글의 Id값을 저장시켜준다. 
deletepassword의 내용이 비어있는지 확인한 뒤, body를 만들어 password와 repleId를 담는다. 
axios로 보내준다.
무사히 success를 받아오면 다시 한 번 fetchComments를 사용해 댓글을 업데이트 시켜준다. 

2) 댓글 삭제

Reple에서 _id가 req.body의 repleId와 일치하는 것을 찾는다.
그 일치하는 댓글을 reple이라고 한다. 
reple의 password와 req.body의 password의 값이 일치하면 댓글 삭제를 진행한다. 
