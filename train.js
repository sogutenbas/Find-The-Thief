// Program akisi:
// 1. 1-10 arası rastgele vagon numarası uretılır ve supheli bu vagonda saklanir.
// 2. Kullanici maximum 4 denemede suphelinin oldugu vagonu bulmasi gerekecektir.
// 3. Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
// 4. Kullanıcının kac defada bildiği ve puani (100 üzerinden) alert ile yazdırılacaktir.

var vagon, tahmin, hak = 1,
    i = 0;
vagon = Math.round(Math.random() * 10);
do {
    tahmin = parseInt(prompt("Tahmini Giriniz:"));
    if (tahmin < vagon) {
        alert("Daha büyük bir vagon sayısi giriniz.");
    } else if (tahmin > vagon) {
        alert("Daha küçük bir vagon sayısi giriniz.");
    } else if (tahmin == vagon) {
        alert("Tebrikler bildiniz.Hirsizi Yakaladiniz ! Hirsizin bulundugu vagon numarasi: " + vagon);
        alert(hak + ". hakkınızda bildiniz.");
        alert(`puan : ${100 - (25*(hak-1))}`);
    }
    hak++;
}
while ((tahmin != vagon) && hak < 5)
if (hak > 5) {
    alert("Hakkınız kalmadı. Hirsizin bulundugu vagon numarasi: " + vagon);
}