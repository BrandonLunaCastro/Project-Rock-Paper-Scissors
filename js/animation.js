let sectionsHidden = document.querySelectorAll(".sec")

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        entry.target.classList.toggle("showGame",entry.isIntersecting);
    })
},{threshold:0.10})

sectionsHidden.forEach((section)=> observer.observe(section));