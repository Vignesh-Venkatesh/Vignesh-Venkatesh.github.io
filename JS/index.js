// Easter Egg - inspired by ForrestKnight
console.log(
    "%c Hey! Did you like my portfolio? 🤔",
    "color: #FF6000; font-weight: bold; font-size: 24px;"
)

aboutButtonHTML = document.querySelector(".nav1")
aboutSectionHTML = document.querySelector(".about-section")
aboutButtonHTML.addEventListener("click", function(){
    aboutSectionHTML.scrollIntoView({behavior: 'smooth'})
})

skillsButtonHTML = document.querySelector(".nav2")
skillsSectionHTML = document.querySelector(".skills")
skillsButtonHTML.addEventListener("click", function(){
    skillsSectionHTML.scrollIntoView({behavior: 'smooth'})
})

resumeButtonHTML = document.querySelector(".nav3")
resumeSectionHTML = document.querySelector(".socials")
resumeButtonHTML.addEventListener("click", function(){
    resumeSectionHTML.scrollIntoView({behavior: 'smooth'})
})

socialsButtonHTML = document.querySelector(".nav4")
socialsSectionHTML = document.querySelector(".socials")
socialsButtonHTML.addEventListener("click", function(){
    socialsSectionHTML.scrollIntoView({behavior: 'smooth'})
})

projectButtonHTML = document.querySelector(".nav5")
projectSectionHTML = document.querySelector(".projects")
projectButtonHTML.addEventListener("click", function(){
    projectSectionHTML.scrollIntoView({behavior: 'smooth'})
})

pythonIcon = document.querySelector(".fa-python")
pythonStars = document.querySelector(".python-stars")
pythonStars.style.opacity = "0"
pythonIcon.addEventListener("mouseover", function(){
    pythonStars.style.opacity = "1"
    pythonStars.style.transition = "all 0.2s ease-in";
})
pythonIcon.addEventListener("mouseout", function(){
    pythonStars.style.opacity = "0"
    pythonStars.style.transition = "all 0.2s ease-in";
})

HTMLIcon = document.querySelector(".fa-html5")
HTMLStars = document.querySelector(".html-stars")
HTMLStars.style.opacity = "0"
HTMLIcon.addEventListener("mouseover", function(){
    HTMLStars.style.opacity = "1"
    HTMLStars.style.transition = "all 0.2s ease-in";
})
HTMLIcon.addEventListener("mouseout", function(){
    HTMLStars.style.opacity = "0"
    HTMLStars.style.transition = "all 0.2s ease-in";
})

CSSIcon = document.querySelector(".fa-css3-alt")
CSSStars = document.querySelector(".css-stars")
CSSStars.style.opacity = "0"
CSSIcon.addEventListener("mouseover", function(){
    CSSStars.style.opacity = "1"
    CSSStars.style.transition = "all 0.2s ease-in";
})
CSSIcon.addEventListener("mouseout", function(){
    CSSStars.style.opacity = "0"
    CSSStars.style.transition = "all 0.2s ease-in";
})

JSIcon = document.querySelector(".fa-square-js")
JSStars = document.querySelector(".js-stars")
JSStars.style.opacity = "0"
JSIcon.addEventListener("mouseover", function(){
    JSStars.style.opacity = "1"
    JSStars.style.transition = "all 0.2s ease-in";
})
JSIcon.addEventListener("mouseout", function(){
    JSStars.style.opacity = "0"
    JSStars.style.transition = "all 0.2s ease-in";
})

reactIcon = document.querySelector(".fa-react")
reactStars = document.querySelector(".react-stars")
reactStars.style.opacity = "0"
reactIcon.addEventListener("mouseover", function(){
    reactStars.style.opacity = "1"
    reactStars.style.transition = "all 0.2s ease-in";
})
reactIcon.addEventListener("mouseout", function(){
    reactStars.style.opacity = "0"
    reactStars.style.transition = "all 0.2s ease-in";
})

nodeIcon = document.querySelector(".fa-node-js")
nodeStars = document.querySelector(".node-stars")
nodeStars.style.opacity = "0"
nodeIcon.addEventListener("mouseover", function(){
    nodeStars.style.opacity = "1"
    nodeStars.style.transition = "all 0.2s ease-in";
})
nodeIcon.addEventListener("mouseout", function(){
    nodeStars.style.opacity = "0"
    nodeStars.style.transition = "all 0.2s ease-in";
})

gitIcon = document.querySelector(".fa-git-alt")
gitStars = document.querySelector(".git-stars")
gitStars.style.opacity = "0"
gitIcon.addEventListener("mouseover", function(){
    gitStars.style.opacity = "1"
    gitStars.style.transition = "all 0.2s ease-in";
})
gitIcon.addEventListener("mouseout", function(){
    gitStars.style.opacity = "0"
    gitStars.style.transition = "all 0.2s ease-in";
})


const boxes = document.querySelectorAll('.project-box')
window.addEventListener("scroll", checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/5 * 4
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top
        if (boxTop<triggerBottom){
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}