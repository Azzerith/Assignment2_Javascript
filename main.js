function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {
    let fakultas
    if (studentId.slice(0, 2) === "FE") {
        fakultas = "Fakultas Ekonomi"
    } else if (studentId.slice(0, 2) === "FT") {
        fakultas = "Fakultas Teknik"
    } else if (studentId.slice(0, 5) === "FISIP") {
        fakultas = "Fakultas Ilmu Sosial dan Politik"
    } else if (studentId.slice(0, 4) === "FTIS") {
        fakultas = "Fakultas Teknologi Informasi dan Sains"
    }
}
let a = "bayam"
console.log(a.slice(0, 2))

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;