// Literal Declaration
var mahasiswa = {
    nama : '',
    lulus :false,
    IPSemster : [],
    IPKumulatif : function(){
        var jumlah = 0
        for (var i = 0 ; i < this.IPSemster.length ; i++) {
            jumlah += this.IPSemster[i]
        }
        return jumlah / this.IPSemster.length
    }
    
}

mahasiswa.nama = 'bruh'

//Function Declaration

function buatObjectKae(nama, lulus, IPSemester) {
    var mhs = {}
    mhs.nama = nama
    mhs.lulus = lulus
    mhs.ips = IPSemester
    return mhs
}

var mahasiswa2 = buatObjectKae('kaenova', true, [4,2,3,4,3])

console.log(mahasiswa,'\n', mahasiswa2)


//Constructor
function buatPakaiConstructor(nama, lulu, IPSemester){
    this.nama = nama
    this.lulus = lulu
    this.ips = IPSemester
}

var mahasiswa3 = new buatPakaiConstructor('mahendra', false, [1,3,3,5,4])

console.log(mahasiswa,'\n', mahasiswa2, '\n', mahasiswa3)
console.log('===============================================')

// What is 'this'?
console.log(this)
   
//this secara default adalah variable global
var bruh = 10
console.log("this.bruh: "+ this.bruh)

//let's use 'this' to make something

    //Object literal
var nano = {}
nano.anjay = function(){
    console.log(this)
    this.a = 10
    console.log(this)
}
nano.anjay()
console.log(nano)

    //Constructor

function makeConstruct(){
    console.log(this)
    this.a = 10
    console.log(this)
}

new makeConstruct()