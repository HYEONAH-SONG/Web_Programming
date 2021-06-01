  // Create an object:
  function show(){

    for (var i=0; i<5; i++) {
            if (document.getElementsByName("category")[i].checked == true) {
                emo =  document.getElementsByName("category")[i].value;
            }
    }
    var memo = {
      title: document.getElementById('fname').value,
      date: document.getElementById('date').value,
      emotion: emo,
      content:document.getElementById('memo').value
    };
    document.getElementById("result").innerHTML = "<h1>" + memo["title"] + "</h1>" + memo["date"] + "<br>" + memo["emotion"] + "<br><br>" + memo["content"] ;
    // Storing data:
    myJSON = JSON.stringify(memo);
    localStorage.setItem("testJSON",myJSON);

    // Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("dia").innerHTML = obj.title;    
    
  }
