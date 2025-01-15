document.addEventListener("alpine:init", () => {
  Alpine.data("perusahaan", () => ({
    items: [
      {
        nama: "PT Indofood Sukses Makmur Tbk.",
        alamat: "Jakarta Pusat, DKI Jakarta, Indonesia",
        cat: "Food And Beverage",
        rate: 4.3,
        ulasan: "20 ulasan",
        loker: "11 Loker",
        ukuran: "500 - 1000 karyawan",
        img: "indofood.png",
        comments:
          "Indofood menawarkan lingkungan kerja yang seimbang dengan peluang pertumbuhan yang cukup besar. Perusahaan ini sangat inovatif dan selalu fokus pada kualitas produk, yang tercermin dalam budaya kerja di sana.",
      },
      {
        nama: "PT Unilever Indonesia Tbk.",
        alamat: "Jakarta Selatan, DKI Jakarta, Indonesia",
        cat: "Consumer Goods",
        rate: 4.5,
        ulasan: "50 ulasan",
        loker: "8 Loker",
        ukuran: "1000 - 5000 karyawan",
        img: "unilever.jpg",
        comments:
          "Unilever mendukung keseimbangan kerja dan kehidupan dengan manfaat yang sangat baik. Komitmennya terhadap keberlanjutan dan keberagaman menciptakan suasana kerja yang inklusif dan kolaboratif.",
      },
      {
        nama: "PT Telkom Indonesia Tbk.",
        alamat: "Bandung, Jawa Barat, Indonesia",
        cat: "Telecommunication",
        rate: 4.2,
        ulasan: "30 ulasan",
        loker: "15 Loker",
        ukuran: "5000 - 10000 karyawan",
        img: "telkom.jpg",
        comments:
          "Bekerja di Telkom adalah pengalaman yang memuaskan. Perusahaan ini menyediakan peluang pengembangan profesional yang sangat baik dan mendukung karyawan untuk mencapai tujuan karier mereka.",
      },
      {
        nama: "PT Traveloka Indonesia Tbk.",
        alamat: "Jakarta Pusat, DKI Jakarta, Indonesia",
        cat: "Travel",
        rate: 4.0,
        ulasan: "25 ulasan",
        loker: "10 Loker",
        ukuran: "1000 - 3000 karyawan",
        img: "traveloka.png",
        comments:
          "Lingkungan kerja di Traveloka yang cepat mendorong kreativitas dan inovasi. Ini adalah tempat yang bagus untuk individu yang bersemangat di bidang perjalanan dan menawarkan banyak kesempatan untuk berkembang.",
      },
      {
        nama: "PT Garuda Indonesia Tbk.",
        alamat: "Cengkareng, Banten, Indonesia",
        cat: "Airline",
        rate: 4.1,
        ulasan: "18 ulasan",
        loker: "5 Loker",
        ukuran: "5000 - 15000 karyawan",
        img: "garuda.jpg",
        comments:
          "Garuda Indonesia memiliki budaya kerja yang profesional dan mendukung. Maskapai ini sangat menghargai pelayanan pelanggan dan memberikan lingkungan kerja yang positif bagi karyawan.",
      },
      {
        nama: "PT Bank Rakyat Indonesia (Persero) Tbk.",
        alamat: "Jakarta Selatan, DKI Jakarta, Indonesia",
        cat: "Banking",
        rate: 4.6,
        ulasan: "60 ulasan",
        loker: "20 Loker",
        ukuran: "20000 - 50000 karyawan",
        img: "bri.png",
        comments:
          "BRI menyediakan stabilitas yang sangat baik dan peluang pertumbuhan karier. Ini adalah tempat kerja yang hebat bagi mereka yang ingin membangun karier jangka panjang di sektor perbankan, dengan dukungan mentoring yang kuat.",
      },
      {
        nama: "PT Gojek Indonesia",
        alamat: "Jakarta Selatan, DKI Jakarta, Indonesia",
        cat: "Technology / Transportation",
        rate: 4.7,
        ulasan: "70 ulasan",
        loker: "25 Loker",
        ukuran: "10000 - 50000 karyawan",
        img: "gojek.png",
        comments:
          "Gojek menawarkan lingkungan kerja yang dinamis di mana inovasi sangat didorong. Perusahaan ini fokus pada solusi berbasis teknologi dan memberikan banyak peluang untuk pengembangan karier.",
      },
      {
        nama: "PT Sampoerna Tbk.",
        alamat: "Surabaya, Jawa Timur, Indonesia",
        cat: "Tobacco",
        rate: 3.9,
        ulasan: "15 ulasan",
        loker: "12 Loker",
        ukuran: "20000 - 30000 karyawan",
        img: "sampoerna.png",
        comments:
          "Sampoerna adalah perusahaan yang stabil dengan manfaat yang solid. Budaya kerja yang ada sangat menghormati satu sama lain, dan ada peluang yang jelas untuk berkembang dalam organisasi.",
      },
      {
        nama: "PT Bukalapak Tbk.",
        alamat: "Jakarta Selatan, DKI Jakarta, Indonesia",
        cat: "E-commerce",
        rate: 4.4,
        ulasan: "40 ulasan",
        loker: "18 Loker",
        ukuran: "1000 - 5000 karyawan",
        img: "bukalapak.png",
        comments:
          "Bukalapak adalah platform e-commerce yang inovatif dan menawarkan tantangan yang menarik. Tim di sana sangat kolaboratif dan mendorong karyawan untuk berpikir kreatif demi solusi yang lebih baik.",
      },
    ],
    selectedpt: null,
    showview: null,
    showfind: true,
  }));
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
