# fullstackopen
Este repositorio está hecho para agregar las soluciones a los diferentes retos impuestos por el Bootcamp Full Stack Open. www.fullstackopen.com

# 0.4 Diagrama de Secuencia: Crear una Nueva Nota
 
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuario escribe una nota y hace clic en "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: El servidor procesa los datos del formulario y actualiza el almacenamiento de notas
    server-->>browser: Redirección HTTP 302 a /notes
    deactivate server

    Note right of browser: El navegador sigue la redirección automáticamente

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (actualizado)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta el JavaScript que hace la solicitud del JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con la nueva nota incluida
    deactivate server

    Note right of browser: Se ejecuta la función callback que renderiza las notas actualizadas
```

# 0.5 Diagrama de Secuencia: Acceso a la versión SPA de la aplicación de notas

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript SPA file
    deactivate server

    Note right of browser: El navegador ejecuta el código JavaScript de la SPA

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con las notas existentes
    deactivate server

    Note right of browser: La SPA renderiza dinámicamente las notas en la página sin recargarla
```
# 0.6 Diagrama de Secuencia: Crear una nueva nota en la versión SPA

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuario escribe una nueva nota y hace clic en "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: El servidor guarda la nueva nota
    server-->>browser: Respuesta vacía o de confirmación (status 201)
    deactivate server

    Note right of browser: La SPA actualiza dinámicamente el estado local con la nueva nota
    Note right of browser: La nueva nota aparece en la lista sin recargar la página
```
