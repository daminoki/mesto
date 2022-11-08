export const cardItem = (name, imgSrc) => {
    return `
      <div class="cards__item">
        <img class="cards__img" src="${imgSrc}" alt="">
        <div class="cards__description">
          <h3 class="cards__name">${name}</h3>
          <button class="cards__like"></button>
        </div>
        <button class="cards__trash"></button>
      </div>
    `;
  };