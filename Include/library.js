

var g_iCurrentImage = 0;
var g_iLastLoadedImage = 0;
var g_iTimeOut = 1000;
var g_constDemoImages = 27;

function VerifyAndSubmit(p_tIssueName) {
	var fValid;

	fValid = (document.getElementById('senderEmail').value != '');
	if (fValid) {
		fValid = (document.getElementById('txtIssue').value != '');
		
		if (fValid) {
			document.getElementById('EmailForm').submit();
		} else {
			alert('Please enter ' + p_tIssueName + '.');
		}
	} else {
		alert('Please enter your e-mail address.');
	}
}

function loadDemoImages()
{
	window.setTimeout("showNextDemoImage()", g_iTimeOut);

	for (var i = 1; i < g_constDemoImages; ++i)
	{
		LoadImg.src = getDemoImagePath(i);
		g_iLastLoadedImage = i;
	}
	
}

function showDemoImage(p_iImageIndex)
{
	demoimage.src = getDemoImagePath(p_iImageIndex);
}

function showNextDemoImage()
{
	g_iCurrentImage = (g_iCurrentImage + 1) % g_constDemoImages;

	while (g_iCurrentImage > g_iLastLoadedImage)
	{
		g_iCurrentImage = (g_iCurrentImage + 1) % g_constDemoOmages;
	}

	AlternatingImg.src = getDemoImagePath(g_iCurrentImage);

	if (g_iTimeOut < 3000)
	{
		g_iTimeOut = g_iTimeOut + 250;
	}

	window.setTimeout("showNextDemoImage()", g_iTimeOut);
}


function getDemoImagePath(p_iImageIndex)
{
	return ("Images/Demo/demo" + p_iImageIndex + ".png");
}

