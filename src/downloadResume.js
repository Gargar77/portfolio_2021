const RESUME_LINK = "https://firebasestorage.googleapis.com/v0/b/portfolio-284cf.appspot.com/o/Resume_web.pdf?alt=media&token=06fa4051-3c93-41a1-9635-5bed702b0cef";

export const downloadResume = () => (
    window.open(
        RESUME_LINK,
        "_blank"
    )
);