export const getMergeSortAnims = (items: number[], aux: number[], animationArray: number[][], low: number, hight: number) => {
  if (low >= hight) return;

  const mid = low + Math.floor((hight - low) / 2);

  getMergeSortAnims(items, aux, animationArray, low, mid);
  getMergeSortAnims(items, aux, animationArray, mid + 1, hight);
  merge(items, aux, animationArray, low, mid, hight);
};

const merge = (items: number[], aux: number[], animationArray: number[][], low: number, mid: number, hight: number) => {
  for (let k = low; k <= hight; k++) {
    aux[k] = items[k];
  }

  let i = low;
  let j = mid + 1;
  for (let k = low; k <= hight; k++) {
    if (i > mid) {
      animationArray.push([aux[j], k]);
      items[k] = aux[j++];
      continue;
    }

    if (j > hight) {
      animationArray.push([aux[i], k]);
      items[k] = aux[i++];
      continue;
    }

    if (aux[i] <= aux[j]) {
      animationArray.push([aux[i], k]);
      items[k] = aux[i++];
      continue;
    }

    animationArray.push([aux[j], k]);
    items[k] = aux[j++];
  }
}