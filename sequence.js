const NUM = 5;

var array = [];

function rowKollatsa(number, array=[]) 
{
	var num = 2;
	var i = 0;
	var len = 1;
	var next = array[i+1];
	array[0] = num;

	while (num < number)
	{
		if (array[i] == 1) 
		{
			num++;
			i++;
			array.push(num);
			if (array[i] == number)
			{
				break;
			}
		}
		if (array[i] % 2 == 0) 
		{
			next = array[i] / 2;
			array.push(next);
			i++;
		}
		else
		{
			next = array[i] * 3 + 1;
			array.push(next);
			i++;
		}
	}
}

function viewArray(array=[])
{
	for (var j = 0; j < array.length; j++)
	{
		console.log("array: " + array[j]);
	}
}


/*function maxNumber(array = [])
{

}*/

rowKollatsa(NUM, array);
viewArray(array);
//maxNumber(array);