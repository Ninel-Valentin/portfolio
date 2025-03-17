import React from 'react';

import welcomeStyles from '../storage/style/welcomeMessage.module.css';

import ApplyTypingAnimation from '../storage/scripts/screen/helloMsgAnimation.js';
import { setCookie } from '../storage/scripts/CookieManager.js';

export default class WelcomeMessage extends React.Component {
    constructor(props) {
        super(props);

        this.forceUpdateScreen = props.forceUpdateScreen;
    }

    componentDidMount() {
        ApplyTypingAnimation();
        window.onclick = () => { this.disableMessage() };
        window.onkeydown = () => { this.disableMessage() };
    }

    render() {
        return (<>
            <p
                data-select="welcomeMsg"
                className={welcomeStyles.welcomeP}
                id={welcomeStyles.welcomeMsg}>
                &gt;&gt;
                <span data-select="targetMsg"></span>
                <span id={welcomeStyles.underscore}>_</span>
            </p>
            <p
                data-select="continueMsg"
                className={welcomeStyles.welcomeP}
                id={welcomeStyles.continueMsg}>
                Press any button to continue...
            </p>
        </>);
    }

    disableMessage() {
        let expiringDay = new Date();
        expiringDay.setMonth(expiringDay.getMonth() + 1)
        expiringDay = new Date(expiringDay).toUTCString();
        setCookie('welcomeMessage', 'true', expiringDay)

        // Remove the event
        window.onclick = '';
        // TODO: verify this in a text input;
        window.onkeydown = '';


        this.forceUpdateScreen();
    }
};
