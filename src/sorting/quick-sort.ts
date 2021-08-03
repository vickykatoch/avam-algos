export function quickSort(values: Array<number>): Array<number> {
    const cloned = [...values];
    if (cloned.length < 2) return cloned;
    const pivotIndex = Math.floor(cloned.length / 2);
    const pivot = cloned[pivotIndex];
    const [low, high] = cloned.reduce((acc, value, index) => {
        if (value < pivot || (value === pivot && index !== pivotIndex)) {
            acc[0].push(value);
        } else if (value > pivot) {
            acc[1].push(value);
        }
        return acc;
    }, [[] as Array<number>, [] as Array<number>]);
    return [...quickSort(low), pivot, ...quickSort(high)];
}
