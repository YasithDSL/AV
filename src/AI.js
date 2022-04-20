import * as tmImage from '@teachablemachine/image';
import * as tf from '@tensorflow/tfjs';


export async function getPred(image) {
    
    const URL = "https://teachablemachine.withgoogle.com/models/df4D78q8s/";


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