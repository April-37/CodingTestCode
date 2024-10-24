// lv.1 카드 뭉치

function solution(cards1, cards2, goal) {
  var indexC1=0, indexC2=0, indexGoal=0;
  while(indexGoal<goal.length) {
      if(cards1[indexC1]===goal[indexGoal]) {
          indexC1++;
          indexGoal++;
      }
      else if(cards2[indexC2]===goal[indexGoal]) {
          indexC2++;
          indexGoal++;
      }
      else
          return 'No'
  }
  return 'Yes';
}