function myPow(x: number, n: number): number {
    const binaryExponent = (x: number, n: number): number => {
        if (n === 0) {
            return 1;
        }

        if (n % 2 === 1) {
            return x * binaryExponent(x * x, Math.floor(n / 2));
        } else {
            return binaryExponent(x * x, Math.floor(n / 2));
        }

    };

    const absExponent = Math.abs(n);
    const res = binaryExponent(x, absExponent);
    return n < 0 ? 1 / res : res;
};