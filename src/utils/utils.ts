export const handleCall = () => {
    window.open("tel:+79959898598", "_blank", "noreferrer");
}

export const handleWhatsApp = () => {
    window.open("https://wa.me/+79959898598", "_blank", "noreferrer");
}

export const handleTg = () => {
    // Предзаполненный текст для Telegram
    const text = encodeURIComponent("Здравствуйте! Хочу заказать торт. Подскажите по вкусу и оформлению.");
    window.open(`https://t.me/LaRulet?start=${text}`, "_blank", "noreferrer");
}

export const PHONE_NUMBER = "+7 (995) 98-98-5-98"