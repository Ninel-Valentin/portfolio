import reactUtils from '../../storage/scripts/utils/reactUtils.js';
import styles from '../../storage/style/instance/appWindow.module.css'
import DefaultInstanceWindow from './DefaultInstanceWindow.js';

export default class AppInstanceWindow extends DefaultInstanceWindow {
    constructor(props) {
        super(props);

        this.appUtils = props.appUtils;
        this.name = props.name;
        this.src = props.src;
        this.loadContent = this.loadContent.bind(this);
    }

    render() {
        return <DefaultInstanceWindow
            {...this.props}
            loadContent={this.loadContent}
        />
    }

    loadContent = () => {
        return reactUtils.loadApplicationContent(this.name, this.appUtils, this.src);
    }
}

