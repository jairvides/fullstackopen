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
