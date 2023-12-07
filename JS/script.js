setTimeout(function() {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.body.classList.remove("stop-scrolling");
    const load =  document.getElementById('load');
    load.classList.remove('top')

}, 2000);

setTimeout(function() {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.body.classList.remove("stop-scrolling");
}, 2000);

setTimeout(function() {
    const animContent =  document.getElementById('load');
    animContent.style.zIndex = "0"
}, 3000);



let navlinks =  document.querySelectorAll('.link');
let sections = document.querySelectorAll('section');

window.onscroll = () =>{
    sections.forEach(sec =>{

        let top = window.scrollY;
        let offSet  = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id');

        if (top >= offSet && top < offSet + height){
            navlinks.forEach(item =>{
                item.classList.remove('active');
                if(item.querySelector('a').getAttribute('href') == '#' + id){
                    item.classList.add('active');
                }
            });



          
        }

    });
}

const loadUnload = document.getElementById("button");
const toggleDiv = document.getElementById("removeAddFrame");
const toggleDiv2 = document.getElementById("removeAdd");
const container = document.getElementById("container-three");
let isDivRemoved = true;

loadUnload.addEventListener("click", function() {
  
    if (!isDivRemoved) {
       toggleDiv.style.display = 'none';
       toggleDiv2.style.display = 'none';
       isDivRemoved = true;
       document.getElementById("buttonText").textContent="See More";
       container.style.height='125vh';
    } else {
        toggleDiv.style.display = 'flex';
        toggleDiv2.style.display = 'flex';
        isDivRemoved = false;
        document.getElementById("buttonText").textContent="See Less";
        container.style.height='225vh';
    }
 
});


