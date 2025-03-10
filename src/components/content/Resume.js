import React from "react";

import resumeFile from '../../storage/data/resume.pdf';

import resumeStyle from '../../storage/style/content/resume.module.css';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <>
            <section className={resumeStyle.resumeSection}>
                <a
                    className={resumeStyle.resumeLink}
                    href={resumeFile}
                    download="Ninel-Valentin Bănică CV"
                > Download resume </a>
            </section>
            <section className={resumeStyle.resumeSection}>
                <iframe src={resumeFile}></iframe>
            </section>
        </>;
    }
}