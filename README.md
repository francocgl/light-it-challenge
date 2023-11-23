# Light It Challenge

Este es un challenge para la start-up Light It hecho por Franco Martin Cagliolo.

## Características

- **React y TypeScript**: Desarrollo del proyecto con React y TypeScript para tipado estático y mejor mantenibilidad del código.
- **Vite**: Utilización de Vite como herramienta de construcción para un desarrollo rápido y construcciones optimizadas en producción.
- **Material-UI**: Integración de componentes de Material-UI para un diseño de interfaz consistente y simplificado.
- **React Query**: Integración de React Query para gestión de datos y optimización de peticiones al servidor.
- **Formik**: Manejo de formularios y su estado con Formik, que simplifica el manejo de formularios en React.
- **Yup Validation**: Uso de la validación de esquemas Yup junto con Formik para una validación fácil y sólida de formularios.

## Inicio

### Prerrequisitos

Tene la version `^v.18.0.0` de Node.js y npm (o yarn) instalado en tu equipo.

### Instalación

Clonar el repositorio de github e instalar las dependencias:

```bash
git clone <https://github.com/francocgl/light-it-challenge.git>
cd light-it
npm install
npm start
```

## Estructura de Carpetas

/src
|-- /components
| |-- /atoms
| |-- /molecules
| |-- /organisms
| |-- /templates
|-- /config
|-- /helpers
|-- /hooks
|-- /types
|-- MainContext.tsx
|-- customTheme.ts
|-- main.tsx

- ./components: Contiene los componentes reutilizables de React jerarquizados en la metodología `Atomic Design` para mejor escalabilidad y mantenimiento.
- ./config: Contiene los endpoints para las querys.
- ./helpers: Funciones que se pueden reutilizar a lo largo del proyecto.
- ./hooks: Contiene los React Hooks para editar, agregar y listar los patients utilizando `React Query`.
- ./types: Carpeta para las tipados globales.
- .MainContext.tsx: El contexto global del proyecto para abrir o cerrar el modal desde cualquier componente.
- .customTheme.tsx: El default theme de `Material UI` para la interfaz.
- .main.tsx: index del proyecto.
