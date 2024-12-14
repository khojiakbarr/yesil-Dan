import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      headertitle: "Halal sustenance for the table of your room!",
      headerParagraph: "Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!",
      aboutUs: "About Us",
      home: "Home",
      product: "Products",
      contact: "Contact",
      certificates: "Certificates",
      aboutParagraph: "We would like to inform you that we have started our activity in the city of Navoi millet processing enterprise, grain and grain products and production of high-quality flour products 'Yashil don' trademark. The main work process continues with the use of Turkish technologies. This not only improves the quality of the product, but also affects the issue of supply. The company with advanced technologies not only exports flour and flour products to Kyrgyzstan, Tajikistan and Afghanistan, but also supplies the domestic market of Uzbekistan.",
      productTitle: "Green Dan is a product containing natural and useful elements.",
      productSubtitle: "In the near future, the plant aims to further expand its activities.",
      productParagraph: "For Green Dan, we use only the finest and naturally grown wheat ears in our wheat fields. Then it is made into flour based on high-tech in our factory and delivered to our people's homes, bakeries, patisseries and organizations that produce bread and bakery products. delivered. Our products are exported to Afghanistan, Tajikistan, Russia, Kazakhstan and Turkmenistan so that they reach the tables not only of our people, but also of the people of neighboring countries who like bread.",
      contactName: "Your Name",
      contactPhone: "Your phone",
      contactMessage: "Message",
      contactNameHolder: "Enter your name",
      contactPhoneHolder: "Enter your phone number*",
      contactMessageHolder: "Enter your message text",
      send: "Send",
      address: "Address",
      phone: "Phone",
      email: "Email",
      contactUsText: "What questions do you have for us?"
    },
  },
  uz: {
    translation: {
      headertitle: "Xonadongiz dasturxoni uchun halol rizqingiz!",
      headerParagraph: "Tabiat go'zalligi bizning onlayn gullar va o'simliklar do'konida bir marta bosish masofasida. Biz sizning uyingizga tabiat qo'shig'ini olib keladigan turli xil gullarni taklif etamiz!",
      aboutUs: "Biz haqimizda",
      home: "Bosh sahifa",
      product: "Mahsulotlar",
      contact: "Aloqa",
      certificates: "Sertifikatlar",
      aboutParagraph: "Navoiy shahrida o‘z faoliyatini boshlaganimizni ma’lum qilamiz tariqni qayta ishlash korxonasi faoliyati don va don mahsulotlari va ishlab chiqarish yuqori sifatli un mahsulotlari 'Yashil don' savdo belgisi. Asosiy ish jarayoni bilan davom etadi turk texnologiyalaridan foydalanish. Bu emas faqat sifatni yaxshilaydi mahsulot, balki ta'minot masalasiga ham ta'sir qiladi. Ilg'or texnologiyalarga ega kompaniya ga faqat un va un mahsulotlarini eksport qiladi Qirg'iziston, Tojikiston va Afg'oniston, balki O‘zbekiston ichki bozorini ta’minlaydi.",
      productTitle: "Yashil Dan — tabiiy va foydali elementlarni o'zida jamlagan mahsulot.",
      productSubtitle: "Yaqin kelajakda esa zavod o'z faoliyatini yanada kengaytirishni maqsad qilib olgan.",
      productParagraph: "Yashil Dan uchun biz faqat eng sara va o'zimizning bug'doyzorlarda tabiiy ravishda yetishtirilgan bug'doy boshoqlaridan foydalanamiz So'ngra u zavodimizdagi yuqori texnologiyalar asosida un ko'rinishiga keltiriladi va xalqimiz xonadonlariga, nonvoyxonalariga, qandolatxonalarga va non va non mahsulotlari ishlab chiqaruvchi tashkilotlarga yetkaziladi. Mahsulotlarimiz nafaqat xalqimiz balkim non va nonni xush ko'ruvchi qo'shni davlatlar aholisi dasturxonlariga yetib borishi uchun Afg'oniston, Tojikiston, Rossiya, Qozog'iston va Turkmanistonga ham eksport qilinmoqda.",
      contactName: "Ismingiz",
      contactPhone: "Sizning telefoningiz",
      contactMessage: "Xabar",
      contactNameHolder: "Ismingizni kiriting",
      contactPhoneHolder: "Telefon raqamingizni kiriting*",
      contactMessageHolder: "Xabar matnini kiriting",
      send: "Yuborish",
      address: "Manzil",
      phone: "Telefon",
      email: "Elektron pochta",
      contactUsText: "Bizga qanday savollaringiz bor?"
    },
  },
  ru: {
    translation: {
      headertitle: "Халяльная еда на стол в вашем номере!",
      headerParagraph: "Красота природы всего в одном клике от нашего интернет-магазина цветов и растений. Мы предлагаем широкий ассортимент цветов, которые привнесут частичку природы в ваш дом!",
      aboutUs: "О нас",
      home: "Главный",
      product: "Продукция",
      contact: "Контакт",
      certificates: "Сертификаты",
      aboutParagraph: "Сообщаем Вам, что мы начали свою деятельность в городе Навоийском предприятии по переработке проса, зерна и зернопродуктов и производству высококачественных мучных изделий торговой марки «Яшил дон». Основной рабочий процесс продолжается с использованием турецких технологий. Это не только повышает качество продукта, но и влияет на вопрос поставок. Компания с передовыми технологиями не только экспортирует муку и мучные изделия в Кыргызстан, Таджикистан и Афганистан, но и снабжает внутренний рынок Узбекистана.",
      productTitle: "Грин Дэн – продукт, содержащий натуральные и полезные элементы.",
      productSubtitle: "В ближайшее время завод намерен еще больше расширить свою деятельность.",
      productParagraph: "Для Green Dan мы используем только лучшие и натуральные колосья пшеницы, выращенные на наших пшеничных полях. Затем на нашем заводе на основе высоких технологий из них перерабатывают муку и доставляют ее в дома наших людей, пекарни, кондитерские и организации, производящие хлеб и хлебобулочные изделия. продукты доставлены. Наша продукция экспортируется в Афганистан, Таджикистан, Россию, Казахстан и Туркменистан, чтобы она попадала на столы не только нашего народа, но и людей соседних стран, любящих хлеб.",
      contactName: "Ваше имя",
      contactPhone: "Ваш телефон",
      contactNameHolder: "Введите имя*",
      contactPhoneHolder: "Введите телефон*",
      contactMessageHolder: "Введите текст сообщения",
      contactMessage: "Сообщение",
      send: "Отправить",
      address: "Адрес",
      phone: "Телефон",
      email: "Электронная почта",
      contactUsText: "Какие вопросы у вас есть к нам?"
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
