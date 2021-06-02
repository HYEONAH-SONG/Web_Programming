# :deer: Web Progamming

### :heavy_check_mark: Server Side /Back-End Programming

- 사용자 요구에 따라 동적으로 Web Contents를 생성
- 대표적인 예로 **DB 서버**와 연동하여 데이터를 읽어오거나 쓰고 그 결과를 표출
- PHP, JSP, ASP ...

### :heavy_check_mark: Client Side / Front-End Programming

- 모든 처리를 서버에서 수행할 경우 서버 부하가 급격히 증가할 수도 있고 사용자에게도 빠른 서비스를 제공하기 어려움
- JavaScript

![](https://www.timetodev.co.kr/Upload/TextEditor/frontbackendproccess2.png)

### :ballot_box_with_check: REST?

REST(Representational State Transfer)이란, **웹에 존재하는 모든 리소스에 고유한 URI를 부여해 활용하는 것**으로 리소스를 정의하고 리소스에 대한 주소를 지정하는 방법론을 의미한다. 

- #### CRUD Operation 

  - Create : POST (리소스 생성)
  - Read : GET (리소스의 정보 조회)
  - Update : PUT (리소스의 정보 업데이트)
  - Delete : DELETE ( 리소스 삭제 )

- #### 특징

  - ##### 클라이언트 / 서버 구조

    리소스를 제공하는 Server 와 리소스를 요청하는 Client의 구조를 가진다.

  - ##### Stateless

    HTTP는 Stateless 프로토콜이므로 REST역시 무상태성을 가진다. 클라이언트의 context를 서버에 저장하지 않는다.

  - ##### 캐시 처리 가능

    웹 표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하는 기존의 인프라를 그대로 활용이 가능하다.

  - ##### 자체 표현 구조

    **동사(Method)와 명사(URI)**로 이루어져있어 어떤 메소드에서 무슨 행위를 하는지 알 수 있으며 REST API자체가 매우 쉬워서 API 메세지 자체만 보고도 API를 이해할 수 있다. 

### :ballot_box_with_check:  Node JS and Express JS

- #### Node JS

  자바 스크립트를 브라우저 외에서도 실행하는데 사용되는 자바스크립트 플랫폼으로, 자바스크립트를 이용하여 서버를 만들 수 있도록한다.

  - 구글 크롬의 엔진을 지반으로 자바스크립트 엔진이 굉장히 빠르다
  - 비동기적 작업이 가능함

- #### Express JS

  Node JS의 웹 서버 기능 위에 올라가는 상대적으로 작은 프레임워크이다. 

- 



