#Biblioteca de clases para colecciones de enteros
#CONJUNTO DE ELEMENTOS DESORDENADOS, NO REPETIDOS
class Conjunto: 
    def __init__(self):
        self.elementos = set()

    def agregar(self, elemento):
        self.elementos.add(elemento)

    def mostrar(self):
        return self.elementos

# Ejemplo de uso
conjunto = Conjunto()
conjunto.agregar(1)
conjunto.agregar(2)
conjunto.agregar(1)  # No se repite
print(conjunto.mostrar())  # {1, 2}


#CONJUNTO ORDENADO
class ConjuntoOrdenado:
    def __init__(self):
        self.elementos = set()

    def agregar(self, elemento):
        self.elementos.add(elemento)

    def mostrar(self):
        return sorted(self.elementos)

# Ejemplo de uso
conjunto_ordenado = ConjuntoOrdenado()
conjunto_ordenado.agregar(3)
conjunto_ordenado.agregar(1)
conjunto_ordenado.agregar(2)
print(conjunto_ordenado.mostrar())  # [1, 2, 3]


#LISTA, ELEMENTOS REPETIDOS
class Lista:
    def __init__(self):
        self.elementos = []

    def agregar(self, elemento):
        self.elementos.append(elemento)

    def mostrar(self):
        return self.elementos

# Ejemplo de uso
lista = Lista()
lista.agregar(1)
lista.agregar(2)
lista.agregar(1)
print(lista.mostrar())  # [1, 2, 1]


#LISTA ORDENADA
class ListaOrdenada:
    def __init__(self):
        self.elementos = []

    def agregar(self, elemento):
        self.elementos.append(elemento)
        self.elementos.sort()

    def mostrar(self):
        return self.elementos

# Ejemplo de uso
lista_ordenada = ListaOrdenada()
lista_ordenada.agregar(3)
lista_ordenada.agregar(1)
lista_ordenada.agregar(2)
print(lista_ordenada.mostrar())  # [1, 2, 3]


#VECTOR DINÁMICO
class VectorDinamico:
    def __init__(self):
        self.elementos = []

    def agregar(self, elemento):
        self.elementos.append(elemento)

    def obtener(self, indice):
        if indice < len(self.elementos):
            return self.elementos[indice]
        return None

# Ejemplo de uso
vector = VectorDinamico()
vector.agregar(5)
vector.agregar(10)
print(vector.obtener(0))  # 5


#PILA (STACK)
class Pila:
    def __init__(self):
        self.elementos = []

    def apilar(self, elemento):
        self.elementos.append(elemento)

    def desapilar(self):
        if self.elementos:
            return self.elementos.pop()
        return None

# Ejemplo de uso
pila = Pila()
pila.apilar(1)
pila.apilar(2)
print(pila.desapilar())  # 2


#COLA
class Cola:
    def __init__(self):
        self.elementos = []

    def encolar(self, elemento):
        self.elementos.append(elemento)

    def desencolar(self):
        if self.elementos:
            return self.elementos.pop(0)
        return None

# Ejemplo de uso
cola = Cola()
cola.encolar(1)
cola.encolar(2)
print(cola.desencolar())  # 1
