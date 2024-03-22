/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    const previousRow = getRow(rowIndex - 1);

    const row = [1];
    for (let i = 1; i < rowIndex; i++) {
        row.push(previousRow[i - 1] + previousRow[i]);
    }

    row.push(1);

    return row;
};