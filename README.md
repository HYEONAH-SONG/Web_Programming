# :deer: Web Progamming

### :heavy_check_mark: Server Side /Back-End Programming

- 사용자 요구에 따라 동적으로 Web Contents를 생성
- 대표적인 예로 **DB 서버**와 연동하여 데이터를 읽어오거나 쓰고 그 결과를 표출
- PHP, JSP, ASP ...

### :heavy_check_mark: Client Side / Front-End Programming

- 모든 처리를 서버에서 수행할 경우 서버 부하가 급격히 증가할 수도 있고 사용자에게도 빠른 서비스를 제공하기 어려움
- JavaScript

![](https://www.timetodev.co.kr/Upload/TextEditor/frontbackendproccess2.png)

### :ballot_box_with_check:  Application Architectures

- #### Client-server model

  - 서버에서 모든 기능을 관리
  - 서버는 365일 24시간 항상 구동

- #### Peer-to-Peer model

  -  통신 원하는 Peer 끼리 직접 통신
  - 관리가 어려움 (서버가 존재하지 않기 때문에)
  - 버전 등 업데이트가 같아야 통신이 가능하므로 유지보수하는데 어려움이 존재

### :ballot_box_with_check: ​World Wide Web(WWW)

- 웹 페이지는 다양한 객체들을 포함하는 HTML에 의해 표현됨
- 각각의 객체들은 **URL**로  지정할 수 있음

![](https://t1.daumcdn.net/cfile/tistory/21089E34587B28D50A)



### :ballot_box_with_check: HOW TO DELIVER WEB REQUEST​

![](https://github.com/HYEONAH-SONG/Web_Programming/blob/master/Image/Application_Layer.PNG?raw=true)

![Transport_Layer](https://github.com/HYEONAH-SONG/Web_Programming/blob/master/Image/Transport_Layer.PNG?raw=true)

![Internet_Layer](https://github.com/HYEONAH-SONG/Web_Programming/blob/master/Image/Internet_Layer.PNG?raw=true)

### :ballot_box_with_check: HTML

- #### HTML List

  ```html
  <!DOCTYPE html>
  <html>
  <body>
  <ul style="list-style-type:square;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
      
  <ol type=“a">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>  
  </body>
  </html>            
  ```

  - ##### Unordered HTML List style

    | **Value** | **Description**                                 |
    | --------- | ----------------------------------------------- |
    | disc      | Sets the list item marker to a bullet (default) |
    | circle    | Sets the list item marker to a circle           |
    | square    | Sets the list item marker to a square           |
    | none      | The list items will not be marked               |

  - ##### Ordered HTML List style

    | **Type** | **Description**                                              |
    | -------- | ------------------------------------------------------------ |
    | type="1" | The list items will be numbered with numbers (default)       |
    | type="A" | The list items will be numbered with uppercase letters       |
    | type="a" | The list items will be numbered with lowercase letters       |
    | type="I" | The list items will be numbered with uppercase roman numbers |
    | type="i" | The list items will be numbered with lowercase roman numbers |

- #### HTML Table

  ```html
  <table style="width:100%">  
      <tr>    
          <th>Name</th>    
          <th colspan="2">Telephone</th> 
      </tr> 
      <tr>    
          <td>Bill Gates</td>  
          <td>55577854</td>    
          <td>55577855</td>  
      </tr>
  </table>
  ```

- #### HTML Semantic Elements

  - header : 전체에 대한 설명(제목 등)
  - nav : 주요 page link 제공
  - section : chapter 구분
  - article : 구분되는 기사 뉴스 등
  - aside : section이나 article에 대한 부연 설명
  - footer : 작성자/연락처/저작권 등

  ![](http://www.springboardseo.com/img/html5-semantic-page-layout.jpg)

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
  
  ### :ballot_box_with_check:  Node JS and Express JS
  
  - #### Node JS
  
    자바 스크립트를 브라우저 외에서도 실행하는데 사용되는 자바스크립트 플랫폼으로, 자바스크립트를 이용하여 서버를 만들 수 있도록한다.
  
    - 구글 크롬의 엔진을 지반으로 자바스크립트 엔진이 굉장히 빠르다
    - 비동기적 작업이 가능함
  
  - #### Express JS
  
    Node JS의 웹 서버 기능 위에 올라가는 상대적으로 작은 프레임워크이다. 


## :bookmark:Homework

- ##### assign_01_201824509_송현아  ~ assign_04_201824509__송현아 

  - SWOT 분석
  - HTML + CSS

- ##### assign_05_201824509_송현아

  - 개인정보 입력 페이지

- ##### assign_06_201824509_송현아

  - 계산기 페이지

- ##### assign_07_201824509_송현아

  - 피보나치 수열 계산 페이지

#### 

