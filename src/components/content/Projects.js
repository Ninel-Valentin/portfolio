import React from "react";

import collapsableMenuStyles from '../../storage/style/content/collapsableMenu.module.css';
import projectsMenuStyles from '../../storage/style/content/projectsMenu.module.css';

import projectsData from '../../storage/data/projects.json';
import CollapsableMenu from "./default/CollapsableMenu.js";
import CollapsableMenuEntry from "./default/CollapsableMenuEntry.js";

import reactUtils from "../../storage/scripts/utils/reactUtils.js";
import AppInstanceIcon from "../icons/AppInstanceIcon.js";
import Consts from "../../storage/scripts/utils/Consts.js";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.appUtils = props.appUtils;
        this.data = projectsData;
    }

    render() {
        let entries = this.generateEntries();
        return <CollapsableMenu
            entries={entries}
        />
    }

    generateEntries() {
        return this.data.entries.map((entry, i) => {
            let [header, content] = this.generateMenu(entry, i);
            return <CollapsableMenuEntry
                windowIdentifier={'projects'}
                appUtils={this.appUtils}
                key={`Projects_CollapsableMenuEntry_${i}`}
                id={entry.id}
                header={header}
                content={content}
                sectionName={Consts.applications.foldable.projects}
            />
        });
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
                    <h2 className={collapsableMenuStyles.title}> {entry.title} </h2>
                    <span>{entry.createdDate}</span>
                    <p> {entry.shortDescription} </p>
                </section>
                <section>
                    {entry.documentation && this.loadGithubDoc(entry, isOdd)}
                    {entry.link && this.loadGithubLink(entry, isOdd)}
                    {entry.repository && this.loadGithubRepo(entry, isOdd)}
                </section>
            </div>
            {reactUtils.loadSVGWave(false, collapsableMenuStyles.wave)}
        </>;
    }

    loadGithubDoc(entry, isOdd) {
        return <AppInstanceIcon
            className={`${projectsMenuStyles.githubLink} ${isOdd ? projectsMenuStyles.odd : projectsMenuStyles.even}`}
            appUtils={this.appUtils}
            name={entry.documentation}
            src={Consts.applications.type["localDocument"]} />
    }

    loadGithubLink(entry, isOdd) {
        return <a
            className={`${projectsMenuStyles.githubLink} ${isOdd ? projectsMenuStyles.odd : projectsMenuStyles.even}`}
            href={entry.link} target="_blank">
            {reactUtils.loadWebIcon()}
        </a>;
    }

    loadGithubRepo(entry, isOdd) {
        return <a
            className={`${projectsMenuStyles.githubLink} ${isOdd ? projectsMenuStyles.odd : projectsMenuStyles.even}`}
            href={entry.repository} target="_blank">
            {reactUtils.loadProjectGitHubLink()}
        </a>;
    }

    createContent(entry) {
        return <>
            {reactUtils.loadSVGWave(true, collapsableMenuStyles.wave)}
            <div className={collapsableMenuStyles.contentBody}>
                <h3>Description:</h3>
                {entry.description.map((description, i) => {
                    if (typeof (description) == typeof ({}))
                        return <div key={`description_${i}`}>
                            <p key={`description_title_${i}`}>
                                ◐&nbsp;{description.title}
                            </p>
                            <ol key={`description_list_${i}`}>
                                {description.content.map((contentItem, j) =>
                                    <li key={`description_${i}_contentItem_${j}`}>{contentItem}</li>
                                )}
                            </ol>
                        </div>;
                    else
                        return <p key={`description_${i}`}>◐&nbsp;{description}</p>;
                })}
                <div className={collapsableMenuStyles.splitContent}>
                    <div>
                        <h3>Technologies:</h3>
                        <section
                            className={projectsMenuStyles.gridSection}
                            style={{
                                gridTemplateColumns: `repeat(${Math.ceil(entry.technologies.length / 3)}, minmax(100px, 1fr))`
                            }}>
                            {entry.technologies.map((technology, i) => {
                                return <p key={`technologies_${i}`}>↪&nbsp;<span
                                    key={`span_technologies_${i}`}
                                    className={collapsableMenuStyles.highlightedSpan}>{technology}</span>&nbsp;↩</p>
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </>
    }
}