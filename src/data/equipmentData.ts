import type {
  Equipment,
} from "@/types";

export const equipmentData: Equipment[] = [
  // ele
  {
    id: "beaker-glass",
    name: "Beaker Glass",
    description: "Gelas yang bertujuan untuk menampung, mencampur, dan memanaskan larutan atau cairan kimia",
    departmentId: "elektro",
    image: "/assets/images/beaker.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/9124c77c-d57d-4cc3-bda4-0d6b489fe0a2.glb"
  },
  {
    id: "microcontroller",
    name: "Mikrokontroller",
    description: "Alat yang menjadi pusat kendali untuk memproses sinyal input dari sensor dan mengontrol berbagai perangkat output",
    departmentId: "elektro",
    image: "/assets/images/arduino.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/61c169d3-3453-4b38-acf8-31889c5267fd.glb"
  },
  {
    id: "switchboard",
    name: "Switchboard",
    description: "Berfungsi sebagai pusat pengatur, pembagi, dan pengaman distribusi tenaga listrik dari sumber utama",
    departmentId: "elektro",
    image: "/assets/images/switchboard.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/94576840-aa3a-4d4b-a81f-3f3301d62b8d.glb"
  },
  
  // otomotif
  {
    id: "car",
    name: "Mobil",
    description: "Digunakan untuk praktik dari teori yang sudah dipelajari",
    departmentId: "otomotif",
    image: "/assets/images/car.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/dc6c09e0-919a-4714-8440-0c69509a55b8.glb"
  },
  {
    id: "motorcycle",
    name: "Sepeda Motor",
    description: "Kerangka untuk mengembangkan sepeda motor",
    departmentId: "otomotif",
    image: "/assets/images/moped.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/a445baf8-4cb7-435e-ac11-13d5cb30edcd.glb"
  },
  {
    id: "tools",
    name: "Alat Perkakas",
    description: "Digunakan untuk mencopot/memasang komponen-komponen kendaraan",
    departmentId: "otomotif",
    image: "/assets/images/tools.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/9199494f-9d99-4414-b917-337abb2b4a63.glb"
  },
  
  // pemesinan
  {
    id: "welding-tools",
    name: "Alat Welding",
    description: "Digunakan untuk praktik mengelas besi",
    departmentId: "pemesinan",
    image: "/assets/images/welding.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/1adcf924-9b05-4316-b366-7b321c532782.glb"
  },
  {
    id: "cashier-machine",
    name: "Mesin Kasir",
    description: "Untuk praktik mengoperasikan mesin kasir pada industri",
    departmentId: "pemesinan",
    image: "/assets/images/casher.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/94a6f0bf-f6b1-4e84-bd4c-a7319f716441.glb"
  },
  {
    id: "conventional-lathe",
    name: "Mesin Bubut Konvensional",
    description: "Digunakan untuk memotong dan menyayat material untuk membentuk benda kerja silindris",
    departmentId: "pemesinan",
    image: "/assets/images/lathe.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/4c4ce634-4448-4cce-97db-47965361b561.glb"
  },
  
  // tik
  {
    id: "laptop",
    name: "Laptop",
    description: "Digunakan untuk berbagai hal, seperti editing, coding, dan lain-lain",
    departmentId: "tik",
    image: "/assets/images/macbook.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/20d7bccf-f5e9-45a7-aaf5-22e30b1de6d2.glb"
  },
  {
    id: "server-rackmount",
    name: "Server",
    description: "Alat untuk mengelola data, baik menyediakan, menyimpan ataupun menghapus",
    departmentId: "tik",
    image: "/assets/images/server.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/ffe831e6-683c-4871-ad30-70cc7a33fd0c.glb"
  },
  {
    id: "dslr-camera",
    name: "Kamera DSLR",
    description: "Untuk praktik mengambil gambar/video untuk kebutuhan broadcasting atau film",
    departmentId: "tik",
    image: "/assets/images/dslr.png",
    modelUrl: "https://file.marvfiles.web.id/uploads/c55ab2bd-7d7b-4e9d-b4bf-4c465e134253.glb"
  },
];
