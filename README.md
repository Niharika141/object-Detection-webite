<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Detection App</title>
    <link rel="stylesheet" href="styles.css">
    
</head>
<body>
    <div class="container">
        <h1>Object Detection </h1>
        <input type="file" accept="image/*" id="uploadInput">
        <button onclick="detectObjects()">Detect Objects</button>
        <div id="output"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
    <script src="script.js"></script>
</body>
</html>
