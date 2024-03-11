interface AnimateProps {
  newArray: number[];
  animationArray: number[][];
  delay: number;
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
  setTotalTime: React.Dispatch<React.SetStateAction<number | null>>;
}

const lightBlue = "#0369A1";
const darkBlue = "#BAE6FD";

export const animateSwitch = ({newArray, animationArray, delay, setItems, setTotalTime}: AnimateProps) => {
  const startTime = performance.now();

  animationArray.forEach(([first, second], index) => {
    const div1 = document.getElementById(`${first}`);
    const div2 = document.getElementById(`${second}`);
    
    if (!div1 || !div2) return;

    setTimeout(() => {
      div1.style.background = lightBlue;
      div2.style.background = lightBlue;

      const div1Height = div1.style.height;
      div1.style.height = div2.style.height;
      div2.style.height = div1Height;

      setTimeout(() => {
        div1.style.background = darkBlue;
        div2.style.background = darkBlue;

        if (index === animationArray.length - 1) {
          const endTime = performance.now();
          setTotalTime(calculateTotalTime(startTime, endTime));
          setItems(newArray);
        }
      }, timeoutTime(delay));
    }, timeoutIndexTime(delay, index));
  });
}

export const animateMerge = ({newArray, animationArray, delay, setItems, setTotalTime}: AnimateProps) => {
  const startTime = performance.now();

  animationArray.forEach(([newHeight, index], idx) => {
    const div1 = document.getElementById(`${index}`);
    
    if (!div1) return;

    setTimeout(() => {
      div1.style.background = lightBlue;
      div1.style.height = `${newHeight / 2.1}%`;

      setTimeout(() => {
        div1.style.background = darkBlue;
        
        if (idx === animationArray.length - 1) {
          const endTime = performance.now();
          setTotalTime(calculateTotalTime(startTime, endTime));
          setItems(newArray);
        }
      }, timeoutTime(delay));
    }, timeoutIndexTime(delay, idx));
  });
};

const calculateTotalTime = (startTime: number, endTime: number) => {
  const total = endTime - startTime;
  return Number((total / 1000).toFixed(2));
}

const timeoutTime = (delay: number) => {
  return delay * 5;
}
  
const timeoutIndexTime = (delay: number, index: number) => {
  return delay * index * 5;
}