// const g = document.querySelector('#good');
// const c = document.querySelector('#cheap');
// const f = document.querySelector('#fast');
const tog = document.querySelectorAll('.toggle')
let count = 0;
let arr = Array.from(tog);
arr.forEach((toggle)=>{
    toggle.addEventListener('click', (e)=>{
        if(toggle.checked){
			count++;
		}
		if(count>2){
			toggle.checked=false;
			// count = 0;
		}
		// toggle.disabled=false;
    })
})






// if(g.checked && c.checked){
// 			if(f.checked){
// 	            f.checked=false;
// 			}
//         }
//         else if(g.checked){
//             if(f.checked){
// 				if(c.checked){
// 					c.checked=false;
// 				}
// 	            c.disabled=true;
//             }
//             else{
// 				// c.checked=true;
//                 c.disabled=false;
//             }
//         }
//         else if(c.checked){
//             if(f.checked){
// 				if(g.checked){
// 					g.checked=false;
// 				}
// 	            g.disabled=true;
//             }
//             else{
// 				// g.checked=true;
//                 g.disabled=false;
//             }
//         }
//         else{
//             toggle.disabled=false;
//         }
