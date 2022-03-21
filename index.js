document.addEventListener('DOMContentLoaded', () =>{
    const input = document.getElementById('input')
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')
    const img4 = document.getElementById('img4')
    var number = 0
    var opacity = '0'
    var perem = 1
    
    

    setTimeout(() => {
        input.style = void 0
        img.style = void 0
    }, 900)

   
    var imgLinks = [
        img1,
        img2,
        img3,
        img4
    ]
    var static = imgLinks
    // imgLinks = imgLinks.reverse()
    function changeImg(){
        setTimeout(()=> imgLinks[0].style.opacity = '0', 10000)
        setTimeout(()=> imgLinks[1].style.opacity = '0', 20000)
        setTimeout(()=> imgLinks[2].style.opacity = '0', 30000)
        setTimeout(()=> imgLinks[2].style.opacity = '1', 40000)
        setTimeout(()=> imgLinks[1].style.opacity = '1', 50000)
        setTimeout(()=> imgLinks[0].style.opacity = '1', 70000)
        setTimeout(() => changeImg(),80000)   
    }
    changeImg()

    
})
