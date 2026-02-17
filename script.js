document.addEventListener("DOMContentLoaded", function () {

    // Ambil path saat ini
    let path = window.location.pathname;

    // Normalisasi:
    // /directory/  -> directory
    // /directory.html -> directory
    // / -> index
    let currentPage = path
        .split("/")
        .filter(Boolean)
        .pop() || "index";

    currentPage = currentPage.replace(".html", "");

    // Ambil semua menu
    const links = document.querySelectorAll(".menu-link");

    links.forEach(link => {

        let href = link.getAttribute("href") || "";

        // Normalisasi href juga
        let linkPage = href
            .split("/")
            .filter(Boolean)
            .pop() || "index";

        linkPage = linkPage.replace(".html", "");

        // Reset semua dulu (biar konsisten)
        link.classList.remove(
            "text-blue-600",
            "border-blue-600",
            "font-semibold"
        );

        link.classList.add(
            "text-gray-600",
            "border-transparent"
        );

        // Jika cocok → aktifkan
        if (linkPage === currentPage) {

            link.classList.remove(
                "text-gray-600",
                "border-transparent"
            );

            link.classList.add(
                "text-blue-600",
                "border-blue-600",
                "font-semibold"
            );
        }
    });

});
