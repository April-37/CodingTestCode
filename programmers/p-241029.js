function solution(n, m, section) {
  var answer = 0;
  var startI = section[0];
  for(let i=0; i<section.length; i++) {
      if(section[i]-startI+1 > m) {
          answer++;
          startI=section[i];
      }
  }
  answer++;
  return answer;
}