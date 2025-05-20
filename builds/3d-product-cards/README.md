# 3D Product Cards

![Preview de 3D Product Cards](./preview/image.png)

Esta sección añade un efecto 3D interactivo a las tarjetas de productos en tu tienda Shopify, mejorando la experiencia del usuario y la presentación visual de tus productos.

## 🎯 Demo en Vivo

Puedes ver esta sección en funcionamiento en nuestra tienda demo:

- URL: [section](shopify.torme.dev/pages/product-cards-carousel)
- Contraseña: `0000`

## 🎯 Características

- Efecto 3D suave al pasar el mouse sobre las tarjetas
- Compatible con todos los temas de Shopify
- Totalmente personalizable
- Optimizado para rendimiento
- Responsive en todos los dispositivos

## 📚 Dependencias

### Archivos CSS

```liquid
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" href="{{ '3d-products-cards.css' | asset_url }}">
```

### Archivos JavaScript

```liquid
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js" defer></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js" defer></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" defer></script>
```

### Instrucciones de Instalación de Dependencias

1. **Para el archivo CSS personalizado:**

   - Sube el archivo `3d-products-cards.css` a la carpeta `assets` de tu tema
   - Asegúrate de que el nombre del archivo coincida exactamente
2. **Para los scripts externos:**

   - Los scripts de jQuery y Slick Carousel se cargarán automáticamente desde CDN
   - No es necesario subir estos archivos a tu tema
3. **Orden de carga:**

   - Los archivos CSS deben ir en el `<head>` de tu tema
   - Los scripts JavaScript deben ir antes del cierre del `</body>`
   - El atributo `defer` asegura que los scripts no bloqueen la carga de la página

### Instrucciones de Instalación de código

1. **Para agregar la seccion a tu tema:**

   - Sube los archivos de la carpeta assets y sections a sus mismas carpetas dentro de tu tema shopify

## 📦 Instalación y personalización

1. Accede al editor de temas de tu tienda Shopify
2. Navega a la sección donde deseas añadir las tarjetas 3D
3. Haz clic en "Añadir sección"
4. Selecciona "3D Product Cards"
5. Configura según tus necesidades

## ⚙️ Configuración

### Opciones Disponibles

- **Velocidad de transición**: Controla el tiempo de ejecución
- Utilizacon una imagén de fondo que sea 16:9 y una foto del producto 4:3 para uniformidad en su efecto.
- **Color de fondo**: Personaliza el color de fondo de las tarjetas
- Para que las tarjetas funcionen correctamente, deben tener un ancho definido y no dinamico, por ende, recomiendo jugar con las opciones hasta encontrar su formato ideal.

## 🔧 Solución de Problemas

### Problemas Comunes

1. **El efecto 3D no funciona**

   - Verifica que JavaScript esté habilitado
   - Asegúrate de que no haya conflictos con otros scripts
2. **Rendimiento lento**

   - Utiliza solo una cantidad limitada de productos, maximo 5 si tienes multiples caruseles.

## 🤝 Soporte

Si necesitas ayuda o tienes preguntas, por favor:

1. Revisa la documentación
2. Abre un issue en este repositorio
