import React from "react";

import workingStyles from '../../../storage/style/content/working.module.css';

export default class PlaceholderContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1 className={workingStyles.title}>Something went wrong or I'm still working on this, sorry... <br /> Come back later! 😓</h1>
    }
}