import resumeData from './resume.json'
import './index.scss'

type ResumeData = typeof resumeData
type SkillGroupKey = keyof ResumeData['skills']

const mainSkillGroups: SkillGroupKey[] = ['languages', 'frameworks', 'styling', 'state_management', 'testing']
const knowledgeSkillGroups: SkillGroupKey[] = ['knowledge', 'tools']

const formatEducationDate = (education: ResumeData['education'][number]) => {
  if ('expected_completion' in education && education.expected_completion) {
    const [year, month] = education.expected_completion.split('-')
    return `Conclusão prevista: ${new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(Number(year), Number(month) - 1))}`
  }

  return education.year
}

const formatPeriod = (period: ResumeData['experience'][number]['period']) => (
  `${period.start} - ${period.end}`
)

export const Resume = () => {
  const { candidate, contact, languages, education, skills, experience } = resumeData
  const mainSkills = mainSkillGroups.flatMap((group) => skills[group])
  const knowledgeSkills = knowledgeSkillGroups.flatMap((group) => skills[group])

  return (
    <main className="resume-page">
      <div className="resume-actions">
        <button type="button" onClick={() => window.print()}>
          Baixar PDF
        </button>
        <span>Use o destino "Salvar como PDF" na janela de impressão.</span>
      </div>

      <article className="resume-document">
        <header className="resume-header">
          <h1>{candidate.name}</h1>
          <h2>{candidate.headline}</h2>
          <p>{candidate.summary}</p>
        </header>

        <div className="resume-layout">
          <aside className="resume-sidebar" aria-label="Informações complementares">
            <section className="resume-block">
              <h3>Contato</h3>
              <address className="resume-contact" aria-label="Contato">
                <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
                  <span>in</span>
                  {contact.linkedin}
                </a>
                <a href={`https://${contact.portfolio}`} target="_blank" rel="noreferrer">
                  <span>⌾</span>
                  {contact.portfolio}
                </a>
                <a href={`mailto:${contact.email}`}>
                  <span>□</span>
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>
                  <span>▯</span>
                  {contact.phone}
                </a>
              </address>
            </section>

            <section className="resume-block">
              <h3>Formação</h3>
              <div className="resume-compact-list">
                {education.map((item) => (
                  <article key={`${item.institution}-${item.degree}`}>
                    <h4>{item.degree}</h4>
                    <p>{item.institution}</p>
                    <span>{formatEducationDate(item)}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <h3>Idioma</h3>
              <div className="resume-language-list">
                {languages.map((language) => (
                  <p key={language.name}>{language.name} {language.level.toLowerCase()}</p>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <h3>Linguagens/frameworks/libs</h3>
              <div className="resume-tags">
                {mainSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <h3>Conhecimentos/ferramentas</h3>
              <div className="resume-tags">
                {knowledgeSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>
          </aside>

          <div className="resume-main">
            <section className="resume-block">
              <h3>Experiência profissional</h3>
              <div className="resume-experience-list">
                {experience.map((job) => (
                  <article className="resume-job" key={`${job.company}-${job.period.start}`}>
                    <header>
                      <div>
                        <h4>{job.role}</h4>
                        <strong>{job.company}</strong>
                      </div>
                      <span>{formatPeriod(job.period)}{job.duration ? ` • ${job.duration}` : ''}</span>
                    </header>

                    <p className="resume-industry">{job.industry}</p>
                    <p className="resume-technologies">{job.technologies.join(', ')}</p>

                    <ul>
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
