
function darkmode(){
    var element =document.body;
      element.classList.toggle('light-mode');
      var seo =document.getElementById('seo')
      var search =document.getElementById('search-icon')
      var icon1 =document.getElementById('icone-mode1')
      var icon2 =document.getElementById('icone-mode2')
      var icon3 =document.getElementById('icone-mode3')
      var icon4 =document.getElementById('icone-mode4')
      var icon5 =document.getElementById('icone-mode5')
      var icon6 =document.getElementById('icone-mode6')
      
      element.style.color = "#fff";


      if(element.className=="light-mode"){
       document.getElementById('mode').className="fa-solid fa-sun"
        element.style.backgroundColor ='black'
        element.style.color ='white'
        icon1.style.color='white'
        icon2.style.color='white'
        icon3.style.color='white'
        icon4.style.color='white'
        icon5.style.color='white'
        icon6.style.color='white'
        seo.style.color ='black'
        search.style.color ='black'
       
      }
      else{
        document.getElementById('mode').className="fa-regular fa-moon"
        element.style.backgroundColor ='white'
        element.style.color ='black'
        icon1.style.color='black'
        icon2.style.color='black'
        icon3.style.color='black'
        icon4.style.color='black'
        icon5.style.color='black'
        icon6.style.color='black'
          seo.style.color ='black'
        search.style.color ='black'
      }
}

