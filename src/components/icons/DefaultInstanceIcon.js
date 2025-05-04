import React from 'react';

import styles from '../../storage/style/icons/appIcons.module.css'
import reactUtils from '../../storage/scripts/utils/reactUtils';
import Consts from '../../storage/scripts/utils/Consts';

export default class DefaultInstanceIcon extends React.Component {
    constructor(props) {
        super(props)

        this.name = props.name;
        this.src = props.src || null;
        this.href = props.href || null;

        this.localDocument = this.src == Consts.applications.type["localDocument"];
        this.className = props.className;

        /**
         * Apps render by default but don't open new browser windows
         * If it has a redirecting behaviour, it will not render anything anymore
         * Unless a src is added as well
         * 
         * This is all overwritten with the default values if it is a localDocument render
         */
        this.shouldRender = true;
        this.shouldRedirect = false;

        if (!this.localDocument) {
            if (this.href) {
                this.shouldRender = false;
                this.shouldRedirect = true;
            }

            if (this.src)
                this.shouldRender = true;
        }

        this.appUtils = props.appUtils;
    }

    render() {
        const mainClass = this.localDocument ? this.className : styles.windowIcon;
        return (<>
            <section
                className={`${mainClass} unselectable`}
                onClick={(e) => {
                    if (this.shouldRender)
                        this.appUtils.enableWindowInstance(this.name, this.constructorName, this.src, this.localDocument)
                    if (this.shouldRedirect)
                        window.open(this.href);
                }}
            >
                {reactUtils.loadDisplayIcon(this.localDocument ? this.src : this.name)}
                {!this.localDocument && this.loadIconTitle()}
            </section>
        </>);
    }

    loadIconTitle() {
        return <p> <span>{Consts.applications.title[this.name]}</span> </p>;
    }
};