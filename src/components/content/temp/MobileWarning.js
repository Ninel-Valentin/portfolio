import React from "react";

import mobileWarningStyles from "../../../storage/style/content/temp/mobileWarning.module.css";

export default class MobileWarning extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className={mobileWarningStyles.container}>
                    <h2 className={mobileWarningStyles.title}>Houston, We Have a Tiny Screen!</h2>
                    <p className={mobileWarningStyles.text}>
                        Looks like you're trying to navigate this site on a mobile device.
                        <br />
                        That's like trying to eat spaghetti with a spoon!
                    </p>
                    <p className={mobileWarningStyles.text}>
                        For the best experience, switch to a desktop or laptop. Or come back at a later date, when the site will be fully optimized for mobile.
                    </p>
                    <p className={mobileWarningStyles.text}>
                        Thank you for your understanding!
                    </p>
                </section>
            </>
        );
    }
}