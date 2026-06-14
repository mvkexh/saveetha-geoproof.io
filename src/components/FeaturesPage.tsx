import { Camera, MapPin, QrCode, ShieldCheck, Cpu, Zap, Activity, HelpCircle, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { LanguageCode } from '../lib/translations';

interface FeaturesPageProps {
  darkMode: boolean;
  onNavigateToTab: (tab: any) => void;
  language?: LanguageCode;
}

const localTranslations: Record<LanguageCode, {
  tag: string;
  bannerTitle: string;
  bannerDesc: string;
  coreSystems: string;
  pipelineTitle: string;
  pipelineDesc: string;
  compTitle: string;
  compSubtitle: string;
  inspectBenchmark: string;
  standardSmartphone: string;
  geoproofStamp: string;
  gpSigLabel: string;
  gpSigMut: string;
  gpSigVal: string;
  authLabel: string;
  authMut: string;
  authVal: string;
  tamperLabel: string;
  tamperMut: string;
  tamperVal: string;
  traceLabel: string;
  traceMut: string;
  traceVal: string;
  features: Array<{ title: string; desc: string; tag: string }>;
  steps: Array<{ step: string; title: string; desc: string }>;
}> = {
  EN: {
    tag: "CAPABILITIES SPECIFICATIONS",
    bannerTitle: "PLATFORM CAPABILITIES & FEATURES",
    bannerDesc: "Explore the underlying aerospace-grade geodetic and cryptographic modules that make GeoProof the undisputed standard for verifiable location analytics.",
    coreSystems: "CORE SYSTEMS",
    pipelineTitle: "THE TRUST VERIFICATION PIPELINE",
    pipelineDesc: "How Image Raw Bytes Turn into Unassailable Evidence",
    compTitle: "Comparative Blueprint",
    compSubtitle: "Standard Smartphone Camera vs. GeoProof Sandbox",
    inspectBenchmark: "Inspection Benchmark",
    standardSmartphone: "Standard Smartphone Capture",
    geoproofStamp: "GeoProof Encrypted Stamp",
    gpSigLabel: "GPS Latitude/Longitude Signature",
    gpSigMut: "Mutable raw EXIF tags (Easily spoofed)",
    gpSigVal: "Satellite NTP Encoded Block",
    authLabel: "Authenticity Payload",
    authMut: "None (Pure image compression)",
    authVal: "Signed QR Certificate Payload",
    tamperLabel: "Anti-Tamper Noise Audit",
    tamperMut: "Self-editable (Photoshop/Pixel edit friendly)",
    tamperVal: "EXIF Structure Level Check",
    traceLabel: "Integrity Traceability",
    traceMut: "Disconnected local offline records only",
    traceVal: "REST Express Server Log Parity",
    features: [
      {
        title: "Atmospheric Live Capture",
        desc: "Instant capture strictly bound to hardware sensors. Prevents any proxy injection, mock cameras, or file injection overlays by enforcing strict, authenticated real-time acquisition pipelines.",
        tag: "CAPTURE"
      },
      {
        title: "Cryptographic GPS Bonding",
        desc: "Captures raw latitude, longitude, geodetic accuracy, and cellular/Wi-Fi station metadata. Coordinates are cross-referenced with regional base stations for tamper-proof georeferencing.",
        tag: "GEODETIC"
      },
      {
        title: "Signed QR Certificates",
        desc: "Produces fully verifiable QR signatures holding compressed metadata hashes. The signed payload is readable by any offline validator and immediately points to its unique reference register.",
        tag: "CRYPTOGRAPHY"
      },
      {
        title: "AI Tamper Analysis",
        desc: "Scans raw EXIF header logs, level compression parameters, and high-frequency structural noise. Generates an instant trust probability report using optimized spatial intelligence algorithms.",
        tag: "INTELLIGENCE"
      }
    ],
    steps: [
      { step: "01", title: "Device Capture", desc: "User triggers sensor verification. App hooks directly into hardware camera stack." },
      { step: "02", title: "Metadata Polling", desc: "Simultaneous polling of GPS satellites, cellular IDs, and millisecond-accurate NTP clock." },
      { step: "03", title: "Crypto Hashing", desc: "Combines image bytes and structured metadata into a unique SHA-256 hash." },
      { step: "04", title: "Certificate Minting", desc: "Generates secure digital stamp with QR signatures ready for PDF export or download." }
    ]
  },
  TA: {
    tag: "திறன்கள் விவரக்குறிப்பு",
    bannerTitle: "தளத்தின் திறன்கள் & அம்சங்கள்",
    bannerDesc: "ஜியோப்ரூஃப் நிறுவனத்தை சரிபார்க்கக்கூடிய இருப்பிட பகுப்பாய்விற்கான உத்தியோகபூர்வ தரநிலையாக மாற்றும் அடிப்படை புவியியல் மற்றும் கிரிப்டோகிராஃபிக் செயல்பாடுகளை ஆராயுங்கள்.",
    coreSystems: "முக்கிய அமைப்புகள்",
    pipelineTitle: "நம்பகமான சரிபார்ப்பு வரிசை",
    pipelineDesc: "படத்தின் மூல பைட்டுகள் எவ்வாறு அசைக்க முடியாத சான்றாக மாறுகின்றன",
    compTitle: "ஒப்பீட்டு வரைபடம்",
    compSubtitle: "சாதாரண ஸ்மார்ட்போன் கேமரா vs ஜியோப்ரூஃப் சாண்ட்பாக்ஸ்",
    inspectBenchmark: "ஆய்வு அளவுகோல்",
    standardSmartphone: "சாதாரண ஸ்மார்ட்போன் புகைப்படம்",
    geoproofStamp: "ஜியோப்ரூஃப் மறைகுறியாக்கப்பட்ட முத்திரை",
    gpSigLabel: "ஜிபிஎஸ் அட்சரேகை/தீர்க்கரேகை கையொப்பம்",
    gpSigMut: "மாற்றக்கூடிய எக்ஸிஃப் (EXIF) குறிச்சொற்கள்",
    gpSigVal: "செயற்கைக்கோள் NTP குறியிடப்பட்ட தொகுதி",
    authLabel: "நம்பகத்தன்மை தரவு",
    authMut: "எதுவுமில்லை (சாதாரண பட சேமிப்பு)",
    authVal: "கையொப்பமிடப்பட்ட க்யூஆர் சான்றிதழ்",
    tamperLabel: "AI கண்டறிதல் சோதனை",
    tamperMut: "எளிதில் திருத்தக்கூடியது (Photoshop/Pixel)",
    tamperVal: "எக்ஸிஃப் கட்டமைப்பு நிலை சோதனை",
    traceLabel: "தடயவியல் கண்டுபிடிப்பு",
    traceMut: "உள்ளூர் ஆஃப்லைன் பதிவுகள் மட்டுமே",
    traceVal: "எக்ஸ்பிரஸ் சர்வர் ஒத்திசைவு",
    features: [
      {
        title: "வன்பொருள் நேரடிப் பதிவு",
        desc: "கேமரா வன்பொருள் மூலம் மட்டுமே நிகழ்நேர படங்கள் எடுக்கப்படுவதை உறுதி செய்கிறது. புகைப்பட பதிவேற்ற ஊடுருவல்களைத் தடுக்கிறது.",
        tag: "புகைப்படம்"
      },
      {
        title: "ஜிபிஎஸ் இருப்பிட பாதுகாப்பு",
        desc: "துல்லியமான அட்சரேகை, தீர்க்கரேகை மற்றும் செயற்கைக்கோள் தரவுகளை சாதனத்தின் வன்பொருள் கொண்டு உறுதிப்படுத்துகிறது.",
        tag: "புவியியல்"
      },
      {
        title: "கையொப்பமிடப்பட்ட க்யூஆர் சான்றிதழ்கள்",
        desc: "தரவு மாற்ற முடியாத க்யூஆர் குறியீடுகள் மூலம் சரிபார்க்கக்கூடிய ஆஃப்லைன் அறிக்கைகளை உருவாக்குகிறது.",
        tag: "கிரிப்டோ"
      },
      {
        title: "AI புகைப்பட சேத சோதனை",
        desc: "படங்களின் எக்ஸிஃப் அமைப்புகள் மற்றும் பிக்சல் முரண்பாடுகளை ஆராய்ந்து சேத அளவைக் கணக்கிடுகிறது.",
        tag: "செயற்கை அறிவு"
      }
    ],
    steps: [
      { step: "01", title: "சாதனப் பதிவு", desc: "பயனர் கேமரா வன்பொருளுடன் நேரடியாகப் படம் பிடிப்பதைத் தொடங்குகிறார்." },
      { step: "02", title: "மெட்டாடேட்டா சேகரிப்பு", desc: "ஜிபிஎஸ் செயற்கைக்கோள் மற்றும் நேர முத்திரைகளின் ஒரே நேர சேகரிப்பு." },
      { step: "03", title: "ஹாஷிங் செயல்முறை", desc: "புகைப்பட பைட்டுகள் மற்றும் மெட்டாடேட்டாவை SHA-256 ஹாஷாக மாற்றுகிறது." },
      { step: "04", title: "சான்றிதழ் வெளியீடு", desc: "பாதுகாப்பான டிஜிட்டல் முத்திரையுடன் க்யூஆர் குறியீடு அறிக்கை வெளியீடு." }
    ]
  },
  HI: {
    tag: "क्षमता विनिर्देश",
    bannerTitle: "प्लेटफ़ॉर्म क्षमताएं और विशेषताएं",
    bannerDesc: "भू-स्थानिक और क्रेडेंशियल कूटलेखन तकनीकों का अन्वेषण करें जो GeoProof को अचूक सत्यापन मानक बनाती हैं।",
    coreSystems: "मुख्य प्रणालियाँ",
    pipelineTitle: "विश्वास सत्यापन पाइपलाइन",
    pipelineDesc: "कैसे कच्ची छवियां अकाट्य डिजिटल साक्ष्य में बदल जाती हैं",
    compTitle: "तुलनात्मक ब्लूप्रिंट",
    compSubtitle: "मानक स्मार्टफोन कैमरा बनाम GeoProof सैंडबॉक्स",
    inspectBenchmark: "निरीक्षण बेंचमार्क",
    standardSmartphone: "मानक स्मार्टफोन कैप्चर",
    geoproofStamp: "GeoProof एन्क्रिप्टेड स्टैम्प",
    gpSigLabel: "GPS अक्षांश/देशांतर हस्ताक्षर",
    gpSigMut: "परिवर्तनीय कच्चा EXIF टैग (आसानी से छेड़छाड़ योग्य)",
    gpSigVal: "उपग्रह NTP एन्कोडेड ब्लॉक",
    authLabel: "प्रामाणिकता पेलोड",
    authMut: "कुछ नहीं (केवल इमेज कम्प्रेशन)",
    authVal: "हस्ताक्षरित क्यूआर क्रेडेंशियल",
    tamperLabel: "टैम्पर-विरोधी शोर ऑडिट",
    tamperMut: "संपादन योग्य (फ़ोटोशॉप अनुकूल)",
    tamperVal: "EXIF संरचना स्तर की जांच",
    traceLabel: "ट्रैसेबिलिटी अखंडता",
    traceMut: "केवल डिस्कनेक्ट किए गए ऑफ़लाइन रिकॉर्ड",
    traceVal: "सर्वर लॉग डिजिटल पैरिटी",
    features: [
      {
        title: "लाइव कैमरा सुरक्षा",
        desc: "सीधे हार्डवेयर सेंसर से जुड़ा तत्काल कैप्चर। नकली कैमरा इंजेक्शन को रोकता है।",
        tag: "कैप्चर"
      },
      {
        title: "क्रिप्टोग्राफिक जीपीएस बाइंडिंग",
        desc: "कच्चे अक्षांश, देशांतर और सेलुलर मेटाडेटा को पकड़ता है।",
        tag: "जीपीएस"
      },
      {
        title: "हस्ताक्षरित क्यूआर प्रमाणपत्र",
        desc: "सत्यापन रिपोर्ट के लिए सुरक्षित और पूरी तरह से स्कैन करने योग्य क्यूआर कोड उत्पन्न करता है।",
        tag: "कूटलेखन"
      },
      {
        title: "एआई छेड़छाड़ जांच",
        desc: "जेमिनी की सहायता से EXIF त्रुटियों और संपीड़न संरचना का विश्लेषण करता है।",
        tag: "इंटेलिजेंस"
      }
    ],
    steps: [
      { step: "01", title: "डिवाइस कैप्चर", desc: "उपयोगकर्ता लाइव सेंसर ट्रिगर करता है।" },
      { step: "02", title: "मेटाडेटा जांच", desc: "जीपीएस उपग्रहों और टाइमस्टैम्प का वास्तविक समय का मतदान।" },
      { step: "03", title: "क्रिप्टो हैशिंग", desc: "छवि बाइट्स को अद्वितीय SHA-256 हैश कोड में संकलित करता है।" },
      { step: "04", title: "प्रमाणपत्र जारी", desc: "तुरंत निर्यात योग्य डिजिटल क्रेडेंशियल पीडीएफ मुद्रित करता है।" }
    ]
  },
  ES: {
    tag: "ESPECIFICACIONES DE CAPACIDADES",
    bannerTitle: "CAPACIDADES Y CARACTERÍSTICAS",
    bannerDesc: "Explore los módulos geodésicos y criptográficos avanzados que hacen de GeoProof el estándar indiscutible para el análisis de ubicación verificable.",
    coreSystems: "SISTEMAS NUCLEARES",
    pipelineTitle: "EL PIPELINE DE VERIFICACIÓN",
    pipelineDesc: "Cómo los bytes brutos de la imagen se convierten en evidencia indiscutible",
    compTitle: "Plano Comparativo",
    compSubtitle: "Cámara Estándar vs. Sandbox de GeoProof",
    inspectBenchmark: "Punto de Referencia",
    standardSmartphone: "Captura Estándar de Smartphone",
    geoproofStamp: "Sello Encriptado GeoProof",
    gpSigLabel: "Firma de Latitud/Longitud GPS",
    gpSigMut: "Etiquetas EXIF modificables (Fáciles de falsear)",
    gpSigVal: "Bloque codificado por satélite NTP",
    authLabel: "Carga Útil de Autenticidad",
    authMut: "Ninguna (Compresión simple de imagen)",
    authVal: "Carga de certificado QR firmado",
    tamperLabel: "Auditoría de Manipulación",
    tamperMut: "Auto-editable (Fácil de modificar con Photoshop)",
    tamperVal: "Control estricto de estructura EXIF",
    traceLabel: "Trazabilidad de Integridad",
    traceMut: "Solo registros locales fuera de línea",
    traceVal: "Paridad de registros del servidor Express",
    features: [
      {
        title: "Captura Atmosférica en Vivo",
        desc: "Captura instantánea vinculada estrictamente al sensor de hardware. Evita la inyección de cámaras simuladas.",
        tag: "CAPTURA"
      },
      {
        title: "Enlace GPS Criptográfico",
        desc: "Captura coordenadas directas verificadas por antenas regionales para evitar el pirateo de coordenadas.",
        tag: "GEODÉSICO"
      },
      {
        title: "Certificados QR Firmados",
        desc: "Produce firmas QR seguras que contienen hash comprimido de metadatos listo para auditorías.",
        tag: "CRIPTOGRAFÍA"
      },
      {
        title: "Análisis de Manipulación IA",
        desc: "Analiza el ruido estructural en la imagen y firmas EXIF, generando una puntuación de confianza precisa.",
        tag: "INTELIGENCIA"
      }
    ],
    steps: [
      { step: "01", title: "Captura de Sensor", desc: "El usuario activa la cámara integrada exclusiva de GeoProof." },
      { step: "02", title: "Sondeo de Metadatos", desc: "Recopilación simultánea de satélites GPS y reloj NTP de precisión." },
      { step: "03", title: "Hasing Criptográfico", desc: "Combina bytes de imagen y metadatos en un hash SHA-256 exclusivo." },
      { step: "04", title: "Sello Digital Certificado", desc: "Genera el certificado listo para descargar o imprimir con código QR." }
    ]
  },
  DE: {
    tag: "KAPAZITÄTSSPEZIFIKATIONEN",
    bannerTitle: "PLATTFORMFUNKTIONEN & MERKMALE",
    bannerDesc: "Erforschen Sie die geodätischen und kryptografischen Module, die GeoProof zum unangefochtenen Standard machen.",
    coreSystems: "KERNPSYTEME",
    pipelineTitle: "DIE VERIFIZIERUNGS-PIPELINE",
    pipelineDesc: "Wie Rohdaten in unanfechtbare digitale Beweise umgewandelt werden",
    compTitle: "Vergleichs-Blueprint",
    compSubtitle: "Standard-Smartphone-Kamera vs. GeoProof Sandbox",
    inspectBenchmark: "Inspektions-Benchmark",
    standardSmartphone: "Standard-Smartphone-Aufnahme",
    geoproofStamp: "GeoProof Verschlüsselte Signatur",
    gpSigLabel: "GPS Breitengrad/Längengrad Signatur",
    gpSigMut: "Veränderbare EXIF-Tags (leicht zu fälschen)",
    gpSigVal: "Verschlüsselter Satelliten-NTP-Block",
    authLabel: "Echtheitszertifikat-Inhalt",
    authMut: "Keiner (Einfache Bildkompression)",
    authVal: "Signierte QR-Zertifikatsdaten",
    tamperLabel: "KI-Manipulationsaudit",
    tamperMut: "Frei editierbar (Photoshop-freundlich)",
    tamperVal: "Strukturprüfung der EXIF-Metadaten",
    traceLabel: "Rückverfolgbarkeit",
    traceMut: "Nur unzusammenhängende Offline-Aufnahmen",
    traceVal: "Express-Server-Protokoll-Parität",
    features: [
      {
        title: "Atmosphärische Live-Aufnahme",
        desc: "Die direkte Sensoranbindung schließt Fälschungen oder Emulator-Injektionen vollständig aus.",
        tag: "AUFNAHME"
      },
      {
        title: "Kryptografische GPS-Bindung",
        desc: "Verbindet Koordinaten mit Mobilfunkmasten zur Abwehr von Location-Spoofing.",
        tag: "GEODÄTISCH"
      },
      {
        title: "Signierte QR-Zertifikate",
        desc: "Komprimiert Auditprotokolle in offline-lesbare, fälschungssichere QR-Signaturen.",
        tag: "KRYPTOGRAFIE"
      },
      {
        title: "KI-Manipulationsprüfung",
        desc: "Analysiert Kompressionsraten und hochfrequente Rauschmuster auf Pixelebene.",
        tag: "INTELLIGENZ"
      }
    ],
    steps: [
      { step: "01", title: "Kamera-Echtzeit", desc: "Direkte Auslösung über den sandboxed Hardware-Kamerastack." },
      { step: "02", title: "Metadaten-Abfrage", desc: "Simultane Abfrage von Satelliten und hochpräziser NTP-Systemzeit." },
      { step: "03", title: "Kryptografisches Hashing", desc: "Zusammenfügen von Bildbytes und Metadaten zu SHA-256." },
      { step: "04", title: "Stempel-Erstellung", desc: "Ausgabe des digitalen Zertifikats inklusive scanbarem QR." }
    ]
  },
  FR: {
    tag: "SPÉCIFICATIONS DE CAPACITÉS",
    bannerTitle: "CAPACITÉS & FONCTIONNALITÉS DE LA PLATEFORME",
    bannerDesc: "Explorez les modules géodésiques et cryptographiques qui font de GeoProof la référence incontestée pour la preuve d'image géolocalisée.",
    coreSystems: "SYSTÈMES CLÉS",
    pipelineTitle: "LE PIPELINE DE VÉRIFICATION",
    pipelineDesc: "Comment les octets d'images bruts deviennent des preuves absolues",
    compTitle: "Comparatif Détaillé",
    compSubtitle: "Caméra Standard de Smartphone vs GeoProof Sandbox",
    inspectBenchmark: "Point de Benchmark",
    standardSmartphone: "Capture Smartphone Civile",
    geoproofStamp: "Tampon Chiffré GeoProof",
    gpSigLabel: "Signature de Coordonnées GPS",
    gpSigMut: "Métadonnées EXIF modifiables (faciles à falsifier)",
    gpSigVal: "Bloc chiffré par satellite NTP",
    authLabel: "Preuve d'Authenticité intégrée",
    authMut: "Aucune (compression d'image simple)",
    authVal: "Certificat QR signé inviolable",
    tamperLabel: "Audit Anti-Altération",
    tamperMut: "Facilement éditable (Photoshop & Pixel-art)",
    tamperVal: "Analyse stricte de structure EXIF",
    traceLabel: "Traçabilité & Intégrité",
    traceMut: "Enregistrements hors ligne uniquement",
    traceVal: "Log de synchronisation du serveur Express",
    features: [
      {
        title: "Capture Live Atmos",
        desc: "S'associe directement aux capteurs matériels pour bloquer toute tentative d'injection virtuelle.",
        tag: "CAPTURE"
      },
      {
        title: "Liaison GPS Cryptographique",
        desc: "Sonde la latitude et longitude via des coordonnées fiables certifiées par satellite.",
        tag: "GÉODÉSIQUE"
      },
      {
        title: "Certificats QR Signés",
        desc: "Génère des blocs de signatures QR hors ligne contenant l'historique d'acquisition.",
        tag: "CRYPTOGRAPHIE"
      },
      {
        title: "Analyse d'Altération par IA",
        desc: "Sonde la signature thermique et structurelle pour évaluer le score de confiance globale.",
        tag: "INTELLIGENCE"
      }
    ],
    steps: [
      { step: "01", title: "Capture Matérielle", desc: "L'utilisateur déclenche la capture exclusive de GeoProof." },
      { step: "02", title: "Sondage de Données", desc: "Collecte des satellites géodésiques et horodate NTP de précision." },
      { step: "03", title: "Hachage Crypto", desc: "Fusionne les octets d'image et métadonnées en SHA-256." },
      { step: "04", title: "Émission Certifiée", desc: "Fige l'image et produit la fiche d'audit certifiée téléchargeable." }
    ]
  }
};

export default function FeaturesPage({ darkMode, onNavigateToTab, language = "EN" }: FeaturesPageProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const currentTrans = localTranslations[language] || localTranslations.EN;
  const workflowSteps = currentTrans.steps;

  const originalIcons = [Camera, MapPin, QrCode, ShieldCheck];
  const originalSpecs = [
    [
      { label: language === "TA" ? "வன்பொருள் என்கிளேவ்" : language === "HI" ? "हार्डवेयर एन्क्लेव" : language === "ES" ? "Enclave de hardware" : language === "FR" ? "Enclave matérielle" : "Hardware Enclave", value: language === "TA" ? "நேரடி சென்சார் இணைப்பு" : language === "HI" ? "डायरेक्ट सेंसर हुकिंग" : "Direct Sensor Hooking" },
      { label: language === "TA" ? "வேக துல்லியம்" : language === "HI" ? "विलंबता सहनशीलता" : language === "ES" ? "Tolerancia de latencia" : "Latency Tolerances", value: "< 250 ms" },
      { label: "Anti-Proxy Check", value: "Strict Sandboxing" }
    ],
    [
      { label: language === "TA" ? "துல்லிய வரம்பு" : language === "HI" ? "सटीक सीमा" : "Precision Range", value: "Down to 1.5 meters" },
      { label: language === "TA" ? "பிணைய ஒத்திசைவு" : "Network Parity", value: "Cell Tower Syncing" },
      { label: "Anti-Spoof Check", value: "Active Geodetic Bounds" }
    ],
    [
      { label: "Sign Standard", value: "ECDSA SHA-256" },
      { label: "QR Formats", value: "VCard & Raw JSON payloads" },
      { label: language === "TA" ? "ஆஃப்லைன் சரிபார்ப்பு" : "Offline Verification", value: "Yes (No network needed)" }
    ],
    [
      { label: "Luminance Check", value: "Double Compression Check" },
      { label: "EXIF Parsing", value: "Full Header Match Verification" },
      { label: "AI Trust Score", value: "Deterministic % Confidence" }
    ]
  ];

  const featuresList = currentTrans.features.map((item, idx) => ({
    ...item,
    icon: originalIcons[idx] || Camera,
    specs: originalSpecs[idx] || []
  }));

  return (
    <div className="space-y-12">
      {/* Banner matching security center look but with distinct Blue/Indigo styling */}
      <div className="bg-blue-850 text-white p-8 rounded-3xl relative overflow-hidden shadow-lg blueprint-grid flex flex-col justify-between min-h-[160px]">
        <div className="absolute right-0 bottom-0 top-0 w-2/3 bg-gradient-to-l from-blue-700/60 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
            {currentTrans.tag}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-white">
            {currentTrans.bannerTitle}
          </h2>
          <p className="text-xs text-blue-100 max-w-xl font-medium mt-1">
            {currentTrans.bannerDesc}
          </p>
        </div>
      </div>

      {/* Interactive Feature Tabs + Detailed Specs Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Buttons */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className={`text-xs font-black uppercase tracking-wider font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {currentTrans.coreSystems}
          </h3>
          <div className="space-y-2.5">
            {featuresList.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeFeatureIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all flex gap-3.5 items-start ${
                    isActive
                      ? darkMode
                        ? 'bg-blue-950/40 border-blue-500/50 text-white shadow-lg shadow-blue-950/20'
                        : 'bg-white border-blue-500 text-slate-900 shadow-md shadow-blue-50/55'
                      : darkMode
                      ? 'bg-slate-900/40 border-white/5 text-slate-300 hover:bg-slate-900'
                      : 'bg-white/80 border-slate-150 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[9px] font-bold font-mono uppercase tracking-wider block ${
                      isActive ? 'text-blue-500' : 'text-slate-400'
                    }`}>
                      {feature.tag}
                    </span>
                    <h4 className="text-sm font-bold mt-0.5">{feature.title}</h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Details of chosen Feature Component */}
        <div className="lg:col-span-7">
          <div className={`border p-6 sm:p-8 rounded-3xl shadow-md space-y-6 transition-all ${
            darkMode ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 text-[9px] font-black tracking-widest font-mono rounded-full uppercase ${
                darkMode ? 'bg-blue-950 text-blue-400 border border-blue-900/50' : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}>
                {featuresList[activeFeatureIndex].tag} SPECIFICATION
              </span>
            </div>

            <div>
              <h3 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {featuresList[activeFeatureIndex].title}
              </h3>
              <p className={`text-xs mt-2.5 leading-relaxed font-sans ${
                darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'
              }`}>
                {featuresList[activeFeatureIndex].desc}
              </p>
            </div>

            {/* Specifications metrics list */}
            <div className="pt-4 border-t border-slate-150/50 dark:border-white/5 space-y-3">
              <h4 className={`text-[10px] font-black uppercase tracking-widest font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                TECHNICAL PARAMETERS & BENCHMARKS
              </h4>
              <div className="space-y-2">
                {featuresList[activeFeatureIndex].specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex justify-between items-center py-2 px-3.5 rounded-xl border text-xs font-medium ${
                      darkMode ? 'bg-slate-950/50 border-white/5' : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{spec.label}</span>
                    <span className={`font-mono font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Action Banner */}
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
              darkMode ? 'bg-blue-950/20 border-blue-900/30' : 'bg-blue-50/50 border-blue-100/70'
            }`}>
              <div>
                <h5 className="text-xs font-bold">
                  {language === "TA" ? `${featuresList[activeFeatureIndex].title} தொகுதியைத் தொடங்கத் தயாரா?` : `Ready to try ${featuresList[activeFeatureIndex].title}?`}
                </h5>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === "TA" ? "எங்கள் நிகழ்நேர பாதுகாப்பு சாண்ட்பாக்ஸில் கேமரா தொகுதியை சோதிக்கவும்." : "Examine the camera module in our live workspace sandbox."}
                </p>
              </div>
              <button
                onClick={() => onNavigateToTab('capture')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black tracking-wide flex items-center gap-1.5 transition-all self-stretch sm:self-auto text-center justify-center cursor-pointer"
              >
                {language === "TA" ? "தொடங்கவும்" : "Launch Module"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Visual Workflow Steps / Pipeline */}
      <div className="space-y-6 pt-4">
        <div className="text-center">
          <h3 className={`text-xs font-black uppercase tracking-widest font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {currentTrans.pipelineTitle}
          </h3>
          <p className={`text-base font-extrabold mt-1 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {currentTrans.pipelineDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2.5xl border flex flex-col justify-between space-y-4 transition-all relative ${
                darkMode
                  ? 'bg-slate-900/60 border-white/10 text-white'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-2xl font-black font-mono tracking-tighter ${
                  darkMode ? 'text-blue-500/25' : 'text-blue-100/80 font-bold'
                }`}>{step.step}</span>
                <div className={`p-1.5 rounded-lg border ${
                  darkMode ? 'bg-slate-800/60 border-white/5 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'
                }`}>
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-none">{step.title}</h4>
                <p className={`text-[11px] leading-relaxed mt-2.5 font-medium ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Specifications Compare matrix */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${
        darkMode ? 'bg-slate-900/60 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
      }`}>
        <div className="space-y-1 mb-6 text-center sm:text-left">
          <h4 className={`text-xs font-black uppercase tracking-widest font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {currentTrans.compTitle}
          </h4>
          <h3 className="text-lg font-bold">{currentTrans.compSubtitle}</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-white/10' : 'border-slate-150'}`}>
                <th className="py-3 px-2 text-slate-400 uppercase tracking-widest font-mono text-[9px]">{currentTrans.inspectBenchmark}</th>
                <th className="py-3 px-2 text-rose-500 uppercase tracking-widest font-mono text-[9px]">{currentTrans.standardSmartphone}</th>
                <th className="py-3 px-2 text-blue-500 uppercase tracking-widest font-mono text-[9px]">{currentTrans.geoproofStamp}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              <tr>
                <td className="py-3 px-2 font-bold font-sans">{currentTrans.gpSigLabel}</td>
                <td className="py-3 px-2 text-slate-400">{currentTrans.gpSigMut}</td>
                <td className="py-3 px-2 text-blue-600 dark:text-blue-400 font-extrabold flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  {currentTrans.gpSigVal}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-bold font-sans">{currentTrans.authLabel}</td>
                <td className="py-3 px-2 text-slate-400">{currentTrans.authMut}</td>
                <td className="py-3 px-2 text-blue-600 dark:text-blue-400 font-extrabold flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  {currentTrans.authVal}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-bold font-sans">{currentTrans.tamperLabel}</td>
                <td className="py-3 px-2 text-slate-400">{currentTrans.tamperMut}</td>
                <td className="py-3 px-2 text-blue-600 dark:text-blue-400 font-extrabold flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  {currentTrans.tamperVal}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-bold font-sans">{currentTrans.traceLabel}</td>
                <td className="py-3 px-2 text-slate-400">{currentTrans.traceMut}</td>
                <td className="py-3 px-2 text-blue-600 dark:text-blue-400 font-extrabold flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  {currentTrans.traceVal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
