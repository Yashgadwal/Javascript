// Video Url === https://youtu.be/p9V44AYNfQE?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL

console.log(
    document.getElementById('child1')
    );

    console.log(

        document.getElementsByClassName('container')

    );

    let changeF = document.getElementById('child1');
    let changeF2 = document.getElementById('child2');

    changeF.innerText = "Changing dyanmically in javascript with inner text "; //For changing inner Text
    changeF2.innerHTML = "<b>Changing dyanmically in javascript with inner html</b>"; //For changing inner html

    const sel = document.querySelector('.hello');
    sel.style.color = "red";
    console.log(sel);
    
    let elemCl = document.getElementsByClassName('child');
    console.log(elemCl);

    let tagN = document.getElementsByTagName('div');
    console.log('Tags are',tagN);
