import re

def recortar_enlace(link):
    # Definir la expresión regular para encontrar la parte entre "/d/" y "/view"
    patron = r'/d/(.*?)/view'

    # Buscar la coincidencia en el enlace proporcionado
    resultado = re.search(patron, link)

    # Verificar si se encontró una coincidencia
    if resultado:
        # Devolver la parte recortada del enlace
        return resultado.group(1)
    else:
        # En caso de no encontrar una coincidencia, devolver None
        return None

print("Ingrese enlace:")
enlace = input()
parte_recortada = recortar_enlace(enlace)

if parte_recortada:
    print("Parte recortada del enlace:", parte_recortada)
else:
    print("No se encontró la parte deseada en el enlace.")
