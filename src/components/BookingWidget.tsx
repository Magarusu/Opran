'use client'

import React, { useState } from 'react'
import { type Locale } from '@/lib/i18n'
import { TEAM_MEMBERS, ALL_SPECIALTIES } from '@/data/clinic-content'
import { Calendar, Video, Building2, CheckCircle2, ShieldCheck } from 'lucide-react'

const COPY: Record<
  Locale,
  {
    badge: string
    title: string
    subtitle: string
    modeClinic: string
    modeVideo: string
    stepService: string
    stepDoctor: string
    stepSlot: string
    stepContact: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    gdprLabel: string
    submitBtn: string
    successTitle: string
    successBody: string
    videoLinkNote: string
    resetBtn: string
  }
> = {
  ro: {
    badge: 'DEMO INTERACTIV ETAPA II • PROGRAMĂRI & CONSULTAȚII VIDEO GDPR',
    title: 'Programare Online & Consultație Video',
    subtitle:
      'Selectați tipul consultației, specialitatea, medicul și intervalul dorit. Pentru pacienții din străinătate, sistemul generează automat o cameră video securizată.',
    modeClinic: 'Vizită în clinică (București)',
    modeVideo: 'Consultație Video Online (GDPR)',
    stepService: '1. Serviciu / Specialitate',
    stepDoctor: '2. Medic',
    stepSlot: '3. Data și intervalul orar',
    stepContact: '4. Date de contact',
    nameLabel: 'Nume și prenume',
    emailLabel: 'Adresă e-mail',
    phoneLabel: 'Telefon / WhatsApp',
    gdprLabel:
      'Sunt de acord cu prelucrarea datelor în scopul programării (stocare UE/SEE conform GDPR).',
    submitBtn: 'Confirmă solicitarea demo',
    successTitle: 'Solicitare înregistrată (Mod Demo)',
    successBody:
      'În versiunea de producție, pacientul primește confirmare automată prin e-mail în limba selectată, iar recepția gestionează programarea din panoul CMS.',
    videoLinkNote: 'Link securizat generat automat pentru consultația video:',
    resetBtn: 'Creează o altă programare demo',
  },
  en: {
    badge: 'STAGE II INTERACTIVE DEMO • ONLINE BOOKING & GDPR VIDEO CONSULTATION',
    title: 'Online Booking & Virtual Consultation',
    subtitle:
      'Choose an in-clinic visit in Bucharest or a secure encrypted video evaluation for international patients.',
    modeClinic: 'In-Clinic Visit (Bucharest)',
    modeVideo: 'Virtual Video Consultation',
    stepService: '1. Procedure / Specialty',
    stepDoctor: '2. Doctor',
    stepSlot: '3. Date & Time Slot',
    stepContact: '4. Contact Information',
    nameLabel: 'Full Name',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone / WhatsApp',
    gdprLabel:
      'I consent to GDPR-compliant data processing within the EU/EEA solely for scheduling my consultation.',
    submitBtn: 'Confirm Demo Request',
    successTitle: 'Request Recorded (Demo Mode)',
    successBody:
      'In production, automated multilingual email confirmation is sent and clinic staff manage slots directly in Payload CMS.',
    videoLinkNote: 'Auto-generated encrypted video room link:',
    resetBtn: 'Create another demo booking',
  },
  fr: {
    badge: 'DÉMO INTERACTIVE ÉTAPE II • PRISE DE RDV & TÉLÉCONSULTATION RGPD',
    title: 'Rendez-vous en ligne & Téléconsultation',
    subtitle:
      'Choisissez une visite à Bucarest ou une téléconsultation vidéo sécurisée pour préparer votre séjour dentaire depuis la France ou l’étranger.',
    modeClinic: 'Visite à la clinique (Bucarest)',
    modeVideo: 'Téléconsultation Vidéo Sécurisée',
    stepService: '1. Soin / Spécialité',
    stepDoctor: '2. Praticien',
    stepSlot: '3. Date et créneau horaire',
    stepContact: '4. Coordonnées',
    nameLabel: 'Nom complet',
    emailLabel: 'Adresse e-mail',
    phoneLabel: 'Téléphone / WhatsApp',
    gdprLabel:
      'J’accepte le traitement conforme au RGPD (hébergement UE/EEE) pour l’organisation de mon rendez-vous.',
    submitBtn: 'Confirmer la demande démo',
    successTitle: 'Demande enregistrée (Mode Démo)',
    successBody:
      'En production, une confirmation automatique multilingue est envoyée et la réception gère les créneaux depuis Payload CMS.',
    videoLinkNote: 'Lien vidéo chiffré généré automatiquement :',
    resetBtn: 'Effectuer une autre simulation',
  },
}

const SLOTS = ['09:30', '11:00', '13:30', '15:00', '17:30']

export const BookingWidget: React.FC<{ locale: Locale }> = ({ locale }) => {
  const c = COPY[locale]
  const specialties = ALL_SPECIALTIES[locale]
  const [mode, setMode] = useState<'clinic' | 'video'>('video')
  const [service, setService] = useState(specialties[0].title)
  const [doctor, setDoctor] = useState(TEAM_MEMBERS[0].name)
  const [date, setDate] = useState('2026-12-03')
  const [slot, setSlot] = useState(SLOTS[1])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gdpr, setGdpr] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-md p-8 shadow-sm text-center max-w-2xl mx-auto space-y-5">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="text-2xl font-semibold text-[#003261]">{c.successTitle}</h3>
        <div className="bg-[#ebeff3] rounded p-4 text-sm text-slate-700 space-y-1 text-left">
          <p>
            <strong>{mode === 'video' ? c.modeVideo : c.modeClinic}</strong> — {service}
          </p>
          <p>
            {doctor} • {date} • {slot} (EET)
          </p>
          {name && <p>{name}</p>}
        </div>
        {mode === 'video' && (
          <div className="bg-[#003261] text-white rounded p-4 text-xs space-y-1">
            <p className="text-[#85c1e5] font-semibold">{c.videoLinkNote}</p>
            <p className="font-mono break-all">
              https://meet.opran.ro/room/demo-{date.replaceAll('-', '')}-{slot.replace(':', '')}
            </p>
          </div>
        )}
        <p className="text-sm text-slate-600">{c.successBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-5 py-2.5 bg-[#003261] text-white text-sm font-semibold rounded-sm hover:bg-[#001931]"
        >
          {c.resetBtn}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden"
    >
      <div className="bg-[#003261] text-white p-6 sm:p-8 space-y-2">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#5584b1]/40 text-[#85c1e5] px-2.5 py-1 rounded">
          {c.badge}
        </span>
        <h2 className="text-2xl font-semibold flex items-center gap-2.5">
          <Calendar className="w-6 h-6 text-[#85c1e5]" />
          <span>{c.title}</span>
        </h2>
        <p className="text-sm text-slate-200 max-w-2xl">{c.subtitle}</p>

        {/* Mode Toggle */}
        <div className="pt-3 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setMode('video')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold border transition-colors ${
              mode === 'video'
                ? 'bg-white text-[#003261] border-white'
                : 'bg-transparent text-slate-200 border-white/30 hover:border-white'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>{c.modeVideo}</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('clinic')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold border transition-colors ${
              mode === 'clinic'
                ? 'bg-white text-[#003261] border-white'
                : 'bg-transparent text-slate-200 border-white/30 hover:border-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{c.modeClinic}</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#003261]">
            {c.stepService}
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm bg-white"
          >
            {specialties.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#003261]">
            {c.stepDoctor}
          </label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm bg-white"
          >
            {TEAM_MEMBERS.map((m) => (
              <option key={m.name} value={m.name}>
                {m.name} ({m.languages})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#003261]">
            {c.stepSlot}
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-slate-300 rounded px-3 py-2 text-sm bg-white"
            />
            <div className="flex flex-wrap gap-1.5">
              {SLOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  className={`px-3 py-2 rounded text-xs font-semibold border ${
                    slot === s
                      ? 'bg-[#003261] text-white border-[#003261]'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#003261]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#003261]">
            {c.stepContact}
          </label>
          <input
            type="text"
            required
            placeholder={c.nameLabel}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="email"
              required
              placeholder={c.emailLabel}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm"
            />
            <input
              type="tel"
              required
              placeholder={c.phoneLabel}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer max-w-xl">
            <input
              type="checkbox"
              required
              checked={gdpr}
              onChange={(e) => setGdpr(e.target.checked)}
              className="mt-0.5"
            />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#5584b1] shrink-0" />
              {c.gdprLabel}
            </span>
          </label>
          <button
            type="submit"
            className="px-6 py-3 bg-[#003261] hover:bg-[#001931] text-white text-sm font-semibold rounded-sm transition-colors shrink-0"
          >
            {c.submitBtn}
          </button>
        </div>
      </div>
    </form>
  )
}
