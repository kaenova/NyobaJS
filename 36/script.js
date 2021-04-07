var angka = []

for (var i = 0 ; i < 10 ; i++){
    angka.push(i)
}

console.log(angka.filter(function(x){
    return x != 7
}))

angka.forEach(function anjay(j,a){
    console.log(j,a)
    //Disini a hanya sebagai index
})

