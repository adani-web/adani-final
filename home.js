// [Sticky NavBar]

window.onscroll = () => {
let nav = document.querySelector('nav');
    if(window.pageYOffset > 725){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
}

// [Fade-In/Fade-Out on Scroll]

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".card")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".card")[1].classList.add("fadeInBottom");
            document.querySelectorAll(".card")[2].classList.add("fadeInTop");
            document.querySelectorAll(".card")[3].classList.add("fadeInBottom");
            document.querySelectorAll(".card")[4].classList.add("fadeInTop");
            document.querySelectorAll(".card")[5].classList.add("fadeInRight");
            document.querySelectorAll(".card")[6].classList.add("fadeInRight");
            document.querySelectorAll(".card")[7].classList.add("fadeInBottom");
            document.querySelectorAll(".card")[8].classList.add("fadeInLeft");
            document.querySelectorAll(".card")[9].classList.add("fadeInBottom");
            document.querySelectorAll(".card")[10].classList.add("fadeInRight");

        }
        else{
            document.querySelectorAll(".card")[0].classList.remove("fadeInLeft");
            document.querySelectorAll(".card")[1].classList.remove("fadeInBottom");
            document.querySelectorAll(".card")[2].classList.remove("fadeInTop");
            document.querySelectorAll(".card")[3].classList.remove("fadeInBottom");
            document.querySelectorAll(".card")[4].classList.remove("fadeInTop");
            document.querySelectorAll(".card")[5].classList.remove("fadeInRight");
            document.querySelectorAll(".card")[6].classList.remove("fadeInRight");
            document.querySelectorAll(".card")[7].classList.remove("fadeInBottom");
            document.querySelectorAll(".card")[8].classList.remove("fadeInLeft");
            document.querySelectorAll(".card")[9].classList.remove("fadeInBottom");
            document.querySelectorAll(".card")[10].classList.remove("fadeInRight");
        }
    })
})

observer.observe(document.querySelectorAll(".card-columns")[0]);
observer.observe(document.querySelectorAll(".card-columns")[1]);

// [Appearing]

const hiddenElements = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".hidden")[0].classList.add('show');
            document.querySelectorAll(".hidden")[1].classList.add('show');
            document.querySelectorAll(".hidden1")[0].classList.add('show');
            document.querySelectorAll(".hidden1")[1].classList.add('show');
        }
        else{
            document.querySelectorAll(".hidden")[0].classList.remove('show');
            document.querySelectorAll(".hidden")[1].classList.remove('show');
            document.querySelectorAll(".hidden1")[0].classList.remove('show');
            document.querySelectorAll(".hidden1")[1].classList.remove('show');
        }
    })
})

hiddenElements.observe(document.querySelector(".vimi"));