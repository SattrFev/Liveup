document.addEventListener('alpine:init', () => {
  Alpine.data('lowongan', () => ({
    jobs: [
      { 
        id: 1, 
        img: 'https://i.pinimg.com/736x/32/af/d2/32afd2431d845f90668bcea60379b7a9.jpg', 
        name: 'Google', 
        locasion: 'Mountain View', 
        title: 'Machine Learning Engineer', 
        desk: 'Google mencari Machine Learning Engineer untuk mengembangkan model pembelajaran mesin yang inovatif dan efisien. Dalam peran ini, Anda akan bertanggung jawab untuk merancang dan menerapkan algoritma canggih yang dapat memproses dan menganalisis data dalam jumlah besar. Anda juga akan berkolaborasi dengan tim pengembang lainnya untuk mengintegrasikan model ini ke dalam produk Google yang ada, serta melakukan pengujian dan validasi untuk memastikan bahwa model tersebut berkinerja baik dalam berbagai skenario penggunaan.', 
        tags2: ['On-Site', 'Permanent', 'Engineering'], 
        salary: '$75',
        avgSalary: '$174,900',
        jobType: 'Full-Time',
        status : 'TERSEDIA',
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
        desk: 'Amazon mencari Frontend Developer untuk membangun antarmuka web yang modern dan responsif. Dalam posisi ini, Anda akan bertanggung jawab untuk merancang dan mengembangkan elemen antarmuka pengguna yang menarik serta memastikan bahwa aplikasi web berfungsi dengan baik di berbagai perangkat. Anda juga akan bekerja sama dengan desainer UX/UI untuk menyelaraskan desain visual dengan fungsionalitas teknis, serta melakukan pengujian untuk memastikan aplikasi bebas dari bug.', 
        tags2: ['Remote', 'Temporary', 'Engineering'], 
        salary: '$95',
        avgSalary: '$128,000',
        jobType: 'Full-Time',
        saved: false,
        status : 'DIBUTUHKAN',
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
        desk: 'Microsoft membutuhkan Cloud Solutions Architect untuk mengimplementasikan solusi berbasis Azure yang efektif. Dalam peran ini, Anda akan merancang arsitektur cloud yang skalabel dan aman, serta membantu klien dalam transisi ke lingkungan cloud. Anda juga akan bekerja sama dengan tim teknis lainnya untuk memastikan bahwa solusi yang diterapkan memenuhi kebutuhan bisnis klien secara optimal.', 
        tags2: ['Hybrid', 'Permanent', 'Engineering'], 
        salary: '$85',
        status : 'DIBUTUHKAN SEGERA',
        avgSalary: '$154,500',
        jobType: 'Contract',
        saved: false,
        responsibility: [
          'Merancang arsitektur solusi cloud yang skalabel.',
          'Mengevaluasi kebutuhan bisnis untuk solusi teknologi.',
          'Mengawasi implementasi solusi berbasis Azure.',
          'Bekerja sama dengan tim pengembang dan teknis lainnya.',
          'Mengidentifikasi peluang untuk mengoptimalkan sistem.'
       ],
       qualification:[
           "Pengalaman dengan Azure atau platform cloud lainnya.",
           "Keterampilan dalam manajemen proyek dan komunikasi."
       ],
       skills:[
           "Azure",
           "Cloud Computing",
           "DevOps"
       ],
       companyDescription:"Microsoft adalah pemimpin dunia dalam perangkat lunak dan layanan teknologi, termasuk sistem operasi Windows, Office, dan Azure. Kami menciptakan inovasi untuk membantu semua orang di dunia mencapai lebih banyak.",
       location:"USA",
      },
      { 
         id: 4, 
         img:'https://i.pinimg.com/736x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg', 
         name:'Meta', 
         status:'DIBUTUHKAN SEGERA',
         locasion:'Menlo Park', 
         title:'Product Manager', 
         desk:'Meta mencari Product Manager untuk memimpin pengembangan produk yang inovatif dan bernilai tinggi. Anda akan bertanggung jawab atas seluruh siklus hidup produk, mulai dari ideation hingga peluncuran. Dalam peran ini, Anda juga perlu menganalisis kebutuhan pasar serta umpan balik pengguna untuk mengembangkan roadmap produk yang tepat sasaran.',  
         tags2:['Remote','Temporary','Marketing'],
         salary:'$70',
         avgSalary:'$120,000',
         jobType:'Part-Time',
         saved:false,
         responsibility:[
            "Mengelola seluruh siklus hidup produk.",
            "Menganalisis kebutuhan pengguna dan pasar.",
            "Mengembangkan roadmap produk.",
            "Berkoordinasi dengan tim lintas fungsi.",
            "Mengidentifikasi peluang pertumbuhan produk."
         ],
         qualification:[
            "Pengalaman dalam manajemen produk atau bidang terkait.",
            "Kemampuan analitis yang kuat.",
            "Kemampuan untuk mengelola tim lintas fungsi."
         ],
         skills:[
            "Agile",
            "Product Management",
            "Strategic Thinking"
         ],
         companyDescription:"Meta adalah perusahaan induk Facebook yang berfokus pada pengembangan teknologi sosial dan aplikasi seperti Instagram, WhatsApp, dan Oculus. Kami berkomitmen untuk menciptakan konektivitas di seluruh dunia.",
         location:"USA",
      },
      { 
         id: 5,
         img:'https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg',
         name:'Apple',
         status:'TERSEDIA',
         locasion:'Cupertino',
         title:'iOS Developer',
         desk:'Apple mencari iOS Developer untuk mengembangkan aplikasi modern dan ramah pengguna di perangkat iOS. Dalam posisi ini, Anda akan terlibat dalam setiap tahap pengembangan aplikasi mulai dari perancangan hingga peluncuran. Anda juga akan bekerja sama dengan tim desain untuk memastikan bahwa aplikasi tidak hanya fungsional tetapi juga memiliki antarmuka pengguna yang menarik.',  
         tags2:['Flexible','Permanent','Engineering'],
         salary:'$80',
         avgSalary:'$115,000',
         jobType:'Full-Time',
         saved:false,
         responsibility:[
            "Mengembangkan aplikasi iOS yang inovatif.",
            "Melakukan debugging untuk memastikan stabilitas aplikasi.",
            "Bekerja sama dengan tim desain dan pengembangan.",
            "Mengoptimalkan aplikasi untuk performa terbaik.",
            "Mengikuti pedoman desain Apple."
         ],
         qualification:[
            "Pengalaman dalam pengembangan aplikasi iOS menggunakan Swift atau Objective-C.",
            "Kemampuan dalam pengujian aplikasi iOS."
         ],
         skills:[
            "Swift",
            "Xcode",
            "UI/UX Design"
         ],
         companyDescription:"Apple adalah perusahaan teknologi global yang terkenal dengan inovasi produk-produk seperti iPhone, iPad, dan Mac. Kami berfokus pada menciptakan pengalaman pengguna yang luar biasa.",
         location:"USA",
      },
      { 
         id: 6,
         img:'https://i.pinimg.com/736x/6e/f6/20/6ef620a8d4abe3ab586665773143ff70.jpg', 
         name:'Facebook', 
         status : 'DIBUTUHKAN',
         locasion:'Menlo Park', 
         title:'Data Analyst', 
         desk:'Facebook membutuhkan Data Analyst untuk menganalisis data dan memberikan wawasan yang dapat diterapkan guna mendukung keputusan bisnis. Dalam peran ini, Anda akan bertanggung jawab atas pengumpulan data dari berbagai sumber serta membersihkannya agar siap dianalisis. Anda juga akan menyusun laporan analitik yang jelas dan informatif bagi tim manajemen.',  
         tags2:['Remote','Internship','Finance'], 
         salary:'$50',
         avgSalary:'$95,000',
         jobType:'Freelance',
         saved:false,
         responsibility:[
            "Mengumpulkan dan membersihkan data untuk analisis.",
            "Menganalisis tren data yang relevan.",
            "Menyusun laporan dan visualisasi data.",
            "Berkoordinasi dengan tim bisnis untuk kebutuhan analisis."
         ],
         qualification:[
            "Pengalaman dengan alat analisis data seperti SQL atau Python.",
            "Keterampilan komunikasi yang baik."
         ],
         skills:[
            "SQL",
            "Python",
            "Data Visualization"
         ],
         companyDescription:"Facebook adalah platform jejaring sosial terbesar di dunia. Kami menghubungkan orang, komunitas, dan bisnis di seluruh dunia untuk menciptakan dampak positif.",
       location:"USA",
      },
      {
       id : 7,
       img : "https://i.pinimg.com/736x/06/19/60/06196084992e762df628b46900195d4f.jpg",
       name : "YouTube",
       locasion : "Toronto",
       region : "USA",
       salary : "$90",
       status : "DIBUTUHKAN SEGERA",
       tags2 : ["Flexible", "Permanent", "Engineering"], 
       title : "Content Strategist",
       avgSalary : "$120,000", // Avg. Salary per year
       desk : "YouTube membutuhkan Content Strategist untuk mengembangkan strategi konten yang menarik dan relevan bagi audiens target. Dalam posisi ini, Anda akan bertanggung jawab atas analisis performa konten saat ini serta berkolaborasi dengan tim kreatif dalam produksi konten baru. Anda juga perlu mengikuti tren konten terbaru di industri agar strategi tetap up-to-date.",  
       jobType : "Freelance",
       saved : false,
       responsibility : [
           "Mengembangkan strategi konten untuk audiens target.",
           "Menganalisis performa konten saat ini.",
           "Berkoordinasi dengan tim kreatif untuk produksi konten.",
           "Mengidentifikasi tren konten di industri."
       ],
       qualification : [
           "Pengalaman dalam pemasaran konten digital.",
           "Keterampilan analitik dan kemampuan riset pasar.",
           "Pemahaman tentang SEO dan optimasi konten."
       ],
       skills : [
           "Strategi Konten",
           "SEO",
           "Analisis Data"
       ],
       companyDescription : "YouTube adalah platform berbagi video terkemuka yang memungkinkan pengguna untuk menonton, mengunggah, dan berbagi video di seluruh dunia.",
       location : "CA"
      },
      {
       id : 8,
       img :  "https://i.pinimg.com/736x/8e/f0/b0/8ef0b0fe34321ecf25486380410caed0.jpg",
       name :  "OpenAI",
       salary : "$70",
       status :  "TERSEDIA",
       locasion :  "Berlin",
       tags2 : ["Flexible", "Permanent", "Engineering"], 
       region :  "USA",
       title :  "AI Researcher",
       avgSalary : "$150,000", // Avg. Salary per year
       desk :  "OpenAI mencari AI Researcher untuk mengembangkan teknologi kecerdasan buatan yang inovatif. Dalam posisi ini, Anda akan melakukan penelitian mendalam mengenai algoritma AI terbaru serta menerapkan teknik-teknik baru dalam proyek-proyek penelitian kami. Anda juga akan bekerja sama dengan peneliti lain dalam menerbitkan hasil penelitian.",  
       jobType :  "Contract",
       saved : false,
       responsibility : [
           "Melakukan penelitian mendalam tentang AI.",
           "Merancang algoritma baru untuk kecerdasan buatan.",
           "Menguji dan mengevaluasi model AI.",
           "Mengembangkan dokumentasi teknis."
       ],
       qualification : [
           "Gelar di bidang Ilmu Komputer atau disiplin terkait.",
           "Pengalaman dalam penelitian AI dan pembelajaran mesin.",
           "Keterampilan pemrograman dengan Python atau bahasa terkait.",
           "Keterampilan berbahasa dengan golang atau bahasa terkait."
       ],
       skills : [
           "Pembelajaran Mesin",
           "Penelitian AI",
           "Pemrograman Python"
       ],
       companyDescription :  "OpenAI adalah organisasi penelitian kecerdasan buatan yang berfokus pada pengembangan dan penerapan AI untuk manfaat umat manusia.",  
       location :"DE"
      },
      {
     id : 9,
     img :"https://i.pinimg.com/736x/5b/e2/85/5be2857945e61a48d5a031eb301a8caf.jpg",  
     name :"Netflix",  
     salary :"$100",  
     status :"DIBUTUHKAN SEGERA",  
     locasion :"Sydney",  
     tags2:["Flexible","Permanent","Engineering"],   
     region :"AU",  
     title :"Creative Producer",   
     avgSalary :"$135,000", // Avg. Salary per year  
     desk :"Netflix membutuhkan Creative Producer untuk mengelola produksi konten orisinal berkualitas tinggi. Dalam peran ini, Anda akan bertanggung jawab atas semua aspek produksi mulai dari pra-produksi hingga pasca-produksi. Anda juga perlu bekerja sama erat dengan tim kreatif serta memastikan bahwa semua konten memenuhi standar kualitas Netflix.",   
     jobType :"Part-Time",  
     saved:false,  
     responsibility:[  
     "Mengelola proyek produksi konten dari awal hingga akhir.",  
     "Berkoordinasi dengan tim kreatif dan teknis.",  
     "Memastikan kualitas konten sesuai standar Netflix.",  
     "Mengawasi proses pasca produksi."  
     ],  
     qualification:[  
     "Pengalaman dalam produksi film atau televisi.",  
     "Kemampuan manajerial yang sangat baik.",  
     "Pemahaman tentang anggaran dan proses produksi."  
     ],  
     skills:[  
     "Manajemen Produksi",  
     "Kreativitas",  
     "Pengawasan Produksi"  
     ],  
     companyDescription:"Netflix adalah platform streaming video terkemuka yang menawarkan film, acara TV, dan konten orisinal berkualitas tinggi kepada pengguna di seluruh dunia.",   
     location:"AU"
    },
    
    { 
      id: 10, 
      img: 'https://i.pinimg.com/736x/13/6c/c6/136cc6856f5666bbe48a32197c19b098.jpg', 
      name: 'Tesla', 
      locasion: 'Austin', 
      title: 'Automotive Engineer', 
      desk: 'Tesla mencari Automotive Engineer untuk mengembangkan sistem inovatif pada kendaraan listrik. Dalam peran ini, Anda akan bertanggung jawab untuk merancang dan mengoptimalkan komponen kendaraan listrik, serta berkolaborasi dengan tim multidisiplin untuk menciptakan teknologi otomotif masa depan.', 
      tags2: ['On-Site', 'Permanent', 'Engineering'], 
      salary: '$95',
      avgSalary: '$180,000',
      jobType: 'Full-Time',
      status: 'TERSEDIA',
      saved: false,
      responsibility: [
        'Merancang dan mengembangkan komponen kendaraan listrik',
        'Melakukan simulasi dan pengujian sistem',
        'Mengoptimalkan performa kendaraan',
        'Berkolaborasi dengan tim desain dan produksi',
        'Memastikan standar keamanan dan kualitas'
      ],
      qualification: [
        'Gelar dalam Teknik Otomotif atau bidang terkait',
        'Pengalaman dalam pengembangan kendaraan listrik',
        'Kemampuan analitis yang kuat',
        'Pemahaman mendalam tentang sistem otomotif'
      ],
      skills: [
        'CAD Software',
        'Sistem Elektrik',
        'Simulasi Kendaraan'
      ],
      companyDescription: 'Tesla adalah pemimpin dalam teknologi kendaraan listrik dan energi berkelanjutan, berfokus pada mempercepat transisi dunia menuju energi berkelanjutan.',
      location: 'USA'
    },
    {
      id: 11,
      img: 'https://i.pinimg.com/736x/72/5e/15/725e1559f573b6559e058e3dda03692c.jpg',
      name: 'SpaceX',
      locasion: 'Cape Canaveral',
      title: 'Aerospace Engineer',
      desk: 'SpaceX mencari Aerospace Engineer untuk bergabung dalam tim pengembangan roket luar angkasa. Anda akan terlibat dalam desain, analisis, dan pengujian sistem propulsi roket yang inovatif.',
      tags2: ['On-Site', 'Permanent', 'Engineering'],
      salary: '$100',
      avgSalary: '$195,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN SEGERA',
      saved: false,
      responsibility: [
        'Merancang sistem propulsi roket',
        'Melakukan analisis aerodinamika',
        'Mengembangkan simulasi komputer',
        'Mengawasi pengujian komponen',
        'Optimalisasi performa roket'
      ],
      qualification: [
        'Ph.D dalam Teknik Aerospace',
        'Pengalaman dalam desain roket',
        'Keahlian dalam analisis struktural',
        'Kemampuan problem-solving yang kuat'
      ],
      skills: [
        'Fluid Dynamics',
        'Thermal Analysis',
        'MATLAB'
      ],
      companyDescription: 'SpaceX merancang, memproduksi dan meluncurkan roket dan pesawat ruang angkasa canggih. Misi kami adalah menjadikan manusia sebagai spesies multi-planet.',
      location: 'USA'
    },
    {
      id: 12,
      img: 'https://i.pinimg.com/736x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg',
      name: 'Adobe',
      locasion: 'San Jose',
      title: 'UX/UI Designer',
      desk: 'Adobe mencari UX/UI Designer yang kreatif untuk mengembangkan pengalaman pengguna yang inovatif dalam produk-produk Adobe Creative Cloud. Fokus pada desain yang intuitif dan user-friendly.',
      tags2: ['Hybrid', 'Permanent', 'Design'],
      salary: '$85',
      avgSalary: '$145,000',
      jobType: 'Full-Time',
      status: 'TERSEDIA',
      saved: false,
      responsibility: [
        'Merancang antarmuka pengguna yang intuitif',
        'Melakukan riset pengguna',
        'Membuat prototype interaktif',
        'Berkolaborasi dengan tim produk',
        'Mengembangkan design system'
      ],
      qualification: [
        'Gelar dalam Desain atau bidang terkait',
        'Portfolio yang kuat',
        'Pengalaman dengan tools desain modern',
        'Pemahaman tentang prinsip UX'
      ],
      skills: [
        'Figma',
        'Adobe XD',
        'Prototyping'
      ],
      companyDescription: 'Adobe adalah pemimpin global dalam perangkat lunak kreatif, menyediakan tools dan platform untuk para kreator di seluruh dunia.',
      location: 'USA'
    },
    {
      id: 13,
      img: 'https://i.pinimg.com/736x/f6/68/90/f66890653a1275aa5b742387233f4243.jpg',
      name: 'Twitter',
      locasion: 'San Francisco',
      title: 'Backend Developer',
      desk: 'Twitter mencari Backend Developer untuk mengembangkan infrastruktur yang scalable dan reliable. Fokus pada pengembangan API dan microservices untuk mendukung platform Twitter.',
      tags2: ['Remote', 'Permanent', 'Engineering'],
      salary: '$90',
      avgSalary: '$160,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN',
      saved: false,
      responsibility: [
        'Mengembangkan backend services',
        'Mengelola database skala besar',
        'Optimalisasi performa sistem',
        'Implementasi fitur keamanan',
        'Maintenance sistem'
      ],
      qualification: [
        'Gelar dalam Computer Science',
        'Pengalaman dengan distributed systems',
        'Keahlian dalam Golang atau Java',
        'Pemahaman tentang microservices'
      ],
      skills: [
        'Golang',
        'Kubernetes',
        'PostgreSQL'
      ],
      companyDescription: 'Twitter adalah platform media sosial global yang menghubungkan orang dengan informasi real-time dari seluruh dunia.',
      location: 'USA'
    },
    {
      id: 14,
      img: 'https://i.pinimg.com/736x/60/71/03/60710323784a8804e7e73324c8312fd4.jpg',
      name: 'Intel',
      locasion: 'Santa Clara',
      title: 'Hardware Engineer',
      desk: 'Intel mencari Hardware Engineer untuk mengembangkan prosesor generasi berikutnya. Fokus pada desain dan optimalisasi arsitektur chip.',
      tags2: ['On-Site', 'Permanent', 'Engineering'],
      salary: '$95',
      avgSalary: '$175,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN SEGERA',
      saved: false,
      responsibility: [
        'Merancang arsitektur chip',
        'Optimalisasi performa prosesor',
        'Verifikasi desain hardware',
        'Pengembangan prototype',
        'Analisis thermal dan power'
      ],
      qualification: [
        'Ph.D dalam Electrical Engineering',
        'Pengalaman dalam chip design',
        'Keahlian dalam VLSI',
        'Pemahaman arsitektur komputer'
      ],
      skills: [
        'Verilog',
        'ASIC Design',
        'Circuit Analysis'
      ],
      companyDescription: 'Intel adalah pemimpin global dalam pengembangan teknologi semiconductor dan computing innovation.',
      location: 'USA'
    },
    {
      id: 15,
      img: 'https://i.pinimg.com/236x/31/f6/d3/31f6d3fddbc3b87a6ffc705e556562f4.jpg',
      name: 'Spotify',
      locasion: 'Stockholm',
      title: 'Audio Engineer',
      desk: 'Spotify mencari Audio Engineer untuk mengembangkan dan mengoptimalkan teknologi streaming audio. Anda akan bekerja pada algoritma pemrosesan sinyal dan codec audio untuk meningkatkan kualitas streaming.',
      tags2: ['Hybrid', 'Permanent', 'Engineering'],
      salary: '$88',
      avgSalary: '$140,000',
      jobType: 'Full-Time',
      status: 'TERSEDIA',
      saved: false,
      responsibility: [
        'Pengembangan algoritma audio processing',
        'Optimalisasi codec streaming',
        'Analisis kualitas audio',
        'Implementasi fitur audio baru',
        'Penelitian teknologi audio'
      ],
      qualification: [
        'Gelar dalam Audio Engineering',
        'Pengalaman DSP',
        'Keahlian dalam pengembangan codec',
        'Pemahaman mendalam tentang teknologi streaming'
      ],
      skills: [
        'DSP',
        'C++',
        'Audio Analysis'
      ],
      companyDescription: 'Spotify adalah layanan streaming musik terkemuka yang menghubungkan jutaan pendengar dengan konten audio dari seluruh dunia.',
      location: 'SE'
    },
    {
      id: 16,
      img: 'https://i.pinimg.com/736x/94/4c/60/944c602e21fe46846396f97917a98951.jpg',
      name: 'NVIDIA',
      locasion: 'Santa Clara',
      title: 'GPU Architect',
      desk: 'NVIDIA mencari GPU Architect untuk merancang arsitektur GPU generasi berikutnya. Fokus pada inovasi dalam komputasi paralel dan akselerasi AI.',
      tags2: ['On-Site', 'Permanent', 'Engineering'],
      salary: '$110',
      avgSalary: '$200,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN',
      saved: false,
      responsibility: [
        'Desain arsitektur GPU',
        'Optimalisasi performa grafis',
        'Pengembangan teknologi ray tracing',
        'Integrasi AI acceleration',
        'Validasi arsitektur'
      ],
      qualification: [
        'Ph.D dalam Computer Architecture',
        'Pengalaman dalam GPU design',
        'Keahlian dalam parallel computing',
        'Background kuat dalam computer graphics'
      ],
      skills: [
        'CUDA',
        'Hardware Architecture',
        'RTL Design'
      ],
      companyDescription: 'NVIDIA adalah pionir dalam teknologi GPU dan AI, mendorong inovasi dalam gaming, komputasi, dan kecerdasan buatan.',
      location: 'USA'
    },
    {
      id: 17,
      img: 'https://i.pinimg.com/736x/56/5c/2a/565c2a824c7c184e326c751a0fb7e73e.jpg',
      name: 'Airbnb',
      locasion: 'San Francisco',
      title: 'Product Analytics Manager',
      desk: 'Airbnb mencari Product Analytics Manager untuk memimpin analisis data produk dan memberikan wawasan strategis untuk pengembangan platform.',
      tags2: ['Remote', 'Permanent', 'Analytics'],
      salary: '$92',
      avgSalary: '$165,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN SEGERA',
      saved: false,
      responsibility: [
        'Memimpin analisis data produk',
        'Mengembangkan metrics framework',
        'Membuat dashboard analytics',
        'Memberikan rekomendasi berbasis data',
        'Kolaborasi dengan tim produk'
      ],
      qualification: [
        'Gelar dalam Statistics atau Analytics',
        'Pengalaman product analytics',
        'Keahlian SQL dan Python',
        'Background dalam A/B testing'
      ],
      skills: [
        'SQL',
        'Python',
        'Tableau'
      ],
      companyDescription: 'Airbnb adalah marketplace global untuk akomodasi dan pengalaman perjalanan, menghubungkan jutaan host dan traveler di seluruh dunia.',
      location: 'USA'
    },
    {
      id: 18,
      img: 'https://i.pinimg.com/736x/fd/fa/dd/fdfadd56cb3ea0ae5ad45cb3fabc0e18.jpg',
      name: 'LinkedIn',
      locasion: 'Sunnyvale',
      title: 'Machine Learning Engineer',
      desk: 'LinkedIn mencari Machine Learning Engineer untuk mengembangkan algoritma rekomendasi dan personalisasi untuk platform professional networking.',
      tags2: ['Hybrid', 'Permanent', 'Engineering'],
      salary: '$98',
      avgSalary: '$180,000',
      jobType: 'Full-Time',
      status: 'TERSEDIA',
      saved: false,
      responsibility: [
        'Pengembangan sistem rekomendasi',
        'Implementasi algoritma ML',
        'Optimalisasi model pembelajaran',
        'Analisis data user behavior',
        'A/B testing'
      ],
      qualification: [
        'Ph.D dalam Machine Learning',
        'Pengalaman recommendation systems',
        'Keahlian dalam deep learning',
        'Background dalam NLP'
      ],
      skills: [
        'PyTorch',
        'TensorFlow',
        'Python'
      ],
      companyDescription: 'LinkedIn adalah platform profesional terbesar di dunia, menghubungkan profesional global untuk meningkatkan produktivitas dan kesuksesan.',
      location: 'USA'
    },
    {
      id: 19,
      img: 'https://i.pinimg.com/736x/24/f4/07/24f407f787fa533ef3abd4fc668d4a53.jpg',
      name: 'Unity',
      locasion: 'Copenhagen',
      title: 'Game Engine Developer',
      desk: 'Unity mencari Game Engine Developer untuk mengembangkan fitur-fitur baru dan optimalisasi performa engine. Fokus pada grafis real-time dan physics simulation.',
      tags2: ['On-Site', 'Permanent', 'Engineering'],
      salary: '$95',
      avgSalary: '$170,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN',
      saved: false,
      responsibility: [
        'Pengembangan game engine features',
        'Optimalisasi performa grafis',
        'Implementasi physics system',
        'Debug dan profiling',
        'Dokumentasi teknis'
      ],
      qualification: [
        'Gelar dalam Computer Science',
        'Pengalaman game engine development',
        'Keahlian dalam graphics programming',
        'Background dalam game development'
      ],
      skills: [
        'C++',
        'DirectX/OpenGL',
        'Physics Engine'
      ],
      companyDescription: 'Unity adalah platform pengembangan real-time terkemuka, digunakan oleh jutaan creator untuk membuat game dan pengalaman interaktif.',
      location: 'DK'
    },
    {
      id: 20,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYApeDMvQICpTm1f5elcDd5basS2kffEt9Rg&s',
      name: 'AMD',
      locasion: 'Austin',
      title: 'CPU Architect',
      desk: 'AMD mencari CPU Architect untuk mengembangkan arsitektur prosesor generasi berikutnya. Fokus pada inovasi dalam desain mikroarsitektur dan peningkatan performa.',
      tags2: ['On-Site', 'Permanent', 'Engineering'],
      salary: '$105',
      avgSalary: '$190,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN SEGERA',
      saved: false,
      responsibility: [
        'Desain mikroarsitektur CPU',
        'Optimalisasi performa prosesor',
        'Pengembangan fitur baru',
        'Validasi arsitektur',
        'Kolaborasi dengan tim silicon'
      ],
      qualification: [
        'Ph.D dalam Computer Engineering',
        'Pengalaman dalam CPU design',
        'Keahlian dalam mikroarsitektur',
        'Background dalam computer architecture'
      ],
      skills: [
        'RTL Design',
        'Verilog',
        'Performance Analysis'
      ],
      companyDescription: 'AMD adalah pemimpin global dalam high-performance computing, graphics, dan teknologi visualisasi.',
      location: 'USA'
    },
    {
      id: 21,
      img: 'https://i.pinimg.com/736x/75/2b/26/752b26e033e8f6158eeb4d565b86e8c6.jpg',
      name: 'Twitch',
      locasion: 'San Francisco',
      title: 'Streaming Infrastructure Engineer',
      desk: 'Twitch mencari Streaming Infrastructure Engineer untuk mengoptimalkan platform streaming real-time. Fokus pada skalabilitas dan reliabilitas sistem streaming.',
      tags2: ['Hybrid', 'Permanent', 'Engineering'],
      salary: '$95',
      avgSalary: '$160,000',
      jobType: 'Full-Time',
      status: 'TERSEDIA',
      saved: false,
      responsibility: [
        'Optimalisasi infrastruktur streaming',
        'Pengembangan sistem real-time',
        'Manajemen latency',
        'Skalabilitas platform',
        'Monitoring performa'
      ],
      qualification: [
        'Gelar dalam Computer Science',
        'Pengalaman streaming technology',
        'Keahlian dalam distributed systems',
        'Background dalam video delivery'
      ],
      skills: [
        'WebRTC',
        'FFmpeg',
        'Cloud Infrastructure'
      ],
      companyDescription: 'Twitch adalah platform streaming langsung terkemuka yang menghubungkan jutaan creator dengan komunitas mereka.',
      location: 'USA'
    },
    {
      id: 22,
      img: 'https://i.pinimg.com/736x/b7/45/04/b74504d48060a4c64af55b552b441897.jpg',
      name: 'Slack',
      locasion: 'Vancouver',
      title: 'Real-Time Communication Engineer',
      desk: 'Slack mencari Real-Time Communication Engineer untuk mengembangkan sistem messaging yang handal dan scalable. Fokus pada pengiriman pesan real-time dan sinkronisasi.',
      tags2: ['Remote', 'Permanent', 'Engineering'],
      salary: '$90',
      avgSalary: '$155,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN',
      saved: false,
      responsibility: [
        'Pengembangan sistem messaging',
        'Optimalisasi real-time delivery',
        'Implementasi protokol komunikasi',
        'Manajemen state dan sinkronisasi',
        'Pemeliharaan infrastruktur'
      ],
      qualification: [
        'Gelar dalam Software Engineering',
        'Pengalaman WebSocket',
        'Keahlian dalam distributed systems',
        'Background dalam real-time systems'
      ],
      skills: [
        'WebSocket',
        'Node.js',
        'Redis'
      ],
      companyDescription: 'Slack adalah platform kolaborasi yang mengubah cara tim bekerja dengan komunikasi yang lebih efisien dan terorganisir.',
      location: 'CA'
    },
    {
      id: 23,
      img: 'https://i.pinimg.com/736x/bf/54/a7/bf54a70f234c9bfa60c6040618ac9079.jpg',
      name: 'Zoom',
      locasion: 'San Jose',
      title: 'Video Conferencing Engineer',
      desk: 'Zoom mencari Video Conferencing Engineer untuk mengembangkan teknologi video conference berkualitas tinggi. Fokus pada kualitas video dan audio dalam kondisi jaringan berbeda.',
      tags2: ['Hybrid', 'Permanent', 'Engineering'],
      salary: '$98',
      avgSalary: '$165,000',
      jobType: 'Full-Time',
      status: 'TERSEDIA',
      saved: false,
      responsibility: [
        'Pengembangan teknologi video conference',
        'Optimalisasi kualitas media',
        'Implementasi protokol streaming',
        'Manajemen bandwidth',
        'Testing dan validasi'
      ],
      qualification: [
        'Gelar dalam Multimedia Engineering',
        'Pengalaman video streaming',
        'Keahlian dalam network protocols',
        'Background dalam video processing'
      ],
      skills: [
        'WebRTC',
        'H.264',
        'Network Programming'
      ],
      companyDescription: 'Zoom adalah pemimpin dalam komunikasi video modern, menyediakan platform yang handal untuk meeting dan kolaborasi.',
      location: 'USA'
    },
    {
      id: 24,
      img: 'https://i.pinimg.com/736x/5c/bb/a7/5cbba74b40ec0c0ce77b3db3ec1a5e05.jpg',
      name: 'Docker',
      locasion: 'Seattle',
      title: 'Container Platform Engineer',
      desk: 'Docker mencari Container Platform Engineer untuk mengembangkan teknologi containerization. Fokus pada keamanan, performa, dan portabilitas container.',
      tags2: ['Remote', 'Permanent', 'Engineering'],
      salary: '$92',
      avgSalary: '$170,000',
      jobType: 'Full-Time',
      status: 'DIBUTUHKAN SEGERA',
      saved: false,
      responsibility: [
        'Pengembangan platform container',
        'Optimalisasi runtime container',
        'Implementasi fitur keamanan',
        'Manajemen orchestration',
        'Pengembangan tooling'
      ],
      qualification: [
        'Gelar dalam Computer Science',
        'Pengalaman container technology',
        'Keahlian dalam Linux kernel',
        'Background dalam distributed systems'
      ],
      skills: [
        'Docker',
        'Kubernetes',
        'Go'
      ],
      companyDescription: 'Docker adalah platform standar industri untuk membuat dan menjalankan container, memungkinkan developer untuk build, share, dan run aplikasi di mana saja.',
      location: 'USA'
    }

    ],
    selectedJob: null, 
         currentPage: 1,
        itemsPerPage: 8, // Jumlah item per halaman
        get totalPages() {
            return Math.ceil(this.jobs.length / this.itemsPerPage);
        },

        get paginatedJobs() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.jobs.slice(start, start + this.itemsPerPage);
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        setPage(page) {
            this.currentPage = page;
        },
   
  }))
})
