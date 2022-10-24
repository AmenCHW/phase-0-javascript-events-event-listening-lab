const input = document.getElementById('button')



function addingEventListener() {
    
    input.addEventListener('click', aletWhenClick)

    function aletWhenClick(){
    alert('I was ckicked')}

}

addingEventListener();


