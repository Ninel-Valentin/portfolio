import DefaultInstanceIcon from './DefaultInstanceIcon';

export default class AppInstanceIcon extends DefaultInstanceIcon {
    constructor(props) {
        super(props)
        this.constructorName = this.constructor.name;
    }
};