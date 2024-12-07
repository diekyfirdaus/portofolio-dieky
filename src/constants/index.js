export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Potensi Nusantara',
    position: 'Lembaga Pendidikan Komputer',
    img: 'assets/logo_potensi_nusantara_new.png',
    review:
      'Telah memperoleh sertifikat kelulusan dalam Pendidikan dan Pelatihan Komputer Perkantoran di Lembaga Pendidikan Komputer Potensi Nusantara, yang membuktikan kompetensi dalam penggunaan aplikasi perkantoran seperti Microsoft Office, pengelolaan arsip digital, dan keterampilan administrasi modern.',
  },
  {
    id: 2,
    name: 'Universitas Airlangga',
    position: 'Call for essay pekan ilmiah kebangsaan',
    img: 'assets/Logo-Branding-UNAIR-biru.png',
    review:
      'Telah menerima sertifikat dari Universitas Airlangga atas partisipasi dalam Call for Essay Pekan Ilmiah Kebangsaan, sebagai bentuk kontribusi dalam menyampaikan ide dan gagasan inovatif untuk mendukung pembangunan bangsa.',
  },
  {
    id: 3,
    name: 'Edusoft Ltd.',
    position: 'Intermediate 2 & 3',
    img: 'assets/edusoft_ltd_logo.jpeg',
    review:
      'Telah menerima sertifikat Bahasa Inggris dari Edusoft Ltd. pada tingkat Intermediate 2 & 3 (setara dengan CEFR B2) melalui program English Discoveries, yang diberikan pada Oktober tahun akademik 2022-2023 sebagai pencapaian dari Kursus Intensif Bahasa Inggris di Pusat Bahasa UM Surabaya.',
  },
  {
    id: 4,
    name: 'Aimmex',
    position: 'Airlangga Marketing Management Expo',
    img: 'assets/Logo-Branding-UNAIR-biru.png',
    review:
      'Telah menerima sertifikat sebagai panitia dalam AIMMEX (Airlangga Marketing Management Expo), menunjukkan kontribusi aktif dalam mendukung pelaksanaan acara dengan sukses.',
  },
];

export const myProjects = [
  {
    title: 'Developer',
    desc: 'Keahlian dalam pengembangan website situs web dengan desain yang menarik, responsif dan user-friendly. Dengan menggunakan berbagai bahasa pemrograman seperti HTML, CSS, JavaScript, tailwindcss, React JS dan Next JS.',
    subdesc: '',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/front-development.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/JS.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/nextjs2.jpg',
      },
    ],
  },
  {
    title: 'Microsoft Office',
    desc: 'Keahlian dalam mengoperasikan Microsoft Office, termasuk penggunaan Microsoft Word untuk penulisan dan pengeditan dokumen, Microsoft Excel untuk pengolahan data dan pembuatan laporan, serta Microsoft PowerPoint untuk membuat presentasi yang menarik dan informatif. Terampil dalam memanfaatkan fitur-fitur lanjutan untuk meningkatkan produktivitas dan efisiensi pekerjaan sehari-hari.',
    subdesc: '',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/office.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'word',
        path: '/assets/word.png',
      },
      {
        id: 2,
        name: 'exel',
        path: 'assets/excel.png',
      },
      {
        id: 3,
        name: 'power point',
        path: '/assets/powerpoint.png',
      },
    ],
  },
  {
    title: 'Editing Foto dan Video',
    desc: 'Keahlian dalam editing foto dan video menggunakan berbagai perangkat lunak seperti Adobe, canva, dan Capcut. Mampu mengolah gambar dan video dengan kreatif dan detail, hingga pemotongan dan penyusunan klip video, untuk menghasilkan konten visual yang menarik dan sesuai dengan kebutuhan klien atau proyek.',
    subdesc: '',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'adobe',
        path: '/assets/adobe.png',
      },
      {
        id: 2,
        name: 'canva',
        path: 'assets/canva.png',
      },
      {
        id: 3,
        name: 'capcut',
        path: '/assets/capcut.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Bussines Center Surabaya PT Sophie Paris',
    pos: '',
    duration: 'Februari 2010 - Agustus 2021',
    title:
      'Berpengalaman bekerja di Business Center Surabaya PT Sophie Paris dengan peran sebagai Digital Marketing, Administrasi, Desain Foto & Video, dan Pramuniaga. Selama bekerja, telah meraih berbagai penghargaan yaitu Trip Malaysia, Trip Bangkok, Trip Singapore, Celebration Go to Bali, Emas 4 gram, dan Honda Vario 150cc.',
    icon: '/assets/sophie.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CV Sinar Baru Indopot, Freelance Editing Foto Video & Jualan Online',
    pos: 'Freelance Editing Foto Video & Jualan Online -- Desember 2021 - Now',
    duration: 'CV Sinar Baru Indopot -- Januari 2024 - Oktober 2024',
    title:
      'Pernah bekerja sebagai Digital Marketing di CV Sinar Baru Indopot, bertanggung jawab atas strategi pemasaran digital, pengelolaan media sosial, dan peningkatan visibilitas brand secara online. Selain itu, saya juga Freelance editor foto dan video dengan pengalaman menciptakan konten visual berkualitas tinggi untuk keperluan branding, media sosial, dan promosi. Di luar itu, saya juga berjualan online, baik untuk produk fashion seperti baju dan tas, makanan, sayur segar, hingga kue-kue tradisional.',
    icon: '/assets/freelance.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'PNS Kemenkumham (Pemeriksa Keimigrasian) ',
    pos: '',
    duration: 'Tahun 2025',
    title:
      'Bertugas sebagai Pegawai Negeri Sipil Kementerian Hukum dan HAM dengan peran Pemeriksa Keimigrasian Pemula, yang meliputi pengelolaan dokumen perjalanan, pengawasan orang asing, pelayanan keimigrasian, serta menjaga kedaulatan negara melalui pengawasan lalu lintas orang di wilayah perbatasan. Berkomitmen untuk memberikan pelayanan terbaik dan menjalankan tugas dengan integritas tinggi.',
    icon: '/assets/kemenkumham.png',
    animation: 'salute',
  },
];
