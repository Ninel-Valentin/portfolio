import React from "react";

import resumeStyle from '../../storage/style/content/resume.module.css';
import reactUtils from "../../storage/scripts/utils/reactUtils";
import Consts from "../../storage/scripts/utils/Consts";

export default class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.downloadName = props.downloadName;
        this.name = props.name;
        this.documentFile = reactUtils.loadDocumentFile(this.name);
    }

    render() {
        return <>
            {this.downloadName && this.loadDownloadSection()}
            <section className={resumeStyle.resumeSection}>
                <iframe src={this.documentFile}></iframe>
            </section>
        </>;
    }

    loadDownloadSection() {
        return <section className={resumeStyle.resumeSection}>
            <a className={resumeStyle.resumeLink}
                href={this.documentFile}
                download={this.downloadName}
            > Download document </a>
        </section>;
    }
}