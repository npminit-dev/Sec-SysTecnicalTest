## **Instrucciones:**

***modo de desarrollo*:**

En VSCode, en el directorio donde se desea ejecutar el proyecto y en la terminal:

 1. `git clone https://github.com/npminit-dev/Sec-SysTecnicalTest.git`
 2. `cd Sec-SysTecnicalTest` (con las mayusculas, para evitar errores)
 3. `npm install`
 4. `npm run dev`

Como saben **NextJS** compila cada ruta on-demand por lo que al cambiar de ruta tarda 5 segundos aproximadamente en renderizarse 😭.

En este [link](https://sec-sys-tecnical-test.vercel.app/) tienen un deploy.

***tests*:**

 1. Mover el archivo *babel.config.js* del directorio */babelconfig* al directorio raíz.
 2. Ejecutar `npm test` en la terminal
 3. Al terminar, si se quiere volver al modo de desarrollo, volver a colocar el archivo *babel.config.js* en el directorio */babelconfig*

**Porque hacer esto?** 
Si uso babel al entrar al modo de desarrollo, este reemplaza a SWC (el compilador de NextJS), y esto causa que ya no se soporten funcionalidades como `next/font` o `next/image`, tirándome errores en consola, entonces la mejor solución que pude encontrar fue mover el archivo babel.config.js a una carpeta fuera de la raíz para que NextJS no lo detectara en modo de desarrollo, y pasarlo a la raíz a la hora de hacer los tests (Jest requiere el preset '@babel/preset-react' para transformar el código JSX). He intentado solucionarlo de una forma mas elegante pero no me ha dado el tiempo.

Un saludo 🙋🏻‍♂️.