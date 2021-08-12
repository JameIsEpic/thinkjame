function main(argv) {
	const wnd = u96.ui.wnd({
		title: "Geforce Now",
        html: "<center><h1>Loading...</h1></center>" + argv.toString()   
    
	});

    wnd.setHtml(`<iframe src="https://play.geforcenow.com" allow="camera;microphone" height="100%" width="100%" title="Geforce Now"></iframe>`)

	wnd.show();
}

// Register app

/*
 Arg 1: App name
 Arg 2: File associations
 Arg 3: Main function
*/
registerApp("geforcenow", [], main);
u96.shell.mkShortcut("c:/system/programs/Other", "geforcenow", "geforcenow");

