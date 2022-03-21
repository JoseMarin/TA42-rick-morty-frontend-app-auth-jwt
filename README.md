# TA05 – Rick & Morty Frontend App

Sobre la aplicación anterior de Rick&Morty has de crear un evolutivo en el que incluyas la funcionalidad de login, registro de nuevos usuarios, logout, así como un sistema de acceso a determinados componentes por roles. Únicamente el usuario con rol de admin puede añadir nuevos personajes.

### /home

 ![image](https://user-images.githubusercontent.com/16636086/159194013-1273323f-289b-4918-8d9e-c2297fda14cd.png)


### /characters

 ![image](https://user-images.githubusercontent.com/16636086/159194016-1744943d-3e66-4fcb-a912-be631eed3d4a.png)

### /characters/4

 ![image](https://user-images.githubusercontent.com/16636086/159194025-161d64e9-c946-461a-9987-8cdbf6beb773.png)

### /add

 ![image](https://user-images.githubusercontent.com/16636086/159194031-d38ab491-0573-4da8-99b6-3f0bae61fc59.png)


El acceso a la aplicación se ha de gestionar mediante el token generado por la siguiente API: 
```sh
https://jmm-spring-api-h2-angular.herokuapp.com/
```

End-points:
> 
> -	POST /login
> -	POST /users/
> -	GET  /users/
> -	GET  /users/username

Users:
> 
> - { "username": "GeeksHubs_2022", "password": "password"}'
> - { "username": "CT2022", "password": "password"}'

Utiliza para ello la funcionalidad de la clase 'HttpClient'. Se recomienda integrar Bootstrap en la interfaz visual. 
En esta entrega es necesario implementar modelos de datos, obsevables, dependency injection, services, httpinterceptors así como los módulos y componentes que consideres necesarios para cumplir con los requerimientos de la entrega.

**Adjunta la URL del repo** utilizado para resolver la tarea (añade node_modules al gitignore). **Recuerda que tienes fecha límite** de entrega. 
