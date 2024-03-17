export const getQuickSortAnims = (items: number[]) => {
  const newArray = [...items];
  const animationArray: number[][] = [];
  partition(newArray, animationArray, 0, newArray.length - 1);
  return { quickSorted: newArray, quickSortAnims: animationArray };
};

const partition = (
  newArray: number[],
  animationArray: number[][],
  low: number,
  hight: number
) => {
  if (low >= hight) return;
  let lt = low;
  let i = low;
  let gt = hight;
  const v = newArray[low];

  while (i <= gt) {
    if (newArray[i] < v) exch(newArray, animationArray, i++, lt++);
    else if (newArray[i] > v) exch(newArray, animationArray, i, gt--);
    else i++;
  }

  partition(newArray, animationArray, low, lt - 1);
  partition(newArray, animationArray, gt + 1, hight);
};

const exch = (
  newArray: number[],
  animationArray: number[][],
  a: number,
  b: number
) => {
  animationArray.push([a, b]);
  const tmp = newArray[a];
  newArray[a] = newArray[b];
  newArray[b] = tmp;
};