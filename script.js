
    const ap1 = document.getElementById('ap1');
    const ap2 = document.getElementById('ap2');
    const ap3 = document.getElementById('ap3');
    const ap4 = document.getElementById('ap4');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const main = document.getElementById("main");


    let creat1 = document.createElement('nav');
    let child1 = document.createElement("a");
    child1.setAttribute('href', 'https://www.youtube.com');
    child1.textContent = "YouTube";
    creat1.appendChild(child1);
    creat1.className = 'cree';


    let creat2 = document.createElement('nav2');
    creat2.className = 'cree';

    const conta = document.getElementById("footer");
    const conta2 = document.getElementById("footer2");
    

    button1.addEventListener('mouseenter', ()=>{
        conta.appendChild(creat1);
        creat1.style.display = "block";
        creat2.style.display = "none";
    })

    button2.addEventListener('mouseenter', ()=>{
        creat1.style.display = "none";
        conta2.appendChild(creat2);
        creat2.style.display = "block";
     })

     main.addEventListener('click', ()=>{
        creat1.style.display = "none";
        creat2.style.display = "none";
     })

    ap1.addEventListener('click', ()=>{
        ap1.className = "out";
        ap2.className ="in";
        ap2.className = "mi";
    })

    ap2.addEventListener('click', ()=>{
        ap2.className = "out";
        ap3.className ="in";
        ap3.className = "mi";
    })

    ap3.addEventListener('click', ()=>{
        ap3.className = "out";
        ap4.className ="in";
        ap4.className = "mi";
    })

    ap4.addEventListener('click', ()=>{
        ap4.className = "out";
        ap1.className ="in";
        ap1.className = "mi";
    })


