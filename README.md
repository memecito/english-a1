# English Quest

Juego web para practicar vocabulario y gramática de inglés (nivel Cambridge A2 Key), pensado como apoyo al libro de texto de la academia.

## Características

- **Vocabulario**: por letra, por temática (animales, comida, ropa, deporte, familia, casa, colores) o mezclado.
- **Repetición espaciada (sistema Leitner)**: cada palabra o frase tiene una revisión programada; el modo "Repaso" muestra lo que toca hoy.
- **Gramática**: 8 temas con ejercicios y teoría integrada — pronombres personales, pasado simple, adverbios de frecuencia y verbos irregulares agrupados en 5 lotes por dificultad.
- **Estudiar**: sección de solo lectura con la teoría de cada tema de gramática y el vocabulario navegable por bloques de 10 palabras.
- **Progreso**: puntos, niveles, racha de días jugados, insignias e historial de los últimos 14 días.
- **100% estático**: sin servidor, sin dependencias, sin conexión a internet necesaria.

## Cómo usarlo

Abre `index.html` directamente en el navegador. Funciona con `file://`, no hace falta instalar ni servir nada.

## Stack técnico

- HTML + CSS + JavaScript vanilla — sin frameworks ni dependencias de terceros.
- Estado y progreso guardados en `localStorage` del navegador (nada sale del dispositivo).
- El vocabulario se genera desde datos fuente con un script Python.

## Estructura del proyecto

```
index.html              Motor del juego: UI y lógica completas
words.js                 Vocabulario — GENERADO, no editar a mano
topics.js                 Teoría de gramática, por temas
grammar.js                 Ejercicios de gramática (frase con hueco)
data/translations.txt       Fuente de datos del vocabulario
tools/build_words.py         Genera words.js a partir de data/translations.txt
documents/                    Material de referencia y notas de extracción
```

## Desarrollo

Este proyecto sigue un patrón de diseño documentado y reutilizable para juegos de aprendizaje gamificados (principios pedagógicos, gamificación, arquitectura de datos/motor/generador). El contexto completo — convenciones, estado, próximos pasos — está en [`CLAUDE.md`](./CLAUDE.md).

Para regenerar el vocabulario tras editar `data/translations.txt`:

```bash
python3 tools/build_words.py
```

## Licencia y contenido

El vocabulario base está inspirado en la lista de referencia Cambridge A2 Key. El material del libro de texto de la academia (*Complete Key for Schools*, Cambridge University Press) no se distribuye en este repositorio por derechos de autor — solo se usa como fuente de consulta local.
