ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.                
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ]);    

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([55.808533, 37.719917], {
            balloonContentHeader: '4-я Гражданская улица, д.39/5',
            balloonContentBody: '<img src="http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png">'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'http://www.remontiruem-kv.ru/wp-content/uploads/2020/08/icon-1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-24, -24],
            iconContentOffset: [-345, -345]            
        }))        
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent: 'цвет <strong>голубой</strong>'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}