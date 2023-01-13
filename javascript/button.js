// common funtion
function getElementByValue(even){
    const btn1 =document.getElementById(even);
    const btn1Value = btn1.innerText;
    
    const selectContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = btn1Value;
    selectContainer.appendChild(li);
    return btn1Value;
}
// card button
document.getElementById('btn-1').addEventListener('click', function(){
    getElementByValue('messi');
})
document.getElementById('btn-2').addEventListener('click', function(){
    getElementByValue('naymar');
})
document.getElementById('btn-3').addEventListener('click', function(){
    getElementByValue('mbappe');
})
document.getElementById('btn-4').addEventListener('click', function(){
    getElementByValue('vitor');
})
document.getElementById('btn-5').addEventListener('click', function(){
    getElementByValue('ramos');
})
document.getElementById('btn-6').addEventListener('click', function(){
    getElementByValue('renato');
})
