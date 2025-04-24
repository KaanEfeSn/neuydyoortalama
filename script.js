function hesapla() {
    const vizeler = [
        parseFloat(document.getElementById("v1").value) || 0,
        parseFloat(document.getElementById("v2").value) || 0,
        parseFloat(document.getElementById("v3").value) || 0,
        parseFloat(document.getElementById("v4").value) || 0
    ];

    const ksyk = [
        parseFloat(document.getElementById("k1").value) || 0,
        parseFloat(document.getElementById("k2").value) || 0,
        parseFloat(document.getElementById("k3").value) || 0,
        parseFloat(document.getElementById("k4").value) || 0
    ];

    const odev = parseFloat(document.getElementById("odev").value) || 0;
    const yokdil = parseFloat(document.getElementById("yokdil").value) || 0;

    const vizeOrt = vizeler.reduce((a, b) => a + b, 0) / vizeler.length;
    const ksykOrt = ksyk.reduce((a, b) => a + b, 0) / ksyk.length;

    const notHesap = (vizeOrt * 0.5) + (ksykOrt * 0.3) + odev;
    const toplamNot = notHesap + (yokdil * 0.3);

    const sonuc = Math.round(toplamNot * 100) / 100;

    document.getElementById("sonuc").innerText = `Genel Not: ${sonuc}`;
}
