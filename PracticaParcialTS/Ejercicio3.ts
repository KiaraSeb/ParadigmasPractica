// Clase abstracta que representa un elemento JSON
abstract class JsonElement {
    abstract toJSON(): string;
}

// Clase para representar un valor de cadena en JSON
class JsonString extends JsonElement {
    constructor(private value: string) {
        super();
    }

    toJSON(): string {
        return `"${this.value}"`;  // Se escapa con comillas dobles
    }
}

// Clase para representar un objeto en JSON
class JsonObject extends JsonElement {
    private attributes: { [key: string]: JsonElement } = {};

    // Método para agregar un atributo al objeto
    addAttribute(key: string, value: JsonElement): void {
        this.attributes[key] = value;
    }

    toJSON(): string {
        const attributesAsString = Object.entries(this.attributes)
            .map(([key, value]) => `"${key}": ${value.toJSON()}`)
            .join(", ");
        return `{${attributesAsString}}`;
    }
}

// Clase para representar un arreglo en JSON
class JsonArray extends JsonElement {
    private elements: JsonElement[] = [];

    // Método para agregar un elemento al arreglo
    addElement(element: JsonElement): void {
        this.elements.push(element);
    }

    toJSON(): string {
        const elementsAsString = this.elements.map(e => e.toJSON()).join(", ");
        return `[${elementsAsString}]`;
    }
}

// Ejemplo de uso
const company = new JsonObject();
company.addAttribute("company", new JsonString("Example"));

const employees = new JsonArray();

const employee1 = new JsonObject();
employee1.addAttribute("firstName", new JsonString("John"));
employee1.addAttribute("lastName", new JsonString("Doe"));
employees.addElement(employee1);

const employee2 = new JsonObject();
employee2.addAttribute("firstName", new JsonString("Anna"));
employee2.addAttribute("lastName", new JsonString("Smith"));
employees.addElement(employee2);

const employee3 = new JsonObject();
employee3.addAttribute("firstName", new JsonString("Peter"));
employee3.addAttribute("lastName", new JsonString("Jones"));
employees.addElement(employee3);

company.addAttribute("employees", employees);

// Imprimir el JSON generado
console.log(company.toJSON());
