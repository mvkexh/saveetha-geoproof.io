export interface AppTranslations {
  // Navigation / Tabs
  home: string;
  capture: string;
  stats: string;
  verify: string;
  scan: string;
  history: string;
  security: string;
  settings: string;
  contact: string;
  viewDashboard: string;
  featuresNav: string;
  dashboardNav: string;

  // Hero Section
  heroTitle1: string;
  heroTitleAccent: string;
  heroDesc: string;
  heroBadge: string;

  // Features Overview
  capabilitiesTitle: string;
  capabilitiesDesc: string;

  // 4 Cards
  liveCaptureTitle: string;
  liveCaptureDesc: string;
  gpsProofTitle: string;
  gpsProofDesc: string;
  qrSignedTitle: string;
  qrSignedDesc: string;
  aiTamperTitle: string;
  aiTamperDesc: string;

  // Big Cards
  securityArchitectureTitle: string;
  securityArchitectureDesc: string;
  builtAtSimatsTitle: string;
  builtAtSimatsDesc: string;

  // Quick Action / Footer Alert
  footerAlertText: string;

  // Settings
  darkMode: string;
  darkModeDesc: string;
  notifications: string;
  notificationsDesc: string;
  languageSelect: string;
  languageSelectDesc: string;
  clearAll: string;
  clearAllConfirm: string;

  // Contact Page Labels
  contactTitle: string;
  contactHeaderDesc: string;
  labAddress: string;
  institutionLabel: string;
  geoRefLabel: string;
  secureDispatchLabel: string;
  institutionalSiteLabel: string;
  encryptionProtocol: string;
  inquiryRegister: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  affiliationLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  successToast: string;
  submitBtn: string;
  activeRecords: string;
  secureTrafficLogs: string;
}

export type LanguageCode = "EN" | "TA" | "HI" | "ES" | "DE" | "FR";

export const translations: Record<LanguageCode, AppTranslations> = {
  EN: {
    home: "Home",
    capture: "Capture",
    stats: "Stats & Dashboard",
    verify: "Verify ID",
    scan: "Scan QR",
    history: "History Logs",
    security: "Security Center",
    settings: "Settings",
    contact: "Contact Desk",
    viewDashboard: "View Dashboard",
    featuresNav: "Features",
    dashboardNav: "Dashboard",

    heroTitle1: "Every image.",
    heroTitleAccent: "Proven in place.",
    heroDesc: "GeoProof transforms ordinary image uploads into verifiable digital evidence—combining GPS, metadata, timestamps, QR signatures, hashes, and AI tamper detection.",
    heroBadge: "CAPTURE. VERIFY. TRUST.",

    capabilitiesTitle: "Enterprise Verification Capabilities",
    capabilitiesDesc: "Providing watermarked authenticity certificates using native hardware sensors and AI",

    liveCaptureTitle: "Live Capture",
    liveCaptureDesc: "Real-time GPS-stamped photo capture verifying instant physical location profiles.",
    gpsProofTitle: "GPS Proof",
    gpsProofDesc: "Reverse-geocoded precision coordinates pointing exactly to regional nodes.",
    qrSignedTitle: "QR Signed",
    qrSignedDesc: "Tamper-evident digital signatures generating fully printable verification report QR codes.",
    aiTamperTitle: "AI Tamper Check",
    aiTamperDesc: "Level EXIF structures, and multi-frequency noise check verification powered by Gemini model.",

    securityArchitectureTitle: "Security-first architecture",
    securityArchitectureDesc: "SHA-256 fingerprints, on-device hashing, signed QR payloads and audit-ready records. Every capture is bound to its location, time and device signature.",
    builtAtSimatsTitle: "Built at SIMATS Engineering",
    builtAtSimatsDesc: "A research initiative for verifiable geo-tagged imaging. Contact the team for pilots, integrations or institutional deployments.",

    footerAlertText: "Feel free to contact our development desk for institutional pilot coordinates, API integrations, and key deployments.",

    darkMode: "Dark Mode",
    darkModeDesc: "Toggle interface theme appearance",
    notifications: "Notifications",
    notificationsDesc: "Verification real-time alert signals",
    languageSelect: "Language / மொழி / भाषा",
    languageSelectDesc: "Choose system display language",
    clearAll: "Clear All Local Captures",
    clearAllConfirm: "Are you sure you want to permanently clear all local and synced verification logs? This cannot be undone.",

    contactTitle: "CONTACT DEVELOPMENT DESK",
    contactHeaderDesc: "Establish communication lines with the SIMATS Engineering development team for custom integrations, private pilot trials, or institutional queries.",
    labAddress: "LAB ADDRESS & METADATA",
    institutionLabel: "INSTITUTION",
    geoRefLabel: "GEO REFERENCE COORDINATES",
    secureDispatchLabel: "SECURE DISPATCH",
    institutionalSiteLabel: "INSTITUTIONAL SITE",
    encryptionProtocol: "Encryption Protocol Triggered: All correspondence is bound to our active verification register hash checking logs for audit traces.",
    inquiryRegister: "INQUIRY TRANSCRIPT REGISTER",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter full name",
    emailLabel: "Institutional Email",
    emailPlaceholder: "name@institution.com",
    affiliationLabel: "Active Role / Affiliation",
    messageLabel: "Message Transcript",
    messagePlaceholder: "Detail your request, project coordinates, or partnership inquiry specifications...",
    successToast: "Your partnership credentials have been compiled and dispatch logs secured!",
    submitBtn: "Secure Submission Dispatch",
    activeRecords: "Active Records",
    secureTrafficLogs: "SECURE DISPATCH TRAFFIC LOGS"
  },
  TA: {
    home: "முகப்பு",
    capture: "படம் பிடி",
    stats: "புள்ளிவிவரங்கள்",
    verify: "ஐடி சரிபார்",
    scan: "க்யூஆர் ஸ்கேன்",
    history: "வரலாறு பதிவுகள்",
    security: "பாதுகாப்பு மையம்",
    settings: "அமைப்புகள்",
    contact: "தொடர்பு மேசை",
    viewDashboard: "தரவு பலகை",
    featuresNav: "அம்சங்கள்",
    dashboardNav: "தரவு பலகை",

    heroTitle1: "ஒவ்வொரு படமும்.",
    heroTitleAccent: "அந்த இடத்திலேயே நிரூபிக்கப்பட்டுள்ளது.",
    heroDesc: "ஜியோப்ரூஃப் சாதாரண பட பதிவேற்றங்களை சரிபார்க்கக்கூடிய டிஜிட்டல் சான்றுகளாக மாற்றுகிறது - ஜிபிஎஸ், மெட்டாடேட்டா, நேர முத்திரைகள், க்யூஆர் கையொப்பங்கள் மற்றும் செயற்கை நுண்ணறிவு சேதக் கண்டறிதல் ஆகியவற்றை ஒருங்கிணைக்கிறது.",
    heroBadge: "படம் பிடி. சரிபார். நம்பு.",

    capabilitiesTitle: "நிறுவன சரிபார்ப்பு திறன்கள்",
    capabilitiesDesc: "உள்நாட்டு வன்பொருள் சென்சார்கள் மற்றும் செயற்கை நுண்ணறிவைப் பயன்படுத்தி நீர்-அடையாளமிடப்பட்ட நம்பகத்தன்மை சான்றிதழ்களை வழங்குதல்",

    liveCaptureTitle: "நேரடி படம்",
    liveCaptureDesc: "உடனடி இருப்பிட விவரங்களைச் சரிபார்க்கும் உண்மையான நேர ஜிபிஎஸ்-முத்திரையிடப்பட்ட படப் பதிவு.",
    gpsProofTitle: "ஜிபிஎஸ் ஆதாரம்",
    gpsProofDesc: "வட்டார முனைகளை துல்லியமாக சுட்டிக்காட்டும் தலைகீழ்-புவியியல் குறியீட்டு ஒருங்கிணைப்புகள்.",
    qrSignedTitle: "க்யூஆர் கையொப்பம்",
    qrSignedDesc: "முழுமையாக அச்சிடக்கூடிய சரிபார்ப்பு அறிக்கை க்யூஆர் குறியீடுகளை உருவாக்கும் டிஜிட்டல் கையொப்பங்கள்.",
    aiTamperTitle: "AI சேத சோதனை",
    aiTamperDesc: "ஜெமினி மாடல் மூலம் இயக்கப்படும் எக்ஸிஃப் (EXIF) கட்டமைப்புகள் மற்றும் பல அலைவரிசை சத்தம் சரிபார்ப்பு.",

    securityArchitectureTitle: "பாதுகாப்பிற்கு முன்னுரிமை அளிக்கும் கட்டமைப்பு",
    securityArchitectureDesc: "SHA-256 கைரேகைகள், சாதனத்திலேயே ஹாஷிங் செய்தல், கையொப்பமிடப்பட்ட க்யூஆர் தரவுகள் மற்றும் தணிக்கைக்குத் தயாரான பதிவுகள்.",
    builtAtSimatsTitle: "சீமாட்ஸ் (SIMATS) பொறியியலில் உருவாக்கப்பட்டது",
    builtAtSimatsDesc: "சரிபார்க்கக்கூடிய புவி-குறிச்சொல்லிடப்பட்ட இமேஜிங்கிற்கான ஆராய்ச்சி முயற்சி. விவரங்களுக்கு குழுவைத் தொடர்பு கொள்ளுங்கள்.",

    footerAlertText: "நிறுவன ரீதியிலான சோதனை ஒருங்கிணைப்புகள், ஏபிஐ இணைப்புகள் மற்றும் முக்கிய பயன்பாடுகளுக்கு எங்களது மேம்பாட்டு பிரிவைத் தொடர்பு கொள்ளவும்.",

    darkMode: "இருண்ட பயன்முறை",
    darkModeDesc: "இடைமுக தீம் தோற்றத்தை மாற்றவும்",
    notifications: "அறிவிப்புகள்",
    notificationsDesc: "உண்மையான நேர சரிபார்ப்பு விழிப்புணர்வு சமிக்ஞைகள்",
    languageSelect: "மொழி / Language",
    languageSelectDesc: "கணினி காட்சி மொழியைத் தேர்வு செய்யவும்",
    clearAll: "அனைத்து உள்ளூர் பதிவுகளையும் அழி",
    clearAllConfirm: "உள்ளூர் மற்றும் ஒத்திசைக்கப்பட்ட தணிக்கை பதிவுகள் அனைத்தையும் அழிக்க விரும்புகிறீர்களா? இதை மீட்டெடுக்க முடியாது.",

    contactTitle: "மேம்பாட்டு மேசையைத் தொடர்பு கொள்ளவும்",
    contactHeaderDesc: "தனிப்பயன் ஒருங்கிணைப்புகள், தனியார் சோதனை பதிவுகள் அல்லது நிறுவன வினவல்களுக்கு சீமாட்ஸ் பொறியியல் மேம்பாட்டுக் குழுவோடு தொடர்பு கொள்ளலாம்.",
    labAddress: "ஆராய்ச்சி முகவரி & மெட்டாடேட்டா",
    institutionLabel: "நிறுவனம்",
    geoRefLabel: "புவி குறிப்பு ஒருங்கிணைப்புகள்",
    secureDispatchLabel: "பாதுகாப்பான மின்னஞ்சல்",
    institutionalSiteLabel: "நிறுவன இணையதளம்",
    encryptionProtocol: "குறியாக்க நெறிமுறை செயல்படுத்தப்பட்டது: அனைத்து கடிதப் பரிமாற்றங்களும் தணிக்கை தடயங்களுக்கான சரிபார்ப்புப் பதிவேட்டுடன் பிணைக்கப்பட்டுள்ளன.",
    inquiryRegister: "விசாரணை டிரான்ஸ்கிரிப்ட் பதிவு",
    fullNameLabel: "முழு பெயர்",
    fullNamePlaceholder: "முழு பெயரை உள்ளிடவும்",
    emailLabel: "நிறுவன மின்னஞ்சல்",
    emailPlaceholder: "name@institution.com",
    affiliationLabel: "தற்போதைய பங்கு / இணைப்பு",
    messageLabel: "செய்தி விவரம்",
    messagePlaceholder: "உங்கள் கோரிக்கை அல்லது கூட்டாண்மை விசாரணை விவரங்களை இங்கே விவரிக்கவும்...",
    successToast: "உங்கள் கூட்டாண்மை சான்றுகள் தொகுக்கப்பட்டு பாதுகாப்பாக அனுப்பப்பட்டுள்ளன!",
    submitBtn: "பாதுகாப்பாக சமர்ப்பிக்கவும்",
    activeRecords: "செயலில் உள்ள பதிவுகள்",
    secureTrafficLogs: "பாதுகாப்பான அனுப்பப்பட்ட போக்குவரத்து பதிவுகள்"
  },
  HI: {
    home: "होम",
    capture: "कैप्चर",
    stats: "आँकड़े और डैशबोर्ड",
    verify: "आईडी सत्यापित करें",
    scan: "QR स्कैन करें",
    history: "इतिहास लॉग",
    security: "सुरक्षा केंद्र",
    settings: "सेटिंग्स",
    contact: "संपर्क डेस्क",
    viewDashboard: "डैशबोर्ड देखें",
    featuresNav: "विशेषताएं",
    dashboardNav: "डैशबोर्ड",

    heroTitle1: "हर छवि।",
    heroTitleAccent: "उसी स्थान पर प्रमाणित।",
    heroDesc: "GeoProof साधारण छवि अपलोड को सत्यापन योग्य डिजिटल साक्ष्य में बदल देता है—जीपीएस, मेटाडेटा, टाइमस्टैम्प, क्यूआर हस्ताक्षर, हैश और एआई छेड़छाड़ पहचान का संयोजन।",
    heroBadge: "कैप्चर। सत्यापित करें। विश्वास करें।",

    capabilitiesTitle: "उद्यम सत्यापन क्षमताएं",
    capabilitiesDesc: "मूल हार्डवेयर सेंसर और एआई का उपयोग करके मूल वॉटरमार्क युक्त प्रामाणिकता प्रमाण पत्र प्रदान करना",

    liveCaptureTitle: "लाइव कैप्चर",
    liveCaptureDesc: "तत्काल भौतिक स्थान प्रोफाइल का सत्यापन करने वाला वास्तविक समय का जीपीएस-मुद्रित फोटो कैप्चर।",
    gpsProofTitle: "GPS प्रमाण",
    gpsProofDesc: "विपरीत-भू-कोडेड सटीक निर्देशांक जो सीधे क्षेत्रीय नोड्स को इंगित करते हैं।",
    qrSignedTitle: "QR हस्ताक्षरित",
    qrSignedDesc: "छेड़छाड़-रोधी डिजिटल हस्ताक्षर जो पूरी तरह से प्रिंट करने योग्य सत्यापन रिपोर्ट क्यूआर कोड उत्पन्न करते हैं।",
    aiTamperTitle: "AI टैम्पर चेक",
    aiTamperDesc: "जेमिनी मॉडल द्वारा संचालित एक्सिफ (EXIF) संरचनाएं और बहु-आवृत्ति शोर जांच सत्यापन।",

    securityArchitectureTitle: "सुरक्षा-प्रथम वास्तुकला",
    securityArchitectureDesc: "SHA-256 फ़िंगरप्रिंट, ऑन-डिवाइस हैशिंग, हस्ताक्षरित क्यूआर पेलोड और ऑडिट-तैयार रिकॉर्ड। हर कैप्चर अपने स्थान, समय और डिवाइस हस्ताक्षर से बंधा होता है।",
    builtAtSimatsTitle: "SIMATS इंजीनियरिंग में निर्मित",
    builtAtSimatsDesc: "सत्यापन योग्य भू-टैग की गई इमेजिंग के लिए एक शोध पहल। पायलटों, एकीकरण या संस्थागत तैनाती के लिए टीम से संपर्क करें।",

    footerAlertText: "संस्थागत पायलट निर्देशांक, एपीआई एकीकरण और प्रमुख तैनाती के लिए हमारे विकास डेस्क से संपर्क करने में संकोच न करें।",

    darkMode: "डार्क मोड",
    darkModeDesc: "इंटरफ़ेस थीम उपस्थिति को टॉगल करें",
    notifications: "सूचनाएं",
    notificationsDesc: "सत्यापन वास्तविक समय चेतावनी संकेत",
    languageSelect: "भाषा / Language",
    languageSelectDesc: "सिस्टम प्रदर्शन भाषा चुनें",
    clearAll: "सभी स्थानीय कैप्चर साफ़ करें",
    clearAllConfirm: "क्या आप वाकई सभी स्थानीय और सिंक किए गए सत्यापन लॉग को स्थायी रूप से साफ़ करना चाहते हैं? इसे पूर्ववत नहीं किया जा सकता।",

    contactTitle: "विकास डेस्क से संपर्क करें",
    contactHeaderDesc: "कस्टम एकीकरण, निजी पायलट परीक्षण या संस्थागत प्रश्नों के लिए SIMATS इंजीनियरिंग विकास टीम के साथ संचार लाइनें स्थापित करें।",
    labAddress: "प्रयोगशाला पता और मेटाडेटा",
    institutionLabel: "संस्थान",
    geoRefLabel: "भू-संदर्भ निर्देशांक",
    secureDispatchLabel: "सुरक्षित प्रेषण",
    institutionalSiteLabel: "संस्थागत साइट",
    encryptionProtocol: "एन्क्रिप्शन प्रोटोकॉल ट्रिगर: सभी पत्राचार ऑडिट ट्रेल्स के लिए हमारे सक्रिय सत्यापन रजिस्टर हैश चेकिंग लॉग से बंधे हैं।",
    inquiryRegister: "पूछताछ ट्रांसक्रिप्ट रजिस्टर",
    fullNameLabel: "पूरा नाम",
    fullNamePlaceholder: "पूरा नाम दर्ज करें",
    emailLabel: "संस्थागत ईमेल",
    emailPlaceholder: "name@institution.com",
    affiliationLabel: "सक्रिय भूमिका / संबद्धता",
    messageLabel: "संदेश विवरण",
    messagePlaceholder: "अपने अनुरोध, प्रोजेक्ट विवरण, या साझेदारी पूछताछ विनिर्देशों का विवरण दें...",
    successToast: "आपकी साझेदारी क्रेडेंशियल संकलित कर ली गई हैं और प्रेषण लॉग सुरक्षित कर दिए गए हैं!",
    submitBtn: "सुरक्षित सबमिशन भेजें",
    activeRecords: "सक्रिय रिकॉर्ड",
    secureTrafficLogs: "सुरक्षित प्रेषण इतिहास लॉग"
  },
  ES: {
    home: "Inicio",
    capture: "Capturar",
    stats: "Estadísticas",
    verify: "Verificar ID",
    scan: "Escanear QR",
    history: "Historial de Logs",
    security: "Centro de Seguridad",
    settings: "Ajustes",
    contact: "Contacto",
    viewDashboard: "Ver Dashboard",
    featuresNav: "Características",
    dashboardNav: "Tablero",

    heroTitle1: "Cada imagen.",
    heroTitleAccent: "Probada en el lugar.",
    heroDesc: "GeoProof transforma cargas de imágenes ordinarias en evidencia digital verificable, combinando GPS, metadatos, marcas de tiempo, firmas QR, hashes y detección de manipulación por IA.",
    heroBadge: "CAPTURAR. VERIFICAR. CONFIAR.",

    capabilitiesTitle: "Capacidades de verificación empresarial",
    capabilitiesDesc: "Proporcionar certificados de autenticidad con marca de agua a través de sensores de hardware nativos e IA",

    liveCaptureTitle: "Captura en vivo",
    liveCaptureDesc: "Captura de fotos con marca de GPS en tiempo real que verifica los perfiles de ubicación física instantáneos.",
    gpsProofTitle: "Prueba de GPS",
    gpsProofDesc: "Coordenadas de precisión codificadas de forma inversa que apuntan exactamente a los nodos regionales.",
    qrSignedTitle: "Firma QR",
    qrSignedDesc: "Firmas digitales a prueba de manipulaciones que generan informes de verificación QR totalmente imprimibles.",
    aiTamperTitle: "Control de manipulación de IA",
    aiTamperDesc: "Estructuras EXIF y verificación en múltiples frecuencias impulsadas por el modelo Gemini.",

    securityArchitectureTitle: "Arquitectura centrada en la seguridad",
    securityArchitectureDesc: "Huellas SHA-256, hash en el dispositivo, cargas QR firmadas y registros listos para auditorías. Cada captura está vinculada a su ubicación, hora y firma del dispositivo.",
    builtAtSimatsTitle: "Creado en SIMATS Engineering",
    builtAtSimatsDesc: "Una iniciativa de investigación para imágenes geoetiquetadas verificables. Comuníquese con el equipo para pilotos, integraciones o implementaciones.",

    footerAlertText: "No dude en ponerse en contacto con nuestro departamento de desarrollo para coordinar pilotos institucionales, integraciones de API e implementaciones clave.",

    darkMode: "Modo Oscuro",
    darkModeDesc: "Cambiar la apariencia del tema de la interfaz",
    notifications: "Notificaciones",
    notificationsDesc: "Señales de alerta de verificación en tiempo real",
    languageSelect: "Idioma / Language",
    languageSelectDesc: "Elija el idioma del sistema",
    clearAll: "Eliminar capturas locales",
    clearAllConfirm: "¿Seguro que desea borrar permanentemente todos los registros locales y sincronizados? Esto no se puede deshacer.",

    contactTitle: "CONTACTAR AL DEPARTAMENTO DE DESARROLLO",
    contactHeaderDesc: "Establezca líneas de comunicación con el equipo de desarrollo de SIMATS Engineering para integraciones personalizadas, pruebas piloto privadas o consultas institucionales.",
    labAddress: "DIRECCIÓN DEL LABORATORIO",
    institutionLabel: "INSTITUCIÓN",
    geoRefLabel: "COORDENADAS GEO-REFERENCIALES",
    secureDispatchLabel: "ENVÍO SEGURO",
    institutionalSiteLabel: "SITIO INSTITUCIONAL",
    encryptionProtocol: "Protocolo de encriptación activado: Toda la correspondencia está vinculada a nuestro registro de verificación activo para trazas de auditoría.",
    inquiryRegister: "REGISTRO DE CONSULTA",
    fullNameLabel: "Nombre Completo",
    fullNamePlaceholder: "Ingrese su nombre completo",
    emailLabel: "Correo Institucional",
    emailPlaceholder: "nombre@institucion.com",
    affiliationLabel: "Rol Activo / Afiliación",
    messageLabel: "Mensaje",
    messagePlaceholder: "Detalle su solicitud, coordenadas del proyecto o especificaciones de la consulta...",
    successToast: "¡Sus credenciales han sido compiladas y los registros de envío han sido asegurados!",
    submitBtn: "Enviar de forma segura",
    activeRecords: "Registros activos",
    secureTrafficLogs: "LOGS DE ENVÍOS SEGUROS"
  },
  DE: {
    home: "Startseite",
    capture: "Erfassen",
    stats: "Statistiken & Dashboard",
    verify: "ID prüfen",
    scan: "QR-Code scannen",
    history: "Protokolle",
    security: "Sicherheitszentrum",
    settings: "Einstellungen",
    contact: "Kontakt",
    viewDashboard: "Dashboard anzeigen",
    featuresNav: "Funktionen",
    dashboardNav: "Dashboard",

    heroTitle1: "Jedes Bild.",
    heroTitleAccent: "Vor Ort bewiesen.",
    heroDesc: "GeoProof verwandelt gewöhnliche Bilder in verifizierbare digitale Beweise – durch die Kombination von GPS, Metadaten, Zeitstempeln, QR-Signaturen, Hashes und KI-Prüfung.",
    heroBadge: "ERFASSEN. VERIFIZIEREN. VERTRAUEN.",

    capabilitiesTitle: "Verifizierungsfunktionen für Unternehmen",
    capabilitiesDesc: "Bereitstellung von wasserzeichengeschützten Echtheitszertifikaten mithilfe nativer Hardwaresensoren und KI",

    liveCaptureTitle: "Live-Erfassung",
    liveCaptureDesc: "Echtzeit-GPS-gestempelte Fotoerfassung zur Überprüfung instantaner physischer Standortprofile.",
    gpsProofTitle: "GPS-Beweis",
    gpsProofDesc: "Rückgeocodierte Präzisionskoordinaten, die exakt auf regionale Knotenpunkte verweisen.",
    qrSignedTitle: "QR-Signiert",
    qrSignedDesc: "Manipulationssichere digitale Signaturen, die vollständig druckbare Verifizierungsberichts-QR-Codes erzeugen.",
    aiTamperTitle: "KI-Manipulationsprüfung",
    aiTamperDesc: "Prüfung von EXIF-Strukturen und Mehrfrequenzrauschen durch das Gemini-Modell.",

    securityArchitectureTitle: "Security-First-Architektur",
    securityArchitectureDesc: "SHA-256-Fingerabdrücke, On-Device-Hashing, signierte QR-Nutzdaten und auditierbare Datensätze. Jedes Bild ist an Ort, Zeit und Gerätesignatur gebunden.",
    builtAtSimatsTitle: "Entwickelt bei SIMATS Engineering",
    builtAtSimatsDesc: "Eine Forschungsinitiative für verifizierbare Bilder mit Geotags. Kontaktieren Sie das Team für Pilotprojekte, Integrationen oder Einsätze.",

    footerAlertText: "Wenden Sie sich an unsere Entwicklungsabteilung für institutionalisierte Piloten, API-Integrationen und Bereitstellungen.",

    darkMode: "Dunkelmodus",
    darkModeDesc: "Schnittstellenthema-Erscheinungsbild umschalten",
    notifications: "Benachrichtigungen",
    notificationsDesc: "Echtzeit-Verifizierungswarnsignale",
    languageSelect: "Sprache / Language",
    languageSelectDesc: "Wählen Sie die Displaysprache des Systems",
    clearAll: "Alle lokalen Erfassungen löschen",
    clearAllConfirm: "Sind Sie sicher, dass Sie alle lokalen und synchronisierten Verifizierungsprotokolle dauerhaft löschen möchten? Dies kann nicht rückgängig gemacht werden.",

    contactTitle: "KONTAKT ZUR ENTWICKLUNGSABTEILUNG",
    contactHeaderDesc: "Stellen Sie Verbindungskanäle zum SIMATS Engineering Entwicklerteam für maßgeschneiderte Integrationen, private Piloten oder institutionelle Anfragen her.",
    labAddress: "LABORADRESSE & METADATEN",
    institutionLabel: "INSTITUTION",
    geoRefLabel: "GEOREFERENZ-KOORDINATEN",
    secureDispatchLabel: "SICHERER VERSAND",
    institutionalSiteLabel: "INSTITUTIONELLE WEBSITE",
    encryptionProtocol: "Verschlüsselungsprotokoll aktiviert: Die gesamte Korrespondenz ist an unser aktives Verifizierungsregister zur Auditierung gebunden.",
    inquiryRegister: "ANFRAGEN-REGISTRIERUNG",
    fullNameLabel: "Vollständiger Name",
    fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
    emailLabel: "Institutionelle E-Mail",
    emailPlaceholder: "name@institution.com",
    affiliationLabel: "Aktive Rolle / Zugehörigkeit",
    messageLabel: "Nachrichtentext",
    messagePlaceholder: "Beschreiben Sie Ihre Anfrage, Projektkoordinaten oder Spezifikationen...",
    successToast: "Ihre Partnerschaftsdaten wurden zusammengestellt und Versandprotokolle gesichert!",
    submitBtn: "Sicheren Versand veranlassen",
    activeRecords: "Aktive Sätze",
    secureTrafficLogs: "SICHERE VERSANDPROTOKOLLE"
  },
  FR: {
    home: "Accueil",
    capture: "Capturer",
    stats: "Statistiques & Tableau",
    verify: "Vérifier l'ID",
    scan: "Scanner QR",
    history: "Historique des logs",
    security: "Centre de sécurité",
    settings: "Paramètres",
    contact: "Contact",
    viewDashboard: "Voir le tableau",
    featuresNav: "Fonctionnalités",
    dashboardNav: "Tableau de bord",

    heroTitle1: "Chaque image.",
    heroTitleAccent: "Prouvée sur place.",
    heroDesc: "GeoProof transforme les téléchargements d'images ordinaires en preuves numériques vérifiables, combinant GPS, métadonnées, horodatages, signatures QR, hachages et détection des altérations par IA.",
    heroBadge: "CAPTURER. VÉRIFIER. FAIRE CONFIANCE.",

    capabilitiesTitle: "Capacités de vérification d'entreprise",
    capabilitiesDesc: "Fournir des certificats d'authenticité filigranés à l'aide de capteurs matériels natifs et de l'IA",

    liveCaptureTitle: "Capture en direct",
    liveCaptureDesc: "Capture photo géo-marquée en temps réel vérifiant les profils de localisation physique instantanés.",
    gpsProofTitle: "Preuve GPS",
    gpsProofDesc: "Coordonnées de précision géo-codées inversées pointant exactement vers les nœuds régionaux.",
    qrSignedTitle: "QR Signé",
    qrSignedDesc: "Signatures numériques inviolables générant des rapports de vérification QR entièrement imprimables.",
    aiTamperTitle: "Contrôle d'altération IA",
    aiTamperDesc: "Vérifications de structures EXIF et de bruit multi-fréquences alimentées par le modèle Gemini.",

    securityArchitectureTitle: "Architecture centrée sur la sécurité",
    securityArchitectureDesc: "Empreintes SHA-256, hachage sur l'appareil, charges utiles QR signées et enregistrements prêts pour l'audit. Chaque capture est liée à son emplacement, son heure et sa signature d'appareil.",
    builtAtSimatsTitle: "Construit à SIMATS Engineering",
    builtAtSimatsDesc: "Une initiative de recherche pour l'imagerie géotaguée vérifiable. Contactez l'équipe pour des pilotes, des intégrations ou des déploiements.",

    footerAlertText: "N'hésitez pas à contacter notre bureau de développement pour les coordonnées pilotes, les intégrations d'API et les déploiements clés.",

    darkMode: "Mode Sombre",
    darkModeDesc: "Basculer l'apparence du thème",
    notifications: "Notifications",
    notificationsDesc: "Signaux d'alerte de vérification en temps réel",
    languageSelect: "Langue / Language",
    languageSelectDesc: "Choisissez la langue d'affichage du système",
    clearAll: "Effacer les captures locales",
    clearAllConfirm: "Voulez-vous vraiment effacer définitivement les journaux de vérification locaux et synchronisés ? Cette action est irréversible.",

    contactTitle: "CONTACTER LE BUREAU DE DÉVELOPPEMENT",
    contactHeaderDesc: "Établissez des lignes de communication avec l'équipe de développement de SIMATS Engineering pour des intégrations personnalisées, des essais pilotes privés ou des requêtes institutionnelles.",
    labAddress: "ADRESSE DU LABORATOIRE",
    institutionLabel: "INSTITUTION",
    geoRefLabel: "COORDONNÉES GEO-RÉFÉRENTIELLES",
    secureDispatchLabel: "ENVOI SÉCURISÉ",
    institutionalSiteLabel: "SITE INSTITUTIONNEL",
    encryptionProtocol: "Protocole de cryptage activé: Toute la correspondance est liée à notre registre de vérification actif pour les traces d'audit.",
    inquiryRegister: "REGISTRE D'ENQUÊTE",
    fullNameLabel: "Nom Complet",
    fullNamePlaceholder: "Entrez votre nom complet",
    emailLabel: "E-mail Institutionnel",
    emailPlaceholder: "nom@institution.com",
    affiliationLabel: "Rôle Actif / Affiliation",
    messageLabel: "Message",
    messagePlaceholder: "Détaillez votre demande, coordonnées du projet ou spécifications de l'enquête...",
    successToast: "Vos informations d'identification ont été compilées et les journaux sécurisés !",
    submitBtn: "Sécuriser l'envoi",
    activeRecords: "Enregistrements actifs",
    secureTrafficLogs: "LOGS DES ENVOIS SÉCURISÉS"
  }
};
