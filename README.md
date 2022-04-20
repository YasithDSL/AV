# Algorithm Visualiser

Project made by Yasith D.M.D

import * as tmImage from '@teachablemachine/image';


export async function getPred(image) {
    // My model is hosted on this URL
    const URL = "https://teachablemachine..com/models/df4D78q8s/";

    let model, labelContainer, maxPredictions;

    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { 
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    await init();

    let results = [];

    async function predict() {
        const prediction = await model.predict(image);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction = prediction[i].className + " sort: " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            results.push(parseFloat(prediction[i].probability.toFixed(2)))
        }

    }

    await predict();
    return results;
}


let trainingDataInputs = [];
    let trainingDataOutputs = [];
    let examplesCount = [];
    let predict = false;

    let model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [1024], units: 128, activation: 'relu'}));
    model.add(tf.layers.dense({units: 4, activation: 'softmax'}));

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy', 
        metrics: ['accuracy']  
    });

    let imageFeatures = tf.tidy(function() { 
        let imageAsTensor = tf.browser.fromPixels(image);
        let resizedTensorFrame = tf.image.resizeBilinear(imageAsTensor, [224, 224], true);
        let normalizedTensorFrame = resizedTensorFrame.div(255);
        return mobilenet.predict(normalizedTensorFrame.expandDims()).squeeze();
    });