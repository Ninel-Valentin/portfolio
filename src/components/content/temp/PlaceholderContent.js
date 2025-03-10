import React from "react";

import workingStyles from '../../../storage/style/content/working.module.css';

export default class PlaceholderContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1 className={workingStyles.title}> This page is not cooked completely 🍳 <br /> Come back some other time! 👨‍🍳</h1>
    }
}