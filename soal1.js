function whoWins(arr)
{
  var positif = 0;
  var negatif = 0;

  for(var i=0; i<arr.length; i++)
  {
    if(arr[i]>0)
    {
      positif+=arr[i];
    }
    else if(arr[i]<0)
    {
      negatif+=arr[i];
    }
  }
  negatif = Math.abs(negatif);
  if(positif>negatif)
  {
    console.log('POSITIF WINS');
  }
  else if(positif<negatif)
  {
    console.log('NEGATIF WINS');
  }
  else
  {
    console.log('DRAW');
  }
}

var arr = [5,-6,-8,4,-3,6];
whoWins(arr);