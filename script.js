function calculateTOEIC() {
    const listeningInput = document.getElementById("listening").value;
    const readingInput = document.getElementById("reading").value;

    // ตรวจสอบว่าคะแนนที่ใส่เป็น integer และอยู่ในช่วง 0-100
    if (!isValidScore(listeningInput) || !isValidScore(readingInput)) {
        alert("กรุณากรอกคะแนนเป็นจำนวนเต็มระหว่าง 0-100 เท่านั้น");
        return;
    }

    const listeningScore = convertListeningScore(Number(listeningInput));
    const readingScore = convertReadingScore(Number(readingInput));
    const totalScore = listeningScore + readingScore;

    document.getElementById("listening-score").innerText = listeningScore;
    document.getElementById("reading-score").innerText = readingScore;
    document.getElementById("total-score").innerText = totalScore;
}

function isValidScore(score) {
    // ตรวจสอบว่าเป็น integer และอยู่ในช่วง 0-100
    const scoreNumber = Number(score);
    return Number.isInteger(scoreNumber) && scoreNumber >= 0 && scoreNumber <= 100;
}

function convertListeningScore(listeningScore) {
    const listeningConversion = [
        [100, 495], [99, 495], [98, 495], [97, 495], [96, 495], [95, 495],
        [94, 495], [93, 495], [92, 490], [91, 485], [90, 480], [89, 475],
        [88, 465], [87, 460], [86, 455], [85, 445], [84, 440], [83, 435],
        [82, 430], [81, 425], [80, 420], [79, 415], [78, 405], [77, 400],
        [76, 395], [75, 385], [74, 375], [73, 370], [72, 365], [71, 360],
        [70, 355], [69, 350], [68, 345], [67, 340], [66, 335], [65, 330],
        [64, 325], [63, 320], [62, 310], [61, 300], [60, 295], [59, 290],
        [58, 285], [57, 275], [56, 265], [55, 260], [54, 255], [53, 245],
        [52, 240], [51, 230], [50, 225], [49, 220], [48, 215], [47, 205],
        [46, 200], [45, 190], [44, 180], [43, 175], [42, 170], [41, 160],
        [40, 150], [39, 140], [38, 135], [37, 125], [36, 115], [35, 105],
        [34, 100], [33, 95], [32, 90], [31, 85], [30, 80], [29, 70],
        [28, 60], [27, 55], [26, 50], [25, 45], [24, 40], [23, 35],
        [22, 30], [21, 25], [20, 20], [19, 15], [18, 10], [17, 5],
        [16, 5], [15, 5], [14, 5], [13, 5], [12, 5], [11, 5], [10, 5],
        [9, 5], [8, 5], [7, 5], [6, 5], [5, 5],
        [4, 5], [3, 5], [2, 5], [1, 5], [0, 5]
    ];

    return getConvertedScore(listeningScore, listeningConversion);
}

function convertReadingScore(readingScore) {
    const readingConversion = [
        [100, 495], [99, 490], [98, 485], [97, 485], [96, 475], [95, 470],
        [94, 460], [93, 455], [92, 450], [91, 440], [90, 435], [89, 425],
        [88, 420], [87, 415], [86, 405], [85, 395], [84, 390], [83, 385],
        [82, 375], [81, 370], [80, 360], [79, 355], [78, 345], [77, 340],
        [76, 335], [75, 330], [74, 325], [73, 320], [72, 315], [71, 310],
        [70, 300], [69, 295], [68, 295], [67, 290], [66, 285], [65, 280],
        [64, 275], [63, 270], [62, 260], [61, 255], [60, 250], [59, 245],
        [58, 240], [57, 230], [56, 225], [55, 220], [54, 210], [53, 205],
        [52, 195], [51, 185], [50, 175], [49, 170], [48, 160], [47, 155],
        [46, 145], [45, 140], [44, 135], [43, 130], [42, 125], [41, 120],
        [40, 115], [39, 105], [38, 95], [37, 90], [36, 85], [35, 80],
        [34, 75], [33, 70], [32, 65], [31, 60], [30, 55], [29, 45],
        [28, 40], [27, 35], [26, 30], [25, 25], [24, 20], [23, 15],
        [22, 10], [21, 5], [20, 5], [19, 5], [18, 5], [17, 5],
        [16, 5], [15, 5], [14, 5], [13, 5], [12, 5], [11, 5], [10, 5],
        [9, 5], [8, 5], [7, 5], [6, 5], [5, 5], [4, 5], [3, 5], [2, 5], [1, 5], [0, 5]
        ];

    return getConvertedScore(readingScore, readingConversion);
}

function getConvertedScore(rawScore, conversionTable) {
    for (let i = 0; i < conversionTable.length; i++) {
        if (rawScore >= conversionTable[i][0]) {
            return conversionTable[i][1];
        }
    }
    return 0;
}
