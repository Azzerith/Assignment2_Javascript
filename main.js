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
    } else if (studentId.slice(0, 4) === "FTIS") {
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
    } else if (studentId.slice(6, 8) === "22" || studentId.slice(9, 11) == "22" || studentId.slice(8, 10) == "22") {
        prodi = "Manajemen"
    } else if (studentId.slice(6, 8) === "23" || studentId.slice(9, 11) == "23" || studentId.slice(8, 10) == "23") {
        prodi = "Akuntansi"
    } else if (studentId.slice(6, 8) === "31" || studentId.slice(9, 11) == "31" || studentId.slice(8, 10) == "31") {
        prodi = "Administrasi Publik"
    } else if (studentId.slice(6, 8) === "32" || studentId.slice(9, 11) == "32" || studentId.slice(8, 10) == "32") {
        prodi = "Administrasi Bisnis"
    } else if (studentId.slice(6, 8) === "33" || studentId.slice(9, 11) == "33" || studentId.slice(8, 10) == "33") {
        prodi = "Hubungan Internasional"
    } else if (studentId.slice(6, 8) === "41" || studentId.slice(9, 11) == "41" || studentId.slice(8, 10) == "41") {
        prodi = "Teknik Sipil"
    } else if (studentId.slice(6, 8) === "42" || studentId.slice(9, 11) == "42" || studentId.slice(8, 10) == "42") {
        prodi = "Arsitektur"
    } else if (studentId.slice(6, 8) === "51" || studentId.slice(9, 11) == "51" || studentId.slice(8, 10) == "51") {
        prodi = "Matematika"
    } else if (studentId.slice(6, 8) === "52" || studentId.slice(9, 11) == "52" || studentId.slice(8, 10) == "52") {
        prodi = "Fisika"
    } else if (studentId.slice(6, 8) === "53" || studentId.slice(9, 11) == "53" || studentId.slice(8, 10) == "53") {
        prodi = "Informatika"
    }
    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${fakultas} sejak tahun ${tahun}.`
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;