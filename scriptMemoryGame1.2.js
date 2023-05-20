 /* Fazendo a mesma ação do que o exercício ex006, só que agora
        dentro do JavaScript. para isso usamos o comando
        add.EventListener , que serve como um ouvidor, que fica
        atento quando o evento 'clicar' ocorrer por exemplo
        ele colocar em ação a fuction clicar() */

        var area1 = Window.document.getElementById('area1')
        area1.addEventListener('click', clicar1)
        area1.addEventListener('mouseenter', entrar1)
        area1.addEventListener('mouseout', sair1)

       function clicar1() {
           area1.innerText = 'LEÃO'
        } 
       function entrar1(){
           area1.style.background = "black"
       }
       function sair1(){
           area1.style.background = "rgb(75, 49, 98)"
           area1.innerText = '1'
       }
       
        var area2 = window.document.getElementById('area2')
        area2.addEventListener('click', clicar2)
        area2.addEventListener('mouseenter', entrar2)
        area2.addEventListener('mouseout', sair2)

       function clicar2() {
           area2.innerText = 'GIRAFA'
       }
       function entrar2(){
           area2.style.background = 'black'
       
       }
       function sair2(){
           area2.style.background =' rgb(113, 96, 128)'
           area2.innerText = '2'
       }
      
        var area3 = window.document.getElementById('area3')
        area3.addEventListener('click', clicar3)
        area3.addEventListener('mouseenter', entrar3)
        area3.addEventListener('mouseout', sair3)

       function clicar3() {
           area3.innerText = 'TUBARÃO'
       }
       function entrar3(){
           area3.style.background = 'black'
       
       }
       function sair3(){
           area3.style.background = 'rgb(75, 49, 98)'
           area3.innerText = '3'
       }
       
       var area4 = window.document.getElementById('area4')
       area4.addEventListener('click', clicar4)
       area4.addEventListener('mouseenter', entrar4)
       area4.addEventListener('mouseout', sair4)
       function clicar4() {
           area4.innerText = 'ELEFANTE'
       }
       function entrar4(){
           area4.style.background = 'black'
       
       }
       function sair4(){
           area4.style.background =' rgb(113, 96, 128)'
           area4.innerText = '4'
       }
       
       var area5 = window.document.getElementById('area5')
       area5.addEventListener('click', clicar5)
       area5.addEventListener('mouseenter', entrar5)
       area5.addEventListener('mouseout', sair5)
       function clicar5() {
           area5.innerText = 'TUBARÃO'
       }
       function entrar5(){
           area5.style.background = 'black'
       
       }
       function sair5(){
           area5.style.background ='rgb(75, 49, 98)'
           area5.innerText = '5'
       }
       
       var area6 = window.document.getElementById('area6')
       area6.addEventListener('click', clicar6)
       area6.addEventListener('mouseenter', entrar6)
       area6.addEventListener('mouseout', sair6)
       function clicar6() {
           area6.innerText = 'LEÃO'
       }
       function entrar6(){
           area6.style.background = 'black'
       
       }
       function sair6(){
           area6.style.background =' rgb(113, 96, 128)'
           area6.innerText = '6'
       }
       
       var area7 = window.document.getElementById('area7')
       area7.addEventListener('click', clicar7)
       area7.addEventListener('mouseenter', entrar7)
       area7.addEventListener('mouseout', sair7)
       function clicar7() {
           area7.innerText = 'ELEFANTE'
       }
       function entrar7(){
           area7.style.background = 'black'
       
       }
       function sair7(){
           area7.style.background ='rgb(75, 49, 98)'
           area7.innerText = '7'
       }
       
       var area8 = window.document.getElementById('area8')
       area8.addEventListener('click', clicar8)
       area8.addEventListener('mouseenter', entrar8)
       area8.addEventListener('mouseout', sair8)
       function clicar8() {
           area8.innerText = 'GIRAFA'
       }
       function entrar8(){
           area8.style.background = 'black'
       
       }
       function sair8(){
           area8.style.background =' rgb(113, 96, 128)'
           area8.innerText = '8'
       }