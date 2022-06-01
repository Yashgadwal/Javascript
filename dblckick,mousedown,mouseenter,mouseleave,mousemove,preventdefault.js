// Video URL == https://youtu.be/XFKvwSxWDN0?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL

let btn = document.getElementById('btn');
// btn.addEventListener('dblclick',func1);
// function func1(e) {
//     console.log('Thanks',e);
// }

// btn.addEventListener('dblclick', function (e) {
// console.log('You double clicked on this button');
// })

// btn.addEventListener('mousedown', function (e) {
// console.log('Mouse Down'); //mouse down accept all click like right click & wheel click
// })

// btn.addEventListener('mouseenter', function (e) {
// console.log('Mouse enter'); //mouse down accept all click like right click & wheel click
// })

// btn.addEventListener('mouseleave', function (e) {
// console.log('Mouse leave'); //mouse down accept all click like right click & wheel click
// })

btn.addEventListener('mousemove', function (e) {
    console.log('Mouse Moved'); //mouse down accept all click like right click & wheel click
})

let submit = document.getElementById('submit');
submit.addEventListener('click', funct2);
function funct2(e) {
    e.preventDefault(); //Prevent from default action
    console.log('submit btn clicked');
}

document.querySelector('.container').addEventListener(
    'mousemove', function (e) {
        console.log(200, e.offsetY);
        document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX},${e.offsetX}`
    }
)