function getYaMap() {
    var myMap = new ymaps.Map("map", {
        center: [55.686714, 37.766138],
        zoom: 9,
        controls: ['zoomControl', 'fullscreenControl', 'rulerControl']
    }, {            
        zoomControlSize: 'small',
        zoomControlPosition: {
            top: '10px',
            left: '10px'
        }
    });

    myMap.behaviors.disable('scrollZoom');
    
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
        fillColor: '#fff',
        // Цвет обводки.
        strokeColor: '#cc0000',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.75,
        // Ширина обводки.
        strokeWidth: 1,
        // Стиль обводки.
        //strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    myMap.geoObjects        
        .add(new ymaps.Placemark([55.754683, 37.75652500000001], {
            balloonContentHeader: 'Наш офис: Плеханова 4А — ООО «ГК Ремонт Выгодно»',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/logo.png">' +
            '<p>Всегда рады встретить Вас в нашем офисе и ответить на все Ваши вопросы.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.7691937, 37.59000209999999], {
            balloonContentHeader: 'ул.Гашека, д.9',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-6.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ: Этап №1 В первый день ремонта был произведён полный демонтаж в ванной комнате и туалете, а именно демонтированы и вынесены старая чугунная ванна и её смеситель, раковина, унитаз, светильники, дверные блоки</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))        
        .add(new ymaps.Placemark([55.6934269, 37.90677260000007], {
            balloonContentHeader: 'Комсомольский Проспект, д. 15',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-16.jpg">' +            
            '<p>Ремонт ванной комнаты и туалета под ключ: Ванная комната 1.7 х 1.7 и туалет 0.85 х 1.1: Этап №1 Демонтаж труб водопровода и канализации Демонтаж смесителя ванны и унитаза Демонтаж гипсового воздуховода в туалете Демонтаж светильника Устройство перегородки из пеноблока с устройством проёма под люк невидимку в ревизионном шкафе</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.6970563, 37.56086800000003], {
            balloonContentHeader: 'Ленинский Проспект, д.56',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-8.jpg">' +            
            '<p>При ремонте ванной комнаты и туалета под ключ, был сделан полный демонтаж: старые чугунная ванна,плитка, трубы водяные и канализационные, дверные блоки, штукатурка до кирпичного основания и т.д. После демонтажа полностью от стояка через коллектора скрытно разведена холодная и горячая вода, а также трубы канализации.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))        
        .add(new ymaps.Placemark([55.8577039, 37.619542000000024], {
            balloonContentHeader: 'ул.Олонецкая, д.25',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-3.jpg">' +            
            '<p>При совмещении — ремонте ванной комнаты и туалета , в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете, плитка со стен и пола, дверные блоки</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.639373, 37.59856690000004], {
            balloonContentHeader: 'ул.Северное Чертаново, д.2/206',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-14.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ: Этап №1 Демонтаж чугунной ванны Демонтаж унитаза (с сохранением) Демонтаж дверных блоков Демонтаж канализационных труб Демонтаж труб водопровода и канализации Демонтаж смесителя ванны Демонтаж полотенцесушителя Демонтаж светильников Демонтаж керамической плитки со стен и пола</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.808522, 37.72003399999994], {
            balloonContentHeader: '4-я Гражданская улица, д.39/5',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image.jpg">' +
            '<p>При совмещении — ремонте ванной комнаты и туалета, в результате получили совмещённый санузел под ключ. Работы проводились в следующей последовательности: был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.8624461, 37.521152400000005], {
            balloonContentHeader: 'ул.Солнечногорская, д. 25',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-4.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ производился следующим образом. На первом этапе работ был сделан полный демонтаж:старой ванны, раковины, унитаза, плитки со стен и пола, дверных блоков и старых труб водоснабжения и канализации.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.7975917, 37.60089449999998], {
            balloonContentHeader: 'ул.Полковая, д.20',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-5.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ: сделан полный демонтаж старой плитки со стен и пола, труб водопровода и канализации, дверных блоков и т.д. Новый водопровод был сделан полипропиленовыми трубами, а система водоотведения-канализации заменена на новые трубы ПВХ скрытно в штробе от стояков</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.875685, 37.724343999999974], {
            balloonContentHeader: 'ул.Проходчиков, д.10/2',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-2.jpg">' +
            '<p>Был сделан полный демонтаж сантехнической кабины ванной комнаты и туалета. Выстроены новые перегородки из пазо-гребневого влагостойкого блока, сделаны системы ХВС и ГВС из труб ПП и канализации трубами ПВХ. Стены и пол были подготовлены-выровнены и покрыты гидроизоляцией, после чего были облицованы керамической плиткой.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.6367025, 37.67295319999994], {
            balloonContentHeader: 'ул.Кантемировская, д.17',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-13.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ — перепланировка в результате которой получился совмещённый санузел: На первом этапе работ был сделан полный демонтаж всей сантехники, дверей, старых труб, старой плитки со стен и пола, перегородка м/у ванной комнатой и туалетом.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.537196, 37.509476800000016], {
            balloonContentHeader: 'ул.Кадырова, д 10/2',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-15.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ  был сделан  в три этапа в течении двух недель. На первом этапе работ был сделан полный демонтаж старой плитки со стен и пола, ванной, раковины, дверных блоков, унитаза и светильников.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.69420029999999, 37.56652680000002], {
            balloonContentHeader: 'ул.Вавилова, д. 43',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-9.jpg">' +
            '<p>Ремонт ванной комнаты и туалета под ключ был сделан следующим образом: На первом этапе ремонта:  Был произведён полный демонтаж всего старого сантехнического оборудования (ванна чугунная, раковина, унитаз, смесители), старые металлические трубы водопровода</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.6517582, 37.76994319999994], {
            balloonContentHeader: 'ул.Братиславская, д.33',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-12.jpg">' +
            '<p>При ремонте ванной комнаты и туалета под ключ был сделан полный демонтаж: старая чугунная ванна, унитаз, раковина, дверки и перегородка ревизионного шкафа в туалете, плитка со стен и пола.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.68084320000001, 37.66293429999996], {
            balloonContentHeader: 'Проспект Андропова, д.26',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-10.jpg">' +
            '<p>Было произведено совмещение ванной комнаты и туалета и сделан совмещённый санузел. Были демонтированы чугунная ванна, раковина, унитаз, керамическая старая плитка со стен и пола, перегородка м/у ванной комнатой и туалетом, все старые трубы и дверные блоки. Дверной проём в туалет был заделан блоками.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }))
        .add(new ymaps.Placemark([55.663808, 37.77075100000002], {
            balloonContentHeader: 'ул.Белореченская, д.30',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/balloon-content-image-11.jpg">' +
            '<p>По вопросу ремонта ванной комнаты обратились в ГК Ремонт-Выгодно, которую рекомендовали как надежную и опытную компанию. Могу сказать, что работой более, чем довольна: точно, быстро, недорого.</p>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/09/icon.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -10]    
        }));
}