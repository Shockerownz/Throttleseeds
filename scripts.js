document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const strain = e.target.dataset.strain;
    openModal(strain);
  });
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const payLink = document.getElementById('payLink');
const note = document.querySelector('.note');
const closeBtn = modal.querySelector('.close-btn');

const strainData = {
  '9lb': {
    title: '9 Lb Hammer - Jinxproof Genetics',
    desc: 'Price: $80 for 6-pack Regular Seeds.',
    payUrl: 'https://cash.app/$ShockerOwnZ',
    note: 'After payment, please email your shipping info to ownedbyshocker@gmail.com.'
  },
  'rks': {
    title: 'RKS S1 - Copycat Genetics',
    desc: 'Price: $100 for 10-pack Feminized Seeds.',
    payUrl: 'https://cash.app/$ShockerOwnZ',
    note: 'After payment, please email your shipping info to ownedbyshocker@gmail.com.'
  },
  'queens': {
    title: 'Queens Revenge - Copycat Genetics',
    desc: 'Price: $100 for 10-pack Feminized Seeds.',
    payUrl: 'https://cash.app/$ShockerOwnZ',
    note: 'After payment, please email your shipping info to ownedbyshocker@gmail.com.'
  }
};

function openModal(strainKey) {
  const data = strainData[strainKey];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  payLink.href = data.payUrl;
  note.textContent = data.note;

  modal.setAttribute('aria-hidden', 'false');
}

closeBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.setAttribute('aria-hidden', 'true');
  }
});
