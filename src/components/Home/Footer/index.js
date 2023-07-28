import './styles.scss';

export default class Footer {
    constructor(instagram, linkedin, github) {
        this.instagramLink = `https://www.instagram.com/${instagram}` || 'https://www.instagram.com';
        this.linkedinLink = `https://www.linkedin.com/${linkedin}` || 'https://www.linkedin.com';
        this.githubLink = `https://www.github.com/${github}` || 'https://www.github.com';
    }

    render() {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('footer-container');
        footerContainer.innerHTML =
        `
        <ul>
            <li><a href=${this.instagramLink}><img src="/src/assets/images/instagram.svg"></a></li>
            <li><a href=${this.linkedinLink}><img src="/src/assets/images/linkedin.svg"></a></li>
            <li><a href=${this.githubLink}><img src="/src/assets/images/github.svg"></a></li>
        </ul>
        `

        return footerContainer;
    }
}