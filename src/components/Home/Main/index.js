import './styles.scss';

export default class Main {
    constructor(titulo, subtitulo) {
        this.titulo = titulo || 'Cargo Objetivo';
        this.subtitulo = subtitulo || 'Desafio e Nome da Empresa';
    }

    render() {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('main-container');

        const mainTitle = document.createElement('h2');
        mainTitle.classList.add('main-title');
        mainTitle.textContent = this.titulo;

        const subtitle = document.createElement('h3');
        subtitle.classList.add('subtitle');
        subtitle.textContent = this.subtitulo;

        mainContainer.appendChild(mainTitle);
        mainContainer.appendChild(subtitle);

        return mainContainer;
    }
}