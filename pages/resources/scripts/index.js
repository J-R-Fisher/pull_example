document.addEventListener('DOMContentLoaded', event => {
    console.log(event);
    var but = document.createElement('button');
    but.onclick = () => {
        console.log('BUTTON PRESSED');
    };

    but.innerHTML = 'HELLO';
    document.body.appendChild(but);
});