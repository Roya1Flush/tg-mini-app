//Верстка лицевой части приложения, теги для связки - "skill", "intensive", "course" - Поменять
// 
import { Injectable } from '@angular/core';
import { url } from 'telegraf/typings/button';


const domain =  ('https://vk.com/royalflush322')

export enum ProductType {
  Skill = 'skill', /* Привязка поваров */
  Intensive = 'intensive', /* Привязка комбо */
  Course = 'course', /* Привязка блюд */
}

export interface IProduct {
  id: string;
  text: string;
  text2: string;
  title: string;
  link: string;
  image: string;
  time: string;
  distance: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image:/*  domain +  */product.image,
    link: domain + product.link,
  };
}

 const products: IProduct[] = [ 
  
  {
    id: '1',
    title: 'У Горги',
    link: '/menyu',/* https://expedicia-perm.ru/assets/components/phpthumbof/cache/full_IMG_9690.dc1c1449e4aa76e71a4c2ee6011ccbb5.jpg */
    image: ('https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album'),
    text: 'Сытный обед 250р.',
    text2: '',
    time: '09:00-21:00',
    distance: '1.5 км от вас',
    type: ProductType.Skill,
  },
   {
    id: '2',
    title: 'У Анастасии',
    link: '/menyu',
    image: ('https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album'),
    text: 'Ужин по грузински 300р.',
    text2: '',
    time: '08:00-22:00',
    distance: '2 км от вас',
    type: ProductType.Skill,
}, 
 {
    id: '3',
    title: 'У Виталия',
    link: '/menyu',
    image: ('https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album'),
    text: 'Вставить изображение',
    text2: '',
    time: 'Описание',
    distance: '3км',
    type: ProductType.Skill,
  },
  {
    id: '4',
    title: 'У Александры',
    link: '/menyu',
    image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
    text: 'Вставить изображение',
    text2: '',
    time: 'Описание',
    distance: '1км',
    type: ProductType.Skill,
  },
  {
    id: '5',
    title: 'У Геннадия',
    link: '/menyu',
    image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
    text: 'Вставить изображение',
    text2: '',
    time: 'Описание',
    distance: '1.5км',
    type: ProductType.Skill,
  },
  {
    id: '6',
    title: 'У Наталии',
    link: '/menyu',
    image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
    text: 'Вставить изображение',
    text2: '',
    time: 'Описание',
    distance: '5км',
    type: ProductType.Skill,
  }, 
  {
    id: '7',
    title: 'Европейский ужин',
    link: '/menyu',
    image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
    text: 'Макароны по-флотски Салат "Греческий"',
    text2: '',
    time: 'Доставка завтра до 12:00',
    distance: '',
    type: ProductType.Intensive,
  },
   {
   id: '8',
   title: 'Азиатский завтрак',
   link: '/menyu',
   image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
   text: 'Подаются со сметаной и зеленью!',
   text2: '',
   time: 'Доставка сегодня до 21:00',
   distance:'',
   type: ProductType.Intensive, 
  }, 
   {
    id: '9',
    title: 'Кавказский обед',
    link: '/menyu',
    image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
    text: 'Шашлычок',
    text2: '',
    time: 'Доставка завтра до 12:00',
    distance: '',
    type: ProductType.Intensive,
  }, 
  {
   id: '10',
   title: 'Борщ',
   link: '/menyu',
   image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
   text: '500 гр.',
   text2: '',
   time: '390 р.',
   distance: '',
   type: ProductType.Course 
  },
   {
    id: '11',
    title: 'Кедровое мороженое',
    link: '/menyu',
    image: 'https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album',
    text: '150 гр.',
    text2: '',
    time: '320 р.',
    distance: '',
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

