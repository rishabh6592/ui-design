//for printing 1 to 10 number in js
// for(var i=0;i<=100;i++){
//     console.log(i);
// }



// gsap.to("#title-png",{
//     x:600,
//     y:200,
//     duration:2,
//     delay:0.3,
//     repeat:3,
//     // repeat:-3,
// })


var night = document.querySelector("#night-mode")
var left = document.querySelector(".left")
var daymode = document.querySelector("#day-mode")
flag = 0

night.addEventListener("click",function(){
    // if (flag ==0 ){
        left.style.backgroundColor = "black"
        // night.style.opacity = 0
        // flag = 1
    // }
    // else{
        left.addEventListener("click",function(){})
        left.style.backgroundColor = "#FB811E"
        // day.style.opacity = 1
        // flag = 0
    // }
})




night.addEventListener("click",function(){
    // if (flag ==0 ){
        // night.style.opacity = 0
        left.style.backgroundColor = "black"
        // flag = 1
    // }
    // else{
        daymode.addEventListener("click",function(){
            left.style.backgroundColor = "#FB811E"
        })
        // night.style.opacity = 1
        
        // flag = 0
    // }
})

// daymode.addEventListener("click",function(){
//     if (flag ==0 ){
//         night.style.opacity = 1
//         flag = 1
//     }
//     else{
//         daymode.addEventListener("click",function(){})
//         daymode.style.opacity = 1
//         flag = 0
//     }
// })

document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
    if(!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));

