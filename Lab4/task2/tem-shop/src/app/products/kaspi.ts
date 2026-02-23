export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

export const PRODUCTS: Product[] = 
[
  {
    "id": 1,
    "name": "Аквариумный 40 см",
    "description": "Аквариумный 40 см — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 1900,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p6e/p10/101445933.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p6e/p10/101445933.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p6e/p10/101445933.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p6e/p10/101445933.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/akvariumnyi-40-sm-156052177/?c=750000000"
  },
  {
    "id": 2,
    "name": "Аквариумный 45 см",
    "description": "Аквариумный 45 см — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 1550,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/pe8/p0c/101445944.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/pe8/p0c/101445944.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pe8/p0c/101445944.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pe8/p0c/101445944.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/akvariumnyi-45-sm-156052180/?c=750000000"
  },
  {
    "id": 3,
    "name": "Шланг 2503-100 1 шт 100 м",
    "description": "Шланг 2503-100 1 шт 100 м — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 13500,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/pa0/pe3/103805862.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/pa0/pe3/103805862.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pa0/pe3/103805862.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pa0/pe3/103805862.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/shlang-2503-100-1-sht-100-m-156631190/?c=750000000"
  },
  {
    "id": 4,
    "name": "Жилет 2026 зеленый, хаки S",
    "description": "Жилет 2026 зеленый, хаки S — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 3500,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p8d/p90/104412657.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p8d/p90/104412657.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p8d/p90/104412657.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p8d/p90/104412657.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/zhilet-2026-zelenyi-haki-s-156785996/?c=750000000"
  },
  {
    "id": 5,
    "name": "Tetra 107 гранулы 45 г",
    "description": "Tetra 107 гранулы 45 г — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 2700,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p1b/pda/104878331.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p1b/pda/104878331.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p1b/pda/104878331.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p1b/pda/104878331.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/tetra-107-granuly-45-g-156905413/?c=750000000"
  },
  {
    "id": 6,
    "name": "Уют комбинезон для мини собак XS",
    "description": "Уют комбинезон для мини собак XS — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 8000,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p71/p7e/105786616.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p71/p7e/105786616.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p71/p7e/105786616.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p71/p7e/105786616.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/ujut-kombinezon-dlja-mini-sobak-xs-157139930/?c=750000000"
  },
  {
    "id": 7,
    "name": "Пижон поводок металл, текстиль, длина 1.2 м 6 кг",
    "description": "Пижон поводок металл, текстиль, длина 1.2 м 6 кг — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 1999,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/pc8/pcc/104794090.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/pc8/pcc/104794090.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pc8/pcc/104794090.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pc8/pcc/104794090.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/pizhon-povodok-9441417-metall-tekstil-dlina-1-2-m-6-kg-156884551/?c=750000000"
  },
  {
    "id": 8,
    "name": "Purina Veterinary Diets Renal курица 1.5 кг",
    "description": "Purina Veterinary Diets Renal курица 1.5 кг — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 14800,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p97/pf2/107259359.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p97/pf2/107259359.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p97/pf2/107259359.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p97/pf2/107259359.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/purina-veterinary-diets-renal-kuritsa-1-5-kg-157530841/?c=750000000"
  },
  {
    "id": 9,
    "name": "Pets brunch Probio-Digestion для взрослых средних и крупных пород 4 кг",
    "description": "Pets brunch Probio-Digestion для взрослых средних и крупных пород 4 кг — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 15284,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p61/p18/103079857.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p61/p18/103079857.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p61/p18/103079857.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p61/p18/103079857.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/pets-brunch-probio-digestion-dlja-vzroslyh-srednih-i-krupnyh-porod-4-kg-156449789/?c=750000000"
  },
  {
    "id": 10,
    "name": "YOUR CODE аксессуар YOURCODEHORSE черный XL",
    "description": "YOUR CODE аксессуар YOURCODEHORSE черный XL — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 5000,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p87/pf9/109887351.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p87/pf9/109887351.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p87/pf9/109887351.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p87/pf9/109887351.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/your-code-aksessuar-yourcodehorse-chernyi-xl-158254777/?c=750000000"
  },
  {
    "id": 11,
    "name": "StolyarKRG Стружка ясеня впитывающий 5 л",
    "description": "StolyarKRG Стружка ясеня впитывающий 5 л — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 930,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p45/p77/104418509.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p45/p77/104418509.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p45/p77/104418509.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p45/p77/104418509.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/stolyarkrg-struzhka-jasenja-vpityvajuschii-5-l-156787663/?c=750000000"
  },
  {
    "id": 12,
    "name": "Водопад, грот, фигурка ARM-142",
    "description": "Водопад, грот, фигурка ARM-142 — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 18149,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p1a/p12/109068248.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p1a/p12/109068248.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p1a/p12/109068248.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p1a/p12/109068248.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/vodopad-grot-figurka-arm-142-158015963/?c=750000000"
  },
  {
    "id": 13,
    "name": "Utopia SDA7BB18 размер 16.8 вес 10.6 г золото, бриллиант, жемчуг",
    "description": "Utopia SDA7BB18 размер 16.8 вес 10.6 г золото, бриллиант, жемчуг — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 5000000,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/pa9/pb0/19859106.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/pa9/pb0/19859106.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pa9/pb0/19859106.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/pa9/pb0/19859106.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/utopia-sda7bb18-razmer-16-8-ves-10-6-g-zoloto-brilliant-zhemchug-133364109/?c=750000000"
  },
  {
    "id": 14,
    "name": "Серьги Divina бижутерный сплав, без вставок",
    "description": "Серьги Divina бижутерный сплав, без вставок — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 5000000,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p23/p41/68564742.jpeg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p23/p41/68564742.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p23/p41/68564742.jpeg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p23/p41/68564742.jpeg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/ser-gi-divina-bizhuternyi-splav-bez-vstavok-146790444/?c=750000000"
  },
  {
    "id": 15,
    "name": "Квадроцикл GOES 400L взрослый 400 куб. см серый",
    "description": "Квадроцикл GOES 400L взрослый 400 куб. см серый — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 5000000,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p76/p5d/91918906.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p76/p5d/91918906.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p76/p5d/91918906.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p76/p5d/91918906.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/kvadrotsikl-goes-400l-vzroslyi-400-kub-sm-seryi-153689254/?c=750000000"
  },
  {
    "id": 16,
    "name": "Офисный стеллаж QURMET Kano Ring MQR90.33, 300х45х203 см",
    "description": "Офисный стеллаж QURMET Kano Ring MQR90.33, 300х45х203 см — это современное устройство с мощным процессором и отличной камерой. Идеально подходит для повседневных задач, игр и качественной съемки видео. Высокая автономность обеспечит работу в течение всего дня.",
    "price": 5000000,
    "rating": 4.5,
    "image": "https://resources.cdn-kaspi.kz/img/m/p/p4b/paf/47078298.jpg?format=preview-large",
    "images": [
      "https://resources.cdn-kaspi.kz/img/m/p/p4b/paf/47078298.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p4b/paf/47078298.jpg?format=preview-large",
      "https://resources.cdn-kaspi.kz/img/m/p/p4b/paf/47078298.jpg?format=preview-large"
    ],
    "link": "https://kaspi.kz/shop/p/ofisnyi-stellazh-qurmet-kano-ring-mqr90-33-300h45h203-sm-140932672/?c=750000000"
  }
]