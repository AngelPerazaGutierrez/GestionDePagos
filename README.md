# Gestion De Pagos
Plataforma Web que gestiona el flujo de pagos de una compañia en la parte contable y tesorera.

El proyecto esta pensado para que una compañia lleve el control de sus egresos.
En este proyecto manejaremos dos perfiles que pueden hacer las siguientes tareas:

- Administrador: 
  - Crear y administrar Usuarios, Bancos, Empresas, Comprobantes de pago.
  - Modificar registros.
  - Solucionar problemas de llamados de informacion.
  - Mas permisos.
  - Edicion de imformacion en las diferentes tablas.
  - Desactivar comprobantes de pago.
  - Ver comprobantes

- Usuario: 
  - Crear Comprobantes de Pago.
  - Editar Comprobantes de pago (antes de ser aprobados, una vez aprobados no se podrá modificar).
  - Eliminar comprobantes (antes de ser aprobados, una vez aprobados no se podrá Eliminar).

  
### Glosario ##

- **Banco**: Entidad que realiza el desembolso de dinero.
- **Comprobante de Pago**: Documento que confirma la realización de un pago por bienes, servicios o deudas, detallando la fecha, monto, concepto, método de pago entre otros.
- **Empresa**: Entidad con la cual se tiene vinculo comercial y a quien se le realizará el pago.
- **Egreso**: Salida de dinero de una entidad.




## Detalles de desarrollo ##

Plataforma creada con 
**React + vite.** en el **Fronted** & en el **Backend** con **Python**, Base de datos modelada con SQLAlchemy.

Este es un proyecto módularizado mediante sus componentes reutilizables para la mejor comprensión del código, conexión a backend mediante la libreria Axios, puertos habilitados para la Base de datos (3306) y front (5173).

-----------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------
## Despliegue del Proyecto:

**Para desplegar el proyecto de una manera eficiente es necesario tener los siguientes programas instalados:**
- **VSCode** Es el editor de código sugerido para correr nuestro front.
*https://github.com/AngelPerazaGutierrez/GestionDePagos.git*

- **Pycharm**Es el editor sugerido para backend, para este proyecto usaremos el repositorio *https://github.com/AngelPerazaGutierrez/GestionDePagosBackend*

- **Instalar python**

- **Instalar Bash**

- **Xampp** control panel (Esto nos ayudará a Habilitar los puertos para el manejo de la base de datos en este caso el 3306)

- **MySQL Workbrench** (desde Aqui podemos ver y administrar mejor nuestra DB, aunque lo podemos hacer desde Xampp, este es mucho mas comodo para realizar analisis de los CRUD)

--------------------------------------------------------------------------

### Instrucciones para correr el proyecto de manera correcta ###

1- Clone el ropositorio Front https://github.com/AngelPerazaGutierrez/GestionDePagos.git

2- Clone el repositorio back
https://github.com/AngelPerazaGutierrez/GestionDePagosBackend.git

3- Abre **XAMPP** habilita el puerro 3306, dale click a Mysql en el boton start

4- Abre **Workbrench** 
   - En el boton de + crea una conexion 
   - Dale un nombre
   - Fijate que el puerto (port) sea 3306
   - Dale ok

5- Abre **Pycharm** 
- verifica que pip esté instalado: **pip --version**
- instala tu entorno virtual de preferencia: **pip install virtualenv**
- Crea un entorno virtual: **virtualenv mi_entorno**
- Activa el entorno virtual en windows: **mi_entorno\Scripts\activate**
- Activa el entorno virtual en linux o bash: **source mi_entorno/bin/activate**
- instala los las dependencias que estan en requirements.txt: **pip install -r requirements.txt**
- ejecuta el archivo **run_fastapi**


6- Si te sale esto 👇

<span style="color: red;">INFO:Started server process [8616] 

<span style="color: red;">INFO:Waiting for application startup. [8616] 

<span style="color: red;">INFO:Application startup complete. [8616] 

7- Ya estas listo para correr el front!.

8- Abre tu **VScode**
* ve a la direccion donde guardaste el repositorio Front, abrelo.

9- Una vez dentro escribe **ls** si tienes instalado linux o bash, o **dir** para windows.

10- dirigete a la carpeta **gestionPagoFront** una vez dentro **ejecuta npm i** para instalar todas las dependencias.

11- ejecuta *npm run dev**

12- ya todo esta listo.





----------------------------------------------------------------------------




Pendientes por realizar:

- hacer validacion de credenciales en el Login --
- **Boton eliminar** revisar id para que funcione el axios a la peticion delete
- **Boton editar** revisar id y eliminar condicion de crear nuevo si no encuentra el id solicitado.

- /admin
- -> Bancos: Boton eliminar, boton editar
- -> Usuarios: insertar boton "crear usuario"
- -> Empresas: Insertar Boton crear Empresa
- -> Comprobantes de pago: Importar el componente de comprobante de pago para que quede como el de /user

- /user
- -> Mi perfil: Importar el componente de mi perfil para que quede como el de /admin
- -> Visualizar comprobantes de pago botones eliminar y editar.









