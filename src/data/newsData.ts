
export interface NewsItem {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  content: string;
  snippet: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Istri Arya Saloka Geram Dikuntit Cewek-Cewek Sampai Di Depan Rumah",
    image: "https://picsum.photos/id/237/600/400",
    category: "Entertainment",
    date: "2023-06-20",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Putri Anne mengaku kesal dengan ulah penggemar suaminya yang kerap menguntit hingga ke depan rumah mereka."
  },
  {
    id: "2",
    title: "Sholat Istiqa Adalah Doa Meminta Turunnya Hujan, Begini Tata Caranya",
    image: "https://picsum.photos/id/65/600/400",
    category: "Religion",
    date: "2023-06-19",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Penjelasan lengkap tentang tata cara sholat istisqa yang dilakukan untuk meminta turunnya hujan."
  },
  {
    id: "3",
    title: "Polisi pastikan belum ada update justice kasus penganiayaan oleh Mario Dandy",
    image: "https://picsum.photos/id/26/600/400",
    category: "Crime",
    date: "2023-06-18",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Kepolisian masih melakukan penyelidikan mendalam terkait kasus penganiayaan yang dilakukan Mario Dandy."
  },
  {
    id: "4",
    title: "Begini cara cek hasil seleksi kartu Prakerja!",
    image: "https://picsum.photos/id/60/600/400",
    category: "Jobs",
    date: "2023-06-17",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Panduan lengkap cara cek hasil seleksi program Kartu Prakerja gelombang terbaru."
  },
  {
    id: "5",
    title: "Akan ada DREAMZone saat nkonser NCT Dream di Indonesia, apa isinya?",
    image: "https://picsum.photos/id/96/600/400",
    category: "Entertainment",
    date: "2023-06-16",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "NCT Dream akan menggelar konser di Indonesia dengan zona spesial bernama DREAMZone. Ini detail lengkapnya."
  },
  {
    id: "6",
    title: "Tim tenis putra U16 Indonesia lolos ke Kualifikasi Piala Davis Junior",
    image: "https://picsum.photos/id/106/600/400",
    category: "Sports",
    date: "2023-06-15",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Tim tenis putra U16 Indonesia berhasil lolos ke kualifikasi Piala Davis Junior setelah mengalahkan tim Malaysia."
  },
  {
    id: "7",
    title: "Persija Jakarta Kalahkan Persib Bandung dalam Derby Klasik Liga 1",
    image: "https://picsum.photos/id/43/600/400",
    category: "Sports",
    date: "2023-06-14",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Persija Jakarta berhasil mengalahkan Persib Bandung dengan skor 2-1 dalam laga derby klasik Liga 1 Indonesia."
  },
  {
    id: "8",
    title: "Timnas Indonesia U-23 Siap Hadapi Kualifikasi Piala Asia 2024",
    image: "https://picsum.photos/id/27/600/400",
    category: "Sports",
    date: "2023-06-13",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Timnas Indonesia U-23 melakukan persiapan intensif jelang menghadapi kualifikasi Piala Asia 2024 bulan depan."
  },
  {
    id: "9",
    title: "Gubernur DKI Jakarta Umumkan Proyek MRT Fase 2 Dimulai Bulan Depan",
    image: "https://picsum.photos/id/28/600/400",
    category: "News",
    date: "2023-06-12",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Pembangunan MRT Jakarta fase kedua akan dimulai bulan depan dan ditargetkan selesai dalam tiga tahun."
  },
  {
    id: "10",
    title: "Presiden Tinjau Pembangunan Ibu Kota Negara di Kalimantan Timur",
    image: "https://picsum.photos/id/29/600/400",
    category: "News",
    date: "2023-06-11",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Presiden meninjau langsung progres pembangunan ibu kota negara baru di Kalimantan Timur dan memberikan arahan."
  },
  {
    id: "11",
    title: "Inflasi Indonesia Turun ke Level 2.8% pada Bulan Mei",
    image: "https://picsum.photos/id/30/600/400",
    category: "Business",
    date: "2023-06-10",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Badan Pusat Statistik melaporkan inflasi Indonesia turun ke level 2.8% pada bulan Mei, lebih rendah dari bulan sebelumnya."
  },
  {
    id: "12",
    title: "Rupiah Menguat Terhadap Dolar AS di Tengah Ketidakpastian Global",
    image: "https://picsum.photos/id/31/600/400",
    category: "Business",
    date: "2023-06-09",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Nilai tukar rupiah menguat terhadap dolar AS meskipun ketidakpastian ekonomi global masih membayangi."
  },
  {
    id: "13",
    title: "Video Viral Pria Selamatkan Kucing dari Banjir Tuai Pujian Netizen",
    image: "https://picsum.photos/id/40/600/400",
    category: "Viral",
    date: "2023-06-08",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Video seorang pria yang menyelamatkan kucing terjebak banjir menjadi viral dan menuai pujian dari warganet."
  },
  {
    id: "14",
    title: "Tren Fashion Busana Muslim Ramah Lingkungan Semakin Populer",
    image: "https://picsum.photos/id/64/600/400",
    category: "Lifestyle",
    date: "2023-06-07",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Busana muslim dengan bahan ramah lingkungan menjadi tren baru di kalangan desainer dan konsumen Indonesia."
  },
  {
    id: "15",
    title: "Tips Menjaga Kesehatan Mental di Tengah Kesibukan Pekerjaan",
    image: "https://picsum.photos/id/22/600/400",
    category: "Lifestyle",
    date: "2023-06-06",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    snippet: "Beberapa tips praktis untuk menjaga kesehatan mental di tengah padatnya jadwal dan tekanan pekerjaan."
  }
];

export default newsData;
