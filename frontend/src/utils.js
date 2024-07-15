export function formatPrice(num) {
    return  '$' +
        (num >= 1e15 ? (num / 1e15).toFixed(1) + 'q' :
            num >= 1e12 ? (num / 1e12).toFixed(1) + 't' :
            num >= 1e9 ? (num / 1e9).toFixed(1) + 'b' :
            num >= 1e6 ? (num / 1e6).toFixed(1) + 'm' :
            num >= 1e3 ? (num / 1e3).toFixed(1) + 'k' :
            num);
}