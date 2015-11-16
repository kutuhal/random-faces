function getImage () {
  imgNum = Math.floor(Math.random()* 10)+1
  var element = document.getElementById('imgDiv')
  element.style.backgroundImage = 'url(img/'+imgNum+'.jpeg)';
}
