//Framework para escribir HTML
// Clase base abstracta
abstract class Tag {
    abstract render(): string;
}

// Tag <body>
class BodyTag extends Tag {
    private elements: Tag[] = [];

    addElement(tag: Tag): void {
        this.elements.push(tag);
    }

    render(): string {
        return `<body>\n${this.elements.map(e => e.render()).join('\n')}\n</body>`;
    }
}

// Tag <p> (parrafo)
class PTag extends Tag {
    constructor(private text: string) {
        super();
    }

    render(): string {
        return `<p>${this.text}</p>`;
    }
}

// Tag <img> (imagen)
class ImgTag extends Tag {
    constructor(private src: string) {
        super();
    }

    render(): string {
        return `<img src="${this.src}" />`;
    }
}

// Tag <a> (link)
class ATag extends Tag {
    constructor(private href: string, private text: string) {
        super();
    }

    render(): string {
        return `<a href="${this.href}">${this.text}</a>`;
    }
}

// Ejemplo de uso
const body = new BodyTag();
body.addElement(new PTag("Este es el examen de poo"));
body.addElement(new ImgTag("nombreDeUnaImg.jpg"));
body.addElement(new PTag("Espero que hayas estudiado"));
body.addElement(new ATag("http://unlink.html", "texto del link"));

console.log(body.render());
