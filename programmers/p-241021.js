// lv.1 추억 점수

function solution(name, yearning, photo) {
  let yearningObj = {};
  for(let i=0; i<name.length; i++)
      yearningObj[name[i]]=yearning[i];
  
  var answer = [];
  photo.forEach( arr => {
      var sum=0;
      arr.forEach( person => { sum += (yearningObj[person]===undefined? 0 : yearningObj[person])})
      answer.push(sum);
  })
  return answer;
}