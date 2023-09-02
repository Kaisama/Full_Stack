function mainFunction(callback) {
console.log("Performing operation...");
// Use setTimeout to simulate an asynchronous operation
setTimeout(function() {
	callback("Operation complete");
}, 1000);
}

// Define the callback function
function callbackFunction(result) {
console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);




function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
  console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3
operationOnSum(5, 5, multiplyBy2); // Outputs 20






       // CALLBACK HELL

// Callbacks
function loadScript(src, callback) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = function() {
                console.log("Loaded script with SRC: " + src)
                callback(null, src);
        }
        script.onerror = function() {
                console.log("Error loading script with SRC: " + src);
                callback(new Error("Src got some error"))
        }
        document.body.appendChild(script);
}

function hello(error, src) {
        if (error) {
                console.log(error)
                return
        }
        alert('Hello World!' + src);
}



loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
        if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                        console.log(error)
                                        sendEmergencyMessageToCeo();
                                        return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                        if (error) {
                                                console.log(error)
                                                sendEmergencyMessageToCeo();
                                                return
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                                if (error) {
                                                        console.log(error)
                                                        sendEmergencyMessageToCeo();
                                                        return
                                                }
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                        if (error) {
                                                                console.log(error)
                                                                sendEmergencyMessageToCeo();
                                                                return
                                                        }
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                                if (error) {
                                                                        console.log(error)
                                                                        sendEmergencyMessageToCeo();
                                                                        return
                                                                }
                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})
