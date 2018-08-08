function findHurufAngka(str)
{
  var arr = str.split('');
  var arrHuruf = [];
  var arrAngka = [];
  var regex = /[a-zA-Z]/i;
  var regex2 = /[0-9]/i;

  for(var i=0; i<arr.length; i++)
  {
    if(arr[i].match(regex))
    {
      arrHuruf.push(arr[i]);
    }
    else if(arr[i].match(regex2))
    {
      arrAngka.push(arr[i]);
    }
  }

  console.log('Huruf: ' + arrHuruf);
  console.log('Angka: ' + arrAngka);
}

var str = 'AB%1#7&0R';
findHurufAngka(str);
