let sectionsHidden = document.querySelectorAll(".sec")
console.log(sectionsHidden  )

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        entry.target.classList.toggle("showGame",entry.isIntersecting);
    })
},{threshold:0.9})

sectionsHidden.forEach((section)=> observer.observe(section))