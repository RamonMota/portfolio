import { useRef, useState } from "react"
import { ResumeModal } from "../../../pages/resume"
import { SocialMedia } from "../social-media"
import './index.scss'

export const HeaderMobile = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false)
    const resumeButtonRef = useRef<HTMLButtonElement>(null)

    const closeResume = () => {
        setIsResumeOpen(false)
        requestAnimationFrame(() => resumeButtonRef.current?.focus())
    }

    return (
        <>
            <div className='content-header'>
                <h1>
                    <button
                        ref={resumeButtonRef}
                        type="button"
                        onClick={() => setIsResumeOpen(true)}
                        aria-haspopup="dialog"
                        aria-expanded={isResumeOpen}
                    >
                        RAMON <b>MOTA</b>
                    </button>
                </h1>
                <div className='content-social'>
                    <SocialMedia />
                </div>
            </div>

            {isResumeOpen && <ResumeModal onClose={closeResume} />}
        </>
    )
}
