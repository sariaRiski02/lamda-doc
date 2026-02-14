
    document.addEventListener("DOMContentLoaded", function() {
        // Ambil nama file dari URL saat ini (misal: "installation.html")
        let currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "") currentPage = "index.html";

        // Cari semua link di dalam sidebar yang punya class 'menu-link'
        let links = document.querySelectorAll(".menu-link");
        
        links.forEach(link => {
            let href = link.getAttribute("href");
            if (href === currentPage) {
                // Beri warna biru dan tebal jika link sama dengan halaman saat ini
                link.className = "menu-link block pl-4 py-1 text-blue-600 border-l-2 border-blue-600 -ml-[2px] font-semibold";
            } else {
                // Reset ke warna abu-abu untuk menu lainnya
                link.className = "menu-link block pl-4 py-1 text-gray-600 hover:text-navy transition border-l-2 border-transparent hover:border-gray-300";
            }
        });
    });
