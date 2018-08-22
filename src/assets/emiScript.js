var page = new WebPage(), testindex = 0, loadInProgress = false;

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function() {
  loadInProgress = false;
  console.log("load finished");
};


var steps = [
  function() {
    page.open("https://emicalculator.net/");
    }, 
	 
  function() {
    page.evaluate(function() {
	console.log('amount');
	document.getElementById("loanamount").value = "1500000";
      console.log(document.getElementById("loanamount").value);
	console.log('interest');
	document.getElementById("loaninterest").value = "8.5";
      console.log(document.getElementById("loaninterest").value);
	console.log('loanterm');
	document.getElementById("loanterm").value = "20";
      console.log(document.getElementById("loanterm").value);
	var element = document.querySelector("div#emicalculatorinnerform.form-horizontal");
        var event = document.createEvent("MouseEvent");
    	event.initMouseEvent('click',true,true,window,null,0,0,0,0,false,false,false,false,0,null);
 	// send click to element
        element.dispatchEvent(event);
	window.setTimeout(function() {
            handle_click_reaction(page);
        },5000);
    });	
  },
  function() {
    page.evaluate(function() {
	console.log('amount');
        console.log(document.getElementById("loanamount").value);
	console.log('emiamount');
        console.log(document.getElementById("emiamount").textContent);
    });
  }
];



interval = setInterval(function() {
  if (!loadInProgress && typeof steps[testindex] == "function") {
    console.log("step " + (testindex + 1));
    steps[testindex]();
    testindex++;
  }
  if (typeof steps[testindex] != "function") {
    console.log("test complete!");
    phantom.exit();
  }
}, 50);