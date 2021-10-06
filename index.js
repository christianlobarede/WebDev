const list = document.querySelectorAll('.list')
console.log(list)

for(let i = 0; i < list.length; i ++){
    list[i].onclick = () => {
    let j = 0;
    while(j < list.length){
        console.log(j)
        list[j++].className = 'list';
        }    
    list[i].className = 'list active'
    }
}

const menuToggle = document.querySelector('.toggle');
const sideBar = document.querySelector('.sidebar')
menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    sideBar.classList.toggle('active')
}