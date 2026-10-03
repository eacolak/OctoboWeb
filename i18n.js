// One page per document; copy switches by ?lang=, then saved choice, then browser language.
(function () {
  const MAIL = '<a href="mailto:ea.colak0@gmail.com">ea.colak0@gmail.com</a>';
  const LANGUAGES = [
    ["en", "English"],
    ["es", "Español"],
    ["tr", "Türkçe"],
    ["ko", "한국어"],
    ["pt-BR", "Português (Brasil)"],
    ["ja", "日本語"],
  ];

  const T = {
    en: {
      "lang.label": "Language",
      "nav.privacy": "Privacy", "nav.support": "Support", "nav.terms": "Terms",
      "home.title": "Octobo — Privacy & Support",
      "home.desc": "Official privacy, support, and terms information for the Octobo vocabulary learning app.",
      "home.eyebrow": "Octobo for iPhone",
      "home.h1": "Learn English vocabulary with clarity.",
      "home.lede": "Official privacy, support, and legal information for Octobo.",
      "home.cta": "Get support",
      "home.privacy.h": "Privacy Policy", "home.privacy.p": "Learn what information Octobo processes and how you can control your data.",
      "home.support.h": "Support", "home.support.p": "Contact us about accounts, study progress, subscriptions, bugs, privacy, or feedback.",
      "home.terms.h": "Terms of Use", "home.terms.p": "Read the straightforward terms for using Octobo.",

      "privacy.title": "Privacy Policy — Octobo",
      "privacy.desc": "How Octobo handles account, learning, quiz, subscription, analytics, and support data.",
      "privacy.eyebrow": "Privacy", "privacy.h1": "Privacy Policy",
      "privacy.lede": "This policy explains the information Octobo processes, how it is used, and the controls available to you.",
      "privacy.updated": "Last updated October 3, 2026",
      "p.s1.h": "Information we process",
      "p.s1.p1": "Octobo processes your account identifier, name, and email through Firebase Authentication, including when you sign in with Apple or Google. Your learning preferences, selected packs, streaks, quiz history, and word progress are stored through SwiftData on your device and Firebase Firestore for syncing and restoration.",
      "p.s1.p2": "Octobo also processes notification preferences stored on your device, support messages and word reports you submit, pseudonymous app-instance identifiers, app events, device and operating-system details, and crash diagnostics through Firebase Analytics and Crashlytics.",
      "p.s2.h": "How we use information",
      "p.s2.p": "We use this information to sign you in, sync and restore learning progress, schedule reminders you choose, run quizzes with friends, check Octobo Plus access, improve reliability, respond to support requests, and understand aggregate feature usage.",
      "p.s3.h": "Quizzes with friends",
      "p.s3.p": "When you create or join a quiz room, other players in that room see your display name, avatar, score, and ranking. After you finish a game, your display name, avatar, and total quiz points appear on a leaderboard that signed-in Octobo users can see.",
      "p.s4.h": "Support requests",
      "p.s4.p": "Support messages, suggestions, and word reports are stored with your account identifier, app version, device model, language, time zone, and a summary of your study progress so we can answer them and fix problems.",
      "p.s5.h": "Service providers and sharing",
      "p.s5.p1": "We use Google Firebase as a service provider for authentication, cloud storage, analytics, and crash diagnostics. Octobo does not sell personal information, display third-party advertising, or use your data for cross-app tracking.",
      "p.s5.p2": "We share your account identifier and purchase status with RevenueCat to check and restore Octobo Plus access. Apple processes payments; Octobo does not receive your payment card details.",
      "p.s6.h": "Your choices",
      "p.s6.p": "You can disable reminders in Settings, submit word-correction and support requests, and permanently delete your account and associated learning data from Profile → Settings → Account → Delete account.",
      "p.s7.h": "Data retention and deletion",
      "p.s7.p1": "Account and learning data is retained while your account exists. Support and correction requests may be retained as needed to resolve the request, prevent abuse, and document corrections. Deleting your account removes your synced learning data, leaderboard entry, sign-in account (including Sign in with Apple authorization), pending study reminders, and local progress. Account deletion requires a network connection and cannot be undone.",
      "p.s7.p2": "Deleting your account does not cancel an Octobo Plus subscription. Manage or cancel it in your Apple account settings.",
      "p.s8.h": "Children",
      "p.s8.p": "Octobo is not directed to children under 13. Do not create an account if local law requires parental consent and you do not have it.",
      "p.s9.h": "Changes and questions",
      "p.s9.p": `Material updates will be reflected on this page and in the app. For a privacy question or deletion issue, email ${MAIL} or visit <a href="../support/">Octobo Support</a>.`,

      "support.title": "Support — Octobo",
      "support.desc": "Contact Octobo support for account, study progress, subscription, bug, privacy, and feedback questions.",
      "support.eyebrow": "Help center", "support.h1": "How can we help?",
      "support.lede": "Contact us about account access, study progress, subscriptions, bugs, privacy questions, general feedback, or feature requests.",
      "support.box.h": "Email Octobo Support",
      "support.box.p1": "Include the screen name, what you expected, and what happened. Please do not include passwords, verification codes, or payment details.",
      "support.box.p2": "You can also contact us inside Octobo from <strong>Profile → Settings → About &amp; Support → Support &amp; Suggestions</strong>.",
      "support.c1.h": "Account access", "support.c1.p": "Sign-in, verification, password, or account deletion help.",
      "support.c2.h": "Study progress", "support.c2.p": "Questions about packs, streaks, quizzes, or synced progress.",
      "support.c3.h": "Octobo Plus", "support.c3.p": "Free trial, restoring purchases, or managing your subscription in Apple account settings.",
      "support.c4.h": "Report a bug", "support.c4.p": "Tell us what happened and which screen you were using.",
      "support.c5.h": "Privacy", "support.c5.p": "Questions about your data, retention, or deletion.",

      "terms.title": "Terms of Use — Octobo",
      "terms.desc": "Terms for using the Octobo vocabulary learning app.",
      "terms.eyebrow": "Legal", "terms.h1": "Terms of Use",
      "terms.lede": "These terms set out the straightforward rules for using Octobo.",
      "terms.updated": "Last updated October 3, 2026",
      "t.s1.h": "Using Octobo", "t.s1.p": "Octobo is a vocabulary study aid. You are responsible for your account, device access, and lawful use of the app.",
      "t.s2.h": "Educational content", "t.s2.p": "Definitions, examples, study lists, translated meanings, and scoring are provided for learning support and may contain errors. Octobo does not guarantee an exam result or language-proficiency outcome.",
      "t.s3.h": "Acceptable use", "t.s3.p": "Do not misuse the service, attempt unauthorized access, interfere with operation, submit abusive content, or use Octobo to violate another person’s rights.",
      "t.s4.h": "Quizzes with friends", "t.s4.p": "Choose a display name that is not offensive or misleading. Do not use quiz rooms or the leaderboard to harass other players or manipulate scores.",
      "t.s5.h": "Octobo Plus", "t.s5.p": "Two word packs are free and Octobo Plus unlocks all of them. Eligible new members can start with a 7-day free trial, which becomes a paid subscription unless canceled at least 24 hours before it ends. Monthly and yearly subscriptions renew automatically at the price shown by Apple until canceled. Manage or cancel your subscription in Apple account settings. You can restore purchases in the app.",
      "t.s6.h": "Availability and accounts", "t.s6.p": "Features may change and online services may occasionally be unavailable. You may delete your account from Settings at any time. We may restrict accounts used to abuse the service or other users.",
      "t.s7.h": "Trademarks", "t.s7.p": "SAT is a trademark of College Board. IELTS is jointly owned by the British Council, IDP: IELTS Australia, and Cambridge University Press &amp; Assessment. Octobo is not affiliated with or endorsed by these organizations.",
      "t.s8.h": "Questions", "t.s8.p": `For questions about these terms, email ${MAIL} or visit <a href="../support/">Octobo Support</a>.`,
    },

    es: {
      "lang.label": "Idioma",
      "nav.privacy": "Privacidad", "nav.support": "Ayuda", "nav.terms": "Condiciones",
      "home.title": "Octobo — Privacidad y ayuda",
      "home.desc": "Información oficial de privacidad, ayuda y condiciones de la app de vocabulario Octobo.",
      "home.eyebrow": "Octobo para iPhone",
      "home.h1": "Aprende vocabulario en inglés con claridad.",
      "home.lede": "Información oficial de privacidad, ayuda y aspectos legales de Octobo.",
      "home.cta": "Obtener ayuda",
      "home.privacy.h": "Política de privacidad", "home.privacy.p": "Descubre qué información trata Octobo y cómo puedes controlar tus datos.",
      "home.support.h": "Ayuda", "home.support.p": "Escríbenos sobre tu cuenta, tu progreso, suscripciones, errores, privacidad o sugerencias.",
      "home.terms.h": "Condiciones de uso", "home.terms.p": "Lee las condiciones claras para usar Octobo.",

      "privacy.title": "Política de privacidad — Octobo",
      "privacy.desc": "Cómo trata Octobo los datos de cuenta, aprendizaje, quizzes, suscripciones, análisis y soporte.",
      "privacy.eyebrow": "Privacidad", "privacy.h1": "Política de privacidad",
      "privacy.lede": "Esta política explica qué información trata Octobo, cómo se usa y qué controles tienes.",
      "privacy.updated": "Última actualización: 3 de octubre de 2026",
      "p.s1.h": "Información que tratamos",
      "p.s1.p1": "Octobo trata el identificador, el nombre y el correo de tu cuenta mediante Firebase Authentication, también cuando inicias sesión con Apple o Google. Tus preferencias de aprendizaje, paquetes seleccionados, rachas, historial de quizzes y progreso de palabras se guardan con SwiftData en tu dispositivo y en Firebase Firestore para sincronizarlos y restaurarlos.",
      "p.s1.p2": "Octobo también trata las preferencias de notificaciones de tu dispositivo, los mensajes de soporte y reportes de palabras que envías, identificadores seudónimos de la instancia de la app, eventos de la app, detalles del dispositivo y del sistema operativo y diagnósticos de fallos mediante Firebase Analytics y Crashlytics.",
      "p.s2.h": "Cómo usamos la información",
      "p.s2.p": "Usamos esta información para que inicies sesión, sincronizar y restaurar tu progreso, programar los recordatorios que elijas, ofrecer quizzes con amigos, verificar el acceso a Octobo Plus, mejorar la fiabilidad, responder solicitudes de soporte y entender el uso agregado de las funciones.",
      "p.s3.h": "Quizzes con amigos",
      "p.s3.p": "Cuando creas una sala de quiz o te unes a una, los demás jugadores de esa sala ven tu nombre visible, tu avatar, tu puntuación y tu posición. Al terminar una partida, tu nombre visible, tu avatar y tus puntos totales de quiz aparecen en una clasificación que pueden ver los usuarios de Octobo con sesión iniciada.",
      "p.s4.h": "Solicitudes de soporte",
      "p.s4.p": "Los mensajes de soporte, las sugerencias y los reportes de palabras se guardan con el identificador de tu cuenta, la versión de la app, el modelo del dispositivo, el idioma, la zona horaria y un resumen de tu progreso de estudio para poder responderlos y solucionar problemas.",
      "p.s5.h": "Proveedores de servicios y datos compartidos",
      "p.s5.p1": "Usamos Google Firebase como proveedor de servicios de autenticación, almacenamiento en la nube, análisis y diagnóstico de fallos. Octobo no vende información personal, no muestra publicidad de terceros ni usa tus datos para el seguimiento entre apps.",
      "p.s5.p2": "Compartimos el identificador de tu cuenta y el estado de tus compras con RevenueCat para verificar y restaurar el acceso a Octobo Plus. Apple procesa los pagos; Octobo no recibe los datos de tu tarjeta.",
      "p.s6.h": "Tus opciones",
      "p.s6.p": "Puedes desactivar los recordatorios en Ajustes, enviar solicitudes de corrección y de soporte, y eliminar de forma permanente tu cuenta y los datos de aprendizaje asociados en Perfil → Ajustes → Cuenta → Eliminar cuenta.",
      "p.s7.h": "Conservación y eliminación de datos",
      "p.s7.p1": "Los datos de la cuenta y de aprendizaje se conservan mientras tu cuenta exista. Las solicitudes de soporte y corrección pueden conservarse el tiempo necesario para resolverlas, evitar abusos y documentar las correcciones. Al eliminar tu cuenta se borran tus datos de aprendizaje sincronizados, tu entrada en la clasificación, tu cuenta de inicio de sesión (incluida la autorización de Iniciar sesión con Apple), los recordatorios pendientes y el progreso local. La eliminación requiere conexión a internet y no se puede deshacer.",
      "p.s7.p2": "Eliminar tu cuenta no cancela una suscripción a Octobo Plus. Gestiónala o cancélala en los ajustes de tu cuenta de Apple.",
      "p.s8.h": "Menores",
      "p.s8.p": "Octobo no está dirigido a menores de 13 años. No crees una cuenta si la ley local exige el consentimiento de tus padres y no lo tienes.",
      "p.s9.h": "Cambios y preguntas",
      "p.s9.p": `Los cambios importantes se reflejarán en esta página y en la app. Para preguntas sobre privacidad o problemas con la eliminación, escribe a ${MAIL} o visita <a href="../support/">la ayuda de Octobo</a>.`,

      "support.title": "Ayuda — Octobo",
      "support.desc": "Contacta con la ayuda de Octobo para dudas sobre la cuenta, el progreso, las suscripciones, errores, privacidad y sugerencias.",
      "support.eyebrow": "Centro de ayuda", "support.h1": "¿Cómo podemos ayudarte?",
      "support.lede": "Escríbenos sobre el acceso a tu cuenta, tu progreso de estudio, suscripciones, errores, privacidad, comentarios generales o ideas de funciones.",
      "support.box.h": "Escribe a la ayuda de Octobo",
      "support.box.p1": "Incluye el nombre de la pantalla, lo que esperabas y lo que ocurrió. No incluyas contraseñas, códigos de verificación ni datos de pago.",
      "support.box.p2": "También puedes escribirnos dentro de Octobo desde <strong>Perfil → Ajustes → Información y ayuda → Ayuda y sugerencias</strong>.",
      "support.c1.h": "Acceso a la cuenta", "support.c1.p": "Ayuda con el inicio de sesión, la verificación, la contraseña o la eliminación de la cuenta.",
      "support.c2.h": "Progreso de estudio", "support.c2.p": "Dudas sobre paquetes, rachas, quizzes o progreso sincronizado.",
      "support.c3.h": "Octobo Plus", "support.c3.p": "Prueba gratuita, restaurar compras o gestionar tu suscripción en los ajustes de tu cuenta de Apple.",
      "support.c4.h": "Reportar un error", "support.c4.p": "Cuéntanos qué pasó y en qué pantalla estabas.",
      "support.c5.h": "Privacidad", "support.c5.p": "Dudas sobre tus datos, su conservación o su eliminación.",

      "terms.title": "Condiciones de uso — Octobo",
      "terms.desc": "Condiciones para usar la app de vocabulario Octobo.",
      "terms.eyebrow": "Legal", "terms.h1": "Condiciones de uso",
      "terms.lede": "Estas condiciones establecen las normas claras para usar Octobo.",
      "terms.updated": "Última actualización: 3 de octubre de 2026",
      "t.s1.h": "Uso de Octobo", "t.s1.p": "Octobo es una herramienta de apoyo para estudiar vocabulario. Eres responsable de tu cuenta, del acceso a tu dispositivo y del uso legal de la app.",
      "t.s2.h": "Contenido educativo", "t.s2.p": "Las definiciones, los ejemplos, las listas de estudio, los significados traducidos y las puntuaciones se ofrecen como apoyo al aprendizaje y pueden contener errores. Octobo no garantiza ningún resultado en exámenes ni nivel de dominio del idioma.",
      "t.s3.h": "Uso aceptable", "t.s3.p": "No hagas un uso indebido del servicio, no intentes acceder sin autorización, no interfieras en su funcionamiento, no envíes contenido abusivo ni uses Octobo para vulnerar los derechos de otras personas.",
      "t.s4.h": "Quizzes con amigos", "t.s4.p": "Elige un nombre visible que no sea ofensivo ni engañoso. No uses las salas de quiz ni la clasificación para acosar a otros jugadores ni manipular puntuaciones.",
      "t.s5.h": "Octobo Plus", "t.s5.p": "Dos paquetes de palabras son gratis y Octobo Plus los desbloquea todos. Los nuevos miembros que cumplan los requisitos pueden empezar con una prueba gratuita de 7 días, que se convierte en una suscripción de pago si no se cancela al menos 24 horas antes de que termine. Las suscripciones mensuales y anuales se renuevan automáticamente al precio que muestra Apple hasta que se cancelen. Gestiona o cancela tu suscripción en los ajustes de tu cuenta de Apple. Puedes restaurar las compras en la app.",
      "t.s6.h": "Disponibilidad y cuentas", "t.s6.p": "Las funciones pueden cambiar y los servicios en línea pueden no estar disponibles en ocasiones. Puedes eliminar tu cuenta desde Ajustes en cualquier momento. Podemos restringir las cuentas que se usen para abusar del servicio o de otros usuarios.",
      "t.s7.h": "Marcas", "t.s7.p": "SAT es una marca registrada de College Board. IELTS es propiedad conjunta del British Council, IDP: IELTS Australia y Cambridge University Press &amp; Assessment. Octobo no está afiliado a estas organizaciones ni cuenta con su respaldo.",
      "t.s8.h": "Preguntas", "t.s8.p": `Para preguntas sobre estas condiciones, escribe a ${MAIL} o visita <a href="../support/">la ayuda de Octobo</a>.`,
    },

    tr: {
      "lang.label": "Dil",
      "nav.privacy": "Gizlilik", "nav.support": "Destek", "nav.terms": "Koşullar",
      "home.title": "Octobo — Gizlilik ve Destek",
      "home.desc": "Octobo kelime öğrenme uygulamasının resmî gizlilik, destek ve kullanım koşulları bilgileri.",
      "home.eyebrow": "iPhone için Octobo",
      "home.h1": "İngilizce kelimeleri net bir şekilde öğren.",
      "home.lede": "Octobo için resmî gizlilik, destek ve yasal bilgiler.",
      "home.cta": "Destek al",
      "home.privacy.h": "Gizlilik Politikası", "home.privacy.p": "Octobo'nun hangi bilgileri işlediğini ve verilerini nasıl kontrol edebileceğini öğren.",
      "home.support.h": "Destek", "home.support.p": "Hesap, çalışma ilerlemesi, abonelik, hata, gizlilik veya geri bildirim için bize ulaş.",
      "home.terms.h": "Kullanım Koşulları", "home.terms.p": "Octobo'yu kullanmaya ilişkin açık koşulları oku.",

      "privacy.title": "Gizlilik Politikası — Octobo",
      "privacy.desc": "Octobo'nun hesap, öğrenme, quiz, abonelik, analiz ve destek verilerini nasıl işlediği.",
      "privacy.eyebrow": "Gizlilik", "privacy.h1": "Gizlilik Politikası",
      "privacy.lede": "Bu politika Octobo'nun hangi bilgileri işlediğini, bunları nasıl kullandığını ve sahip olduğun kontrolleri açıklar.",
      "privacy.updated": "Son güncelleme: 3 Ekim 2026",
      "p.s1.h": "İşlediğimiz bilgiler",
      "p.s1.p1": "Octobo; hesap kimliğini, adını ve e-posta adresini, Apple veya Google ile giriş yaptığında da dahil olmak üzere Firebase Authentication üzerinden işler. Öğrenme tercihlerin, seçtiğin paketler, serilerin, quiz geçmişin ve kelime ilerlemen cihazında SwiftData ile, senkronizasyon ve geri yükleme için de Firebase Firestore'da saklanır.",
      "p.s1.p2": "Octobo ayrıca cihazındaki bildirim tercihlerini, gönderdiğin destek mesajlarını ve kelime bildirimlerini, takma adlı uygulama örneği kimliklerini, uygulama olaylarını, cihaz ve işletim sistemi bilgilerini ve çökme tanılamalarını Firebase Analytics ve Crashlytics üzerinden işler.",
      "p.s2.h": "Bilgileri nasıl kullanıyoruz",
      "p.s2.p": "Bu bilgileri oturum açman, öğrenme ilerlemeni senkronize edip geri yüklemek, seçtiğin hatırlatıcıları planlamak, arkadaşlarla quiz oynatmak, Octobo Plus erişimini doğrulamak, güvenilirliği artırmak, destek taleplerine yanıt vermek ve özelliklerin genel kullanımını anlamak için kullanırız.",
      "p.s3.h": "Arkadaşlarla quiz",
      "p.s3.p": "Bir quiz odası oluşturduğunda veya bir odaya katıldığında, o odadaki diğer oyuncular görünen adını, avatarını, puanını ve sıralamanı görür. Bir oyunu bitirdiğinde görünen adın, avatarın ve toplam quiz puanın, oturum açmış Octobo kullanıcılarının görebildiği liderlik tablosunda yer alır.",
      "p.s4.h": "Destek talepleri",
      "p.s4.p": "Destek mesajları, öneriler ve kelime bildirimleri; yanıt verebilmemiz ve sorunları çözebilmemiz için hesap kimliğin, uygulama sürümü, cihaz modeli, dil, saat dilimi ve çalışma ilerlemenin bir özetiyle birlikte saklanır.",
      "p.s5.h": "Hizmet sağlayıcılar ve paylaşım",
      "p.s5.p1": "Kimlik doğrulama, bulut depolama, analiz ve çökme tanılama için hizmet sağlayıcı olarak Google Firebase'i kullanıyoruz. Octobo kişisel bilgileri satmaz, üçüncü taraf reklam göstermez ve verilerini uygulamalar arası izleme için kullanmaz.",
      "p.s5.p2": "Octobo Plus erişimini doğrulamak ve geri yüklemek için hesap kimliğini ve satın alma durumunu RevenueCat ile paylaşırız. Ödemeleri Apple işler; Octobo kart bilgilerini almaz.",
      "p.s6.h": "Seçimlerin",
      "p.s6.p": "Hatırlatıcıları Ayarlar'dan kapatabilir, kelime düzeltme ve destek talepleri gönderebilir, hesabını ve ilişkili öğrenme verilerini Profil → Ayarlar → Hesap → Hesabı sil yolundan kalıcı olarak silebilirsin.",
      "p.s7.h": "Verilerin saklanması ve silinmesi",
      "p.s7.p1": "Hesap ve öğrenme verileri hesabın var olduğu sürece saklanır. Destek ve düzeltme talepleri; talebi çözmek, kötüye kullanımı önlemek ve düzeltmeleri kayıt altına almak için gerektiği kadar saklanabilir. Hesabını sildiğinde senkronize öğrenme verilerin, liderlik tablosu kaydın, giriş hesabın (Apple ile Giriş Yap yetkisi dahil), bekleyen çalışma hatırlatıcıların ve cihazdaki ilerlemen silinir. Hesap silme internet bağlantısı gerektirir ve geri alınamaz.",
      "p.s7.p2": "Hesabını silmek Octobo Plus aboneliğini iptal etmez. Aboneliğini Apple hesap ayarlarından yönetebilir veya iptal edebilirsin.",
      "p.s8.h": "Çocuklar",
      "p.s8.p": "Octobo 13 yaşından küçük çocuklara yönelik değildir. Yerel yasalar ebeveyn izni gerektiriyorsa ve bu iznin yoksa hesap oluşturma.",
      "p.s9.h": "Değişiklikler ve sorular",
      "p.s9.p": `Önemli değişiklikler bu sayfaya ve uygulamaya yansıtılır. Gizlilik soruların veya silme sorunların için ${MAIL} adresine yaz ya da <a href="../support/">Octobo Destek</a> sayfasını ziyaret et.`,

      "support.title": "Destek — Octobo",
      "support.desc": "Hesap, çalışma ilerlemesi, abonelik, hata, gizlilik ve geri bildirim soruları için Octobo desteğine ulaş.",
      "support.eyebrow": "Yardım merkezi", "support.h1": "Nasıl yardımcı olabiliriz?",
      "support.lede": "Hesap erişimi, çalışma ilerlemesi, abonelikler, hatalar, gizlilik soruları, genel geri bildirim veya özellik istekleri için bize ulaş.",
      "support.box.h": "Octobo Destek'e e-posta gönder",
      "support.box.p1": "Ekranın adını, ne beklediğini ve ne olduğunu yaz. Lütfen şifre, doğrulama kodu veya ödeme bilgisi ekleme.",
      "support.box.p2": "Octobo içinden de <strong>Profil → Ayarlar → Hakkında ve Destek → Destek ve Öneriler</strong> yolundan bize ulaşabilirsin.",
      "support.c1.h": "Hesap erişimi", "support.c1.p": "Giriş, doğrulama, şifre veya hesap silme konusunda yardım.",
      "support.c2.h": "Çalışma ilerlemesi", "support.c2.p": "Paketler, seriler, quizler veya senkronize ilerleme hakkında sorular.",
      "support.c3.h": "Octobo Plus", "support.c3.p": "Ücretsiz deneme, satın alımları geri yükleme veya aboneliği Apple hesap ayarlarından yönetme.",
      "support.c4.h": "Hata bildir", "support.c4.p": "Ne olduğunu ve hangi ekranda olduğunu anlat.",
      "support.c5.h": "Gizlilik", "support.c5.p": "Verilerin, saklama süreleri veya silme hakkında sorular.",

      "terms.title": "Kullanım Koşulları — Octobo",
      "terms.desc": "Octobo kelime öğrenme uygulamasını kullanma koşulları.",
      "terms.eyebrow": "Yasal", "terms.h1": "Kullanım Koşulları",
      "terms.lede": "Bu koşullar Octobo'yu kullanmaya ilişkin açık kuralları belirler.",
      "terms.updated": "Son güncelleme: 3 Ekim 2026",
      "t.s1.h": "Octobo'yu kullanma", "t.s1.p": "Octobo bir kelime çalışma yardımcısıdır. Hesabından, cihazına erişimden ve uygulamanın yasalara uygun kullanımından sen sorumlusun.",
      "t.s2.h": "Eğitim içeriği", "t.s2.p": "Tanımlar, örnekler, çalışma listeleri, çevrilmiş anlamlar ve puanlamalar öğrenmeyi desteklemek için sunulur ve hata içerebilir. Octobo herhangi bir sınav sonucunu veya dil yeterliliğini garanti etmez.",
      "t.s3.h": "Kabul edilebilir kullanım", "t.s3.p": "Hizmeti kötüye kullanma, yetkisiz erişim deneme, işleyişe müdahale etme, rahatsız edici içerik gönderme veya Octobo'yu başkalarının haklarını ihlal etmek için kullanma.",
      "t.s4.h": "Arkadaşlarla quiz", "t.s4.p": "Rahatsız edici veya yanıltıcı olmayan bir görünen ad seç. Quiz odalarını ya da liderlik tablosunu diğer oyuncuları taciz etmek veya puanları manipüle etmek için kullanma.",
      "t.s5.h": "Octobo Plus", "t.s5.p": "İki kelime paketi ücretsizdir ve Octobo Plus tüm paketlerin kilidini açar. Uygun yeni üyeler 7 günlük ücretsiz denemeyle başlayabilir; deneme, bitiminden en az 24 saat önce iptal edilmezse ücretli aboneliğe dönüşür. Aylık ve yıllık abonelikler iptal edilene kadar Apple'ın gösterdiği fiyattan otomatik olarak yenilenir. Aboneliğini Apple hesap ayarlarından yönetebilir veya iptal edebilirsin. Satın alımlarını uygulama içinden geri yükleyebilirsin.",
      "t.s6.h": "Erişilebilirlik ve hesaplar", "t.s6.p": "Özellikler değişebilir ve çevrim içi hizmetler zaman zaman kullanılamayabilir. Hesabını istediğin zaman Ayarlar'dan silebilirsin. Hizmeti veya diğer kullanıcıları kötüye kullanmak için kullanılan hesapları kısıtlayabiliriz.",
      "t.s7.h": "Ticari markalar", "t.s7.p": "SAT, College Board'un ticari markasıdır. IELTS; British Council, IDP: IELTS Australia ve Cambridge University Press &amp; Assessment'ın ortak mülkiyetindedir. Octobo bu kuruluşlarla bağlantılı değildir ve onlar tarafından onaylanmamıştır.",
      "t.s8.h": "Sorular", "t.s8.p": `Bu koşullarla ilgili soruların için ${MAIL} adresine yaz ya da <a href="../support/">Octobo Destek</a> sayfasını ziyaret et.`,
    },

    ko: {
      "lang.label": "언어",
      "nav.privacy": "개인정보", "nav.support": "지원", "nav.terms": "약관",
      "home.title": "Octobo — 개인정보 및 지원",
      "home.desc": "Octobo 어휘 학습 앱의 공식 개인정보, 지원, 이용 약관 안내입니다.",
      "home.eyebrow": "iPhone용 Octobo",
      "home.h1": "영어 단어를 명확하게 배우세요.",
      "home.lede": "Octobo의 공식 개인정보, 지원, 법적 고지 안내입니다.",
      "home.cta": "지원 받기",
      "home.privacy.h": "개인정보 처리방침", "home.privacy.p": "Octobo가 처리하는 정보와 내 데이터를 관리하는 방법을 확인하세요.",
      "home.support.h": "지원", "home.support.p": "계정, 학습 진행, 구독, 버그, 개인정보, 의견에 대해 문의하세요.",
      "home.terms.h": "이용 약관", "home.terms.p": "Octobo 이용에 관한 명확한 약관을 확인하세요.",

      "privacy.title": "개인정보 처리방침 — Octobo",
      "privacy.desc": "Octobo가 계정, 학습, 퀴즈, 구독, 분석, 지원 데이터를 처리하는 방법입니다.",
      "privacy.eyebrow": "개인정보", "privacy.h1": "개인정보 처리방침",
      "privacy.lede": "이 방침은 Octobo가 처리하는 정보, 그 이용 방법, 사용자가 선택할 수 있는 관리 방법을 설명합니다.",
      "privacy.updated": "최종 업데이트: 2026년 10월 3일",
      "p.s1.h": "처리하는 정보",
      "p.s1.p1": "Octobo는 Apple 또는 Google로 로그인하는 경우를 포함해 계정 식별자, 이름, 이메일을 Firebase Authentication으로 처리합니다. 학습 설정, 선택한 팩, 연속 학습 기록, 퀴즈 기록, 단어 진행 상황은 기기의 SwiftData와 동기화 및 복원을 위한 Firebase Firestore에 저장됩니다.",
      "p.s1.p2": "또한 Octobo는 기기에 저장된 알림 설정, 사용자가 보낸 지원 메시지와 단어 신고, 가명 처리된 앱 인스턴스 식별자, 앱 이벤트, 기기 및 운영체제 정보, 충돌 진단 정보를 Firebase Analytics와 Crashlytics로 처리합니다.",
      "p.s2.h": "정보 이용 목적",
      "p.s2.p": "이 정보는 로그인, 학습 진행 상황 동기화 및 복원, 선택한 알림 예약, 친구와의 퀴즈 진행, Octobo Plus 이용 권한 확인, 안정성 개선, 지원 요청 응답, 전체 기능 이용 현황 파악에 사용됩니다.",
      "p.s3.h": "친구와 퀴즈",
      "p.s3.p": "퀴즈 방을 만들거나 참여하면 같은 방의 다른 플레이어에게 표시 이름, 아바타, 점수, 순위가 보입니다. 게임을 마치면 표시 이름, 아바타, 누적 퀴즈 점수가 로그인한 Octobo 사용자가 볼 수 있는 순위표에 표시됩니다.",
      "p.s4.h": "지원 요청",
      "p.s4.p": "지원 메시지, 제안, 단어 신고는 답변하고 문제를 해결할 수 있도록 계정 식별자, 앱 버전, 기기 모델, 언어, 시간대, 학습 진행 요약과 함께 저장됩니다.",
      "p.s5.h": "서비스 제공업체 및 공유",
      "p.s5.p1": "인증, 클라우드 저장, 분석, 충돌 진단을 위해 Google Firebase를 서비스 제공업체로 이용합니다. Octobo는 개인정보를 판매하지 않으며, 제3자 광고를 표시하지 않고, 앱 간 추적에 데이터를 사용하지 않습니다.",
      "p.s5.p2": "Octobo Plus 이용 권한을 확인하고 복원하기 위해 계정 식별자와 구매 상태를 RevenueCat과 공유합니다. 결제는 Apple이 처리하며 Octobo는 결제 카드 정보를 받지 않습니다.",
      "p.s6.h": "선택 사항",
      "p.s6.p": "설정에서 알림을 끄고, 단어 수정 및 지원 요청을 보내고, 프로필 → 설정 → 계정 → 계정 삭제에서 계정과 관련 학습 데이터를 영구 삭제할 수 있습니다.",
      "p.s7.h": "데이터 보관 및 삭제",
      "p.s7.p1": "계정 및 학습 데이터는 계정이 유지되는 동안 보관됩니다. 지원 및 수정 요청은 요청 처리, 악용 방지, 수정 내역 기록을 위해 필요한 기간 동안 보관될 수 있습니다. 계정을 삭제하면 동기화된 학습 데이터, 순위표 항목, 로그인 계정(Apple로 로그인 권한 포함), 예약된 학습 알림, 기기 내 진행 상황이 삭제됩니다. 계정 삭제에는 네트워크 연결이 필요하며 되돌릴 수 없습니다.",
      "p.s7.p2": "계정을 삭제해도 Octobo Plus 구독은 취소되지 않습니다. Apple 계정 설정에서 구독을 관리하거나 취소하세요.",
      "p.s8.h": "어린이",
      "p.s8.p": "Octobo는 만 13세 미만 어린이를 대상으로 하지 않습니다. 현지 법률상 보호자 동의가 필요한데 동의를 받지 않았다면 계정을 만들지 마세요.",
      "p.s9.h": "변경 및 문의",
      "p.s9.p": `중요한 변경 사항은 이 페이지와 앱에 반영됩니다. 개인정보 관련 문의나 삭제 문제는 ${MAIL}로 이메일을 보내거나 <a href="../support/">Octobo 지원</a>을 방문하세요.`,

      "support.title": "지원 — Octobo",
      "support.desc": "계정, 학습 진행, 구독, 버그, 개인정보, 의견에 관해 Octobo 지원팀에 문의하세요.",
      "support.eyebrow": "고객센터", "support.h1": "무엇을 도와드릴까요?",
      "support.lede": "계정 접속, 학습 진행, 구독, 버그, 개인정보 문의, 일반 의견, 기능 요청에 대해 문의하세요.",
      "support.box.h": "Octobo 지원팀에 이메일 보내기",
      "support.box.p1": "화면 이름, 기대한 동작, 실제로 일어난 일을 적어 주세요. 비밀번호, 인증 코드, 결제 정보는 보내지 마세요.",
      "support.box.p2": "Octobo 앱의 <strong>프로필 → 설정 → 정보 및 지원 → 지원 및 제안</strong>에서도 문의할 수 있습니다.",
      "support.c1.h": "계정 접속", "support.c1.p": "로그인, 인증, 비밀번호, 계정 삭제 관련 도움.",
      "support.c2.h": "학습 진행", "support.c2.p": "팩, 연속 학습, 퀴즈, 동기화된 진행 상황에 관한 질문.",
      "support.c3.h": "Octobo Plus", "support.c3.p": "무료 체험, 구매 복원, Apple 계정 설정에서의 구독 관리.",
      "support.c4.h": "버그 신고", "support.c4.p": "어떤 화면에서 무슨 일이 있었는지 알려 주세요.",
      "support.c5.h": "개인정보", "support.c5.p": "내 데이터, 보관, 삭제에 관한 질문.",

      "terms.title": "이용 약관 — Octobo",
      "terms.desc": "Octobo 어휘 학습 앱 이용 약관입니다.",
      "terms.eyebrow": "법적 고지", "terms.h1": "이용 약관",
      "terms.lede": "이 약관은 Octobo 이용에 관한 명확한 규칙을 정합니다.",
      "terms.updated": "최종 업데이트: 2026년 10월 3일",
      "t.s1.h": "Octobo 이용", "t.s1.p": "Octobo는 어휘 학습 보조 도구입니다. 계정, 기기 접근, 앱의 합법적인 사용에 대한 책임은 사용자에게 있습니다.",
      "t.s2.h": "교육 콘텐츠", "t.s2.p": "뜻, 예문, 학습 목록, 번역된 뜻, 점수는 학습을 돕기 위해 제공되며 오류가 있을 수 있습니다. Octobo는 시험 결과나 언어 실력 향상을 보장하지 않습니다.",
      "t.s3.h": "허용되는 이용", "t.s3.p": "서비스를 악용하거나, 무단 접근을 시도하거나, 운영을 방해하거나, 불쾌한 콘텐츠를 보내거나, 다른 사람의 권리를 침해하는 데 Octobo를 사용하지 마세요.",
      "t.s4.h": "친구와 퀴즈", "t.s4.p": "불쾌하거나 오해를 일으키지 않는 표시 이름을 사용하세요. 퀴즈 방이나 순위표를 이용해 다른 플레이어를 괴롭히거나 점수를 조작하지 마세요.",
      "t.s5.h": "Octobo Plus", "t.s5.p": "단어 팩 2개는 무료이며 Octobo Plus로 모든 팩을 이용할 수 있습니다. 자격이 있는 신규 회원은 7일 무료 체험으로 시작할 수 있으며, 체험 종료 최소 24시간 전에 취소하지 않으면 유료 구독으로 전환됩니다. 월간 및 연간 구독은 취소할 때까지 Apple에 표시된 가격으로 자동 갱신됩니다. 구독은 Apple 계정 설정에서 관리하거나 취소할 수 있으며, 구매 항목은 앱에서 복원할 수 있습니다.",
      "t.s6.h": "서비스 제공 및 계정", "t.s6.p": "기능은 변경될 수 있으며 온라인 서비스를 일시적으로 이용하지 못할 수도 있습니다. 계정은 언제든지 설정에서 삭제할 수 있습니다. 서비스나 다른 사용자를 악용하는 데 사용된 계정은 제한될 수 있습니다.",
      "t.s7.h": "상표", "t.s7.p": "SAT는 College Board의 상표입니다. IELTS는 British Council, IDP: IELTS Australia, Cambridge University Press &amp; Assessment가 공동 소유합니다. Octobo는 이들 기관과 제휴하거나 승인받지 않았습니다.",
      "t.s8.h": "문의", "t.s8.p": `이 약관에 관한 문의는 ${MAIL}로 이메일을 보내거나 <a href="../support/">Octobo 지원</a>을 방문하세요.`,
    },

    "pt-BR": {
      "lang.label": "Idioma",
      "nav.privacy": "Privacidade", "nav.support": "Suporte", "nav.terms": "Termos",
      "home.title": "Octobo — Privacidade e Suporte",
      "home.desc": "Informações oficiais de privacidade, suporte e termos do app de vocabulário Octobo.",
      "home.eyebrow": "Octobo para iPhone",
      "home.h1": "Aprenda vocabulário em inglês com clareza.",
      "home.lede": "Informações oficiais de privacidade, suporte e questões jurídicas do Octobo.",
      "home.cta": "Obter suporte",
      "home.privacy.h": "Política de Privacidade", "home.privacy.p": "Saiba quais informações o Octobo trata e como você pode controlar seus dados.",
      "home.support.h": "Suporte", "home.support.p": "Fale com a gente sobre contas, progresso de estudo, assinaturas, bugs, privacidade ou sugestões.",
      "home.terms.h": "Termos de Uso", "home.terms.p": "Leia os termos claros para usar o Octobo.",

      "privacy.title": "Política de Privacidade — Octobo",
      "privacy.desc": "Como o Octobo trata dados de conta, aprendizado, quizzes, assinatura, análise e suporte.",
      "privacy.eyebrow": "Privacidade", "privacy.h1": "Política de Privacidade",
      "privacy.lede": "Esta política explica quais informações o Octobo trata, como elas são usadas e os controles disponíveis para você.",
      "privacy.updated": "Última atualização: 3 de outubro de 2026",
      "p.s1.h": "Informações que tratamos",
      "p.s1.p1": "O Octobo trata o identificador, o nome e o e-mail da sua conta pelo Firebase Authentication, inclusive quando você entra com a Apple ou o Google. Suas preferências de aprendizado, pacotes selecionados, sequências, histórico de quizzes e progresso das palavras ficam armazenados pelo SwiftData no seu dispositivo e no Firebase Firestore para sincronização e restauração.",
      "p.s1.p2": "O Octobo também trata as preferências de notificação do seu dispositivo, as mensagens de suporte e os relatos de palavras que você envia, identificadores pseudônimos da instância do app, eventos do app, detalhes do dispositivo e do sistema operacional e diagnósticos de falhas pelo Firebase Analytics e pelo Crashlytics.",
      "p.s2.h": "Como usamos as informações",
      "p.s2.p": "Usamos essas informações para fazer seu login, sincronizar e restaurar o progresso de aprendizado, agendar os lembretes que você escolher, realizar quizzes com amigos, verificar o acesso ao Octobo Plus, melhorar a confiabilidade, responder a solicitações de suporte e entender o uso agregado dos recursos.",
      "p.s3.h": "Quizzes com amigos",
      "p.s3.p": "Quando você cria ou entra em uma sala de quiz, os outros jogadores dessa sala veem seu nome de exibição, avatar, pontuação e posição. Depois que você termina uma partida, seu nome de exibição, avatar e total de pontos de quiz aparecem em um ranking que os usuários do Octobo conectados podem ver.",
      "p.s4.h": "Solicitações de suporte",
      "p.s4.p": "Mensagens de suporte, sugestões e relatos de palavras são armazenados com o identificador da sua conta, a versão do app, o modelo do dispositivo, o idioma, o fuso horário e um resumo do seu progresso de estudo, para que possamos responder e corrigir problemas.",
      "p.s5.h": "Prestadores de serviço e compartilhamento",
      "p.s5.p1": "Usamos o Google Firebase como prestador de serviços de autenticação, armazenamento em nuvem, análise e diagnóstico de falhas. O Octobo não vende informações pessoais, não exibe anúncios de terceiros e não usa seus dados para rastreamento entre apps.",
      "p.s5.p2": "Compartilhamos o identificador da sua conta e o status de compra com a RevenueCat para verificar e restaurar o acesso ao Octobo Plus. A Apple processa os pagamentos; o Octobo não recebe os dados do seu cartão.",
      "p.s6.h": "Suas escolhas",
      "p.s6.p": "Você pode desativar os lembretes nos Ajustes, enviar pedidos de correção de palavras e de suporte, e excluir permanentemente sua conta e os dados de aprendizado associados em Perfil → Ajustes → Conta → Excluir conta.",
      "p.s7.h": "Retenção e exclusão de dados",
      "p.s7.p1": "Os dados da conta e de aprendizado são mantidos enquanto sua conta existir. Solicitações de suporte e de correção podem ser mantidas pelo tempo necessário para resolvê-las, evitar abusos e documentar as correções. Excluir sua conta remove seus dados de aprendizado sincronizados, seu registro no ranking, sua conta de login (incluindo a autorização do Iniciar sessão com a Apple), os lembretes de estudo pendentes e o progresso local. A exclusão da conta exige conexão de rede e não pode ser desfeita.",
      "p.s7.p2": "Excluir sua conta não cancela uma assinatura do Octobo Plus. Gerencie ou cancele nos ajustes da sua conta Apple.",
      "p.s8.h": "Crianças",
      "p.s8.p": "O Octobo não é direcionado a menores de 13 anos. Não crie uma conta se a lei local exigir consentimento dos pais e você não o tiver.",
      "p.s9.h": "Alterações e dúvidas",
      "p.s9.p": `Atualizações relevantes serão refletidas nesta página e no app. Para dúvidas sobre privacidade ou problemas de exclusão, envie um e-mail para ${MAIL} ou acesse o <a href="../support/">Suporte do Octobo</a>.`,

      "support.title": "Suporte — Octobo",
      "support.desc": "Fale com o suporte do Octobo sobre conta, progresso de estudo, assinatura, bugs, privacidade e sugestões.",
      "support.eyebrow": "Central de ajuda", "support.h1": "Como podemos ajudar?",
      "support.lede": "Fale com a gente sobre acesso à conta, progresso de estudo, assinaturas, bugs, dúvidas de privacidade, feedback geral ou ideias de recursos.",
      "support.box.h": "Envie um e-mail para o Suporte do Octobo",
      "support.box.p1": "Informe o nome da tela, o que você esperava e o que aconteceu. Não envie senhas, códigos de verificação ou dados de pagamento.",
      "support.box.p2": "Você também pode falar com a gente dentro do Octobo em <strong>Perfil → Ajustes → Sobre e Suporte → Suporte e sugestões</strong>.",
      "support.c1.h": "Acesso à conta", "support.c1.p": "Ajuda com login, verificação, senha ou exclusão da conta.",
      "support.c2.h": "Progresso de estudo", "support.c2.p": "Dúvidas sobre pacotes, sequências, quizzes ou progresso sincronizado.",
      "support.c3.h": "Octobo Plus", "support.c3.p": "Teste grátis, restauração de compras ou gerenciamento da assinatura nos ajustes da conta Apple.",
      "support.c4.h": "Informar um bug", "support.c4.p": "Conte o que aconteceu e em qual tela você estava.",
      "support.c5.h": "Privacidade", "support.c5.p": "Dúvidas sobre seus dados, retenção ou exclusão.",

      "terms.title": "Termos de Uso — Octobo",
      "terms.desc": "Termos para usar o app de vocabulário Octobo.",
      "terms.eyebrow": "Jurídico", "terms.h1": "Termos de Uso",
      "terms.lede": "Estes termos definem as regras claras para usar o Octobo.",
      "terms.updated": "Última atualização: 3 de outubro de 2026",
      "t.s1.h": "Usando o Octobo", "t.s1.p": "O Octobo é uma ferramenta de apoio ao estudo de vocabulário. Você é responsável pela sua conta, pelo acesso ao dispositivo e pelo uso legal do app.",
      "t.s2.h": "Conteúdo educacional", "t.s2.p": "Definições, exemplos, listas de estudo, significados traduzidos e pontuações são oferecidos como apoio ao aprendizado e podem conter erros. O Octobo não garante nenhum resultado em provas nem nível de proficiência no idioma.",
      "t.s3.h": "Uso aceitável", "t.s3.p": "Não use o serviço de forma indevida, não tente acesso não autorizado, não interfira no funcionamento, não envie conteúdo abusivo e não use o Octobo para violar os direitos de outra pessoa.",
      "t.s4.h": "Quizzes com amigos", "t.s4.p": "Escolha um nome de exibição que não seja ofensivo nem enganoso. Não use as salas de quiz nem o ranking para assediar outros jogadores ou manipular pontuações.",
      "t.s5.h": "Octobo Plus", "t.s5.p": "Dois pacotes de palavras são grátis e o Octobo Plus desbloqueia todos. Novos membros elegíveis podem começar com um teste grátis de 7 dias, que vira uma assinatura paga se não for cancelado pelo menos 24 horas antes do fim. As assinaturas mensais e anuais são renovadas automaticamente pelo preço exibido pela Apple até serem canceladas. Gerencie ou cancele sua assinatura nos ajustes da conta Apple. Você pode restaurar compras no app.",
      "t.s6.h": "Disponibilidade e contas", "t.s6.p": "Os recursos podem mudar e os serviços online podem ficar indisponíveis de vez em quando. Você pode excluir sua conta nos Ajustes a qualquer momento. Podemos restringir contas usadas para abusar do serviço ou de outros usuários.",
      "t.s7.h": "Marcas registradas", "t.s7.p": "SAT é uma marca registrada do College Board. O IELTS pertence em conjunto ao British Council, à IDP: IELTS Australia e à Cambridge University Press &amp; Assessment. O Octobo não tem vínculo com essas organizações nem é endossado por elas.",
      "t.s8.h": "Dúvidas", "t.s8.p": `Para dúvidas sobre estes termos, envie um e-mail para ${MAIL} ou acesse o <a href="../support/">Suporte do Octobo</a>.`,
    },

    ja: {
      "lang.label": "言語",
      "nav.privacy": "プライバシー", "nav.support": "サポート", "nav.terms": "利用規約",
      "home.title": "Octobo — プライバシーとサポート",
      "home.desc": "英単語学習アプリOctoboの公式プライバシー、サポート、利用規約の情報です。",
      "home.eyebrow": "iPhone版Octobo",
      "home.h1": "英単語を、わかりやすく学ぼう。",
      "home.lede": "Octoboの公式プライバシー、サポート、法的情報です。",
      "home.cta": "サポートを受ける",
      "home.privacy.h": "プライバシーポリシー", "home.privacy.p": "Octoboが扱う情報と、データを管理する方法を確認できます。",
      "home.support.h": "サポート", "home.support.p": "アカウント、学習の進捗、サブスクリプション、不具合、プライバシー、ご意見についてお問い合わせください。",
      "home.terms.h": "利用規約", "home.terms.p": "Octoboを利用する際のわかりやすい規約をご覧ください。",

      "privacy.title": "プライバシーポリシー — Octobo",
      "privacy.desc": "Octoboがアカウント、学習、クイズ、サブスクリプション、分析、サポートのデータをどのように扱うか。",
      "privacy.eyebrow": "プライバシー", "privacy.h1": "プライバシーポリシー",
      "privacy.lede": "このポリシーでは、Octoboが扱う情報、その利用方法、お客様が選べる管理方法について説明します。",
      "privacy.updated": "最終更新日：2026年10月3日",
      "p.s1.h": "取り扱う情報",
      "p.s1.p1": "Octoboは、AppleやGoogleでサインインした場合も含め、アカウント識別子、名前、メールアドレスをFirebase Authenticationで処理します。学習設定、選択したパック、連続記録、クイズ履歴、単語の進捗は、端末上のSwiftDataと、同期・復元のためのFirebase Firestoreに保存されます。",
      "p.s1.p2": "また、端末に保存された通知設定、お客様が送信したサポートメッセージや単語の報告、仮名のアプリインスタンス識別子、アプリイベント、端末とOSの情報、クラッシュ診断をFirebase AnalyticsとCrashlyticsで処理します。",
      "p.s2.h": "情報の利用方法",
      "p.s2.p": "これらの情報は、サインイン、学習の進捗の同期と復元、選んだリマインダーの設定、友だちとのクイズの実施、Octobo Plusの利用状況の確認、信頼性の向上、サポートへの対応、機能の利用状況の集計的な把握のために使用します。",
      "p.s3.h": "友だちとクイズ",
      "p.s3.p": "クイズルームを作成または参加すると、同じルームのほかのプレイヤーにあなたの表示名、アバター、スコア、順位が表示されます。ゲームを終えると、表示名、アバター、クイズの合計ポイントが、サインイン中のOctoboユーザーが見られるランキングに表示されます。",
      "p.s4.h": "サポートリクエスト",
      "p.s4.p": "サポートメッセージ、提案、単語の報告は、回答や問題の修正のために、アカウント識別子、アプリのバージョン、端末のモデル、言語、タイムゾーン、学習の進捗の概要とともに保存されます。",
      "p.s5.h": "サービス提供者と共有",
      "p.s5.p1": "認証、クラウドストレージ、分析、クラッシュ診断のサービス提供者としてGoogle Firebaseを利用しています。Octoboは個人情報を販売せず、第三者の広告を表示せず、アプリ間のトラッキングにデータを使用しません。",
      "p.s5.p2": "Octobo Plusの利用状況の確認と復元のため、アカウント識別子と購入状況をRevenueCatと共有します。支払いはAppleが処理し、Octoboがお客様のカード情報を受け取ることはありません。",
      "p.s6.h": "お客様の選択",
      "p.s6.p": "リマインダーは設定でオフにでき、単語の修正やサポートのリクエストを送信できます。また、プロフィール → 設定 → アカウント → アカウントを削除 から、アカウントと関連する学習データを完全に削除できます。",
      "p.s7.h": "データの保存と削除",
      "p.s7.p1": "アカウントと学習データは、アカウントが存在する間保持されます。サポートや修正のリクエストは、対応、不正防止、修正記録のために必要な期間保持される場合があります。アカウントを削除すると、同期された学習データ、ランキングの記録、サインイン用アカウント（Appleでサインインの認可を含む）、予定されている学習リマインダー、端末内の進捗が削除されます。アカウントの削除にはネットワーク接続が必要で、取り消すことはできません。",
      "p.s7.p2": "アカウントを削除しても、Octobo Plusのサブスクリプションは解約されません。Appleアカウントの設定で管理または解約してください。",
      "p.s8.h": "お子さま",
      "p.s8.p": "Octoboは13歳未満のお子さまを対象としていません。現地の法律で保護者の同意が必要な場合、同意がなければアカウントを作成しないでください。",
      "p.s9.h": "変更とお問い合わせ",
      "p.s9.p": `重要な変更はこのページとアプリに反映されます。プライバシーに関するご質問や削除の問題は、${MAIL}までメールでお送りいただくか、<a href="../support/">Octoboサポート</a>をご覧ください。`,

      "support.title": "サポート — Octobo",
      "support.desc": "アカウント、学習の進捗、サブスクリプション、不具合、プライバシー、ご意見についてOctoboサポートへお問い合わせください。",
      "support.eyebrow": "ヘルプセンター", "support.h1": "どのようなご用件ですか？",
      "support.lede": "アカウントへのアクセス、学習の進捗、サブスクリプション、不具合、プライバシーに関するご質問、ご意見、機能のご要望についてお問い合わせください。",
      "support.box.h": "Octoboサポートにメールする",
      "support.box.p1": "画面の名前、期待していた動作、実際に起きたことをお書きください。パスワード、認証コード、支払い情報は記載しないでください。",
      "support.box.p2": "Octoboアプリ内の<strong>プロフィール → 設定 → 情報とサポート → サポートと提案</strong>からもお問い合わせいただけます。",
      "support.c1.h": "アカウントへのアクセス", "support.c1.p": "サインイン、認証、パスワード、アカウント削除に関するお手伝い。",
      "support.c2.h": "学習の進捗", "support.c2.p": "パック、連続記録、クイズ、同期された進捗に関するご質問。",
      "support.c3.h": "Octobo Plus", "support.c3.p": "無料体験、購入の復元、Appleアカウント設定でのサブスクリプション管理。",
      "support.c4.h": "不具合を報告", "support.c4.p": "何が起きたか、どの画面を使っていたかをお知らせください。",
      "support.c5.h": "プライバシー", "support.c5.p": "データ、保存期間、削除に関するご質問。",

      "terms.title": "利用規約 — Octobo",
      "terms.desc": "英単語学習アプリOctoboの利用規約です。",
      "terms.eyebrow": "法的情報", "terms.h1": "利用規約",
      "terms.lede": "本規約は、Octoboを利用する際のわかりやすいルールを定めるものです。",
      "terms.updated": "最終更新日：2026年10月3日",
      "t.s1.h": "Octoboの利用", "t.s1.p": "Octoboは語彙学習の補助ツールです。アカウント、端末へのアクセス、アプリの適法な利用はご自身の責任となります。",
      "t.s2.h": "教育コンテンツ", "t.s2.p": "定義、例文、学習リスト、翻訳された意味、スコアは学習の補助として提供されるもので、誤りを含む場合があります。Octoboは試験の結果や語学力の向上を保証するものではありません。",
      "t.s3.h": "利用規定", "t.s3.p": "サービスを悪用したり、不正アクセスを試みたり、運営を妨害したり、不適切なコンテンツを送信したり、他人の権利を侵害する目的でOctoboを使用したりしないでください。",
      "t.s4.h": "友だちとクイズ", "t.s4.p": "不快な、または誤解を招く表示名は使わないでください。クイズルームやランキングを、ほかのプレイヤーへの嫌がらせやスコアの不正操作に使わないでください。",
      "t.s5.h": "Octobo Plus", "t.s5.p": "2つの単語パックは無料で、Octobo Plusならすべてのパックを利用できます。対象となる新規メンバーは7日間の無料体験から始められ、体験終了の24時間前までに解約しない場合は有料のサブスクリプションに移行します。月額・年額のサブスクリプションは、解約するまでAppleが表示する価格で自動更新されます。サブスクリプションの管理や解約はAppleアカウントの設定から行えます。購入はアプリ内で復元できます。",
      "t.s6.h": "提供状況とアカウント", "t.s6.p": "機能は変更される場合があり、オンラインサービスが一時的に利用できないこともあります。アカウントは設定からいつでも削除できます。サービスやほかのユーザーに対する迷惑行為に使われたアカウントは制限する場合があります。",
      "t.s7.h": "商標", "t.s7.p": "SATはCollege Boardの商標です。IELTSはBritish Council、IDP: IELTS Australia、Cambridge University Press &amp; Assessmentが共同で所有しています。Octoboはこれらの団体と提携しておらず、承認も受けていません。",
      "t.s8.h": "お問い合わせ", "t.s8.p": `本規約に関するご質問は、${MAIL}までメールでお送りいただくか、<a href="../support/">Octoboサポート</a>をご覧ください。`,
    },
  };

  const supported = LANGUAGES.map(([code]) => code);

  function match(tag) {
    if (!tag) return null;
    const lower = tag.toLowerCase();
    const exact = supported.find((code) => code.toLowerCase() === lower);
    if (exact) return exact;
    const base = lower.split(/[-_]/)[0];
    return supported.find((code) => code.toLowerCase().split("-")[0] === base) || null;
  }

  function storedLanguage() {
    try { return localStorage.getItem("octobo-lang"); } catch { return null; }
  }

  function resolveLanguage() {
    const fromQuery = match(new URLSearchParams(location.search).get("lang"));
    if (fromQuery) return fromQuery;
    const fromStorage = match(storedLanguage());
    if (fromStorage) return fromStorage;
    for (const tag of navigator.languages || [navigator.language]) {
      const found = match(tag);
      if (found) return found;
    }
    return "en";
  }

  function withLang(href, lang) {
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return href;
    url.searchParams.set("lang", lang);
    return url.pathname + url.search + url.hash;
  }

  function apply(lang) {
    const strings = Object.assign({}, T.en, T[lang]);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = strings[node.dataset.i18n];
      if (value !== undefined) node.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-content]").forEach((node) => {
      const value = strings[node.dataset.i18nContent];
      if (value !== undefined) node.setAttribute("content", value);
    });
    const titleKey = document.body.dataset.titleKey;
    if (titleKey && strings[titleKey]) document.title = strings[titleKey];
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href.startsWith("mailto:") && !href.startsWith("http")) link.setAttribute("href", withLang(href, lang));
    });
    const picker = document.getElementById("lang-picker");
    if (picker) picker.value = lang;
  }

  function buildPicker() {
    const picker = document.getElementById("lang-picker");
    if (!picker) return;
    LANGUAGES.forEach(([code, name]) => picker.add(new Option(name, code)));
    picker.addEventListener("change", () => {
      const lang = picker.value;
      try { localStorage.setItem("octobo-lang", lang); } catch {}
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
      apply(lang);
    });
  }

  buildPicker();
  apply(resolveLanguage());
})();
