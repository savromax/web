function getYaMap() {
    var myMap = new ymaps.Map("map", {
            center: [55.680970, 37.826319],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    
    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [55.888740, 37.430390], // Химки
                    [55.933564, 37.514104], // Долгопрудный
                    [55.910483, 37.736402], // Мытищи
                    [55.933383, 37.842735], // Юбилейный
                    [55.922212, 37.854629], // Королев
                    [55.971809, 37.924374], // Ивантеевка
                    [55.920875, 37.991622], // Щелково
                    [55.854522, 38.441831], // Ногинск
                    [55.796339, 37.938199], // Балашиха
                    [55.760515, 37.855141], // Реутов
                    [55.740167, 37.861725], // Новокосино
                    [55.683793, 37.928704], // Некрасовка
                    [55.676494, 37.898116], // Люберцы
                    [55.659840, 37.863199], // Котельники
                    [55.630939, 37.849616], // Дзержинский
                    [55.556869, 37.708778], // Видное
                    [55.431177, 37.544737], // Подольск
                    [55.484842, 37.305561], // Троицк
                    [55.558121, 37.370724], // Новая Москва
                    [55.645918, 37.401680], // Солнцево
                    [55.655442, 37.330444], // Переделкино
                    [55.678859, 37.263986], // Одинцово
                    [55.831099, 37.330192] // Красногорск
                ]                
            ]            
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#0036cc',
        // Цвет обводки.
        //strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        //strokeWidth: 5,
        // Стиль обводки.
        //strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    myMap.geoObjects        
        .add(new ymaps.Placemark([55.7691937, 37.59000209999999], {
            balloonContentHeader: '4-я Гражданская улица, д.39/5',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))        
        .add(new ymaps.Placemark([55.6934269, 37.90677260000007], {
            balloonContentHeader: 'Комсомольский Проспект, д. 15',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +            
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.6970563, 37.56086800000003], {
            balloonContentHeader: 'Ленинский Проспект, д.56',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +            
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))        
        .add(new ymaps.Placemark([55.8577039, 37.619542000000024], {
            balloonContentHeader: 'ул.Олонецкая, д.25',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +            
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.639373, 37.59856690000004], {
            balloonContentHeader: 'ул.Северное Чертаново, д.2/206',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.808522, 37.72003399999994], {
            balloonContentHeader: '4-я Гражданская улица, д.39/5',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.8624461, 37.521152400000005], {
            balloonContentHeader: 'ул.Солнечногорская, д. 25',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.7975917, 37.60089449999998], {
            balloonContentHeader: 'ул.Полковая, д.20',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.875685, 37.724343999999974], {
            balloonContentHeader: 'ул.Проходчиков, д.10/2',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.6367025, 37.67295319999994], {
            balloonContentHeader: 'ул.Кантемировская, д.17',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.537196, 37.509476800000016], {
            balloonContentHeader: 'ул.Кадырова, д 10/2',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.69420029999999, 37.56652680000002], {
            balloonContentHeader: 'ул.Вавилова, д. 43',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.6517582, 37.76994319999994], {
            balloonContentHeader: 'ул.Братиславская, д.33',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.68084320000001, 37.66293429999996], {
            balloonContentHeader: 'Проспект Андропова, д.26',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.663808, 37.77075100000002], {
            balloonContentHeader: 'ул.Белореченская, д.30',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.7077578, 37.927521100000035], {
            balloonContentHeader: 'ул.Рождественская, д.29',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.754683, 37.75652500000001], {
            balloonContentHeader: 'Наш офис: Плеханова 4А — ООО «ГК Ремонт Выгодно»',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/logo.png">' +
            '<p>Всегда рады встретить Вас в нашем офисе и ответить на все Ваши вопросы.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/favicon-7.ico',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }));
}