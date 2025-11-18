const main = document.querySelector('main')
const btn = document.querySelector('button')
const image =['img1.jpg', 
    'https://images.unsplash.com/photo-1621129171751-9604ed97963f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://plus.unsplash.com/premium_photo-1664371674830-aa12607fd1ab?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://plus.unsplash.com/premium_photo-1664371675060-87e49122263c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1694198817869-196127afd4ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',]
    main.addEventListener('click',function(){
        const img = document.createElement('img')
        let imgIndex = Math.floor(Math.random()*image.length)
        img.style.height = '70px'
        img.style.width ='70px'
        img.style.position = 'absolute'
        let x = Math.floor(Math.random()*90)
        let y = Math.floor(Math.random()*90)
        let rotate = Math.floor (Math.random()*360)
        let size = Math.floor (Math.random()*100)+20
        img.style.top = x+'%'
        img.style.left = y+'%'
        img.style.transform = `rotate(${rotate}deg)`
        
        img.style.objectFit = 'cover'
        img.style.objectPosition = 'center'
        img.src = image[imgIndex]
        main.appendChild (img)
    })
// btn.addEventListener('click',function(){
//     const div = document.createElement('div')
//     div.style.height = '100px'
//     div.style.width ='100px'
//     div.style.backgroundColor = 'red'
//     let x = Math.floor(Math.random()*80)
//     let y = Math.floor(Math.random()*80)
//     let rotate = Math.floor (Math.random()*360)
//     let c1 = Math.floor (Math.random()*256)
//     let c2 = Math.floor (Math.random()*256)
//     let c3 = Math.floor (Math.random()*256)
//     div.style.position = 'absolute'
   
//     div.style.top = x+'%'
//     div.style.left = y+'%'
//     div.style.transform = 'rotate('+ rotate +'deg)'
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     main.appendChild (div)
    
// })
      



