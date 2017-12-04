module.exports = function longestConsecutiveLength(array) {
    const data = {};
    let result = 1;

    for (let i = 0; i < array.length; i++) {
        const n = array[i];
        data[n] = data[n] || 0;

        if (data[n] === 0) {
            data[n] = 1;
            const a = data[n - 1] || 0;
            const b = data[n + 1] || 0;
            const sum = a + b + data[n];

            result = Math.max(sum, result);
            data[n - a] = sum;
            data[n + b] = sum;
        }
    }

    return(result === 1 ? 0 : result);
};
