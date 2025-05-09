import React from 'react';

import Consts from './Consts';

//#region Icons
import { ReactComponent as MailIcon } from '../../svg/mail.svg';
import { ReactComponent as LinkedInIcon } from '../../svg/linkedin.svg';
import { ReactComponent as SettingsIcon } from '../../svg/settings.svg';
import { ReactComponent as RecycleBinIcon } from '../../svg/trash.svg';
import { ReactComponent as ProjectsIcon } from '../../svg/projects.svg';
import { ReactComponent as HistoryIcon } from '../../svg/history.svg';
import { ReactComponent as AchivementsIcon } from '../../svg/achivements.svg';
import { ReactComponent as ResumeIcon } from '../../svg/resume.svg';
import { ReactComponent as InfoIcon } from '../../svg/info.svg';
import { ReactComponent as Directory } from '../../svg/directory.svg';
import { ReactComponent as WebIcon } from '../../svg/web.svg';
import { ReactComponent as GithubIcon } from '../../svg/github.svg';
import { ReactComponent as GithubOriginalIcon } from '../../svg/github_original.svg';
import { ReactComponent as DocumentIcon } from '../../svg/document.svg';
//#endregion Icons

//#region Waves
import { ReactComponent as Wave01 } from '../../svg/wave/wave01.svg';
import { ReactComponent as Wave02 } from '../../svg/wave/wave02.svg';
import { ReactComponent as Wave03 } from '../../svg/wave/wave03.svg';
import { ReactComponent as Wave04 } from '../../svg/wave/wave04.svg';
import { ReactComponent as Wave05 } from '../../svg/wave/wave05.svg';
import { ReactComponent as Wave06 } from '../../svg/wave/wave06.svg';
import { ReactComponent as Wave07 } from '../../svg/wave/wave07.svg';
import { ReactComponent as Wave08 } from '../../svg/wave/wave08.svg';
import { ReactComponent as Wave09 } from '../../svg/wave/wave09.svg';
import { ReactComponent as Wave10 } from '../../svg/wave/wave10.svg';
//#endregion Waves

//#region Logos
import SiemensLogo from '../../img/logo/siemens.png';
import CSLogo from '../../img/logo/channelsight.png';
import MCLogo from '../../img/logo/mcdonalds.png';
import ProfiLogo from '../../img/logo/profi.png';
import AWSLogo from '../../img/logo/aws.png';
//#endregion Logos

//#region Components
import PlaceholderContent from '../../../components/content/temp/PlaceholderContent.js';

import History from '../../../components/content/History.js';
import AppInstanceIcon from '../../../components/icons/AppInstanceIcon.js';
import Projects from '../../../components/content/Projects.js';
import AboutMe from '../../../components/content/AboutMe.js';
import Resume from '../../../components/content/Resume.js';
//#endregion Components

//#region Files
import resumeFile from '../../documents/resume.pdf';
import pathfinderCppFile from '../../documents/pathfinderCpp.pdf';
//#endregion Files

import ProfileImage from '../../img/profile/profile.jpeg';
import Achivements from '../../../components/content/Achivements.js';

export default class reactUtils {

    static loadDisplayIcon(name) {
        switch (Consts.applications.type[name]) {
            case Consts.applications.type["linkedin"]:
                return <LinkedInIcon />
            case Consts.applications.type["projects"]:
                return <ProjectsIcon />
            case Consts.applications.type["history"]:
                return <HistoryIcon />
            case Consts.applications.type["achivements"]:
                return <AchivementsIcon />
            case Consts.applications.type["resume"]:
                return <ResumeIcon />
            case Consts.applications.type["about"]:
                return <InfoIcon />
            case Consts.applications.type["mail"]:
                return <MailIcon />
            // case Consts.applications.type["settings"]:
            //     return <SettingsIcon />
            // case Consts.applications.type["recycle bin"]:
            //     return <RecycleBinIcon />
            case Consts.applications.type["github"]:
                return <GithubOriginalIcon />
            case Consts.applications.type["directory"]:
                return <Directory />

            case Consts.applications.type["localDocument"]:
                return <DocumentIcon />
            default:
                return;
        }
    }

    static loadDirectoryContent(name, appUtils) {
        switch (Consts.applications.name[name]) {
            case Consts.applications.name["social"]:
                return (<>
                    <AppInstanceIcon
                        appUtils={appUtils}
                        name="linkedin"
                        href="https://www.linkedin.com/in/ninel-valentin-banica/" />
                    <AppInstanceIcon
                        appUtils={appUtils}
                        name="github"
                        href="https://github.com/Ninel-Valentin" />
                    <AppInstanceIcon
                        appUtils={appUtils}
                        name="mail" 
                        href="mailto:valentinbanica8@gmail.com" />
                </>);
            default:
                return;
        }
    }

    static loadApplicationContent(name, appUtils, src = null) {
        if (src == Consts.applications.type["localDocument"])
            return <Resume
                name={name}
            />;

        switch (Consts.applications.name[name]) {
            case Consts.applications.name["history"]:
                return <History
                    key={`historyMenu_${name}`}
                    appUtils={appUtils} />;
            case Consts.applications.name["projects"]:
                return <Projects
                    appUtils={appUtils} />;
            case Consts.applications.name["about"]:
                return <AboutMe
                    appUtils={appUtils} />;
            case Consts.applications.name["resume"]:
                return <Resume
                    name={name}
                    downloadName={Consts.applications.documentName["resume"]}
                />;
            case Consts.applications.name["achivements"]:
                return <Achivements
                    appUtils={appUtils} />;
            default:
                return <PlaceholderContent />;
        }
    }

    static loadCompanyLogo(name) {
        switch (name) {
            case 'siemens':
                return SiemensLogo;
            case 'channelsight':
                return CSLogo;
            case 'aws':
                return AWSLogo;
        }
    }

    static loadProfileImage() {
        return ProfileImage;
    }

    static loadWebIcon() {
        return <WebIcon />;
    }

    static loadSVGWave(flipped, waveClass) {
        const waves = [
            <Wave01 />,
            <Wave02 />,
            <Wave03 />,
            <Wave04 />,
            <Wave05 />,
            <Wave06 />,
            <Wave07 />,
            <Wave08 />,
            <Wave09 />,
            <Wave10 />
        ];
        let randomIndex = Math.floor(Math.random() * waves.length);
        let attributes = {
            className: waveClass
        };

        if (flipped)
            attributes.className += ' flipped';


        return <div {...attributes}>
            {waves[randomIndex]}
        </div>;
    }

    static loadProjectGitHubLink() {
        return <GithubIcon />;
    }

    static loadProjectGithubDoc() {
        return <DocumentIcon />;
    }

    static loadDocumentFile(name) {
        switch (Consts.applications.document[name]) {
            case Consts.applications.document["resume"]:
                return resumeFile;
            case Consts.applications.document["pathfinderCpp"]:
                return pathfinderCppFile;
        }
    }
}