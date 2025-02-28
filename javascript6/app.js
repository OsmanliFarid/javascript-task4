let num = +prompt("reqem daxil edin")
let e = 0

    for(let i = 100; i < 999; i++){
        if(i % num === 0){
            e += i
            
        }
    }
console.log(e);
