
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");

    if (toggle && header) {
        toggle.addEventListener("click", () => {
            header.classList.toggle("nav-open");
        });
    }
});

function sendWhatsApp(event) {
    if (event) event.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const address = document.getElementById("address")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const websiteDesc = document.getElementById("websiteDesc")?.value || "";
    const notes = document.getElementById("notes")?.value || "";

    let message = "Hallo BM Tech,%0A%0A";
    message += "Saya ingin membuat website.%0A%0A";
    if (name) message += "Nama: " + name + "%0A";
    if (address) message += "Alamat: " + address + "%0A";
    if (phone) message += "Nomor HP: " + phone + "%0A";
    if (websiteDesc) message += "%0ADeskripsi website:%0A" + websiteDesc + "%0A";
    if (notes) message += "%0ACatatan tambahan:%0A" + notes + "%0A";

    const waNumber = "6288211699073";
    const url = "https://wa.me/" + waNumber + "?text=" + message;

    window.open(url, "_blank");
}
