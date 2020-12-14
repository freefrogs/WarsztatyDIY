import workshops from './data';

const pickWorkshop = () => {
  const buttons = [...document.querySelectorAll('.pick__button')];

  const active = (e) => {
    buttons.forEach(el => {
      el.classList.remove('pick__button--active');
    });
    e.target.classList.add('pick__button--active');
  }

  const showData = (e) => {
    const yt = document.querySelector('.workshop__yt');
    active(e);
    const id = e.target.dataset.id;
    const workshopData = workshops.filter(el => el.id === id);
    const keys = Object.keys(workshopData[0]);
    keys.forEach(el => {
      if (el !== 'id') {
        const prop = document.querySelector(`.workshop__${el}`);
        if (el === 'link') {
          if (workshopData[0].link) {
            yt.style.opacity = '1';
            prop.href = workshopData[0].link;
            return;
          } 
          yt.style.opacity = '0';
        } else if (el === 'img') {
          prop.src = workshopData[0].img;
        } else {
          console.log(workshopData[0][el]);
          prop.innerHTML = workshopData[0][el];
        }
      }
    })
  }
  
  buttons.forEach(el => {
    el.addEventListener('click', showData);
  })
}

export default pickWorkshop;