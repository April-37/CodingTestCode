// lv.1 동영상 재생기

function solution(video_len, pos, op_start, op_end, commands) {
  const commandObj = {next:10, prev:-10};


  let strToTime = str => str.split(':').map(num=>Number(num));
  let changeToSec = (min, sec) => sec + min*60;
  let changeToStr = sec => {
      var min = Math.floor(sec/60);
      sec = sec%60;
      var minStr = min<10?`0${min}`:`${min}`;
      var secStr = sec<10?`0${sec}`:`${sec}`;
      return minStr+':'+secStr;
  };
  function calcPos(v, p, s, e, c) {
      p+=commandObj[c];
      
      if(p<0)
          p=0;
      if(p>v)
          p=v;
      
      if(p>=s && p<=e)
          p=e;
      
      return p;
  }
  
  const videoT = strToTime(video_len);
  const posT = strToTime(pos);
  const opStartT = strToTime(op_start);
  const opEndT = strToTime(op_end);
  
  const videoSec = changeToSec(videoT[0], videoT[1]);
  var posSec = changeToSec(posT[0], posT[1]);
  const opStartSec = changeToSec(opStartT[0], opStartT[1]);
  const opEndSec = changeToSec(opEndT[0], opEndT[1]);
  
  if(posSec>=opStartSec && posSec<=opEndSec)
      posSec=opEndSec;
  
  commands.forEach((c) => {
      posSec= calcPos(videoSec, posSec, opStartSec, opEndSec, c);
  });
  
  return ans = changeToStr(posSec);
}