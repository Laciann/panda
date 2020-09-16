let button = document.getElementById('button');

button.addEventListener(
    'click', function (e) {
        e.preventDefault();
        document.getElementById("panda").classList.toggle('panda');
        document.getElementById("pandey").classList.toggle('pandey');
        if(button.textContent == 'Click'){
        button.textContent = 'Stop';
        } else if(button.textContent == 'Stop'){
            button.textContent = 'Click';
        }
    }
);