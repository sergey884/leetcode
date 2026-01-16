function kClosest(points: number[][], k: number): number[][] {
  const calculateDistance = ([x, y]: number[]): number => x ** 2 + y ** 2;

  const partitioning = (left: number, right: number, pivotIndex: number) => {
    const pivotValue = calculateDistance(points[pivotIndex]);

    [points[pivotIndex], points[right]] = [points[right], points[pivotIndex]];

    let idx = left;
    for (let i = left; i < right; i++) {
      if (calculateDistance(points[i]) < pivotValue) {
        [points[idx], points[i]] = [points[i], points[idx]];
        idx++;
      }
    }

    [points[idx], points[right]] = [points[right], points[idx]];

    return idx;
  }

  const quickSelect = (left: number, right: number, k: number) => {
    if (left >= right) {
      return;
    }
    const pivotIndex = left + Math.floor((right - left) / 2);
    const indexAfterPartitioning = partitioning(left, right, pivotIndex);

    if (indexAfterPartitioning === k) {
      return;
    } else if (indexAfterPartitioning < k) {
      quickSelect(indexAfterPartitioning + 1, right, k);
    } else {
      quickSelect(left, indexAfterPartitioning - 1, k);
    }
  }

  quickSelect(0, points.length - 1, k);
  return points.slice(0, k);
};