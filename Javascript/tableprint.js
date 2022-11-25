function tableprinter(){
  let n = Number(document.getElementById("number").value);
  let result = "";
  for(let i=1; i<=10; i++) {
    result = result + "<p>"+n + "*" + i + "=" + n * i+"</p>";
  }
  document.getElementById("result").innerHTML = result;
  }
