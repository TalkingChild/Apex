




// var g_iLeft = 405;
function ondocumentload()
{
	// Preload images for this page
	new Image().src = "Images2/swiftSimple2.png";
	new Image().src = "Images2/swiftSimpleSecure2.png";
	new Image().src = "Images2/power.png";
	
	if (document.all)
	{
		setTimeout(showSwift, 500);
	}
	else
	{
		//fadePower();

		// Firefox doesn't support fading
		var oSSSImgElement = GetElementFromDocumentById('sssimg');

		oSSSImgElement.style.marginLeft = 480;
		oSSSImgElement.style.marginBottom = 8;
		oSSSImgElement.src="Images2/power.png";
		oSSSImgElement.style.display="";
		
	}
}

function showSwift()
{
	var oSSSImgElement = GetElementFromDocumentById('sssimg');

	oSSSImgElement.style.display = "";
	setTimeout(fadeSimple, 500);
}

function fadeSimple()
{
	var oSSSImgElement = GetElementFromDocumentById('sssimg');
	
	if (oSSSImgElement.filters != null)
	{
		oSSSImgElement.filters.blendTrans.apply();
		oSSSImgElement.src="Images2/swiftSimple2.png";
		oSSSImgElement.filters.blendTrans.play();
		setTimeout(fadeSecure, 1000);
	}
}

function fadeSecure()
{
	var oSSSImgElement = GetElementFromDocumentById('sssimg');
	
	if (oSSSImgElement.filters != null)
	{
		oSSSImgElement.filters.blendTrans.apply();
		oSSSImgElement.src="Images2/swiftSimpleSecure2.png";
		oSSSImgElement.filters.blendTrans.play();
		setTimeout(fadePower, 2000);
	}
}

function toggleVisibility(id)
{
	var oElement = GetElementFromDocumentById(id);
	if (oElement.style.display == "") oElement.style.display = "none";
	else oElement.style.display = "";
}

function fadePower()
{
	var oSSSImgElement = GetElementFromDocumentById('sssimg');
	
	oSSSImgElement.style.display = "none";
	oSSSImgElement.style.marginLeft = 480;
	oSSSImgElement.style.marginBottom = 8;
	
	if (oSSSImgElement.filters != null)
	{
		oSSSImgElement.filters.blendTrans.apply();
		oSSSImgElement.src = "Images2/power.png";
		oSSSImgElement.style.display = "";
		oSSSImgElement.filters.blendTrans.play();
	}
}

function VerifyAndSubmit(issueName) {
	var fValid;
	
	var oEmailElement = GetElementFromDocumentById('Email');
	var oIssueElement = GetElementFromDocumentById('Issue');
	var oEmailFormElement = GetElementFromDocumentById('EmailForm');

	fValid = (oEmailElement.value != '');
	
	if (fValid) {
		fValid = (oIssueElement.value != '');
		
		if (fValid) {
			oEmailFormElement.submit();
		} else {
			alert('Please enter ' + issueName + '.');
		}
	} else {
		alert('Please enter your e-mail address.');
	}
}

function GetElementFromDocumentById(id)
{
	var oElement = document.getElementById(id);
	if (oElement == null) alert('document.getElementById("' + id + '") is null.');
	return oElement;
}

function GetElementFromDocumentById2(doc, id)
{
	if (doc == null) alert('doc was null in call  to GetElementFromDocumentById2');
	var oElement = doc.getElementById(id);
	if (oElement == null) alert('GetElementFromDocumentById2(doc,"' + id + '") is null.');
	return oElement;
}

function ParseNumberFromString(t)
{
	var i = new Number(t);
	if (isNaN(i)) i = 0;
	return i;
}

