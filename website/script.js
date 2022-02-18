// Note: I'm avoiding arrow function for compatibility purpose

function oldCopyToClipboard(text) {
  temp = document.createElement('textarea');
  temp.value = text;

  temp.style.top = '0';
  temp.style.left = '0';
  temp.style.position = 'fixed';

  document.body.appendChild(temp);
  temp.focus();
  temp.select();

  document.execCommand('copy');

  document.body.removeChild(temp);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function copyEmail() {
  const email = 'christopher.19072@mhs.its.ac.id';
  if (!navigator.clipboard) {
    return oldCopyToClipboard(email);
  }
  copyToClipboard(email);
}

// Card structure (for development)
{
  /* <div class="character-card">
  <figure class="character-picture">
    <img src="assets/characters/kaworu.jpg" alt="" />
    <figcaption>
      <a
        href="https://anilist.co/character/1261/"
        class="animated-underline underline-link"
        target="_blank"
        rel="noopener noreferrer"
        >Kaworu Nagisa</a
      >
    </figcaption>
  </figure>
  <button class="button">Like</button>
</div> */
}

// IIFE untuk merender karakter-karakter evangelion, dan menyimpan like di localStorage
(function () {
  const charsObj = JSON.parse(localStorage.getItem('characters')) || {
    kaworu: {
      name: 'Kaworu Nagisa',
      img: 'assets/characters/kaworu.jpg',
      link: 'https://anilist.co/character/1261/',
      like: 0,
    },
    asuka: {
      name: 'Asuka Langley Soryu',
      img: 'assets/characters/asuka.jpg',
      link: 'https://anilist.co/character/94/',
      like: 0,
    },
    shinji: {
      name: 'Shinji Ikari',
      img: 'assets/characters/shinji.jpg',
      link: 'https://anilist.co/character/89/',
      like: 0,
    },
    rei: {
      name: 'Rei Ayanami',
      img: 'assets/characters/rei.jpg',
      link: 'https://anilist.co/character/86/',
      like: 0,
    },
    misato: {
      name: 'Misato Katsuragi',
      img: 'assets/characters/misato.jpg',
      link: 'https://anilist.co/character/1259/',
      like: 0,
    },
    kaji: {
      name: 'Ryouji Kaji',
      img: 'assets/characters/kaji.jpg',
      link: 'https://anilist.co/character/1260/',
      like: 0,
    },
  };

  localStorage.setItem('characters', JSON.stringify(charsObj));

  const charContainer = document.querySelector('.characters-container');

  Object.keys(charsObj).forEach((char) => {
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');
    const characterFig = document.createElement('figure');
    characterFig.classList.add('character-picture');
    const characterImg = document.createElement('img');
    characterImg.src = charsObj[char].img;
    characterImg.alt = '';
    const characterFigCaption = document.createElement('figcaption');
    const characterLink = document.createElement('a');
    characterLink.classList.add('animated-underline', 'underline-link');
    characterLink.href = charsObj[char].link;
    characterLink.target = '_blank';
    characterLink.rel = 'noopener noreferrer';
    characterLink.innerHTML = charsObj[char].name;
    const characterButton = document.createElement('button');
    characterButton.classList.add('button');
    characterButton.innerHTML =
      'Like (' + Math.max(0, Math.min(999, charsObj[char].like)) + ')';
    characterButton.id = char;

    characterButton.addEventListener('click', function () {
      const charBtn = document.querySelector('#' + char);
      const chars = JSON.parse(localStorage.getItem('characters')) || charsObj;
      const like = ++chars[char].like;
      charBtn.innerHTML = 'Like (' + Math.max(0, Math.min(999, like)) + ')';
      localStorage.setItem('characters', JSON.stringify(chars));
    });

    characterFigCaption.appendChild(characterLink);
    characterFig.appendChild(characterImg);
    characterFig.appendChild(characterFigCaption);
    characterCard.appendChild(characterFig);
    characterCard.appendChild(characterButton);
    charContainer.appendChild(characterCard);
  });
})();
