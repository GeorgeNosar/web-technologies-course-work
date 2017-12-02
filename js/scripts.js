function ChangeSection( newSection ) {
	var mp_sec = document.getElementById('mainpage');
	var hi_sec = document.getElementById('history');
	var ni_sec = document.getElementById('net_interface');
	var nw_sec = document.getElementById('network');
	var tr_sec = document.getElementById('transport');
	var ap_sec = document.getElementById('application');
	switch(newSection) {
		case "mp":
			mp_sec.setAttribute("class", "not-hidden");
			hi_sec.setAttribute("class", "hidden");
			ni_sec.setAttribute("class", "hidden");
			nw_sec.setAttribute("class", "hidden");
			tr_sec.setAttribute("class", "hidden");
			ap_sec.setAttribute("class", "hidden");
			break;
		case "hi":
			mp_sec.setAttribute("class", "hidden");
			hi_sec.setAttribute("class", "not-hidden");
			ni_sec.setAttribute("class", "hidden");
			nw_sec.setAttribute("class", "hidden");
			tr_sec.setAttribute("class", "hidden");
			ap_sec.setAttribute("class", "hidden");
			break;
		case "ni":
			mp_sec.setAttribute("class", "hidden");
			hi_sec.setAttribute("class", "hidden");
			ni_sec.setAttribute("class", "not-hidden");
			nw_sec.setAttribute("class", "hidden");
			tr_sec.setAttribute("class", "hidden");
			ap_sec.setAttribute("class", "hidden");
			break;	
		case "nw":
			mp_sec.setAttribute("class", "hidden");
			hi_sec.setAttribute("class", "hidden");
			ni_sec.setAttribute("class", "hidden");
			nw_sec.setAttribute("class", "not-hidden");
			tr_sec.setAttribute("class", "hidden");
			ap_sec.setAttribute("class", "hidden");
			break;
		case "tr":
			mp_sec.setAttribute("class", "hidden");
			hi_sec.setAttribute("class", "hidden");
			ni_sec.setAttribute("class", "hidden");
			nw_sec.setAttribute("class", "hidden");
			tr_sec.setAttribute("class", "not-hidden");
			ap_sec.setAttribute("class", "hidden");
			break;
		case "ap":
			mp_sec.setAttribute("class", "hidden");
			hi_sec.setAttribute("class", "hidden");
			ni_sec.setAttribute("class", "hidden");
			nw_sec.setAttribute("class", "hidden");
			tr_sec.setAttribute("class", "hidden");
			ap_sec.setAttribute("class", "not-hidden");
			break;
	}
};

$(".popup").magnificPopup(
{
  removalDelay: 350,
  mainClass: 'mfp-fade'
});
