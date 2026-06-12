import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import resumeData from './resume.json'
import './index.scss'

type LinkSection = {
  id: string
  title: string
  type: 'links'
  items: Array<{
    label: string
    href: string
    icon?: string
  }>
}

type DetailsSection = {
  id: string
  title: string
  type: 'details'
  items: Array<{
    title: string
    lines: string[]
  }>
}

type TextSection = {
  id: string
  title: string
  type: 'text'
  items: string[]
}

type TagsSection = {
  id: string
  title: string
  type: 'tags'
  items: string[]
}

type BulletsSection = {
  id: string
  title: string
  type: 'bullets'
  items: string[]
}

type EntriesSection = {
  id: string
  title: string
  type: 'entries'
  items: Array<{
    title: string
    logo?: string
    subtitle?: string
    meta?: string
    description?: string
    bullets?: string[]
    groups?: Array<{
      description?: string
      bullets: string[]
    }>
  }>
}

type ResumeSection =
  | LinkSection
  | DetailsSection
  | TextSection
  | TagsSection
  | BulletsSection
  | EntriesSection

type ResumeData = {
  header: {
    title: string
    subtitle?: string
    description?: string
  }
  layout: {
    sidebarLabel: string
    sidebar: ResumeSection[]
    main: ResumeSection[]
  }
}

const data = resumeData as ResumeData

const SectionContent = ({ section }: { section: ResumeSection }) => {
  switch (section.type) {
    case 'links':
      return (
        <address className="resume-contact" aria-label={section.title}>
          {section.items.map(({ label, href, icon }) => (
            <a
              className={icon ? undefined : 'resume-contact-link--without-icon'}
              key={`${href}-${label}`}
              href={href}
            >
              {icon && <span dangerouslySetInnerHTML={{ __html: icon }} />}
              {label}
            </a>
          ))}
        </address>
      )

    case 'details':
      return (
        <div className="resume-compact-list">
          {section.items.map((item, itemIndex) => (
            <article key={`${item.title}-${itemIndex}`}>
              <h4>{item.title}</h4>
              <div className="flex gap-xs">
                {item.lines.map((line, lineIndex) => (
                  <p key={`${line}-${lineIndex}`}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      )

    case 'text':
      return (
        <div className="resume-text-list">
          {section.items.map((item, itemIndex) => (
            <p key={`${item}-${itemIndex}`}>{item}</p>
          ))}
        </div>
      )

    case 'tags':
      return (
        <div className="resume-tags">
          {section.items.map((item, itemIndex) => (
            <span key={`${item}-${itemIndex}`}>{item}</span>
          ))}
        </div>
      )

    case 'bullets':
      return (
        <ul className="resume-bullet-list">
          {section.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>
              <span className="resume-entry-bullet" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )

    case 'entries':
      return (
        <div className="resume-entry-list">
          {section.items.map((item, itemIndex) => (
            <article className="resume-entry" key={`${item.title}-${item.subtitle ?? itemIndex}`}>
              <header>
                <div>
                  <h4>{item.title}</h4>
                  {item.subtitle && (
                    <div className="resume-entry-identity">
                      {item.logo && <img src={item.logo} alt="" />}
                      <strong>{item.subtitle}</strong>
                    </div>
                  )}
                </div>
                {item.meta && <span>{item.meta}</span>}
              </header>

              {item.description && <p className="resume-entry-description">{item.description}</p>}

              {item.bullets && item.bullets.length > 0 && (
                <ul>
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={`${bullet}-${bulletIndex}`} className="relative">
                      <span className="resume-entry-bullet" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {item.groups?.map((group, groupIndex) => (
                <div className="resume-entry-group" key={`${group.description ?? 'group'}-${groupIndex}`}>
                  {group.description && <p>{group.description}</p>}

                  <ul>
                    {group.bullets.map((bullet, bulletIndex) => (
                      <li key={`${bullet}-${bulletIndex}`} className="relative">
                        <span className="resume-entry-bullet" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      )
  }
}

const ResumeSectionBlock = ({ section }: { section: ResumeSection }) => (
  <section className="resume-block">
    <h3>{section.title}</h3>
    <SectionContent section={section} />
  </section>
)

const ResumeDocument = () => {
  const { header, layout } = data

  return (
    <article className="resume-document">
      <header className="resume-header">
        <h1>{header.title}</h1>
        {header.subtitle && <h2>{header.subtitle}</h2>}
        {header.description && <p>{header.description}</p>}
      </header>

      <div className="resume-layout">
        <aside className="resume-sidebar" aria-label={layout.sidebarLabel}>
          {layout.sidebar.map((section) => (
            <ResumeSectionBlock key={section.id} section={section} />
          ))}
        </aside>

        <div className="resume-main">
          {layout.main.map((section) => (
            <ResumeSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </article>
  )
}

export const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false)
  const requestClose = useCallback(() => setIsClosing(true), [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        requestClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [requestClose])

  useEffect(() => {
    if (!isClosing) {
      return
    }

    const closeFallback = window.setTimeout(onClose, 400)
    return () => window.clearTimeout(closeFallback)
  }, [isClosing, onClose])

  return createPortal(
    <div
      className={`resume-modal ${isClosing ? 'resume-modal--closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Currículo"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          requestClose()
        }
      }}
    >
      <div
        className="resume-modal-panel"
        onAnimationEnd={(event) => {
          if (
            isClosing
            && event.target === event.currentTarget
            && event.animationName === 'resume-panel-out'
          ) {
            onClose()
          }
        }}
      >
        <div className="resume-modal-actions">
          <div className='content-top-action'>
            <button
              className="resume-modal-download"
              type="button"
              aria-label="Alterar"
              onClick={() => {}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" /><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" /></svg>
            </button>
            <button
              className="resume-modal-download"
              type="button"
              aria-label="Baixar currículo em PDF"
              onClick={() => window.print()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17V3" /><path d="m6 11 6 6 6-6" /><path d="M19 21H5" /></svg>
            </button>
          </div>

          <button
            className="resume-modal-close"
            type="button"
            aria-label="Fechar currículo"
            onClick={requestClose}
            autoFocus
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <ResumeDocument />
      </div>
    </div>,
    document.body,
  )
}
