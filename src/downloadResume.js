const RESUME_LINK = "https://firebasestorage.googleapis.com/v0/b/portfolio-284cf.appspot.com/o/Resume_web.pdf?alt=media&token=c348f3eb-0160-4701-833a-4f677321244f";

export const downloadResume = () => (
    window.open(
        RESUME_LINK,
        "_blank"
    )
);