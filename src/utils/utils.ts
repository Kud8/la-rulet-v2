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

// Префиксует пути к файлам из public/ базовым путём сайта (import.meta.env.BASE_URL),
// чтобы сборка работала и в корне домена, и на подпути вида /la-rulet-v2/
export const asset = (path: string) =>
    import.meta.env.BASE_URL + path.replace(/^\//, '');