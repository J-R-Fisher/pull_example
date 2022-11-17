document.addEventListener('DOMContentLoaded', evt => {
    var but = document.createElement('button');
    
    but.onclick = () => {
        console.log('BUTTON PRESSED');
    };

    but.innerHTML = 'HELLO';
    document.appendChild(but);
});