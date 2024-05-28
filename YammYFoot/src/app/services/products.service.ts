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
    title: 'У Горги',
    link: '/menyu',
    image:'assets/components/phpthumbof/cache/full_IMG_9690.dc1c1449e4aa76e71a4c2ee6011ccbb5.jpg',
    text: 'Сытный обед 250р.',
    time: '09:00-21:00',
    type: ProductType.Skill,
  },
   {
    id: '2',
    title: 'У Анастасии',
    link: '/menyu',
    image: 'update/tovar/menu2021/kheglen.jpg',
    text: 'Ужин по грузински 300р.',
    time: '08:00-22:00',
    type: ProductType.Skill,
}, 
 {
    id: '3',
    title: 'У Виталия',
    link: '/menyu',
    image: 'img/icons/products/icon-state-managers.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  },
  {
    id: '4',
    title: 'У Александры',
    link: '/menyu',
    image: 'img/icons/products/icon-react.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  },
  {
    id: '5',
    title: 'У Генадия',
    link: '/menyu',
    image: 'img/icons/products/icon-first-stage.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  },
  {
    id: '6',
    title: 'У Наталии',
    link: '/menyu',
    image: 'img/icons/products/icon-second-stage.svg',
    text: 'Вставить изображение',
    time: 'Описание',
    type: ProductType.Skill,
  }, 
  {
    id: '7',
    title: 'Европейский ужин',
    link: '/menyu',
    image: 'update/tovar/menu2021/kapkan.jpg',
    text: 'Макароны по-флотски <br> Салат "Греческий"',
    time: 'Доставка завтра до 12:00',
    type: ProductType.Intensive,
  },
   {
   id: '8',
   title: 'Азиатский завтрак',
   link: '/menyu',
   image: 'update/tovar/menu2021/hol_zakus/gruzdi.jpg',
   text: 'Подаются со сметаной и зеленью!',
   time: 'Доставка сегодня до 21:00',
   type: ProductType.Intensive, 
  }, 
   {
    id: '9',
    title: 'Кавказский обед',
    link: '/menyu',
    image: 'img/icons/products/icon-advanced-js.svg',
    text: 'Шашлычок',
    time: 'Доставка завтра до 12:00',
    type: ProductType.Intensive,
  }, 
  {
   id: '10',
   title: 'Борщ',
   link: '/menyu',
   image: 'update/tovar/menu2021/IMG_7829.jpg',
   text: '500 гр.',
   time: '390 р.',
   type: ProductType.Course 
  },
   {
    id: '11',
    title: 'Кедровое мороженое',
    link: '/menyu',
    image: 'assets/components/phpthumbof/cache/full_IMG_0056.dc1c1449e4aa76e71a4c2ee6011ccbb5.jpg',
    text: '150 гр.',
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

