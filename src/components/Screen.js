import React from 'react';

import styles from '../storage/style/screen.module.css';

import { getCookie } from '../storage/scripts/CookieManager.js';
import Consts from '../storage/scripts/utils/Consts.js';

import WelcomeMessage from './WelcomeMessage.js';
import DesktopSystem from './DesktopSystem.js';
import MobileWarning from './content/temp/MobileWarning.js';

export default class Screen extends React.Component {
    constructor(props) {
        super(props)

        this.appUtils = props.appUtils;
        this.forceUpdateScreen = this.forceUpdateScreen.bind(this);
    }

    forceUpdateScreen() {
        this.forceUpdate();
    }

    render() {
        return (<>
            <section
                id={styles.screen}
                onClick={(e) => {
                    this.appUtils.removeTaskbarContextMenu();
                    this.forceUpdateScreen();
                }}
            >
                {this.loadContent()}
            </section>
        </>);
    }

    loadContent() {
        if (this.shouldShowWelcomeMessage())
            return <WelcomeMessage
                deviceType={this.appUtils.getAppData().deviceType}
                forceUpdateScreen={this.forceUpdateScreen} />;

        if (this.appUtils.getAppData().deviceType == Consts.deviceType.Mobile)
            return <MobileWarning />;

        return <DesktopSystem appUtils={this.appUtils} />;
    }

    shouldShowWelcomeMessage() {
        return getCookie('welcomeMessage') != 'true'
    }
};