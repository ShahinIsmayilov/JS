let Şagirdlər = [
    { Ad: "Sahin", Soyad: "Ismayilov", Yaş: 18, Bal: 85 },
    { Ad: "Hormet", Soyad: "Hamidov", Yaş: 24, Bal: 90 },
    { Ad: "Umid", Soyad: "Rzayev", Yaş: 23, Bal: 80 },
    { Ad: "Sahil", Soyad: "Orucov", Yaş: 29, Bal: 87 },
    { Ad: "Hesen", Soyad: "Aliyev", Yaş: 25, Bal: 95 },
    { Ad: "Turqay", Soyad: "Memmedov", Yaş: 27, Bal: 92 },
];

let ToplamBal = 0;
for (let i = 0; i < Şagirdlər.length; i++) {
    ToplamBal += Şagirdlər[i].Bal;
}
let OrtalamaBal = ToplamBal / Şagirdlər.length;

for (let i = 0; i < Şagirdlər.length; i++) {
    if (Şagirdlər[i].Bal < 90) {
        console.log(Şagirdlər[i].Ad + " " + Şagirdlər[i].Soyad + " Adlı Telebenin Bali 90'dan azdır.Derslerde Daha Calisqan Olun!");
    }
}
