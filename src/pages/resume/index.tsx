import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
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

const isRecord = (value: unknown): value is Record<string, unknown> => (
  typeof value === 'object' && value !== null
)

const isStringArray = (value: unknown): value is string[] => (
  Array.isArray(value) && value.every((item) => typeof item === 'string')
)

const isResumeSection = (value: unknown): value is ResumeSection => {
  if (
    !isRecord(value)
    || typeof value.id !== 'string'
    || typeof value.title !== 'string'
    || !Array.isArray(value.items)
  ) {
    return false
  }

  switch (value.type) {
    case 'links':
      return value.items.every((item) => (
        isRecord(item)
        && typeof item.label === 'string'
        && typeof item.href === 'string'
        && (item.icon === undefined || typeof item.icon === 'string')
      ))

    case 'details':
      return value.items.every((item) => (
        isRecord(item)
        && typeof item.title === 'string'
        && isStringArray(item.lines)
      ))

    case 'text':
    case 'tags':
    case 'bullets':
      return isStringArray(value.items)

    case 'entries':
      return value.items.every((item) => {
        if (!isRecord(item) || typeof item.title !== 'string') {
          return false
        }

        const optionalStrings = ['logo', 'subtitle', 'meta', 'description']
        const hasValidStrings = optionalStrings.every((key) => (
          item[key] === undefined || typeof item[key] === 'string'
        ))
        const hasValidBullets = item.bullets === undefined || isStringArray(item.bullets)
        const hasValidGroups = item.groups === undefined || (
          Array.isArray(item.groups)
          && item.groups.every((group) => (
            isRecord(group)
            && (group.description === undefined || typeof group.description === 'string')
            && isStringArray(group.bullets)
          ))
        )

        return hasValidStrings && hasValidBullets && hasValidGroups
      })

    default:
      return false
  }
}

const isResumeData = (value: unknown): value is ResumeData => (
  isRecord(value)
  && isRecord(value.header)
  && typeof value.header.title === 'string'
  && (value.header.subtitle === undefined || typeof value.header.subtitle === 'string')
  && (value.header.description === undefined || typeof value.header.description === 'string')
  && isRecord(value.layout)
  && typeof value.layout.sidebarLabel === 'string'
  && Array.isArray(value.layout.sidebar)
  && value.layout.sidebar.every(isResumeSection)
  && Array.isArray(value.layout.main)
  && value.layout.main.every(isResumeSection)
)

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
              <div className="d-flex gap-xs">
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

const ResumeDocument = ({ resume }: { resume: ResumeData }) => {
  const { header, layout } = resume

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
  const [resume, setResume] = useState<ResumeData>(data)
  const [uploadError, setUploadError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const requestClose = useCallback(() => setIsClosing(true), [])

  const handleResumeUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    try {
      const uploadedData: unknown = JSON.parse(await file.text())

      if (!isResumeData(uploadedData)) {
        throw new Error('Formato inválido')
      }

      setResume(uploadedData)
      setUploadError('')
    } catch {
      setUploadError('Não foi possível carregar o JSON. Verifique se ele segue a estrutura do currículo.')
    } finally {
      event.target.value = ''
    }
  }

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
              aria-label="Carregar currículo por JSON"
              onClick={() => fileInputRef.current?.click()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" /><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" /></svg>
            </button>
            <input
              ref={fileInputRef}
              className="resume-modal-file-input"
              type="file"
              accept=".json,application/json"
              onChange={handleResumeUpload}
            />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        {uploadError && (
          <p className="resume-modal-error" role="alert">
            {uploadError}
          </p>
        )}

        <ResumeDocument resume={resume} />
      </div>
    </div>,
    document.body,
  )
}
