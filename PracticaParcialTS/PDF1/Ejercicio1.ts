// Clase abstracta base para cualquier Tag
abstract class Tag {
    abstract render(): string;
}

// Clase para el tag <body>
class BodyTag extends Tag {
    private elementos: Tag[] = [];

    // Método para agregar tags dentro del body
    agregarElemento(tag: Tag): void {
        this.elementos.push(tag);
    }

    render(): string {
        // Renderiza el tag <body> y todos los elementos que contiene
        const contenido = this.elementos.map(tag => tag.render()).join("\n");
        return `<body>\n${contenido}\n</body>`;
    }
}

// Clase para el tag <p> (parrafo)
class PTag extends Tag {
    constructor(private texto: string) {
        super();
    }

    render(): string {
        return `<p>${this.texto}</p>`;
    }
}

// Clase para el tag <img> (imagen)
class ImgTag extends Tag {
    constructor(private href: string) {
        super();
    }

    render(): string {
        return `<img src="${this.href}" />`;
    }
}

// Clase para el tag <a> (link)
class ATag extends Tag {
    constructor(private href: string, private texto: string) {
        super();
    }

    render(): string {
        return `<a href="${this.href}">${this.texto}</a>`;
    }
}

// Ejemplo de uso

// Crear el tag body
const body = new BodyTag();

// Agregar un párrafo dentro del body
body.agregarElemento(new PTag("Este es el examen de poo"));

// Agregar una imagen dentro del body
body.agregarElemento(new ImgTag("nombreDeUnaImg.jpg"));

// Agregar otro párrafo
body.agregarElemento(new PTag("Espero que hayas estudiado"));

// Agregar un enlace
body.agregarElemento(new ATag("http://unlink.html", "texto del link"));

// Generar el HTML completo
const html = body.render();
console.log(html);
