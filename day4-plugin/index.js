(() => {
  let el = document.createElement('p')
  el.innerText = '我是动态创建的'
  console.log(el)
  let parentEl = document.getElementById('test');
  parentEl.appendChild(el)
})();