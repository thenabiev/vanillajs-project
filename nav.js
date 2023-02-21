const nav=document.querySelector('.navbar');
const bottomContainer=document.querySelector('.bottom-container');
const text=document.querySelectorAll('.text')
window.addEventListener("scroll", ()=>{
    if(window.scrollY> bottomContainer.offsetTop-nav.offsetHeight-50){
        nav.classList.add('active')
        text.forEach((txt, index)=>{
            setTimeout(function(){
                
                text[index].className  += " reveal";
             }, 500);
        })
        
    }else{
        nav.classList.remove('active')
        text.forEach((txt, index)=>{
            setTimeout(function(){
                
                text[index].className  - " reveal";
             }, 500);
        })
    }
})

// var lineItem = document.querySelectorAll('.item'), i
// lineItem.forEach(i => {
//   setTimeout(function(i){
//     console.log(lineItem[i])
//     // lineItem[i].className  += "otherclass"
//   }, 20)
// });