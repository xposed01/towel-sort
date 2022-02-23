// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    let arrReverse = [];

    if (matrix == undefined) {
        return result;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            arrReverse = matrix[i].reverse();
        }

        for (let j = 0; j < matrix[i].length; j++) {

            if (i % 2 == 0) {
                result.push(matrix[i][j]);
            } else {
                result.push(arrReverse[j]);
            }
        }

    }
    return result;
}
