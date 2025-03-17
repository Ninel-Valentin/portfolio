import React from 'react';

import collapsableMenuStyles from '../../storage/style/content/collapsableMenu.module.css';
import historyMenuStyles from '../../storage/style/content/historyMenu.module.css'

import achivementsData from '../../storage/data/achivements.json';
import CollapsableMenu from './default/CollapsableMenu';
import CollapsableMenuEntry from './default/CollapsableMenuEntry';
import Consts from '../../storage/scripts/utils/Consts';
import reactUtils from '../../storage/scripts/utils/reactUtils';

export default class Achivements extends React.Component {
    constructor(props) {
        super(props);

        this.appUtils = props.appUtils;
        this.data = achivementsData;
    }

    render() {
        let entries = this.generateEntries();
        return <CollapsableMenu
            entries={entries}
        />;
    }

    generateEntries() {
        return this.data.entries.map((entry, i) => {
            let [header, content] = this.generateMenu(entry, i);
            return <CollapsableMenuEntry
                windowIdentifier={'achivements'}
                appUtils={this.appUtils}
                key={`Achivements_CollapsableMenuEntry_${i}`}
                id={entry.id}
                header={header}
                content={content}
                sectionName={Consts.applications.foldable.achivements}
            />;
        })
    }

    generateMenu(entry, i) {
        let header = this.createHeader(entry, i);
        let content = this.createContent(entry);

        return [header, content];
    }

    createHeader(entry, i) {
        const isOdd = i % 2;
        return <>
            <div className={collapsableMenuStyles.titleSection}>
                <section>
                    <div>
                        <h2 className={`${collapsableMenuStyles.title} inline`}>{entry.title}</h2>
                        &nbsp; - &nbsp;
                        <span className="inline">{entry.type}</span>
                    </div>
                    <span>{entry.date}</span>
                </section>
                <section className={historyMenuStyles.headerSection}>
                    <img className={historyMenuStyles.companyLogo} src={reactUtils.loadCompanyLogo(entry.logo)} />
                    <p className={historyMenuStyles.companyName}>{entry.company}</p>
                </section>
            </div>
            {reactUtils.loadSVGWave(false, collapsableMenuStyles.wave)}
        </>;
    }

    createContent(entry) {
        return <>
            {reactUtils.loadSVGWave(true, collapsableMenuStyles.wave)}
            <div className={collapsableMenuStyles.contentBody}>
                <h2 className={collapsableMenuStyles.subtitle}>Certified by:</h2>
                <a className={collapsableMenuStyles.link}
                    href={entry.link}>
                    {entry.certifier}
                </a>
            </div>
            {/* Certified through platform X + load platform */}
        </>;
    }
};