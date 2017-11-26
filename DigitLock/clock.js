function getClock() {

	var d = new Date();
	var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
	var Month = ["Janu", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var nday = d.getDay();
	var nmonth = d.getMonth();
	var nhour = d.getHours(); 
	var nmin = d.getMinutes();
	var sec = d.getSeconds();

	var ap = 'AM';

	if (nhour == 0) 
	{
		ap = 'AM';
		nhour = 12;
	}

	if (nhour < 12) 
	{
		ap = 'PM';
	}

	if (nhour >= 12) 
	{
		ap = 'PM';
		nhour-= 12;
	}

	if (sec < 10)
	{
		sec = "0" + sec;
	}

	if (nmin < 10)
	{
		nmin = "0" + nmin;
	}
	document.getElementById('clock').innerHTML = "<pre>" + Month[nmonth] + " " + day[nday] + "\n" + nhour + " : " + nmin + " : " + sec + " " + ap + "</pre>";
}

	window.onload = function(){
		getClock();
		setInterval(getClock, 1000);
	}