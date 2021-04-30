const RESUME_LINK = "https://firebasestorage.googleapis.com/v0/b/portfolio-284cf.appspot.com/o/Resume_web.pdf?alt=media&token=fd7e8ede-77c9-42cc-b92a-6b5e111254a6";

export const downloadResume = () => (
    window.open(
        RESUME_LINK,
        "_blank"
    )
);