let metin = "Salam men.HTML"
let j = 0

for(let i = 0; i < metin.length ; i++){
    if(metin[i] === "."){
        j += i
        console.log(j)
    }
    
}
