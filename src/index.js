module.exports = function reverse(n) {
    let num;
    if (n < 0) num = n * -1;
    if (n >= 0) num = n;

    let arr = [...(num + "")].reverse();

    return Number(arr.join(""));
};
