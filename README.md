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

### Para desplegar el proyecto de una manera eficiente es necesario tener los siguientes programas instalados:
- ##VSCode## Es el editor de código sugerido para correr nuestro front.

- ##Pycharm## Es el editor sugerido para backend, para este proyecto usaremos el repositorio *https://github.com/AngelPerazaGutierrez/GestionDePagosBackend* 

- ##Xampp## control panel (Esto nos ayudará a Habilitar los puertos para el manejo de la base de datos en este caso el 3306)
- 
- ##MySQL## workbrench (desde Aqui podemos ver y administrar mejor nuestra DB, aunque lo podemos hacer desde Xampp, este es mucho mas comodo para realizar analisis de los CRUD)

--------------------------------------------------------------------------

###Instrucciones para correr el proyecto de manera correcta###
  










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










