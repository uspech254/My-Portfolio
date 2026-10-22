function addTask(){
  let input = document.getElementById('taskInput');
  if(input.value === "") return;
  let li = document.createElement('li');
  li.innerHTML = `${input.value} <span onclick="this.parentElement.remove()">❌</span>`;
  li.onclick = function(){ this.classList.toggle('done') };
  document.getElementById('taskList').appendChild(li);
  input.value = "";
}