const slideList = document.querySelectorAll('.slide');
const gTextImg = document.querySelectorAll('.text-img')[0];
const bTextImg = document.querySelectorAll('.text-img')[1];
const sTextImg = document.querySelectorAll('.text-img')[2];
const gText = document.querySelectorAll('.text')[0];
const bText = document.querySelectorAll('.text')[1];
const sText = document.querySelectorAll('.text')[2];
const inputName = document.querySelectorAll('.input')[0];
const inputPhone = document.querySelectorAll('.input')[1];
const inputEmail = document.querySelectorAll('.input')[2];
const errMessageName = document.querySelectorAll('.error-message')[0];
const errMessagePhone = document.querySelectorAll('.error-message')[1];
const errMessageEmail = document.querySelectorAll('.error-message')[2];
const errMessageEmail1 = document.querySelector('.errMessageEmail1');
const form = document.querySelector('.form');
const applyBtn = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const btnGoHomepage = document.querySelector('.btn-modal');
const btnApply = document.querySelector('.btn-apply');
const closeMakeOrder = document.querySelector('.close-make-order');

const regExpValidName = /^[a-zA-ZА-Яа-я\s]+$/;
const regExpValidPhone = /^\+?[0-9\s]+$/;
// const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const validData = {
  getFeedback(name, phone, email, form, btnhome, closeApplyPage) {

    if (name) {
      name.addEventListener('keypress', event => {
        if (!regExpValidName.test(event.key)) {
          errMessageName.style.opacity = '1';
          event.preventDefault();
        } else {
          errMessageName.style.opacity = '0';
        }
      })
      name.addEventListener('focusout', () => {
        if (name.value != '') {
          name.value = name.value[0].toUpperCase() + name.value.slice(1);
        }
        return;
      })
      name.addEventListener('focus', () => {
        errMessageName.style.opacity = '0';
        console.log('focus');
      })
    };
    if (phone) {
      phone.addEventListener('keypress', event => {
        if (!regExpValidPhone.test(event.key)) {
          errMessagePhone.style.opacity = '1';
          event.preventDefault();
        } else {
          errMessagePhone.style.opacity = '0';
        }
      })
      phone.addEventListener('focus', () => {
        errMessagePhone.style.opacity = '0';
        console.log('focus');
      })
    };

    // if (email) {
    // email.addEventListener('keypress', event => {
    // if (!regExpValidEmail.test(event.key)) {
    // errMessageEmail.style.opacity = '1';
    // event.preventDefault();
    // } else {
    // errMessageEmail.style.opacity = '0';
    // }
    // })
    // };

    if (email) {
      email.addEventListener('focusout', () => {
        if (!email.value.includes('@')) {
          console.log('error');
          errMessageEmail.style.opacity = '1';
        } else {
          errMessageEmail.style.opacity = '0';
          console.log(' no error');
        }

      })
      email.addEventListener('focus', () => {
        errMessageEmail.style.opacity = '0';
        console.log('focus');
      })
    }

    if (form) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        modalOverlay.classList.add('is-open');
        modal.classList.add('is-visible');
      })
      if (errMessageEmail.classList.contains('is-visible')) {
        btnApply.disable = true;
      }

    };

    if (btnhome) {
      btnhome.setAttribute('onclick', 'location.href = "index.html"');
    }

    if (closeApplyPage) {
      closeApplyPage.setAttribute('onclick', 'location.href = "index.html"');
    }

  }
};

const init = () => {
  validData.getFeedback(inputName, inputPhone, inputEmail, form, btnGoHomepage, closeMakeOrder);
};
document.addEventListener('DOMContentLoaded', init);

//clickable elements
if (gTextImg) {
  gTextImg.setAttribute('onclick', 'location.href = "g-level.html"');
}
if (bTextImg) {
  bTextImg.setAttribute('onclick', 'location.href = "b-level.html"');
}
if (sTextImg) {
  sTextImg.setAttribute('onclick', 'location.href = "s-level.html"');
}


//touch events
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  console.log('is touch');

  slideList.forEach(slide => slide.addEventListener('click', e => {
    slide.classList.toggle('is-open');

    slide.querySelectorAll('.text-sport-level').forEach(textSport => textSport.classList.toggle('_visible'));
    slide.querySelectorAll('.text-go').forEach(textGo => textGo.classList.toggle('_visible'));

    if (slide.classList.contains('is-open')) {
      slide.querySelectorAll('.text-glevel-img').forEach(textlevelImg =>
        textlevelImg.setAttribute('src', 'img/g-level-title-active.svg'));

      slide.querySelectorAll('.text-blevel-img').forEach(textlevelImg =>
        textlevelImg.setAttribute('src', 'img/b-level-title-active.svg'));

      slide.querySelectorAll('.text-slevel-img').forEach(textlevelImg =>
        textlevelImg.setAttribute('src', 'img/s-level-title-active.svg'));
    } else {
      slide.querySelectorAll('.text-glevel-img').forEach(textlevelImg =>
        textlevelImg.setAttribute('src', 'img/g-level-title.svg'));

      slide.querySelectorAll('.text-blevel-img').forEach(textlevelImg =>
        textlevelImg.setAttribute('src', 'img/b-level-title.svg'));

      slide.querySelectorAll('.text-slevel-img').forEach(textlevelImg =>
        textlevelImg.setAttribute('src', 'img/s-level-title.svg'));
      console.log('is not open');
    }
  }));

} else if (!isMobile.any()) {
  document.body.classList.add('_pc');
  console.log('is pc');

  slideList.forEach(slide => slide.addEventListener('mouseenter', e => {
    slide.classList.add('is-open');
    slide.querySelectorAll('.text-sport-level').forEach(textSport => textSport.classList.add('_visible'));
    slide.querySelectorAll('.text-go').forEach(textGo => textGo.classList.add('_visible'));
  }));

  slideList.forEach(slide => slide.addEventListener('mouseleave', e => {
    slide.classList.remove('is-open');
    slide.querySelectorAll('.text-sport-level').forEach(textSport => textSport.classList.remove('_visible'));
    slide.querySelectorAll('.text-go').forEach(textGo => textGo.classList.remove('_visible'));
  }));
}