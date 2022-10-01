for i in *.jsx 
do
echo "import React from 'react'

export default function ${i:0:-4} (){
  return (
    <div>${i:0:-4}</div>
  )
}

" > $i;
done

if ('hi' != 'bash')
then 
echo "yoyhou"
fi