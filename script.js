const g = document.querySelector('#good');
const c = document.querySelector('#cheap');
const f = document.querySelector('#fast');

const tog = document.querySelectorAll('.toggle')
let arr = Array.from(tog);
arr.forEach((toggle)=>{
    toggle.addEventListener('click', (e)=>{
        if(g.checked && c.checked){
            f.checked=false;
        }
        else if(g.checked){
            if(f.checked){
                c.disabled=true;
            }
            else{
                c.disabled=false;
            }
        }
        else if(c.checked){
            if(f.checked){
                g.disabled=true;
            }
            else{
                g.disabled=false;
            }
        }
        else{
            toggle.disabled=false;
        }
    })
})
