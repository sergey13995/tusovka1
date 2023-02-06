document.addEventListener('DOMContentLoaded', e => {
    let body = document.querySelector('body');
     body.animate([{background:"red"},{background:"green"},{background:'blue'}],{duration:3000,iterations:Infinity});
});
