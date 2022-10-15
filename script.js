let framed = document.getElementById("framed")
let btn = document.getElementsByClassName("btn")
let arr = ["Framed" ,"Word Master","Wordle","Globle","Prime Video","Hotstar","Sony liv","Flixer","Codechef", "Leetcode", "Github","Replit","Gmail","Youtube","Twitter","Instagram"]
let linker= ["https://framed.wtf/","https://octokatherine.github.io/word-master/","https://www.nytimes.com/games/wordle/index.html","https://globle-game.com/","https://www.primevideo.com/region/eu/storefront/home/ref=atv_dp_tv_c_9zZ8D2_1_0","https://www.hotstar.com/in","https://www.sonyliv.com/custompage/sports-7753","https://web.myflixer.ru/","https://www.codechef.com/","https://leetcode.com/","https://github.com/","https://replit.com/~","https://mail.google.com/mail/u/0/#inbox","https://www.youtube.com/","https://twitter.com/home","https://www.instagram.com/"]
for (i in btn){
  btn[i].classList.add("fontsize")
  btn[i].innerHTML="<p>"+arr[i]+"</p>"
  document.getElementsByTagName("a")[i].href=`${linker[i]}`
}
