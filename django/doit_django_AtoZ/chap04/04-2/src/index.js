function doSomething(){
  let a = document.getElementById("inputA").value;
  let b = document.getElementById("inputB").value;
  document.getElementById("valueA").innerHTML = a;
  document.getElementById("valueB").innerHTML = b;
  document.getElementById("valueC").innerHTML = Number(a) + Number(b);
}

function whatTimeIsIt(){
  let d = new Date();
  let currentDate = d.getFullYear() + "년 " + ( d.getMonth() + 1 ) + "월 " + d.getDate() + "일";
  let currentTime = d.getHours() + "시 " + d.getMinutes() + "분 " + d.getSeconds() + "초";
  alert("지금은 " + currentDate + ", " + currentTime + " 입니다.");
}
