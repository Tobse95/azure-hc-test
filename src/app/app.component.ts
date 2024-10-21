import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLSDIN goes Hybrid Cloud @ Azure</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #d4f2f5;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #000064;
            color: white;
            text-align: center;
            padding: 50px 0;
        }

        header h1 {
            margin: 0;
            font-size: 36px;
        }

        main {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70vh;
        }

        main h2 {
            font-size: 28px;
            color: #333;
        }

        footer {
            background-color: #000064;
            color: white;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

<header>
    <h1>PLSDIN goes Hybrid Cloud @ Azure</h1>
</header>

<main>
    <h2>PLSDIN goes hybrid cloud @ Azure</h2>
</main>

<footer>
    <p>&copy; 2024 PLSDIN - All Rights Reserved</p>
</footer>

</body>
</html>`,
})
export class AppComponent {
  value = 'World';
}
