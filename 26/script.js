var lanjut = true

while (lanjut){
     var pilihan = prompt('Pilih antara (gunting, kertas, batu)')

    var comp = Math.random() * 7
    console.log(comp)

    var pilihan_comp = ''

    if (comp < 2) {
        pilihan_comp = 'gunting'
    } else if (comp < 4) {
        pilihan_comp = 'batu'
    } else if (comp < 6) {
        pilihan_comp = 'kertas'
    }

    if (pilihan_comp == 'gunting'){
        if (pilihan == 'kertas'){
            alert('komputer menang')
        } else if (pilihan == 'batu'){
            alert('kamu menang')
        } else {
            alert('kalian seri')
        }
    } else if (pilihan_comp == 'batu'){
        if (pilihan == 'gunting'){
            alert('komputer menang')
        } else if (pilihan == 'kertas'){
            alert('kamu menang')
        } else {
            alert('kalian seri')
        }
    } if (pilihan_comp == 'kertas'){
        if (pilihan == 'batu'){
            alert('komputer menang')
        } else if (pilihan == 'kertas'){
            alert('kamu menang')
        } else {
            alert('kalian seri')
        }
    }   
    lanjut = confirm('Mau lagi?')
}