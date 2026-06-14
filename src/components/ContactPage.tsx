import { Mail, Phone, MapPin, Building, Globe, Send, User, MessageSquare, Briefcase, CheckCircle, Clock } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { translations, LanguageCode } from '../lib/translations';

interface ContactPageProps {
  darkMode: boolean;
  language?: LanguageCode;
}

interface Inquiry {
  name: string;
  email: string;
  message: string;
  role: string;
  timestamp: string;
}

export default function ContactPage({ darkMode, language = "EN" }: ContactPageProps) {
  const t = translations[language] || translations.EN;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Researcher',
    message: ''
  });
  const [submittedInquiries, setSubmittedInquiries] = useState<Inquiry[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load any previously simulated inquiries from storage if desired
  useEffect(() => {
    const saved = localStorage.getItem("geoproof_inquiries");
    if (saved) {
      try {
        setSubmittedInquiries(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all raw forms credentials.");
      return;
    }

    const newInquiry: Inquiry = {
      ...formData,
      timestamp: new Date().toLocaleString()
    };

    const updated = [newInquiry, ...submittedInquiries];
    setSubmittedInquiries(updated);
    localStorage.setItem("geoproof_inquiries", JSON.stringify(updated));

    // Clear form and display success toast
    setFormData({
      name: '',
      email: '',
      role: 'Researcher',
      message: ''
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4500);
  };

  const roles = ["Researcher", "Developer", "Enterprise Auditor", "Governing Council", "Student Pilot"];

  const addressDetails = {
    institution: "SIMATS Engineering Labs",
    campus: "Saveetha Institute of Medical and Technical Sciences",
    road: "Poonamallee Bypass Road, Chennai",
    state: "Tamil Nadu, 602101, India",
    email: "mukeshganes20@gmail.com",
    displayName: "mukesh g",
    coordinates: "13.0437° N, 80.0915° E"
  };

  return (
    <div className="space-y-12">
      {/* Banner resembling Security Center */}
      <div className="bg-blue-800 text-white p-8 rounded-3xl relative overflow-hidden shadow-lg blueprint-grid flex flex-col justify-between min-h-[160px]">
        <div className="absolute right-0 bottom-0 top-0 w-2/3 bg-gradient-to-l from-blue-700/60 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            Active Terminal Coordinate
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display">
            {t.contactTitle}
          </h2>
          <p className="text-xs text-blue-100 max-w-xl font-medium mt-1">
            {t.contactHeaderDesc}
          </p>
        </div>
      </div>

      {/* Main Form container + Contact metadata cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Contact Info list */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`p-6 rounded-3xl border space-y-6 transition-all ${
            darkMode ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
          }`}>
            <h3 className={`text-xs font-black uppercase tracking-widest font-mono ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {t.labAddress}
            </h3>

            <div className="space-y-4">
              
              {/* Institution link */}
              <div className="flex gap-3.5 items-start">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400">{t.institutionLabel}</h4>
                  <p className="text-sm font-semibold mt-0.5">{addressDetails.institution}</p>
                  <p className="text-xs text-slate-500">{addressDetails.campus}</p>
                </div>
              </div>

              {/* Physical georeference coordinates */}
              <div className="flex gap-3.5 items-start">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400">{t.geoRefLabel}</h4>
                  <p className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400 mt-0.5">{addressDetails.coordinates}</p>
                  <p className="text-xs text-slate-500">{addressDetails.road}, {addressDetails.state}</p>
                </div>
              </div>

              {/* Email channel */}
              <div className="flex gap-3.5 items-start">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400">{t.secureDispatchLabel}</h4>
                  <a 
                    href={`mailto:${addressDetails.email}`}
                    className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline mt-0.5 block cursor-pointer"
                  >
                    {addressDetails.displayName}
                  </a>
                  <p className="text-xs text-slate-500">Fast response within 24 operational hours</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-3.5 items-start">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400 font-display">{t.institutionalSiteLabel}</h4>
                  <a 
                    href="https://www.saveetha.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400 underline hover:text-blue-500 mt-0.5 block"
                  >
                    www.saveetha.com
                  </a>
                </div>
              </div>

            </div>

            {/* Quick alert box */}
            <div className={`p-4 rounded-2xl border text-xs leading-normal ${
              darkMode ? 'bg-blue-950/20 border-blue-900/40 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-800'
            }`}>
              {t.encryptionProtocol}
            </div>

          </div>
        </div>

        {/* Right column: Interactive form */}
        <div className="lg:col-span-7 space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
          }`}>
            <h3 className={`text-xs font-black uppercase tracking-widest font-mono mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {t.inquiryRegister}
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> {t.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t.fullNamePlaceholder}
                    className={`w-full text-xs font-medium px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-slate-950 border-white/5 text-white placeholder-slate-650' 
                        : 'bg-slate-25/50 border-slate-200 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t.emailPlaceholder}
                    className={`w-full text-xs font-medium px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-slate-950 border-white/5 text-white placeholder-slate-650' 
                        : 'bg-slate-25/50 border-slate-200 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>

              </div>

              {/* Row 2: Role selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> {t.affiliationLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {roles.map((r, rIdx) => {
                    const isSelected = formData.role === r;
                    return (
                      <button
                        type="button"
                        key={rIdx}
                        onClick={() => setFormData({...formData, role: r})}
                        className={`py-2 px-3 rounded-xl text-center text-[11px] font-bold border transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                            : darkMode
                            ? 'bg-slate-950 hover:bg-slate-800 border-white/5 text-slate-300'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                        }`}
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> {t.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder={t.messagePlaceholder}
                  className={`w-full text-xs font-medium px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none ${
                    darkMode 
                      ? 'bg-slate-950 border-white/5 text-white placeholder-slate-650' 
                      : 'bg-slate-25/50 border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Success alert message */}
              {showSuccess && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 dark:text-emerald-400 py-3 px-4 rounded-xl flex items-center gap-2.5 text-xs font-bold animate-pulse">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  {t.successToast}
                </div>
              )}

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" /> {t.submitBtn}
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

      {/* Simulated dispatch registry history log matching the app's verified records look */}
      {submittedInquiries.length > 0 && (
        <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
          darkMode ? 'bg-slate-900/60 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
        }`}>
          <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-white/5">
            <h4 className={`text-xs font-black uppercase tracking-widest font-mono ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {t.secureTrafficLogs}
            </h4>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 font-mono font-bold px-2.5 py-1 rounded-full text-slate-500">
              {submittedInquiries.length} {t.activeRecords}
            </span>
          </div>

          <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
            {submittedInquiries.map((inq, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border text-xs relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-all ${
                  darkMode ? 'bg-slate-950 border-white/5' : 'bg-slate-52 border-slate-100'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold">{inq.name}</span>
                    <span className="text-[9px] bg-blue-500/10 text-blue-500 font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                      {inq.role}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1.5 leading-relaxed">"{inq.message}"</p>
                </div>
                <div className="text-right flex items-center gap-1.5 text-[10px] text-slate-400 font-mono font-bold shrink-0 self-end sm:self-auto">
                  <Clock className="w-3.5 h-3.5" />
                  {inq.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
