



// LOWONGAN LOOPING

document.addEventListener('alpine:init', () => {
  Alpine.data('lowongan', () => ({
    jobs: [
     { 
       id: 1, 
       img: 'https://i.pinimg.com/736x/32/af/d2/32afd2431d845f90668bcea60379b7a9.jpg', 
       name: 'Google', 
       locasion: 'Mountain View', 
       title: 'Machine Learning Engineer', 
       desk: 'Google mencari Machine Learning Engineer untuk mengembangkan model pembelajaran mesin yang inovatif.', 
       tags2: ['On-Site', 'Permanent', 'Engineering'], 
       salary: '$75',
       jobType: 'Full-Time',
       saved: false,
       responsibility: [
         'Merancang dan mengimplementasikan model pembelajaran mesin yang efisien.',
         'Menganalisis data untuk meningkatkan performa model.',
         'Berkolaborasi dengan tim pengembang untuk integrasi model.',
         'Mengidentifikasi tren data yang relevan untuk proyek.',
         'Melakukan pengujian dan validasi model pembelajaran mesin.',
         'Mengoptimalkan algoritma untuk meningkatkan kecepatan dan akurasi.',
         'Mengembangkan dokumentasi teknis untuk proyek.',
         'Berpartisipasi dalam penelitian teknologi baru.',
         'Membimbing anggota tim dalam teknik pembelajaran mesin.'
       ]
     },
     { 
       id: 2, 
       img: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg', 
       name: 'Amazon', 
       locasion: 'London', 
       title: 'Frontend Web Developer', 
       desk: 'Amazon mencari Frontend Developer untuk membangun antarmuka web yang modern dan responsif.', 
       tags2: ['Remote', 'Temporary', 'Engineering'], 
       salary: '$95',
       jobType: 'Full-Time',
       saved: false,
       responsibility: [
         'Merancang antarmuka pengguna yang menarik dan responsif.',
         'Mengoptimalkan performa aplikasi web.',
         'Berkolaborasi dengan desainer untuk menyelaraskan desain.',
         'Mengimplementasikan API dan integrasi backend.',
         'Menulis kode yang bersih dan dapat dipelihara.',
         'Melakukan debugging dan memperbaiki masalah pada aplikasi.',
         'Menerapkan praktik terbaik untuk pengembangan web.',
         'Mengikuti tren teknologi terbaru.',
         'Memberikan pelatihan teknis kepada anggota tim junior.'
       ]
     },
     { 
       id: 3, 
       img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtp_o1Q3vwPzZurp59P6RGtUIjIycnaMjLC0onTg6DBzCJFdxw', 
       name: 'Microsoft', 
       locasion: 'Redmond', 
       title: 'Cloud Solutions Architect', 
       desk: 'Microsoft membutuhkan Cloud Solutions Architect untuk mengimplementasikan solusi berbasis Azure yang efektif.', 
       tags2: ['Hybrid', 'Permanent', 'Engineering'], 
       salary: '$85',
       jobType: 'Contract',
       saved: false,
       responsibility: [
         'Merancang arsitektur solusi cloud yang skalabel.',
         'Mengevaluasi kebutuhan bisnis untuk solusi teknologi.',
         'Mengawasi implementasi solusi berbasis Azure.',
         'Bekerja sama dengan tim pengembang dan teknis lainnya.',
         'Mengidentifikasi peluang untuk mengoptimalkan sistem.',
         'Memberikan saran teknis kepada klien atau pemangku kepentingan.',
         'Melakukan evaluasi keamanan pada infrastruktur cloud.',
         'Menyediakan pelatihan dan panduan teknis kepada tim.',
         'Mengikuti perkembangan teknologi cloud terbaru.'
       ]
     },
     { 
       id: 4, 
       img: 'https://i.pinimg.com/736x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg', 
       name: 'Meta', 
       locasion: 'Menlo Park', 
       title: 'Product Manager', 
       desk: 'Meta mencari Product Manager untuk memimpin pengembangan produk yang inovatif dan bernilai tinggi.', 
       tags2: ['Remote', 'Temporary', 'Marketing'], 
       salary: '$70',
       jobType: 'Part-Time',
       saved: false,
       responsibility: [
         'Mengelola seluruh siklus hidup produk.',
         'Menganalisis kebutuhan pengguna dan pasar.',
         'Mengembangkan roadmap produk.',
         'Berkoordinasi dengan tim lintas fungsi.',
         'Mengidentifikasi peluang pertumbuhan produk.',
         'Menyusun strategi peluncuran produk.',
         'Memantau performa produk pasca peluncuran.',
         'Memberikan presentasi kepada pemangku kepentingan.',
         'Mengikuti tren industri untuk inovasi produk.'
       ]
     },
     { 
       id: 5, 
       img: 'https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg', 
       name: 'Apple', 
       locasion: 'Cupertino', 
       title: 'iOS Developer', 
       desk: 'Apple mencari iOS Developer untuk mengembangkan aplikasi modern dan ramah pengguna di perangkat iOS.', 
       tags2: ['Flexible', 'Permanent', 'Engineering'], 
       salary: '$80',
       jobType: 'Full-Time',
       saved: false,
       responsibility: [
         'Mengembangkan aplikasi iOS yang inovatif.',
         'Melakukan debugging untuk memastikan stabilitas aplikasi.',
         'Bekerja sama dengan tim desain dan pengembangan.',
         'Mengoptimalkan aplikasi untuk performa terbaik.',
         'Mengikuti pedoman desain Apple.',
         'Menerapkan fitur baru berdasarkan kebutuhan pengguna.',
         'Melakukan pengujian unit dan integrasi.',
         'Menyediakan dokumentasi teknis aplikasi.',
         'Memperbarui aplikasi berdasarkan masukan pengguna.'
       ]
     },
     { 
       id: 6, 
       img: 'https://i.pinimg.com/736x/6e/f6/20/6ef620a8d4abe3ab586665773143ff70.jpg', 
       name: 'Facebook', 
       locasion: 'Menlo Park', 
       title: 'Data Analyst', 
       desk: 'Facebook membutuhkan Data Analyst untuk menganalisis data dan memberikan wawasan yang dapat diterapkan.', 
       tags2: ['Remote', 'Internship', 'Finance'], 
       salary: '$50',
       jobType: 'Freelance',
       saved: false,
       responsibility: [
         'Mengumpulkan dan membersihkan data untuk analisis.',
         'Menganalisis tren data yang relevan.',
         'Menyusun laporan dan visualisasi data.',
         'Berkoordinasi dengan tim bisnis untuk kebutuhan data.',
         'Mengembangkan metrik kinerja utama.',
         'Melakukan validasi hasil analisis.',
         'Mengoptimalkan metode analisis data.',
         'Memberikan wawasan untuk pengambilan keputusan.',
         'Menerapkan alat dan teknologi terbaru untuk analisis.'
       ]
     },
     { 
       id: 7, 
       img: 'https://i.pinimg.com/736x/06/19/60/06196084992e762df628b46900195d4f.jpg', 
       name: 'YouTube', 
       locasion: 'San Bruno', 
       title: 'Content Strategist', 
       desk: 'YouTube membutuhkan Content Strategist untuk mengembangkan strategi konten yang menarik dan relevan.', 
       tags2: ['Flexible', 'Temporary', 'Marketing'], 
       salary: '$40',
       jobType: 'Freelance',
       saved: false,
       responsibility: [
         'Mengembangkan strategi konten untuk audiens target.',
         'Menganalisis performa konten saat ini.',
         'Berkoordinasi dengan tim kreatif untuk produksi konten.',
         'Mengidentifikasi tren konten di industri.',
         'Menyusun kalender editorial.',
         'Melakukan riset kata kunci untuk optimasi konten.',
         'Menyediakan laporan performa konten.',
         'Mengelola platform distribusi konten.',
         'Memberikan rekomendasi untuk peningkatan strategi konten.'
       ]
     },
     { 
       id: 8, 
       img: 'https://i.pinimg.com/736x/8e/f0/b0/8ef0b0fe34321ecf25486380410caed0.jpg', 
       name: 'OpenAI', 
       locasion: 'San Francisco', 
       title: 'AI Researcher', 
       desk: 'OpenAI mencari AI Researcher untuk mengembangkan teknologi kecerdasan buatan yang inovatif.', 
       tags2: ['Hybrid', 'Permanent', 'Engineering'], 
       salary: '$90',
       jobType: 'Contract',
       saved: false,
       responsibility: [
         'Melakukan penelitian mendalam tentang AI.',
         'Merancang algoritma baru untuk kecerdasan buatan.',
         'Menguji dan mengevaluasi model AI.',
         'Berkoordinasi dengan tim peneliti lain.',
         'Mempresentasikan hasil penelitian di konferensi.',
         'Mengembangkan dokumentasi teknis.',
         'Mengintegrasikan model AI ke dalam aplikasi nyata.',
         'Mengikuti tren teknologi AI terbaru.',
         'Membimbing peneliti junior dalam tim.'
       ]
     },
     { 
       id: 9, 
       img: 'https://i.pinimg.com/736x/5b/e2/85/5be2857945e61a48d5a031eb301a8caf.jpg', 
       name: 'Netflix', 
       locasion: 'Los Gatos', 
       title: 'Creative Producer', 
       desk: 'Netflix membutuhkan Creative Producer untuk mengelola produksi konten orisinal dengan kualitas tinggi.', 
       tags2: ['On-Site', 'Temporary', 'Human'], 
       salary: '$60',
       jobType: 'Part-Time',
       saved: false,
       responsibility: [
         'Mengelola proyek produksi konten dari awal hingga akhir.',
         'Berkoordinasi dengan tim kreatif dan teknis.',
         'Menyusun anggaran dan jadwal produksi.',
         'Memastikan kualitas konten sesuai standar Netflix.',
         'Melakukan evaluasi terhadap konsep produksi.',
         'Berinteraksi dengan mitra produksi eksternal.',
         'Mengawasi proses pasca produksi.',
         'Memberikan masukan kreatif selama proses produksi.',
         'Mengikuti perkembangan industri hiburan.'
       ]
     }
   ]
   

   
  }))
})

