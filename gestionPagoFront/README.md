# GestionDePagos
Plataforma Web que gestiona el flujo de pagos de una compañia en la parte contable y tesorera.


**Front Desarrollado:**

**React + vite.**

- Proyecto modularizado mediante los componentes reutilizables
- Conexión con el Backend mediante axios en la carpeta Services.

- Conexion al puerto por defecto de react 5173.

-----------------------------------------------------------------------------------------------
El proyecto esta pensado para que una compañia lleve el control de sus egresos.
Hay dos perfiles.
- Administrador: Quien da acceso a los usurio y tiene acceso de modificacion y creacion de(Usuarios, Bancos, Empresas, comprobantes de Pago)
- Usuario = puede crear, modificar y eliminar comprobantes de pago.
------------------------------------------------------------------------------------------------

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
