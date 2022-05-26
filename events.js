// video URL = https://youtu.be/rxPw8kJUPQ0?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL

let eve =document.getElementById('child1');
eve.addEventListener('click',function (e) {
    console.log('You clicked on child1');
    // location.href = 'https://ygtoons.blogspot.com/' //for adding link
    // console.log(e);
    variable = e.target;//Traget give the code of element wich you target
    console.log(variable);
    console.log(e.target.className); //For accessing Class
    console.log(e.target.id); //for getting id
    // console.log(e.offsetX);
    // console.log(e.offsetY);
})

eve.addEventListener('mouseover',function (e) {
    console.log("you hover on child 1");
})

eve.addEventListener('mouseleave',function (e) {
    console.log("you leave hover on child 1");
})