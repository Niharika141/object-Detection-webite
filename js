async function detectObjects() {
    const fileInput = document.getElementById('uploadInput');
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (fileInput.files.length > 0) {
        const imageFile = fileInput.files[0];
        const imageUrl = URL.createObjectURL(imageFile);

        const model = await cocoSsd.load();
        const img = document.createElement('img');
        img.src = imageUrl;
        img.onload = async () => {
            const predictions = await model.detect(img);
            displayPredictions(predictions);
        };
    }
}

function displayPredictions(predictions) {
    const outputDiv = document.getElementById('output');
    predictions.forEach(prediction => {
        const { class: label, score, bbox } = prediction;
        const [x, y, width, height] = bbox;
        const outputText = `${label} - Confidence: ${(score * 100).toFixed(2)}%`;

        const objectDiv = document.createElement('div');
        objectDiv.classList.add('object');
        objectDiv.innerHTML = outputText;
        objectDiv.style.left = `${x}px`;
        objectDiv.style.top = `${y}px`;
        objectDiv.style.width = `${width}px`;
        objectDiv.style.height = `${height}px`;
        outputDiv.appendChild(objectDiv);
    });
}
