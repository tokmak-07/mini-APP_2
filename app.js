
import { Bot, } from "grammy";

const bot = new Bot("7499269454:AAHXC8Alkk85gPC59SYehRRsa__BRBV2uT4");

bot.command("start",async(ctx) => ctx.reply("Добро пожаловать в наш бот"))