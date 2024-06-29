/* General styles */
body {
    font-family: serif, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #grey;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
}

header nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

header nav ul li {
    display: inline;
    margin: 0 10px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    display: inline-block;
    transition: background-color 0.3s;
}

header nav ul li a:hover {
    background-color: #555;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    color: #333;
}

form {
    max-width: 600px;
    margin: 0 auto;
}

label, input, textarea {
    display: block;
    margin-bottom: 10px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #555;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
}
