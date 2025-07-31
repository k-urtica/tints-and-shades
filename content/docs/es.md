# Guía de la Herramienta Tints and Shades Generator

## ¿Qué es Tints and Shades Generator?

**Tints and Shades Generator** es una herramienta web que crea variaciones de color que se ven realmente naturales para el ojo humano, todo a partir de un solo color base.

**Tints (matices)** son colores más claros creados mezclando el color base con blanco. **Shades (sombras)** son colores más oscuros creados mezclando el color base con negro.

Pero esta herramienta no solo mezcla colores de forma simple. Utiliza la tecnología moderna del **espacio de color oklch** para que los cambios de color se sientan suaves y naturales, como los percibe el ojo humano.

Oklch permite ajustar "luminosidad", "tono" y "croma" de una manera mucho más cercana a la percepción humana. Así, no importa el color de partida, los gradientes siempre se ven bien.

Por ejemplo, al aclarar el azul hacia el blanco, no obtienes un azul apagado, sino un azul claro y bonito. Al oscurecer un color hacia el negro, se mantiene la riqueza y profundidad, no solo un gris fangoso.

Gracias a esto, diseñadores y desarrolladores pueden crear paletas unificadas y hermosas al instante, sin ajustes manuales tediosos. Ya sea para diseño web, UI o colores de marca, esta herramienta es práctica y confiable.

## ¿Por qué se creó esta herramienta?

¿Alguna vez has pensado: "Me encanta este color, pero quisiera una versión más clara" o "Quiero un tono más profundo y vibrante"?

Pero cuando ajustas los colores a mano, a menudo terminan viéndose apagados o no del todo bien.

**Tints and Shades Generator** fue creado para resolver esos problemas de color. Con solo un color, obtienes un gradiente completo y natural—nada de transiciones extrañas o apagadas. Cada color mantiene su carácter, y el equilibrio entre luminosidad y viveza siempre es el adecuado.

## Detalles técnicos y por qué importan

Esta herramienta utiliza el **espacio de color oklch** para todas las mezclas y gradientes de color.
Oklch está diseñado para coincidir con la percepción humana del color, por lo que los gradientes se ven mucho más naturales que con mezclas tradicionales RGB o Lab.

- La mezcla con blanco (#fff) y negro (#000) se realiza en oklch
- Las escalas de color de TailwindCSS se generan usando oklch
- Cualquier color que elijas producirá gradientes suaves y perceptualmente correctos

Esto significa que los colores rara vez se rompen o se ven mal, y el equilibrio entre luminosidad y viveza siempre es perfecto.

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
