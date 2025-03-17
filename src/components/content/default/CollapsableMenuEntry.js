import collapsableMenuStyles from '../../../storage/style/content/collapsableMenu.module.css';
import projectsMenuStyles from '../../../storage/style/content/projectsMenu.module.css';
import React from "react";

export default class CollapsableMenuEntry extends React.Component {
    constructor(props) {
        super(props);
        this.header = props.header;
        this.content = props.content;
        this.id = props.id;
        this.windowIdentifier = props.windowIdentifier;
        this.appUtils = props.appUtils;
        this.sectionName = props.sectionName;
    }

    render() {
        let className = `${collapsableMenuStyles.collapsableMenuEntry} ${projectsMenuStyles.titleSection}`;
        return (
            <li
                className={className}
                data-select={`collapsableMenu_${this.windowIdentifier}_${this.id}`}
                key={`collapsableMenu_${this.windowIdentifier}_${this.id}`}
                onClick={(e) => {
                    let activeId = this.appUtils.getActiveSectionId(this.sectionName);
                    let activeItem = document.querySelector(`.active[data-select="collapsableMenu_${this.windowIdentifier}_${activeId}"]`);

                    // Remove the current active item
                    if (activeItem)
                        activeItem.className = className;

                    // Toggle the active for the clicked item
                    if (activeId != this.id || !activeItem) {
                        this.appUtils.setActiveSectionId(this.sectionName, this.id);

                        let currentItem = document.querySelector(`[data-select="collapsableMenu_${this.windowIdentifier}_${this.id}"]`);
                        if (currentItem)
                            currentItem.className = `${className} active`;
                        else
                            log.error(`${this.id} collapsable menu entry not found!`);

                    }
                }}
            >
                <section className={collapsableMenuStyles.collapsableMenuHeader}>{this.header}</section>
                <section className={collapsableMenuStyles.collapsableMenuContent}>{this.content}</section>
            </li>
        );
    }
};