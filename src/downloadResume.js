const RESUME_LINK = "https://firebasestorage.googleapis.com/v0/b/portfolio-284cf.appspot.com/o/Resume_web.pdf?alt=media&token=2ae2a18e-e83c-4f2a-b48a-80bf74d034a7";

export const downloadResume = () => (
    window.open(
        RESUME_LINK,
        "_blank"
    )
);