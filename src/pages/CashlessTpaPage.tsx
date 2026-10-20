import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  FileText,
  Clock,
  Phone,
  HelpCircle,
  Building,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { TPA_PARTNERS, HOSPITAL_INFO } from '../data/hospitalData';
import { AdBanner } from '../components/layout/AdBanner';
import { Link } from 'react-router-dom';

export const CashlessTpaPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredTpas = TPA_PARTNERS.filter((tpa) => {
    const matchesSearch =
      tpa.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpa.coverageDetails.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || tpa.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-yellow-300 text-xs font-semibold mb-3 border border-amber-400/30">
            <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
            <span>24x7 In-House TPA Pre-Authorization Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Cashless Hospitalisation & Insurance Empanelments
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            HospitalSee is proud to be empanelled with CGHS, ECHS, DGEHS, and more than 25 leading private insurance providers and TPAs.
          </p>
        </div>
      </section>

      {/* TPA Helpdesk Strip */}
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium">
            <Phone className="w-4 h-4 text-yellow-200" />
            <span>Dedicated Cashless TPA Helpdesk:</span>
            <strong className="text-white underline">{HOSPITAL_INFO.tpaHelpdesk}</strong>
            <span className="text-amber-200 hidden md:inline">(Ground Floor, Main Hospital)</span>
          </div>
          <div className="text-amber-100 text-xs">
            Assistance Available: Monday to Saturday (9:00 AM - 6:00 PM) | 24x7 for Emergency
          </div>
        </div>
      </section>

      {/* Directory & Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Partners' },
                { id: 'Insurance Company', label: 'Insurance Companies' },
                { id: 'Third Party Administrator (TPA)', label: 'TPAs' },
                { id: 'Government Scheme', label: 'Govt. Schemes (CGHS/ECHS)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedType(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    selectedType === tab.id
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                      : 'bg-amber-50/70 hover:bg-amber-100 text-stone-700 border border-amber-200/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-orange-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your insurance or TPA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTpas.map((tpa) => (
              <div
                key={tpa.id}
                className="p-6 rounded-2xl bg-white border border-orange-100 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-md">
                      {tpa.type}
                    </span>
                    <span className="text-xs font-bold text-orange-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-500" />
                      {tpa.turnaroundTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-stone-900 mb-2">
                    {tpa.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {tpa.coverageDetails}
                  </p>
                </div>

                <div className="pt-3 border-t border-orange-50 flex items-center justify-between text-xs text-stone-500">
                  <span>Helpline:</span>
                  <span className="font-bold text-stone-800">{tpa.helpline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Cashless Works Guide */}
      <section className="py-16 bg-[#fffaf5] border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              How to Avail Cashless Treatment at HospitalSee
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 font-black text-base flex items-center justify-center mb-4 border border-amber-200">
                01
              </div>
              <h4 className="font-bold text-sm text-stone-900 mb-2">OPD Advice & Admission</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Doctor evaluates patient and advises hospitalisation. Collect the pre-authorization form from the TPA desk.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 font-black text-base flex items-center justify-center mb-4 border border-amber-200">
                02
              </div>
              <h4 className="font-bold text-sm text-stone-900 mb-2">Document Submission</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Submit health card, Aadhaar card, doctor’s prescription, and diagnostic reports to the 24x7 TPA desk.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 font-black text-base flex items-center justify-center mb-4 border border-amber-200">
                03
              </div>
              <h4 className="font-bold text-sm text-stone-900 mb-2">Pre-Auth Sanction</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our team uploads digital documents to your TPA portal and secures initial cashless approval within 1-2 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 font-black text-base flex items-center justify-center mb-4 border border-amber-200">
                04
              </div>
              <h4 className="font-bold text-sm text-stone-900 mb-2">Cashless Discharge</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Upon recovery, final bill is settled directly by the insurer. Patient pays only non-medical consumable charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50/80 p-6 rounded-3xl border border-amber-200">
            <h3 className="font-bold text-base text-stone-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-600" />
              <span>Mandatory Checklist for Cashless Admission</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Original Health Insurance E-Card or Physical Card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Patient Government ID (Aadhaar / Voter ID / PAN)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Doctor&apos;s OPD Prescription & Admission Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>All Past Medical Reports, Scans & Discharge Summaries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>CGHS / ECHS Referral Letter (for government schemes)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Employee Corporate ID (for corporate group policies)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
