import * as tf from '@tensorflow/tfjs';
import * as mobilenet from'@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';


export async function getPred(image) {
    const model = await mobilenet.load();
    const predictions = await model.classify(image);
    var text = "";

    predictions.forEach(function (p){
        const className = p.className.split(',')[0];
        const probability = (p.probability*100).toFixed(5);
        text = text + " " + probability + " " + className;
    });

    document.getElementById("prediction").innerHTML = text;
}