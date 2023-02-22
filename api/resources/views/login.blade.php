<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LOGIN</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
</head>

<body>
    <main class="container align-center p-5">
        <form method="POST" action="{{ route('inicia-sesion') }}">
            @csrf

            <div class="mb-3">
                <label for="userInput" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="userInput" name="name" required
                    autocomplete="disable">
            </div>

            <div class="mb-3">
                <label for="passwordInput" class="form-label">Password</label>
                <input type="password" class="form-control" id="passwordInput" name="password" required>
            </div>

            <div>
                <p>
                    ¿No tienes Cuenta? <a href="{{ route('registro') }}">Regístrate</a>
                </p>
            </div>

            <button type="submit" class="btn btn-primary">IniciarSesion</button>

        </form>
    </main>


</body>

</html>
