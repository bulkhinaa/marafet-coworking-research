/* ============================================
   Координаты коворкингов по 5 городам
   Точность: 150—300 м (по станциям метро / адресам)
   ============================================ */

window.CITIES_DATA = {
  moscow: {
    name: 'Москва',
    center: [55.7558, 37.6173],
    zoom: 11,
    population: '13 млн',
    coworkings: [
      // SoloSalon
      { name: 'SoloSalon Фрунзенская', network: 'SoloSalon', coords: [55.7274, 37.5780] },
      { name: 'SoloSalon Пролетарская', network: 'SoloSalon', coords: [55.7325, 37.6695] },
      { name: 'SoloSalon Парк Культуры', network: 'SoloSalon', coords: [55.7351, 37.5949] },
      { name: 'SoloSalon Курская', network: 'SoloSalon', coords: [55.7585, 37.6610] },
      { name: 'SoloSalon Пр-т Вернадского', network: 'SoloSalon', coords: [55.6770, 37.5057] },
      { name: 'SoloSalon Аэропорт', network: 'SoloSalon', coords: [55.8000, 37.5325] },
      { name: 'SoloSalon Цветной бульвар', network: 'SoloSalon', coords: [55.7700, 37.6201] },
      { name: 'SoloSalon Кожуховская', network: 'SoloSalon', coords: [55.7081, 37.6852] },
      { name: 'SoloSalon Новаторская', network: 'SoloSalon', coords: [55.6627, 37.5378] },
      { name: 'SoloSalon Ленинский 37', network: 'SoloSalon', coords: [55.7128, 37.5762] },
      { name: 'SoloSalon Никольская', network: 'SoloSalon', coords: [55.7570, 37.6250] },
      { name: 'SoloSalon Ленинский 95', network: 'SoloSalon', coords: [55.6781, 37.5333] },
      { name: 'SoloSalon Академическая', network: 'SoloSalon', coords: [55.6868, 37.5731] },
      { name: 'SoloSalon Вавилова', network: 'SoloSalon', coords: [55.6900, 37.5740] },
      { name: 'SoloSalon Коммунарка', network: 'SoloSalon', coords: [55.5610, 37.4860] },
      // INDI
      { name: 'INDI Профсоюзная 73', network: 'INDI', coords: [55.6750, 37.5407] },
      { name: 'INDI Рублёвское 34к2', network: 'INDI', coords: [55.7600, 37.4150] },
      { name: 'INDI Шухова 17к2', network: 'INDI', coords: [55.7212, 37.6080] },
      { name: 'INDI Ленинский 85', network: 'INDI', coords: [55.6840, 37.5390] },
      { name: 'INDI Таганская 36к2', network: 'INDI', coords: [55.7411, 37.6587] },
      { name: 'INDI Преображенская пл. 6', network: 'INDI', coords: [55.7960, 37.7150] },
      { name: 'INDI Мира 74с1', network: 'INDI', coords: [55.7900, 37.6320] },
      { name: 'INDI Днепропетровская 2б', network: 'INDI', coords: [55.6230, 37.6010] },
      // Glow
      { name: 'Glow Лухмановская', network: 'Glow', coords: [55.7137, 37.9120] },
      { name: 'Glow Б. Семёновская 28', network: 'Glow', coords: [55.7849, 37.7044] },
      { name: 'Glow Макаренко 3с2', network: 'Glow', coords: [55.7645, 37.6440] },
      { name: 'Glow Пулковская 2', network: 'Glow', coords: [55.8410, 37.4760] },
      { name: 'Glow Профсоюзная 45', network: 'Glow', coords: [55.6620, 37.5510] },
      // CUTEAM
      { name: 'CUTEAM Площадь Ильича', network: 'CUTEAM', coords: [55.7430, 37.6727] },
      { name: 'CUTEAM Шелепиха', network: 'CUTEAM', coords: [55.7607, 37.5258] },
      { name: 'CUTEAM Парк Победы', network: 'CUTEAM', coords: [55.7370, 37.5060] },
      // IQ Beauty
      { name: 'IQ Beauty Краснобогатырская', network: 'IQ Beauty', coords: [55.8137, 37.7095] },
      { name: 'IQ Beauty Предтеченский', network: 'IQ Beauty', coords: [55.7565, 37.5763] },
      { name: 'IQ Beauty ул. 1905 года', network: 'IQ Beauty', coords: [55.7649, 37.5689] },
      // Vibe
      { name: 'Vibe Пятницкая 62', network: 'Vibe', coords: [55.7370, 37.6280] },
      { name: 'Vibe Серебряническая 27', network: 'Vibe', coords: [55.7558, 37.6510] },
      // Nordic
      { name: 'Nordic.Rent Китай-город', network: 'Nordic', coords: [55.7565, 37.6354] },
      // Brush
      { name: 'Brush Новокузнецкая', network: 'Brush', coords: [55.7421, 37.6310] },
      { name: 'Brush Павелецкая', network: 'Brush', coords: [55.7314, 37.6394] },
      // Одиночки
      { name: 'Aʼlternativa Кропоткинская', network: 'Нет', coords: [55.7456, 37.6048] },
      { name: 'MASTERS Ботанический сад', network: 'Нет', coords: [55.8472, 37.6360] },
      { name: 'Aves Семёновская', network: 'Нет', coords: [55.7818, 37.7188] },
      { name: 'Ред Лаб Отрадное', network: 'Нет', coords: [55.8639, 37.6047] },
      { name: 'MakeupPoint БЦ Сытин', network: 'Makeup Point', coords: [55.7395, 37.6293] },
      { name: 'Cut Place', network: 'Нет', coords: [55.7600, 37.6300] },
      { name: 'Beautyinca', network: 'Нет', coords: [55.7480, 37.6420] },
      { name: 'RED LAB', network: 'Нет', coords: [55.7520, 37.6230] },
      { name: 'Synergy Beauty Space', network: 'Synergy Beauty', coords: [55.7710, 37.6320] }
    ]
  },

  spb: {
    name: 'Санкт-Петербург',
    center: [59.9343, 30.3351],
    zoom: 11,
    population: '5,6 млн',
    coworkings: [
      { name: 'COSMO Аллея Поликарпова', network: 'Нет', coords: [60.0030, 30.2575] },
      { name: 'Glamurkin', network: 'Нет', coords: [59.9343, 30.3351] },
      { name: 'IQ Beauty СПб (центр)', network: 'IQ Beauty', coords: [59.9420, 30.3450] },
      { name: 'SoloSalon Петроградская', network: 'SoloSalon', coords: [59.9665, 30.3140] },
      { name: 'SoloSalon Садовая', network: 'SoloSalon', coords: [59.9270, 30.3145] },
      { name: 'CUTEAM СПб', network: 'CUTEAM', coords: [59.9595, 30.3092] },
      { name: 'INDI Каменноостровский 40а', network: 'INDI', coords: [59.9670, 30.3138] },
      { name: 'INDI Дальневосточный 12к2', network: 'INDI', coords: [59.9080, 30.4970] },
      { name: 'IQ Beauty Парфёновская 7', network: 'IQ Beauty', coords: [59.8930, 30.3415] },
      { name: 'IQ Beauty Гончарная 16', network: 'IQ Beauty', coords: [59.9303, 30.3650] }
    ]
  },

  ekaterinburg: {
    name: 'Екатеринбург',
    center: [56.8389, 60.6057],
    zoom: 12,
    population: '1,5 млн',
    coworkings: [
      { name: 'ARTCRAFT Воеводина 8', network: 'ARTCRAFT', coords: [56.8333, 60.6042] },
      { name: 'ARTCRAFT Куйбышева 44', network: 'ARTCRAFT', coords: [56.8273, 60.6232] },
      { name: 'ARTCRAFT Банковский 3', network: 'ARTCRAFT', coords: [56.8364, 60.6055] },
      { name: 'SVOBODA ART', network: 'SVOBODA ART', coords: [56.8584, 60.6080] },
      { name: 'UNO.SHARE', network: 'Нет', coords: [56.8442, 60.6065] },
      { name: 'Resources', network: 'Нет', coords: [56.8442, 60.6065] },
      { name: 'Po Krasote', network: 'Нет', coords: [56.8517, 60.6021] },
      { name: 'Lx beauty coworking', network: 'Нет', coords: [56.8770, 60.5970] },
      { name: 'VIBE Beauty (ТРЦ Успенский)', network: 'Vibe', coords: [56.8331, 60.5984] }
    ]
  },

  krasnodar: {
    name: 'Краснодар',
    center: [45.0355, 38.9753],
    zoom: 12,
    population: '1,1 млн',
    coworkings: [
      { name: 'Beauty Rooms (Красная 176)', network: 'BeautyRoom', coords: [45.0552, 38.9818] },
      { name: 'MALIANO', network: 'Нет', coords: [45.0355, 38.9753] },
      { name: 'GLOW Северная', network: 'Glow', coords: [45.0440, 38.9710] },
      { name: 'GLOW Уральская', network: 'Glow', coords: [45.0205, 39.0382] },
      { name: 'SoloSalon Селезнева 147', network: 'SoloSalon', coords: [45.0432, 39.0288] }
    ]
  },

  kazan: {
    name: 'Казань',
    center: [55.8304, 49.0661],
    zoom: 11,
    population: '1,3 млн',
    coworkings: [
      { name: 'INDI Адоратского 3', network: 'INDI', coords: [55.8332, 49.1117] },
      { name: 'INDI Гаяза Исхаки', network: 'INDI', coords: [55.8420, 49.2018] },
      { name: 'Glow Абсалямова 22', network: 'Glow', coords: [55.8108, 49.1430] },
      { name: 'ArtEl Beauty Волочаевская 8', network: 'Artel', coords: [55.8089, 49.1080] },
      { name: 'Smart Space Декабристов 180', network: 'Нет', coords: [55.8418, 49.1190] },
      { name: 'Магия Бьюти Коворкинг', network: 'Нет', coords: [55.8137, 49.0235] }
    ]
  }
};

// Цвета сетей для маркеров
window.NETWORK_COLORS = {
  'SoloSalon': '#7A54FF',
  'INDI': '#583DB5',
  'Glow': '#18B38A',
  'CUTEAM': '#AB5CE9',
  'IQ Beauty': '#FFB800',
  'Vibe': '#FF7C8C',
  'Brush': '#B6A1FF',
  'Nordic': '#5A5A5B',
  'Artel': '#FF9F40',
  'ARTCRAFT': '#7A54FF',
  'SVOBODA ART': '#18B38A',
  'BeautyRoom': '#AB5CE9',
  'Makeup Point': '#FFB800',
  'Synergy Beauty': '#7A54FF',
  'Нет': '#858585'
};
