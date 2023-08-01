const pop = document.getElementById('pop');

function openpop(params) {

    pop.classList.remove('close-pop');
    pop.classList.add('open-pop');
    
}

function closepop(params) {

    pop.classList.remove("open-pop");
    pop.classList.add("close-pop");
    // After a short delay, reset the popup to its initial state
    setTimeout(() => {
        pop.classList.remove("close-pop");
    }, 400);
    
}