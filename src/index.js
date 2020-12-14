import './styles/style.scss';
import getFooterYear from './scripts/footerDate';
import pickWorkshop from './scripts/workshopPick';


document.addEventListener('DOMContentLoaded', function() {
  getFooterYear();
  pickWorkshop();
});