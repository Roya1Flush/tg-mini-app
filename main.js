import { Telegraf, Markup } from 'telegraf'
import {message} from 'telegraf/filters'


const token = '7169691857:AAFFV34W2MAeHUN4ucVH7GHYVRtN7Qm6ggs'
const webAppUrl = 'https://yammyfoot.web.app/' 
const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
      'Добро пожаловать! Нажмите на кнопку "Shop", чтобы запустить приложение',
      Markup.keyboard([
        Markup.button.webApp('Служба поддержки',`${webAppUrl}/feedback`),
     ])
    )  
  })
  
  bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше обращение принято в работу, ожидайте обратной связи в течение 24 часов!: ${data?.feedback}` ?? 'empty message')
  })

  bot.launch()