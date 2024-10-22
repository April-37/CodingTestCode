function solution(s) {
  var answer = [];
  let j=0;
  for(let i=0; i<s.length; i++) {
      for(j=i-1; j>=0; j--) {
          if(s[j]===s[i]) {
              answer.push(i-j);
              break;
          }
      }
      if(j === -1)
          answer.push(j);
  }
  return answer;
}