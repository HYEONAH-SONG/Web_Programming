const time = document.getElementById("timer");
var hour = 0; // 시
var min = 0; // 분
var sec = 0; // 초
var stoptime = true; // 스탑워치 멈춤에 대한 여부
var result_time = 0;

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// StudyStart 버튼을 누르는 경우 => 시간이 지속적으로 흐름
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
  }
}
// StudyStop 버튼을 누르는 경우 => 시간이 일시 정지
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    var li = document.createElement("li");
    var t = document.createTextNode(result_time);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
}
// 시간 흐름에 대한 출력 함수 
function timerCycle() {
  if (stoptime == false) { // 시간이 지속적으로 흐르는 경우 
  sec = parseInt(sec);
  min = parseInt(min);
  hour = parseInt(hour); 
  sec = sec + 1;

  if (sec == 60) { // minute update
    min = min + 1;
    sec = 0;
  }
  if (min == 60) { // hour update
    hour = hour + 1;
    min = 0;
    sec = 0;
  }
  if (sec < 10 || sec == 0) { // 한 자리인 경우 
    sec = '0' + sec;
  }
  if (min < 10 || min == 0) { // 한 자리인 경우 
    min = '0' + min;
  }
  if (hour < 10 || hour == 0) { // 한 자리인 경우 
    hour = '0' + hour;
  }
  result_time = hour + ':' + min + ':' + sec;
  time.innerHTML = hour + ':' + min + ':' + sec;
  setTimeout("timerCycle()", 1000); // 타이머 함수 --> 1초마다 함수 실행
}
}

// Time Reset 버튼을 누르는 경우 => 시간 리셋 함수 
function resetTimer() {
  time.innerHTML = '00:00:00';
}

var clockTarget = document.getElementById("now");
//상단 현재 시간 출력 
function clock() {
  var date = new Date();
  // date Object를 받아오고 
  var month = date.getMonth();
  var clockDate = date.getDate();
  var day = date.getDay();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  clockTarget.innerText = `${month + 1}월 ${clockDate}일` +
      `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 월은 0부터 1월이기때문에 1부터 시작한다. 
  // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 했습니다. 
}
function init(){
  clock();
  setInterval(clock,1000);
}
init(); 
