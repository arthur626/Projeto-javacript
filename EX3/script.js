
	function vibrar1(){
		navigator.vibrate('200');
	}

	function vibrar2(){
		navigator.vibrate(['200', '300', '400', '500']);
		console.log("terminei de executar o vibrate");
	}

	function vibrar3(){
		navigator.vibrate(['500','300','200']);
	}