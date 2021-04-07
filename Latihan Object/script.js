// Pengelolaan Angkot
// Siapa supir?
// Trayek
// Uang kas --> Awalnya 0Rp
// Kelola penumpang
    // Penumpang naik
    // Penumpang turun --> Proses bayar

function MakeNewAngkot(){
    this.nama = prompt('Masukkan Nama Supir')
    this.trayek = prompt('Mauskkan Trayek')
    this.uangKas = 0
    this.Penumpang = []
    this.max_penumpang = 12

    this.PenumpangNaik = function(){
        if (this.Penumpang.length < this.max_penumpang) {
            let nama = prompt('masukkan nama penumpang')
            this.Penumpang.push(nama)
        } else {
            alert('maaf sudah penuh')
        }
    }
    
    this.PenumpangTurun = function() {
        console.log(this.Penumpang)
        var nama = prompt('Masukkan Nama Penumpang yang ingin turun', this.Penumpang)
        this.Penumpang = this.Penumpang.filter(function (x){
            return x != nama
        })
        this.uangKas += parseFloat(prompt('Masukkan uang bayaran'))
    }
    
}

var angkot = new MakeNewAngkot
