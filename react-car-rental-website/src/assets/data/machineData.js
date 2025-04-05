import img01 from "../all-images/machines-img/excavator-komatsu.jpg";
import img02 from "../all-images/machines-img/loader-cat.jpg";
import img03 from "../all-images/machines-img/bulldozer-komatsu.jpg";
import img04 from "../all-images/machines-img/crane-kobelco.jpg";
import img05 from "../all-images/machines-img/compactor-sakaii.jpg";
import img06 from "../all-images/machines-img/generator-honda.jpg";
import img07 from "../all-images/machines-img/forklift-toyota.jpg";
import img08 from "../all-images/machines-img/mixer-truck.jpg";

const machineData = [
  {
    id: 1,
    manufacturer: "Komatsu",
    rating: 112,
    machineName: "Máy xúc Komatsu PC200",
    imgUrl: img01,
    model: "PC200-8",
    category: "Máy xúc",
    capacity: "0.8 m³",
    weight: "20 tấn",
    rentalRate: 1500000,
    rateUnit: "VND/ngày",
    description:
      "Máy xúc bánh xích Komatsu PC200-8, dung tích gầu 0.8 m³, phù hợp cho các công trình xây dựng vừa và lớn. Hoạt động ổn định, tiết kiệm nhiên liệu.",
  },
  {
    id: 2,
    manufacturer: "Caterpillar",
    rating: 102,
    machineName: "Xe xúc lật CAT 950H",
    imgUrl: img02,
    model: "950H",
    category: "Xe xúc lật",
    capacity: "3.0 m³",
    weight: "18 tấn",
    rentalRate: 1800000,
    rateUnit: "VND/ngày",
    description:
      "Xe xúc lật Caterpillar 950H mạnh mẽ, dung tích gầu lớn, hiệu suất cao cho việc bốc xúc vật liệu xây dựng, khai thác mỏ.",
  },
  {
    id: 3,
    manufacturer: "Komatsu",
    rating: 132,
    machineName: "Xe ủi Komatsu D65EX",
    imgUrl: img03,
    model: "D65EX-12",
    category: "Xe ủi",
    capacity: "N/A",
    weight: "21 tấn",
    rentalRate: 2000000,
    rateUnit: "VND/ngày",
    description:
      "Xe ủi Komatsu D65EX-12, chuyên dụng san lấp mặt bằng, ủi đất đá hiệu quả cho các công trình giao thông, xây dựng.",
  },
  {
    id: 4,
    manufacturer: "Kobelco",
    rating: 102,
    machineName: "Cần cẩu Kobelco CKS900",
    imgUrl: img04,
    model: "CKS900",
    category: "Cần cẩu bánh xích",
    capacity: "90 tấn",
    weight: "85 tấn",
    rentalRate: 5000000,
    rateUnit: "VND/ngày",
    description:
      "Cần cẩu bánh xích Kobelco CKS900, sức nâng 90 tấn, tầm vươn xa, phù hợp cho việc lắp dựng kết cấu thép, cẩu hàng nặng.",
  },
  {
    id: 5,
    manufacturer: "Sakai",
    rating: 94,
    machineName: "Xe lu Sakai SV520D",
    imgUrl: img05,
    model: "SV520D",
    category: "Xe lu rung",
    capacity: "N/A",
    weight: "10 tấn",
    rentalRate: 1200000,
    rateUnit: "VND/ngày",
    description:
      "Xe lu rung Sakai SV520D, lực rung mạnh, chuyên đầm nén nền đường, nền móng công trình, đảm bảo độ chặt yêu cầu.",
  },
  {
    id: 6,
    manufacturer: "Honda",
    rating: 119,
    machineName: "Máy phát điện Honda EU70is",
    imgUrl: img06,
    model: "EU70is",
    category: "Máy phát điện",
    capacity: "7 kVA",
    weight: "118 kg",
    rentalRate: 500000,
    rateUnit: "VND/ngày",
    description:
      "Máy phát điện Honda EU70is công suất 7kVA, siêu chống ồn, tiết kiệm nhiên liệu, cung cấp nguồn điện ổn định cho công trường, sự kiện.",
  },
  {
    id: 7,
    manufacturer: "Toyota",
    rating: 82,
    machineName: "Xe nâng Toyota 8FD30",
    imgUrl: img07,
    model: "8FD30",
    category: "Xe nâng dầu",
    capacity: "3 tấn",
    weight: "4.5 tấn",
    rentalRate: 800000,
    rateUnit: "VND/ngày",
    description:
      "Xe nâng dầu Toyota 8FD30, sức nâng 3 tấn, hoạt động bền bỉ, linh hoạt trong kho bãi, nhà xưởng.",
  },
  {
    id: 8,
    manufacturer: "Hino",
    rating: 52,
    machineName: "Xe trộn bê tông Hino FM",
    imgUrl: img08,
    model: "FM8JNSA",
    category: "Xe trộn bê tông",
    capacity: "7 m³",
    weight: "24 tấn",
    rentalRate: 2500000,
    rateUnit: "VND/ngày",
    description:
      "Xe trộn bê tông Hino FM, dung tích bồn 7m³, đảm bảo chất lượng bê tông và vận chuyển đến công trình.",
  },
];

export default machineData;