import React from 'react';

import aboutStyles from '../../storage/style/content/about.module.css';

import reactUtils from '../../storage/scripts/utils/reactUtils';

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);

        this.appUtils = props.appUtils;

    }

    render() {
        return (<>
            <section className={aboutStyles.headerSection}>
                {this.loadDescription()}
            </section>
            <section className={aboutStyles.contentSection}>
                {this.loadContent()}
            </section>
        </>);
    }

    loadDescription() {
        return <>
            <div className={aboutStyles.descriptionSection}>
                <h1 className={aboutStyles.title}>
                    I'm <i>Ninel</i> <b>Bănică</b>
                </h1>
                <ul className={aboutStyles.descriptionList}>
                    <li>
                        <span className={aboutStyles.student}>Student</span>
                    </li>
                    <li>
                        <span className={aboutStyles.softwareEng}>Software Engineer</span>
                    </li>
                    <li>
                        <span className={aboutStyles.embeddedSysEng}>Embedded Systems Engineer</span>
                    </li>
                    <li>
                        <span className={aboutStyles.spaceEnth}>Space enthusiast 🚀</span>
                    </li>
                    <li>
                        <span className={aboutStyles.others}>and lots of other things...</span>
                    </li>
                </ul>
            </div>
            <div className={aboutStyles.imageBlock}>
                <img className={aboutStyles.profileImage} src={reactUtils.loadProfileImage()} />
                <div className={aboutStyles.imageBackground} />
                <div className={aboutStyles.imageBackground} />
            </div>
        </>;
    }

    loadContent() {
        return <>
            <h2 className={aboutStyles.contentTitle}>More about myself</h2>
            <p>
                <p>&nbsp; &nbsp; An <i>embedded systems enthusiast</i> with a studying background in <i>electrical engineering</i> and working expertise in <i>software development</i>, driven by curiosity about how things work.</p>
                <p>&nbsp; &nbsp; With a strong passion for technology, I have worked on various projects and gained hands-on experience in <i>embedded systems</i> and <i>software development</i> through my work history.</p>
            </p>
        </>
    }
};