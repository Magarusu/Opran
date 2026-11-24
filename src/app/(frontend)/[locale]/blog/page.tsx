import React from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { BookOpen } from 'lucide-react'

const BLOG_COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    subtitle: string
    posts: { tag: string; title: string; excerpt: string }[]
  }
> = {
  ro: {
    eyebrow: 'BLOG EDUCAȚIONAL MULTILINGV • DEMO CMS (POZ. 5)',
    title: 'Ghiduri & Articole despre Sănătatea Orală',
    subtitle:
      'Secțiune pregătită pentru cele minimum 32 de articole originale SEO (16 FR + 16 EN, plus articole RO) gestionate din Payload CMS.',
    posts: [
      {
        tag: 'Implantologie',
        title: 'Cum decurge planificarea unui implant dentar în 3 etape',
        excerpt: 'De la evaluarea clinică și radiologia digitală la etapa protetică realizată în laboratorul propriu.',
      },
      {
        tag: 'Turism Medical',
        title: 'Cum să vă pregătiți pentru un tratament stomatologic în București',
        excerpt: 'Sfaturi practice pentru pacienții din diaspora și Europa privind consultația video preliminară.',
      },
    ],
  },
  en: {
    eyebrow: 'MULTILINGUAL EDUCATIONAL BLOG • DEMO CMS (POS. 5)',
    title: 'Oral Health Guides & Patient Education',
    subtitle:
      'Editorial hub designed for the 32+ distinct international SEO articles (16+ EN & 16+ FR) managed in Payload CMS.',
    posts: [
      {
        tag: 'Dental Tourism',
        title: 'Preparing for Dental Treatment in Bucharest: Step-by-Step Guide',
        excerpt: 'How our preliminary video consultation and in-house lab streamline your travel schedule.',
      },
      {
        tag: 'Prosthodontics',
        title: 'Zirconia vs. All-Ceramic Crowns: Clinical Indications Explained',
        excerpt: 'Understanding material selection for natural aesthetics and long-term bite stability.',
      },
    ],
  },
  fr: {
    eyebrow: 'BLOG ÉDUCATIF MULTILINGUE • DÉMO CMS (POS. 5)',
    title: 'Guides Santé Bucco-Dentaire & Conseils',
    subtitle:
      'Espace éditorial conçu pour les 32+ articles SEO originaux (dont minimum 16 en français) gérés via Payload CMS.',
    posts: [
      {
        tag: 'Tourisme Dentaire',
        title: 'Préparer votre séjour dentaire à Bucarest depuis la France',
        excerpt: 'Téléconsultation préalable, devis transparent et coordination avec notre laboratoire interne.',
      },
      {
        tag: 'Esthétique & Prothèse',
        title: 'Facettes céramiques et couronnes zircone : quelles indications ?',
        excerpt: 'Comment choisir une restauration durable et naturelle après un bilan complet.',
      },
    ],
  },
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const c = BLOG_COPY[locale as Locale]

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="container max-w-5xl space-y-10">
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5584b1]">
            {c.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#003261]">{c.title}</h1>
          <p className="text-slate-600 max-w-2xl">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.posts.map((post) => (
            <article
              key={post.title}
              className="p-6 rounded-md border border-slate-200 bg-[#ebeff3]/40 space-y-3"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5584b1]">
                <BookOpen className="w-3.5 h-3.5" />
                {post.tag}
              </span>
              <h2 className="text-xl font-semibold text-[#003261]">{post.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
