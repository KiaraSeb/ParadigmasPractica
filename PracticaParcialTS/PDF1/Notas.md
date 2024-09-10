Ejercicio 1
* Clase Base Tag: Es una clase abstracta que define el método render(), el cual es implementado por todas las clases que heredan de Tag.

* Clase BodyTag: Esta clase representa el tag <body>. Contiene otros tags que se agregan con el método agregarElemento(). Su método render() recorre todos los tags contenidos y genera el HTML correspondiente.

* Clases PTag, ImgTag, ATag: Estas clases representan los tags <p>, <img>, y <a> respectivamente. Cada una tiene los atributos necesarios (como el texto o el enlace) y un método render() que devuelve la representación HTML del tag.

* Uso del Framework: El ejemplo crea una página HTML con un body que contiene párrafos, una imagen y un enlace. Luego se imprime el HTML completo usando console.log.

Ejercicio 2
* Interfaz Secuencia: Define el método generarSecuencia() que las secuencias deben implementar. Este método genera una secuencia de números en la que falta uno (representado por null), y también devuelve el número faltante.

Clases Concretas para Secuencias:
* SecuenciaPares: Genera una secuencia de números pares con el tercer número faltante.
* SecuenciaImpares: Genera una secuencia de números impares con el tercer número faltante.
* SecuenciaFibonacci: Genera una secuencia de números de Fibonacci.
* SecuenciaMultiplosCinco: Genera una secuencia de múltiplos de 5.

Clase Juego:
Controla el juego, que consiste en generar una secuencia con un número faltante y pedirle al jugador que adivine ese número.
Si el jugador adivina correctamente, gana un punto. Si falla, pierde un punto.
El método jugar() muestra la secuencia con el número faltante representado por ? y pide al usuario que ingrese el número que falta.
Uso del Juego:

Ejercicio 3
* Clase Base JsonElement: Esta clase es abstracta y define el método toJSON(), que es implementado por todas las subclases. Esto permite que todos los elementos JSON puedan ser impresos de forma correcta.
* Clase JsonString: Representa un valor de cadena de texto en formato JSON. El método toJSON() devuelve el valor entre comillas dobles.
* Clase JsonObject: Representa un objeto JSON, que contiene pares clave-valor. El método addAttribute() permite agregar atributos, y el método toJSON() convierte estos pares en una cadena válida de JSON.
* Clase JsonArray: Representa un arreglo en JSON. Los elementos se agregan usando el método addElement(), y el método toJSON() los convierte en una cadena separada por comas.