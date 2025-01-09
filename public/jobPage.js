



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
        avgSalary: '$174,900', // Avg. Salary per year
        jobType: 'Full-Time',
        saved: false,
        responsibility: [
          'Merancang dan mengimplementasikan model pembelajaran mesin yang efisien.',
          'Menganalisis data untuk meningkatkan performa model.',
          'Berkolaborasi dengan tim pengembang untuk integrasi model.',
          'Mengidentifikasi tren data yang relevan untuk proyek.',
          'Melakukan pengujian dan validasi model pembelajaran mesin.'
        ],
        qualification: [
          'Gelar sarjana di bidang Ilmu Komputer atau Teknik terkait.',
          'Pengalaman dalam pembelajaran mesin dan pemrograman.',
          'Pemahaman mendalam tentang teknik pembelajaran mendalam.',
          'Kemampuan untuk bekerja dengan tim lintas fungsi.'
        ],
        skills: [
          'Python',
          'TensorFlow',
          'Algoritma Pembelajaran Mesin'
        ],
        companyDescription: 'Google adalah perusahaan teknologi multinasional yang terkenal di seluruh dunia, mengembangkan berbagai produk dan layanan mulai dari pencarian, iklan, hingga sistem operasi mobile. Kami berkomitmen untuk memberikan pengalaman pengguna terbaik dan terus berinovasi dengan teknologi terbaru.',
        location: 'USA',
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
        avgSalary: '$128,000', // Avg. Salary per year
        jobType: 'Full-Time',
        saved: false,
        responsibility: [
          'Merancang antarmuka pengguna yang menarik dan responsif.',
          'Mengoptimalkan performa aplikasi web.',
          'Berkolaborasi dengan desainer untuk menyelaraskan desain.',
          'Mengimplementasikan API dan integrasi backend.',
          'Menulis kode yang bersih dan dapat dipelihara.'
        ],
        qualification: [
          'Pengalaman dalam pengembangan frontend menggunakan HTML, CSS, dan JavaScript.',
          'Pemahaman tentang prinsip desain responsif.',
          'Kemampuan berkolaborasi dalam tim lintas fungsi.'
        ],
        skills: [
          'React',
          'JavaScript',
          'HTML/CSS'
        ],
        companyDescription: 'Amazon adalah salah satu perusahaan terbesar di dunia yang menyediakan berbagai layanan mulai dari e-commerce hingga komputasi awan. Kami berkomitmen untuk inovasi dan mempermudah kehidupan pelanggan kami.',
        location: 'UK',
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
        avgSalary: '$154,500', // Avg. Salary per year
        jobType: 'Contract',
        saved: false,
        responsibility: [
          'Merancang arsitektur solusi cloud yang skalabel.',
          'Mengevaluasi kebutuhan bisnis untuk solusi teknologi.',
          'Mengawasi implementasi solusi berbasis Azure.',
          'Bekerja sama dengan tim pengembang dan teknis lainnya.',
          'Mengidentifikasi peluang untuk mengoptimalkan sistem.'
        ],
        qualification: [
          'Pengalaman dengan Azure atau platform cloud lainnya.',
          'Keterampilan dalam manajemen proyek dan komunikasi.'
        ],
        skills: [
          'Azure',
          'Cloud Computing',
          'DevOps'
        ],
        companyDescription: 'Microsoft adalah pemimpin dunia dalam perangkat lunak dan layanan teknologi, termasuk sistem operasi Windows, Office, dan Azure. Kami menciptakan inovasi untuk membantu semua orang di dunia mencapai lebih banyak.',
        location: 'USA',
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
        avgSalary: '$120,000', // Avg. Salary per year
        jobType: 'Part-Time',
        saved: false,
        responsibility: [
          'Mengelola seluruh siklus hidup produk.',
          'Menganalisis kebutuhan pengguna dan pasar.',
          'Mengembangkan roadmap produk.',
          'Berkoordinasi dengan tim lintas fungsi.',
          'Mengidentifikasi peluang pertumbuhan produk.'
        ],
        qualification: [
          'Pengalaman dalam manajemen produk atau bidang terkait.',
          'Kemampuan analitis yang kuat.',
          'Kemampuan untuk mengelola tim lintas fungsi.'
        ],
        skills: [
          'Agile',
          'Product Management',
          'Strategic Thinking'
        ],
        companyDescription: 'Meta adalah perusahaan induk Facebook yang berfokus pada pengembangan teknologi sosial dan aplikasi seperti Instagram, WhatsApp, dan Oculus. Kami berkomitmen untuk menciptakan konektivitas di seluruh dunia.',
        location: 'USA',
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
        avgSalary: '$115,000', // Avg. Salary per year
        jobType: 'Full-Time',
        saved: false,
        responsibility: [
          'Mengembangkan aplikasi iOS yang inovatif.',
          'Melakukan debugging untuk memastikan stabilitas aplikasi.',
          'Bekerja sama dengan tim desain dan pengembangan.',
          'Mengoptimalkan aplikasi untuk performa terbaik.',
          'Mengikuti pedoman desain Apple.'
        ],
        qualification: [
          'Pengalaman dalam pengembangan aplikasi iOS menggunakan Swift atau Objective-C.',
          'Kemampuan dalam pengujian aplikasi iOS.'
        ],
        skills: [
          'Swift',
          'Xcode',
          'UI/UX Design'
        ],
        companyDescription: 'Apple adalah perusahaan teknologi global yang terkenal dengan inovasi produk-produk seperti iPhone, iPad, dan Mac. Kami berfokus pada menciptakan pengalaman pengguna yang luar biasa.',
        location: 'USA',
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
        avgSalary: '$95,000', // Avg. Salary per year
        jobType: 'Freelance',
        saved: false,
        responsibility: [
          'Mengumpulkan dan membersihkan data untuk analisis.',
          'Menganalisis tren data yang relevan.',
          'Menyusun laporan dan visualisasi data.',
          'Berkoordinasi dengan tim bisnis untuk kebutuhan analisis.'
        ],
        qualification: [
          'Pengalaman dengan alat analisis data seperti SQL atau Python.',
          'Keterampilan komunikasi yang baik.'
        ],
        skills: [
          'SQL',
          'Python',
          'Data Visualization'
        ],
        companyDescription: 'Facebook adalah platform jejaring sosial terbesar di dunia. Kami menghubungkan orang, komunitas, dan bisnis di seluruh dunia untuk menciptakan dampak positif.',
        location: 'USA',
      },
 {
  id: 7,
  img: 'https://i.pinimg.com/736x/06/19/60/06196084992e762df628b46900195d4f.jpg',
  name: 'YouTube',
  locasion: 'USA',
  region: 'USA',
  title: 'Content Strategist',
  avgSalary: '$120,000', // Avg. Salary per year
  desk: 'YouTube membutuhkan Content Strategist untuk mengembangkan strategi konten yang menarik dan relevan.',
  jobType: 'Freelance',
  saved: false,
  responsibility: [
    'Mengembangkan strategi konten untuk audiens target.',
    'Menganalisis performa konten saat ini.',
    'Berkoordinasi dengan tim kreatif untuk produksi konten.',
    'Mengidentifikasi tren konten di industri.'
  ],
  qualification: [
    'Pengalaman dalam pemasaran konten digital.',
    'Keterampilan analitik dan kemampuan riset pasar.',
    'Pemahaman tentang SEO dan optimasi konten.'
  ],
  skills: [
    'Strategi Konten',
    'SEO',
    'Analisis Data'
  ],
  companyDescription: 'YouTube adalah platform berbagi video terkemuka yang memungkinkan pengguna untuk menonton, mengunggah, dan berbagi video di seluruh dunia.',
  location: 'USA'
},

{
  id: 8,
  img: 'https://i.pinimg.com/736x/8e/f0/b0/8ef0b0fe34321ecf25486380410caed0.jpg',
  name: 'OpenAI',
  locasion: 'USA',
  region: 'USA',
  title: 'AI Researcher',
  avgSalary: '$150,000', // Avg. Salary per year
  desk: 'OpenAI mencari AI Researcher untuk mengembangkan teknologi kecerdasan buatan yang inovatif.',
  jobType: 'Contract',
  saved: false,
  responsibility: [
    'Melakukan penelitian mendalam tentang AI.',
    'Merancang algoritma baru untuk kecerdasan buatan.',
    'Menguji dan mengevaluasi model AI.',
    'Mengembangkan dokumentasi teknis.'
  ],
  qualification: [
    'Gelarnya di bidang Ilmu Komputer atau disiplin terkait.',
    'Pengalaman dalam penelitian AI dan pembelajaran mesin.',
    'Keterampilan pemrograman dengan Python atau bahasa terkait.'
  ],
  skills: [
    'Pembelajaran Mesin',
    'Penelitian AI',
    'Pemrograman Python'
  ],
  companyDescription: 'OpenAI adalah organisasi penelitian kecerdasan buatan yang berfokus pada pengembangan dan penerapan AI untuk manfaat umat manusia.',
  location: 'USA'
},

{
  id: 9,
  img: 'https://i.pinimg.com/736x/5b/e2/85/5be2857945e61a48d5a031eb301a8caf.jpg',
  name: 'Netflix',
  locasion: 'USA',
  region: 'USA',
  title: 'Creative Producer',
  avgSalary: '$135,000', // Avg. Salary per year
  desk: 'Netflix membutuhkan Creative Producer untuk mengelola produksi konten orisinal dengan kualitas tinggi.',
  jobType: 'Part-Time',
  saved: false,
  responsibility: [
    'Mengelola proyek produksi konten dari awal hingga akhir.',
    'Berkoordinasi dengan tim kreatif dan teknis.',
    'Memastikan kualitas konten sesuai standar Netflix.',
    'Mengawasi proses pasca produksi.'
  ],
  qualification: [
    'Pengalaman dalam produksi film atau televisi.',
    'Kemampuan manajerial yang sangat baik.',
    'Pemahaman tentang anggaran dan proses produksi.'
  ],
  skills: [
    'Manajemen Produksi',
    'Kreativitas',
    'Pengawasan Produksi'
  ],
  companyDescription: 'Netflix adalah platform streaming video terkemuka yang menawarkan film, acara TV, dan konten orisinal berkualitas tinggi kepada pengguna di seluruh dunia.',
  location: 'USA'
}

   ]
   

   
  }))
})

