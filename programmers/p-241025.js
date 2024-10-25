// lv.1 푸드 파이트 대회

function solution(food) {
  var answer = '';
  for(let i=1; i<food.length; i++) {
      for(let j=0; j<Math.floor(food[i]/2); j++)
          answer =`${answer}${i}`;
  }
  var reAnswer = answer.split('').reverse().join('');
  answer = `${answer}0${reAnswer}`;
  return answer;
}