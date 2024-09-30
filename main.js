function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {
    let fakultas, tahun;
    if (studentId.slice(0, 2) === "FE") {
        fakultas = "Fakultas Ekonomi"
        tahun = studentId.slice(2, 6)
    } else
    if (studentId.slice(0, 4) === "FTIS") {
        fakultas = "Fakultas Teknologi Informasi dan Sains"
        tahun = studentId.slice(4, 8)
    } else if (studentId.slice(0, 2) === "FT") {
        fakultas = "Fakultas Teknik"
        tahun = studentId.slice(2, 6)
    } else if (studentId.slice(0, 5) === "FISIP") {
        fakultas = "Fakultas Ilmu Sosial dan Politik"
        tahun = studentId.slice(5, 9)
    }
    let prodi
    if (studentId.slice(6, 8) === "21" || studentId.slice(9, 11) == "21" || studentId.slice(8, 10) == "21") {
        prodi = "Ekonomi"
    }
    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${fakultas} sejak tahun ${tahun}.`
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;