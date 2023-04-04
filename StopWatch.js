class StopWatch {
    startTime;
    endTime;

    constructor() {
        this.startTime = new Date().getTime();
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }

    start() {
        return this.startTime = new Date().getTime();
    }

    stop() {
        return this.endTime = new Date().getTime();
    }

    getElapsedTime() {
        return this.endTime - this.startTime;
    }
}

let obj = new StopWatch();

function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }
    return arr;
}

const arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}

console.log(obj.start());

console.log(selectionSort(arr));

console.log(obj.stop());

console.log(obj.getElapsedTime());