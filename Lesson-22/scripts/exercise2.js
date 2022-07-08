const playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
    album: 'Led Zeppelin IV',
    year: 1971,
    genre: 'hard-rock',
    time: 8.02,
  },

  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
    album: 'A Night at the Opera',
    year: 1975,
    genre: 'art-rock',
    time: 5.54,
  },

  {
    author: 'Michael Jackson',
    song: 'Billie Jean',
    album: 'Thriller',
    year: 1982,
    genre: 'pop',
    time: 4.54,
  },

  {
    author: 'LYNYRD SKYNYRD',
    song: 'Sweet Home Alabama',
    album: 'Second Helping',
    year: 1974,
    genre: 'rock',
    time: 4.44,
  },

  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
    album: 'Machine Head',
    year: 1972,
    genre: 'hard-rock',
    time: 5.4,
  },

  {
    author: 'Michael Jackson',
    song: 'Beat It',
    album: 'Thriller',
    year: 1982,
    genre: 'pop',
    time: 4.18,
  },

  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
    album: 'Electric Ladyland',
    year: 1968,
    genre: 'classic rock',
    time: 4.01,
  },

  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
    album: 'BACK IN BLACK',
    year: 1980,
    genre: 'hard-rock',
    time: 4.14,
  },

  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
    album: 'News of the World',
    year: 1977,
    genre: 'art-rock',
    time: 2.02,
  },

  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
    album: 'Metalica (The Black album)',
    year: 1991,
    genre: 'thrash metal',
    time: 5.32,
  },

  {
    author: 'A-HA',
    song: 'Take of me',
    album: 'Hunting High and Low',
    year: 1985,
    genre: 'synthpop',
    time: 3.47,
  },

  {
    author: 'Depeche mode',
    song: 'Personal Jesus',
    album: 'Violator',
    year: 1991,
    genre: 'alternative rock',
    time: 3.47,
  },

  {
    author: 'Madonna',
    song: 'Like a Prayer',
    album: 'Like a Prayer',
    year: 1989,
    genre: 'pop',
    time: 5.38,
  },

  {
    author: 'Kate Bush',
    song: 'Running Up That Hill',
    album: 'Hounds of Love',
    year: 1985,
    genre: 'new wave',
    time: 4.55,
  },

  {
    author: 'The Cure',
    song: 'Love song',
    album: 'Disintegration',
    year: 1989,
    genre: 'gothic rock',
    time: 4.55,
  },

  {
    author: 'Phil Collins',
    song: 'In The Air Tonight',
    album: 'Face Value',
    year: 1981,
    genre: 'pop rock',
    time: 5.31,
  },

  {
    author: 'Pink Floyd',
    song: 'Comfortably Numb',
    album: 'The Wall',
    year: 1979,
    genre: 'progresive rock',
    time: 6.23,
  },
];

const separator = '_';

const addElementTable = (valueElement, nameClass, idElement) => {
  const elementTable = document.createElement('div');

  playlistid.appendChild(elementTable);
  elementTable.innerHTML = valueElement;
  elementTable.classList.add(nameClass);
  elementTable.classList.add('element_table');
  elementTable.setAttribute('id', nameClass + separator + idElement);
};

const playlistid = document.getElementById('playlist');

const addPlaylist = () => {
  for (let i = 0; i < playList.length; i++) {
    addElementTable(playList[i].author, 'author', i);
    addElementTable(playList[i].song, 'song', i);
    addElementTable(playList[i].album, 'album', i);
    addElementTable(playList[i].year, 'year', i);
    addElementTable(playList[i].genre, 'genre', i);
    addElementTable(playList[i].time, 'time', i);
  }
};
   

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

const titleTable = document.getElementsByClassName('title_table');

const addClickTable = () => {
  for (let i = 0; i < titleTable.length; i++) {
    titleTable[i].addEventListener('click', () => {
      const myDiv = document.getElementsByClassName(titleTable[i].id);
      arr = Array.prototype.slice.call(myDiv);
      arr.sort(byField('innerText'));

      sortcolumn(arr, titleTable[i].id);
    });
  }
};

function sortcolumn(arr, nameColum) {
  const searchString = nameColum + separator;

  const itemTable = document.getElementsByClassName('element_table');
  
  for (let i = 0; i < arr.length; i++) {

    const idName = String(arr[i].id);
    const indexString = idName.replace(searchString, '');
    let idElement = arr.length + 1 + i;

    let valueTable = document.getElementById(
      nameColum + separator + indexString
    );

    itemTable[nameColum + separator + i].innerText = valueTable.innerText;
    itemTable[nameColum + separator + i].setAttribute('id', nameColum + separator + idElement);
  }
}

addPlaylist();
addClickTable();
