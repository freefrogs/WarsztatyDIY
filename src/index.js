import './styles/style.scss';
import a from './assets/a.jpg';
import b from './assets/b.jpg';
import c from './assets/c.jpg';
import d from './assets/d.jpg';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import youtube from './assets/youtube.png';
import pinterest from './assets/pinterest.png';

import getFooterYear from './scripts/footerDate';
import pickWorkshop from './scripts/workshopPick';

document.addEventListener('DOMContentLoaded', function() {
  getFooterYear();
  pickWorkshop();
});
