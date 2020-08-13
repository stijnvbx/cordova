$(function(){
	document.addEventListener("deviceready", onDeviceReady, false);

	$('.sidenav').sidenav();
	$('.sidenav a').click(function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		$('.sidenav').sidenav('close');
	});

	$('#addNote').click(function(){
		console.log('nieuwe note toevoegen');
		notepad.addNote();
	});

	$('div.notes').on('blur', '.test', function(){
		console.log('note is aangepast');
		let id = $(this).data('task');   // id = waarde x uit data-task="x"
		let note = $('.title', $(this)).html();       // task = de HTML-code in het teksveld
		let content = $('.content', $(this)).html();
		notepad.editNote(id, note, content);
	});

	$('ul').on('click', '.deleteNote', function(){
		console.log('taak wissen');
		let id = $(this).data('task');   // id = waarde x uit data-task="x"
		notepad.deleteNote(id);
	});
});

function onDeviceReady() {
    console.log('Device is ready');
    notepad.init();
};

