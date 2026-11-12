
'use strict';
(function () {
  const translations = {
  "nav.home": {
    "ru": "Главная",
    "et": "Avaleht",
    "en": "Home"
  },
  "nav.services": {
    "ru": "Услуги",
    "et": "Teenused",
    "en": "Services"
  },
  "nav.prices": {
    "ru": "Цены",
    "et": "Hinnad",
    "en": "Prices"
  },
  "nav.parking": {
    "ru": "Стоянка",
    "et": "Parkimine",
    "en": "Parking"
  },
  "nav.contacts": {
    "ru": "Контакты",
    "et": "Kontakt",
    "en": "Contact"
  },
  "nav.aria": {
    "ru": "Главное меню",
    "et": "Peamenüü",
    "en": "Main navigation"
  },
  "hero.eyebrow": {
    "ru": "<i></i> АВТОСЕРВИС В ТАЛЛИННЕ",
    "et": "<i></i> AUTOTEENINDUS TALLINNAS",
    "en": "<i></i> AUTO SERVICE IN TALLINN"
  },
  "hero.title": {
    "ru": "ПОЛНЫЙ<br>СЕРВИС<br>ВАШЕГО<br><em>АВТОМОБИЛЯ</em>",
    "et": "TEIE AUTO<br><em>TÄISTEENINDUS</em>",
    "en": "COMPLETE<br>SERVICE<br>FOR YOUR<br><em>CAR</em>"
  },
  "hero.body": {
    "ru": "Диагностика, ремонт, шиномонтаж и обслуживание автомобилей. Внимание к деталям и уверенность на каждом километре.",
    "et": "Diagnostika, remont, rehvivahetus ja autohooldus. Tähelepanu detailidele ning kindlustunne igal kilomeetril.",
    "en": "Diagnostics, repairs, tire service and vehicle maintenance. Attention to detail and confidence on every journey."
  },
  "hero.prices": {
    "ru": "Цены",
    "et": "Hinnad",
    "en": "Prices"
  },
  "hero.book": {
    "ru": "Записаться на обслуживание",
    "et": "Broneeri hooldus",
    "en": "Book a service"
  },
  "brands.label": {
    "ru": "РАБОТАЕМ<br>С МАРКАМИ",
    "et": "TEENINDAME<br>AUTOMARKE",
    "en": "WE SERVICE<br>THESE BRANDS"
  },
  "brands.other": {
    "ru": "И ДРУГИЕ",
    "et": "JA TEISED",
    "en": "AND MORE"
  },
  "services.kicker": {
    "ru": "01 / НАПРАВЛЕНИЯ",
    "et": "01 / TEENUSED",
    "en": "01 / SERVICES"
  },
  "services.title": {
    "ru": "НАШИ <em>УСЛУГИ</em>",
    "et": "MEIE <em>TEENUSED</em>",
    "en": "OUR <em>SERVICES</em>"
  },
  "services.intro": {
    "ru": "От сезонной смены шин до ремонта двигателя. Выберите нужное направление и ознакомьтесь с тарифами.",
    "et": "Hooajalisest rehvivahetusest mootoriremondini. Valige sobiv teenus ja tutvuge hindadega.",
    "en": "From seasonal tire changes to engine repairs. Explore our services and prices."
  },
  "service1.eyebrow": {
    "ru": "КОЛЁСА И ШИНЫ",
    "et": "REHVID JA VELJED",
    "en": "TIRES AND WHEELS"
  },
  "service1.title": {
    "ru": "ШИНОМОНТАЖ",
    "et": "REHVIVAHETUS",
    "en": "TIRE SERVICE"
  },
  "service1.body": {
    "ru": "Полный шиномонтаж для легковых автомобилей, внедорожников и фургонов.",
    "et": "Täielik rehvivahetus sõiduautodele, maasturitele ja kaubikutele.",
    "en": "Complete tire service for passenger cars, SUVs and vans."
  },
  "service1.img": {
    "ru": "Мастер выполняет шиномонтаж колеса",
    "et": "Rehvivahetus töökojas",
    "en": "Tire service at the workshop"
  },
  "service2.eyebrow": {
    "ru": "ОБСЛУЖИВАНИЕ И РЕМОНТ",
    "et": "HOOLDUS JA REMONT",
    "en": "MAINTENANCE AND REPAIRS"
  },
  "service2.title": {
    "ru": "РЕМОНТ АВТО",
    "et": "AUTOREMONT",
    "en": "CAR REPAIR"
  },
  "service2.body": {
    "ru": "Ремонт легковых автомобилей, внедорожников, фургонов и двигателя.",
    "et": "Sõiduautode, maasturite, kaubikute ja mootorite remont.",
    "en": "Repairs for passenger cars, SUVs, vans and engines."
  },
  "service2.img": {
    "ru": "Механик работает с автомобилем на подъёмнике",
    "et": "Mehaanik töötab tõstukil oleva autoga",
    "en": "Mechanic working on a car lift"
  },
  "service3.eyebrow": {
    "ru": "ПОДВЕСКА И ХОДОВАЯ",
    "et": "VEDRUSTUS JA VEERMIK",
    "en": "SUSPENSION AND CHASSIS"
  },
  "service3.title": {
    "ru": "ХОДОВАЯ ЧАСТЬ",
    "et": "VEERMIK",
    "en": "SUSPENSION"
  },
  "service3.body": {
    "ru": "Ремонт и диагностика подвески.",
    "et": "Vedrustuse diagnostika ja remont.",
    "en": "Suspension inspection and repair."
  },
  "service3.img": {
    "ru": "Проверка автомобиля на подъёмнике — иллюстрация ходовой части",
    "et": "Auto veermiku ülevaatus tõstukil – illustratsioon",
    "en": "Vehicle suspension inspection on a lift – illustration"
  },
  "addons.kicker": {
    "ru": "ДРУГИЕ НАПРАВЛЕНИЯ",
    "et": "MUUD TEENUSED",
    "en": "OTHER SERVICES"
  },
  "addons.title": {
    "ru": "ЧТО ЕЩЁ <em>МЫ ДЕЛАЕМ</em>",
    "et": "MIDA ME <em>VEEL TEEME</em>",
    "en": "WHAT ELSE <em>WE DO</em>"
  },
  "addon1.kicker": {
    "ru": "04 / ТОРМОЗНАЯ СИСТЕМА",
    "et": "04 / PIDURISÜSTEEM",
    "en": "04 / BRAKE SYSTEM"
  },
  "addon1.title": {
    "ru": "Тормозная система",
    "et": "Pidurisüsteem",
    "en": "Brake system"
  },
  "addon1.body": {
    "ru": "Комплексное обслуживание и ремонт всех компонентов тормозной системы.",
    "et": "Kõigi pidurisüsteemi osade hooldus ja remont.",
    "en": "Complete servicing and repair of all brake system components."
  },
  "addon1.img": {
    "ru": "Автомобиль и элементы колёс в ремонтной зоне — иллюстрация",
    "et": "Auto remonditöökojas – illustratsioon",
    "en": "Car at an auto repair workshop – illustration"
  },
  "addon2.kicker": {
    "ru": "05 / ЗАЩИТА КУЗОВА",
    "et": "05 / KERE KAITSE",
    "en": "05 / BODY PROTECTION"
  },
  "addon2.title": {
    "ru": "Антикоррозийная обработка",
    "et": "Korrosioonitõrje",
    "en": "Anti-corrosion treatment"
  },
  "addon2.body": {
    "ru": "Зачистка и защита днища.",
    "et": "Põhja puhastamine ja kaitsmine.",
    "en": "Underbody cleaning and protection."
  },
  "addon2.img": {
    "ru": "Работы под днищем автомобиля на подъёмнике — иллюстрация",
    "et": "Auto põhja hooldus tõstukil – illustratsioon",
    "en": "Underbody work on a car lift – illustration"
  },
  "addon3.kicker": {
    "ru": "06 / ОПТИКА",
    "et": "06 / TULED",
    "en": "06 / LIGHTING"
  },
  "addon3.title": {
    "ru": "Фары",
    "et": "Esituled",
    "en": "Headlights"
  },
  "addon3.body": {
    "ru": "Полировка фар, покраска масок.",
    "et": "Esitulede poleerimine ja maskide värvimine.",
    "en": "Headlight polishing and bezel painting."
  },
  "addon3.img": {
    "ru": "Передняя часть автомобиля с фарами — иллюстрация",
    "et": "Auto esiosa koos esituledega – illustratsioon",
    "en": "Car front end with headlights – illustration"
  },
  "addon4.kicker": {
    "ru": "07 / ОСНАЩЕНИЕ",
    "et": "07 / LISAVARUSTUS",
    "en": "07 / ADDITIONAL EQUIPMENT"
  },
  "addon4.title": {
    "ru": "Дополнительное оборудование",
    "et": "Lisavarustus",
    "en": "Additional equipment"
  },
  "addon4.body": {
    "ru": "Фаркоп, парктроники, камеры и т. д.",
    "et": "Haakekonksud, parkimisandurid, kaamerad jne.",
    "en": "Tow bars, parking sensors, cameras and more."
  },
  "addon4.img": {
    "ru": "Работа с автомобильной электроникой — иллюстрация",
    "et": "Auto elektroonikatööd – illustratsioon",
    "en": "Automotive electronics work – illustration"
  },
  "services.photosnote": {
    "ru": "* Изображения в этом разделе — иллюстративные, не фотографии конкретного сервиса HANMOTORS.",
    "et": "* Pildid on illustratiivsed ega kujuta konkreetset HANMOTORS-i töökoda.",
    "en": "* Images are illustrative and do not show the actual HANMOTORS workshop."
  },
  "adv1.title": {
    "ru": "Современный подход",
    "et": "Kaasaegne lähenemine",
    "en": "Modern approach"
  },
  "adv1.body": {
    "ru": "Диагностика и обслуживание",
    "et": "Diagnostika ja hooldus",
    "en": "Diagnostics and maintenance"
  },
  "adv2.title": {
    "ru": "Внимание к качеству",
    "et": "Tähelepanu kvaliteedile",
    "en": "Focus on quality"
  },
  "adv2.body": {
    "ru": "Ответственное выполнение работ",
    "et": "Vastutustundlik töö",
    "en": "Responsible workmanship"
  },
  "adv3.title": {
    "ru": "Комплексный сервис",
    "et": "Terviklik teenindus",
    "en": "Complete service"
  },
  "adv3.body": {
    "ru": "Работы для разных типов авто",
    "et": "Teenused erinevatele sõidukitele",
    "en": "Services for different vehicles"
  },
  "prices.kicker": {
    "ru": "02 / ПРАЙС-ЛИСТ",
    "et": "02 / HINNAKIRI",
    "en": "02 / PRICE LIST"
  },
  "prices.title": {
    "ru": "НАШИ <em>ЦЕНЫ</em>",
    "et": "MEIE <em>HINNAD</em>",
    "en": "OUR <em>PRICES</em>"
  },
  "prices.intro": {
    "ru": "Стоимость работ указана ориентировочно. Окончательная сумма будет определена после осмотра автомобиля.",
    "et": "Hinnad on esialgsed. Lõplik maksumus selgub pärast sõiduki ülevaatust.",
    "en": "Prices are estimates. The final amount will be confirmed after inspecting the vehicle."
  },
  "tires.kicker": {
    "ru": "РАЗДЕЛ 01",
    "et": "JAOTIS 01",
    "en": "SECTION 01"
  },
  "tires.title": {
    "ru": "ШИНОМОНТАЖ",
    "et": "REHVIVAHETUS",
    "en": "TIRE SERVICE"
  },
  "tires.currency": {
    "ru": "ЦЕНЫ В €",
    "et": "HINNAD EURODES",
    "en": "PRICES IN EUR"
  },
  "tires.tablearia": {
    "ru": "Цены на шиномонтаж по размеру дисков",
    "et": "Rehvivahetuse hinnad velje suuruse järgi",
    "en": "Tire service prices by wheel diameter"
  },
  "tires.column": {
    "ru": "Услуга",
    "et": "Teenus",
    "en": "Service"
  },
  "tires.car": {
    "ru": "ЛЕГКОВОЙ АВТОМОБИЛЬ",
    "et": "SÕIDUAUTO",
    "en": "PASSENGER CAR"
  },
  "tires.suv": {
    "ru": "ВНЕДОРОЖНИК / ФУРГОН",
    "et": "MAASTUR / KAUBIK",
    "en": "SUV / VAN"
  },
  "tires.row1": {
    "ru": "Полный шиномонтаж <span>4 колеса</span>",
    "et": "Täielik rehvivahetus <span>4 ratast</span>",
    "en": "Complete tire service <span>4 wheels</span>"
  },
  "tires.row2": {
    "ru": "Полный шиномонтаж <span>1 колесо</span>",
    "et": "Täielik rehvivahetus <span>1 ratas</span>",
    "en": "Complete tire service <span>1 wheel</span>"
  },
  "tires.row3": {
    "ru": "Полный шиномонтаж <span>4 колеса</span>",
    "et": "Täielik rehvivahetus <span>4 ratast</span>",
    "en": "Complete tire service <span>4 wheels</span>"
  },
  "tires.row4": {
    "ru": "Полный шиномонтаж <span>1 колесо</span>",
    "et": "Täielik rehvivahetus <span>1 ratas</span>",
    "en": "Complete tire service <span>1 wheel</span>"
  },
  "tires.scroll": {
    "ru": "На узком экране таблицу можно прокручивать в сторону <span aria-hidden=\"true\">↔</span>",
    "et": "Kitsal ekraanil kerige tabelit külgsuunas <span aria-hidden=\"true\">↔</span>",
    "en": "On narrow screens, scroll the table sideways <span aria-hidden=\"true\">↔</span>"
  },
  "repair.kicker": {
    "ru": "РАЗДЕЛ 02",
    "et": "JAOTIS 02",
    "en": "SECTION 02"
  },
  "repair.title": {
    "ru": "РЕМОНТНЫЕ РАБОТЫ",
    "et": "REMONDITÖÖD",
    "en": "REPAIR SERVICES"
  },
  "repair.currency": {
    "ru": "ЦЕНЫ В €",
    "et": "HINNAD EURODES",
    "en": "PRICES IN EUR"
  },
  "repair.item1": {
    "ru": "Ремонт легкового автомобиля",
    "et": "Sõiduauto remont",
    "en": "Passenger car repair"
  },
  "repair.item2": {
    "ru": "Ремонт внедорожника / фургона",
    "et": "Maasturi / kaubiku remont",
    "en": "SUV / van repair"
  },
  "repair.item3": {
    "ru": "Чтение и удаление кодов ошибок",
    "et": "Veakoodide lugemine ja kustutamine",
    "en": "Read and clear fault codes"
  },
  "repair.item4": {
    "ru": "Сварочные работы",
    "et": "Keevitustööd",
    "en": "Welding work"
  },
  "repair.item5": {
    "ru": "Проверка ходовой",
    "et": "Veermiku kontroll",
    "en": "Suspension inspection"
  },
  "repair.item6": {
    "ru": "Ремонт двигателя",
    "et": "Mootoriremont",
    "en": "Engine repair"
  },
  "prices.notice": {
    "ru": "Указанные цены являются предварительными. Окончательная стоимость определяется индивидуально и зависит от марки автомобиля, сложности и объёма работ, а также стоимости необходимых запчастей. Все цены приведены в качестве примера и уточняются перед началом обслуживания.",
    "et": "Hinnad on esialgsed. Lõplik maksumus sõltub sõiduki margist, töö keerukusest ja mahust ning vajalike varuosade hinnast. Näidishinnad täpsustatakse enne tööde alustamist.",
    "en": "Prices are estimates. The final cost depends on the vehicle make, the complexity and scope of work, and the cost of required parts. Prices are confirmed before service begins."
  },
  "prices.inquire": {
    "ru": "Уточнить стоимость",
    "et": "Küsi hinda",
    "en": "Ask for a quote"
  },
  "parking.kicker": {
    "ru": "03 / ИНФОРМАЦИЯ",
    "et": "03 / TEAVE",
    "en": "03 / INFORMATION"
  },
  "parking.title": {
    "ru": "СТОЯНКА<br><em>ПОСЛЕ РЕМОНТА</em>",
    "et": "PARKIMINE<br><em>PÄRAST REMONTI</em>",
    "en": "PARKING<br><em>AFTER REPAIRS</em>"
  },
  "parking.intro": {
    "ru": "Автомобиль может оставаться на территории сервиса после завершения работ. Срок стоянки исчисляется с момента уведомления клиента о готовности автомобиля.",
    "et": "Pärast tööde lõpetamist võib sõiduk jääda teeninduse territooriumile. Parkimisaeg algab hetkest, mil klienti teavitatakse sõiduki valmimisest.",
    "en": "The vehicle may remain at the service center after repairs. The parking period starts when the customer is notified that the vehicle is ready."
  },
  "parking.contact": {
    "ru": "Связаться с сервисом",
    "et": "Võta ühendust",
    "en": "Contact us"
  },
  "parking.terms": {
    "ru": "УСЛОВИЯ СТОЯНКИ",
    "et": "PARKIMISTINGIMUSED",
    "en": "PARKING TERMS"
  },
  "parking.first": {
    "ru": "Первые 3 дня",
    "et": "Esimesed 3 päeva",
    "en": "First 3 days"
  },
  "parking.firstnote": {
    "ru": "С момента уведомления о готовности",
    "et": "Alates valmisoleku teavitusest",
    "en": "From the ready-for-collection notice"
  },
  "parking.free": {
    "ru": "БЕСПЛАТНО",
    "et": "TASUTA",
    "en": "FREE"
  },
  "parking.fourth": {
    "ru": "Начиная с 4-го дня",
    "et": "Alates 4. päevast",
    "en": "From day 4"
  },
  "parking.fourthnote": {
    "ru": "За каждые сутки стоянки",
    "et": "Iga parkimispäeva eest",
    "en": "For each day of parking"
  },
  "parking.rate": {
    "ru": "25 € <small>/ сутки</small>",
    "et": "25 € <small>/ päev</small>",
    "en": "25 € <small>/ day</small>"
  },
  "parking.note": {
    "ru": "Срок отсчитывается с момента уведомления клиента, а не с даты начала ремонта.",
    "et": "Arvestus algab kliendi teavitamisest, mitte remondi alguskuupäevast.",
    "en": "The period starts when the customer is notified, not when the repair begins."
  },
  "contacts.kicker": {
    "ru": "05 / КОНТАКТЫ",
    "et": "05 / KONTAKT",
    "en": "05 / CONTACT"
  },
  "contacts.title": {
    "ru": "ДВИЖЕНИЕ<br><em>БЕЗ ЗАБОТ</em>",
    "et": "SÕIDA<br><em>MUREVABALT</em>",
    "en": "DRIVE<br><em>WORRY-FREE</em>"
  },
  "contacts.intro": {
    "ru": "Позвоните нам или оставьте заявку через форму — обсудим задачу и согласуем удобное время.",
    "et": "Helistage meile või saatke päring veebivormi kaudu. Arutame teie vajadusi ja lepime aja kokku.",
    "en": "Call us or send a request using the form. We will discuss your needs and arrange a suitable time."
  },
  "contacts.call": {
    "ru": "Позвонить",
    "et": "Helista",
    "en": "Call us"
  },
  "contacts.city": {
    "ru": "ЖДЁМ ВАС В ТАЛЛИННЕ",
    "et": "OOTAME TEID TALLINNAS",
    "en": "VISIT US IN TALLINN"
  },
  "contacts.directions": {
    "ru": "Построить маршрут",
    "et": "Teejuhised",
    "en": "Get directions"
  },
  "footer.back": {
    "ru": "Наверх ↑",
    "et": "Üles ↑",
    "en": "Back to top ↑"
  },
  "brand.aria": {
    "ru": "HANMOTORS — на главную",
    "et": "HANMOTORS — avalehele",
    "en": "HANMOTORS — home"
  },
  "footer.brandaria": {
    "ru": "HANMOTORS — наверх",
    "et": "HANMOTORS — lehe algusesse",
    "en": "HANMOTORS — back to top"
  },
  "menu.label": {
    "ru": "Открыть меню",
    "et": "Ava menüü",
    "en": "Open menu"
  },
  "hero.img": {
    "ru": "Механик осматривает автомобиль на подъёмнике — иллюстрация услуг",
    "et": "Mehaanik kontrollib autot tõstukil — illustratsioon",
    "en": "Mechanic inspecting a car on a lift — illustration"
  },
  "meta.description": {
    "ru": "HANMOTORS — автосервис в Таллинне. Ремонт, диагностика, шиномонтаж, цены на работы и условия стоянки. Heli tänav 10, телефон +372 5777 0099.",
    "et": "HANMOTORS — autoteenindus Tallinnas. Autoremont, diagnostika, rehvivahetus, hinnad ja parkimistingimused. Heli tänav 10, telefon +372 5777 0099.",
    "en": "HANMOTORS — auto service in Tallinn. Repairs, diagnostics, tire service, prices and parking terms. Heli tänav 10, phone +372 5777 0099."
  },
  "page.title": {
    "ru": "HANMOTORS — Автосервис и шиномонтаж в Таллинне",
    "et": "HANMOTORS — Autoteenindus ja rehvivahetus Tallinnas",
    "en": "HANMOTORS — Car Service and Tire Service in Tallinn"
  },
  "menu.close": {
    "ru": "Закрыть меню",
    "et": "Sulge menüü",
    "en": "Close menu"
  },
  "language.name": {
    "ru": "Выбор языка",
    "et": "Vali keel",
    "en": "Choose language"
  },
  "nav.booking": {
    "ru": "Запись",
    "et": "Broneerimine",
    "en": "Booking"
  },
  "booking.kicker": {
    "ru": "04 / ОНЛАЙН-ЗАПИСЬ",
    "et": "04 / BRONEERIMINE",
    "en": "04 / BOOK A SERVICE"
  },
  "booking.title": {
    "ru": "ОСТАВЬТЕ <em>ЗАЯВКУ</em>",
    "et": "SAATKE <em>PÄRING</em>",
    "en": "SEND A <em>REQUEST</em>"
  },
  "booking.intro": {
    "ru": "Опишите, что нужно сделать с автомобилем. Мы свяжемся с вами, уточним стоимость и согласуем удобное время.",
    "et": "Kirjeldage oma auto hooldus- või remondivajadust. Võtame teiega ühendust, täpsustame hinna ja lepime aja kokku.",
    "en": "Tell us what your car needs. We will contact you to discuss the price and arrange a suitable time."
  },
  "booking.fallbackTitle": {
    "ru": "Предпочитаете звонок?",
    "et": "Soovite pigem helistada?",
    "en": "Prefer to call?"
  },
  "booking.notConfirmed": {
    "ru": "Отправка заявки не означает подтверждённую запись. Время согласуем с вами отдельно.",
    "et": "Päringu saatmine ei kinnita broneeringut. Lepime aja teiega eraldi kokku.",
    "en": "Sending a request does not confirm an appointment. We will agree on a time with you separately."
  },
  "booking.formOverline": {
    "ru": "ЗАЯВКА НА ОБСЛУЖИВАНИЕ",
    "et": "HOOLDUSPÄRING",
    "en": "SERVICE REQUEST"
  },
  "booking.required": {
    "ru": "* Обязательные поля",
    "et": "* Kohustuslikud väljad",
    "en": "* Required fields"
  },
  "booking.name": {
    "ru": "Ваше имя *",
    "et": "Teie nimi *",
    "en": "Your name *"
  },
  "booking.namePH": {
    "ru": "Как к вам обращаться",
    "et": "Kuidas teid kutsuda?",
    "en": "How should we address you?"
  },
  "booking.phone": {
    "ru": "Телефон *",
    "et": "Telefon *",
    "en": "Phone *"
  },
  "booking.phonePH": {
    "ru": "+372 ...",
    "et": "+372 ...",
    "en": "+372 ..."
  },
  "booking.email": {
    "ru": "Email (необязательно)",
    "et": "E-post (valikuline)",
    "en": "Email (optional)"
  },
  "booking.emailPH": {
    "ru": "name@example.com",
    "et": "nimi@naide.ee",
    "en": "name@example.com"
  },
  "booking.car": {
    "ru": "Марка и модель",
    "et": "Auto mark ja mudel",
    "en": "Car make and model"
  },
  "booking.carPH": {
    "ru": "Например, Audi A4",
    "et": "Näiteks Audi A4",
    "en": "For example, Audi A4"
  },
  "booking.service": {
    "ru": "Какая услуга нужна? *",
    "et": "Millist teenust soovite? *",
    "en": "What service do you need? *"
  },
  "booking.servicePlaceholder": {
    "ru": "Выберите услугу",
    "et": "Valige teenus",
    "en": "Select a service"
  },
  "booking.serviceTires": {
    "ru": "Шиномонтаж",
    "et": "Rehvivahetus",
    "en": "Tire service"
  },
  "booking.serviceDiagnostics": {
    "ru": "Диагностика",
    "et": "Diagnostika",
    "en": "Diagnostics"
  },
  "booking.serviceSuspension": {
    "ru": "Ходовая часть",
    "et": "Veermik",
    "en": "Suspension"
  },
  "booking.serviceBrakes": {
    "ru": "Тормозная система",
    "et": "Pidurisüsteem",
    "en": "Brake system"
  },
  "booking.serviceRepair": {
    "ru": "Ремонт автомобиля",
    "et": "Autoremont",
    "en": "Car repair"
  },
  "booking.serviceRust": {
    "ru": "Антикоррозийная обработка",
    "et": "Korrosioonitõrje",
    "en": "Anti-corrosion treatment"
  },
  "booking.serviceLights": {
    "ru": "Фары",
    "et": "Esituled",
    "en": "Headlights"
  },
  "booking.serviceAddons": {
    "ru": "Дополнительное оборудование",
    "et": "Lisavarustuse paigaldus",
    "en": "Equipment installation"
  },
  "booking.serviceOther": {
    "ru": "Другое / консультация",
    "et": "Muu / nõustamine",
    "en": "Other / consultation"
  },
  "booking.date": {
    "ru": "Желаемая дата (необязательно)",
    "et": "Soovitud kuupäev (valikuline)",
    "en": "Preferred date (optional)"
  },
  "booking.message": {
    "ru": "Комментарий",
    "et": "Lisainfo",
    "en": "Additional details"
  },
  "booking.messagePH": {
    "ru": "Опишите проблему или ваши пожелания",
    "et": "Kirjeldage probleemi või oma soove",
    "en": "Describe the issue or your request"
  },
  "booking.consent": {
    "ru": "Согласен(на) на передачу указанных данных HANMOTORS через Web3Forms для ответа на мою заявку.",
    "et": "Nõustun esitatud andmete edastamisega HANMOTORSile Web3Formsi kaudu, et minu päringule vastata.",
    "en": "I agree to share the information provided with HANMOTORS via Web3Forms for a response to my request."
  },
  "booking.privacy": {
    "ru": "Данные формы передаются через Web3Forms. Не указывайте конфиденциальную информацию.",
    "et": "Vormi andmed edastatakse Web3Formsi kaudu. Ärge lisage tundlikku teavet.",
    "en": "Form data is transmitted via Web3Forms. Please do not include sensitive information."
  },
  "booking.send": {
    "ru": "Отправить заявку",
    "et": "Saada päring",
    "en": "Send request"
  },
  "booking.sending": {
    "ru": "Отправляем...",
    "et": "Saatmine...",
    "en": "Sending..."
  },
  "booking.success": {
    "ru": "Спасибо! Заявка отправлена. Мы свяжемся с вами для согласования времени.",
    "et": "Aitäh! Päring on saadetud. Võtame teiega aja kokkuleppimiseks ühendust.",
    "en": "Thank you! Your request has been sent. We will contact you to arrange a time."
  },
  "booking.error": {
    "ru": "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.",
    "et": "Päringu saatmine ebaõnnestus. Proovige uuesti või helistage meile.",
    "en": "We could not send your request. Please try again or call us."
  },
  "contacts.formBtn": {
    "ru": "Оставить заявку",
    "et": "Saada päring",
    "en": "Send request"
  }
};
  const supported = ['ru', 'et', 'en'];
  const STORE_KEY = 'hanmotors-language';
  function safelyStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (_) { return null; }
  }
  function persist(code) {
    try { localStorage.setItem(STORE_KEY, code); } catch (_) { /* private browsing */ }
  }
  function t(key, lang) {
    const entry = translations[key];
    return entry ? (entry[lang || current] || entry.ru) : key;
  }
  let current = supported.includes(safelyStored()) ? safelyStored() : 'ru';
  function apply(code) {
    if (!supported.includes(code)) return;
    current = code;
    document.documentElement.lang = code;
    document.documentElement.classList.toggle('lang-et', code === 'et');
    document.documentElement.classList.toggle('lang-en', code === 'en');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      // Translations are bundled constants, not user-provided HTML.
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    ['alt', 'aria-label', 'content', 'placeholder'].forEach(attr => {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(el => {
        el.setAttribute(attr, t(el.getAttribute('data-i18n-' + attr)));
      });
    });
    document.title = t('page.title');
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const selected = btn.getAttribute('data-lang') === code;
      btn.classList.toggle('is-active', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    const menu = document.querySelector('#main-nav');
    const toggle = document.querySelector('#menu-toggle');
    if (menu && toggle) {
      toggle.setAttribute('aria-label',t(menu.classList.contains('is-open') ? 'menu.close' : 'menu.label'));
    }
    persist(code);
    document.dispatchEvent(new CustomEvent('hanmotors:languagechange', { detail: { language: code } }));
  }
  window.HanmI18n = { t: key => t(key), getLang: () => current, apply };
  function setup() {
    document.querySelectorAll('.lang-btn').forEach(button => {
      button.addEventListener('click', () => apply(button.getAttribute('data-lang')));
    });
    apply(current);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
})();
