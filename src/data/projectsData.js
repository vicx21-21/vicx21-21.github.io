import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Conteo de Códigos Postales',
        projectDesc: 'Programa desarrollado para el análisis y procesamiento de un archivo CSV que contiene registros de códigos postales del municipio de Hermosillo, Sonora.',
        tags: ['Java'],
        code: 'https://github.com/vicx21-21/base_de_datos',
        demo: '',
        image: one
    },
    {
        id: 2,
        projectName: 'Gestión de Inventario y Ventas',
        projectDesc: 'Aplicación para la gestión de inventario, registro de productos, precios, control de ventas (con detalle de artículos), clientes y proveedores.',
        tags: ['Java', 'PostgreSQL', 'Maven'],
        code: 'https://github.com/vicx21-21/cutom_orders',
        demo: '',
        image: two
    },
    {
        id: 3,
        projectName: 'Generador de Datos de Alumnos',
        projectDesc: 'Herramienta web interactiva para generar datos ficticios de alumnos (matrículas, nombres compuestos y apellidos) y exportarlos fácilmente en distintos formatos.',
        tags: ['JavaScript', 'HTML', 'CSS', 'SQL'],
        code: 'https://github.com/vicx21-21/Generador-de-alumnos',
        demo: '',
        image: three
    },
    {
        id: 4,
        projectName: 'API REST & Dashboard de Inventario',
        projectDesc: 'Sistema integral de gestión de inventario que expone una API RESTful para realizar operaciones CRUD sobre categorías y productos, incluyendo un Dashboard Web.',
        tags: ['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML/CSS'],
        code: 'https://github.com/vicx21-21/proyecto-api-rest',
        demo: '',
        image: four
    },
    {
        id: 5,
        projectName: 'Gestión de Expediciones de Minas',
        projectDesc: 'Sistema para el control de acceso, gestión de usuarios, administración de inventarios de materiales y generación automatizada de reportes PDF.',
        tags: ['Java', 'Maven', 'SQL'],
        code: 'https://github.com/vicx21-21/Sistema-para-la-gestion-de-expediciones-de-minas',
        demo: '',
        image: five
    },
    {
        id: 6,
        projectName: 'Menú Interactivo de Algoritmos',
        projectDesc: 'Aplicación de consola interactiva con formateo dinámico ANSI que implementa estructuras de control, rotación de arreglos y algoritmos numéricos como Collatz y Padovan.',
        tags: ['Java'],
        code: 'https://github.com/vicx21-21/menufinal',
        demo: '',
        image: six
    },
    {
        id: 7,
        projectName: 'Análisis de Inflación en Artículos',
        projectDesc: 'Sistema en Java para el cálculo de variaciones porcentuales de precios y generación de reportes estructurados persistentes mediante RandomAccessFile.',
        tags: ['Java'],
        code: 'https://github.com/vicx21-21/analisis-inflacion',
        demo: '',
        image: seven
    },
]