# Guía de la Herramienta Tints and Shades Generator

## ¿Qué es Tints and Shades Generator?

**Tints and Shades Generator** es una herramienta web que genera automáticamente hermosas variaciones de color a partir de un solo color base.

**Tints (matices)** se refieren a colores más claros creados mezclando el color original con blanco. **Shades (sombras)** se refieren a colores más oscuros creados mezclando el color original con negro.

Con esta herramienta, los diseñadores y desarrolladores ya no necesitan ajustar colores manualmente uno por uno. Puedes crear instantáneamente paletas de colores unificadas y hermosas. Es una herramienta práctica que puede usarse en varios escenarios como diseño web, diseño de UI y desarrollo de colores de marca.

## ¿Por qué se creó esta herramienta?

¿Alguna vez has pensado mientras diseñas: "Este color es bonito, pero me gustaría una versión un poco más clara" o "También quiero crear una versión más oscura"?

**Tints and Shades Generator** nació de estos desafíos comunes de diseño. Crear gradientes naturales y hermosos instantáneamente a partir de un solo color: esa es la razón por la que existe esta herramienta.

## ¿Cuándo usarla?

### Al crear sitios web o aplicaciones

"He decidido el color principal, pero pensar en colores hover para botones, colores de fondo, colores de texto... es abrumador"
→ Obtén un conjunto completo de colores unificados a partir de un solo color

### Al usar TailwindCSS

"Quiero definir colores personalizados, pero ¿pensar en todas las escalas del 50 al 950?"
→ La pestaña "✨Tailwind" crea escalas de color listas para usar al instante

### Al decidir colores de marca

"He decidido el color del logo, pero necesito variaciones de color para todo el sitio"
→ Obtén opciones de color ricas manteniendo la consistencia del color de marca

## Cómo usarla (Probémoslo)

### Paso 1: Elegir un color

- Ingresa `#3b82f6` en el campo de entrada de color en la parte superior izquierda (esto es azul)
- O haz clic en el selector de color (botón cuadrado pequeño) junto a él para elegir cualquier color que te guste
- ※Actualmente solo admite formato HEX (códigos de color de 6 dígitos que comienzan con #)

### Paso 2: Ajustar intensidad

- Mueve el deslizador "Weight" en el lado derecho
- Los números más pequeños crean cambios graduales, los números más grandes crean cambios audaces
- La configuración predeterminada de "5" funciona bien, pero ajústala según tu preferencia

### Paso 3: Ver y copiar resultados

Se mostrará una paleta de colores en el centro de la pantalla:

- **Colores claros (Tints)**: Como mezclar blanco con el color original
- **Color original (Base)**: El color exacto que ingresaste (con icono de alerta)
- **Colores oscuros (Shades)**: Como mezclar negro con el color original

Haz clic en cualquier color que te guste para copiar su código. Deberías ver aparecer "Copied!" en la parte superior derecha.

### Paso 4: Ajustar visualización (opcional)

En la configuración del lado derecho, puedes:

- **Cambio de tema**: Verificar colores también en modo oscuro
- **Opciones de visualización**: Agregar bordes u ocultar códigos
- **Tamaño de paso**: Ajustes finos hasta incrementos del 0.1%

## Uso de diferentes pestañas

- **All**: Ver todos los colores (esta es la configuración predeterminada)
- **Tints**: Cuando solo quieras ver colores claros
- **Shades**: Cuando solo quieras ver colores oscuros
- **✨Tailwind**: Formato de escala de color TailwindCSS (50-950)

## Consejos útiles

**Cuando no estés seguro sobre la selección de color**: Haz clic en el botón 🔄 en la parte superior izquierda para colores aleatorios. Podrías descubrir algo inesperado.

**Para ajustes finos**: Configura el "Tamaño de paso" debajo de la configuración de Weight a 0.1 para un control extremadamente preciso.

**Para mejorar la eficiencia del flujo de trabajo**: Marca como favoritos las URLs con colores que uses frecuentemente. Los colores se guardan con el parámetro `?color=`.

---

Esta herramienta fue creada con la intención de "acortar el tiempo de decisión de colores para que puedas pasar más tiempo en la creación." Esperamos que te ayude a crear obras maravillosas.
