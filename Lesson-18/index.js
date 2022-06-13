let car = {automaker: 'Opel',
    model: 'Astra',
    'graduation year': '1998',
    'average speed': '80 km/h',
    'tank volume': '52 l',
    driver1: 'John',
    driver2: 'Michael',
};

for (key in car) {
    alert( "Ключ: " + key + " значение: " + car[key] );
  };