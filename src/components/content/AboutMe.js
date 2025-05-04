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
                        <span className={aboutStyles.dev}>Software developer</span>
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
                &nbsp; &nbsp; I'm a <i>software engineering enthusiast</i> with a studying background in <i>electrical engineering</i>, driven by curiosity about how things work. With a strong passion for programming and technology, I have worked on various projects and gained hands-on experience in <i>software development</i> through my work history.
            </p>
            <p>
                &nbsp; &nbsp; My current focus is on <i>embedded systems</i>, aiming to integrate my programming skills with my electrical engineering expertise at some point in the near future.
            </p>
            <p>
                &nbsp; &nbsp; Beyond coding, I enjoy exploring creative problem-solving through game development and continuously expanding my technical knowledge.
            </p>
        </>
    }
};