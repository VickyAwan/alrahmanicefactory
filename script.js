// Smooth welcome
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Navbar shadow while scrolling
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 60){
        header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";
    }

});

// Fade-in animation
const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.photo,.contact-box,.video-box").forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(40px)";

observer.observe(el);

});
