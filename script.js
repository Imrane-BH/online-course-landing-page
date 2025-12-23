const targets = document.querySelectorAll("img");
const cards = document.querySelectorAll(".card");
const options = {
    root : null,
    rootMargin : "0px",
    threshold : .3
};

const callBack = (entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
};

const observer = new IntersectionObserver(callBack,options);
targets.forEach(target => observer.observe(target));
cards.forEach(c => observer.observe(c));