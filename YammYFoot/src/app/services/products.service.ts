//Верстка лицевой части приложения, теги для связки - "skill", "intensive", "course" - Поменять
//

import { Injectable } from '@angular/core';

const domain = 'https://expedicia-perm.ru'

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

 const products: IProduct[] = [ 
  
  {
    id: '1',
    title: 'Дальневосточная нерка',
    link: '/menyu',
    image:'/assets/components/phpthumbof/cache/full_IMG_9690.dc1c1449e4aa76e71a4c2ee6011ccbb5.jpg',
    text: 'Подается с отварным картофелем и перчиком чилли!',
    time: '750 р.',
    type: ProductType.Skill,
  },
   {
    id: '2',
    title: 'Хэглен',
    link: '/menyu',
    image: '/update/tovar/menu2021/kheglen.jpg',
    text: 'Стейк из лосятины, болгарский перец!',
    time: '850 р.',
    type: ProductType.Skill,
}, 
 {
    id: '3',
    title: 'Допустим курица',
    link: '/menyu',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  },
  {
    id: '4',
    title: 'Пюрешка',
    link: '/menyu',
    image: '/img/icons/products/icon-react.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  },
  {
    id: '5',
    title: 'Шашлык',
    link: '/menyu',
    image: '/img/icons/products/icon-first-stage.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  },
  {
    id: '6',
    title: 'Овсянка, сэр!',
    link: '/menyu',
    image: '/img/icons/products/icon-second-stage.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  }, 
  {
    id: '7',
    title: 'План-Капкан',
    link: '/menyu',
    image: '/update/tovar/menu2021/kapkan.jpg',
    text: 'Ассорти мясных деликатесов с овощами, соус BBQ!',
    time: '4700 р.',
    type: ProductType.Intensive,
  },
   {
   id: '8',
   title: 'Соленые грузди',
   link: '/menyu',
   image: '/update/tovar/menu2021/hol_zakus/gruzdi.jpg',
   text: 'Подаются со сметаной и зеленью!',
   time: '450 р.',
   type: ProductType.Intensive, 
  }, 
  /* {
    id: '9',
    title: 'Продвинутый JavaScript. Создаем свой Excel',
    link: '/menyu',
    image: '/img/icons/products/icon-advanced-js.svg',
    text: 'Webpack, Jest, Node.js, State Managers',
    time: 'С опытом 2 месяца',
    type: ProductType.Intensive,
  }, */
  {
   id: '10',
   title: 'Полярный рассвет',
   link: '/menyu',
   image: '/update/tovar/menu2021/IMG_7829.jpg',
   text: 'Творожный сыр, сливки, бисквит, шоколад!',
   time: '390 р.',
   type: ProductType.Course 
  },
   {
    id: '11',
    title: 'Кедровое мороженое',
    link: '/menyu',
    image: '/assets/components/phpthumbof/cache/full_IMG_0056.dc1c1449e4aa76e71a4c2ee6011ccbb5.jpg',
    text: 'С кедровыми орехами и ягодным конфитюром!',
    time: '320 р.',
    type: ProductType.Course,
  }, 
  /* {
    id: '12',
    title: 'Марафон JavaScript 5 дней - 5 проектов',
    link: '/menyu',
    image: '/img/icons/products/icon-marathon-five-x-five.svg',
    text: 'плагин для картинок, мини-кол Trello',
    time: 'С нуля 1 неделя',
    type: ProductType.Course,
  },
  {
    id: '13',
    title: 'От Junior до Middle за одно собеседование',
    link: '/menyu',
    image: '/img/icons/products/icon-marathon-mfd.svg',
    text: 'отличие Junior от Middle',
    time: 'С нуля 2 дня',
    type: ProductType.Course,
  },
  {
    id: '14',
    title: 'Воркшоп Перспективы в IT',
    link: '/menyu',
    image: '/img/icons/products/icon-workshop.svg',
    text: '4 шага к карьере в IT',
    time: 'С нуля 2 дня',
    type: ProductType.Course,
  }, */
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);
  
  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod)
      return group;
    }, {});
  }
}

