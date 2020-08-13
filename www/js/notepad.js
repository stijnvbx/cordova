let notepad = function () {
    let _notes = [];
    let _content = [];


    let _setLocalStorage = function() {

        console.log('bewaar alle notes in "note"');
        console.log(_notes);
        console.log(_content);
        localStorage.setItem('note', JSON.stringify(_notes));
        localStorage.setItem('content', JSON.stringify(_content));
        _noteList();
    }

    let _noteList = function() {

        $('div.notes').empty();
        $('ul.sidenav').empty();

        let url = "http://r0740656.sinners.be/index.php";
        $.getJSON(url, function(result) {
            console.log(result);
            let aboutnav = '<li><a href="#!" data-show="about">About</a></li>';
            $('ul').append(aboutnav);
            let about = `<div class="row spa test" id="about" style="display: block">
            <div class="col s12">
            <h4 class="content" data-task="about">About</h4>
            <p>${result}</p>
            </div>
            </div>`;
            $('div.notes').append(about);

        for (let i = 0; i < _notes.length; i++) {
            let navbar = `<li><a href="#!" data-show="${i}">${_notes[i]}</a><i class="material-icons circle red deleteNote" data-task="${i}">delete_forever</i></li>
            <li>
            <div class="divider"></div>
            </li>`;
            $('ul').append(navbar);

            let NewNote = `<div class="row spa test" id="${i}" data-task="${i}">
            <div class="col s12">
            <h4 class="title" contenteditable>${_notes[i]}</h4>
            <p contenteditable="true" class="content">${_content[i]}</p>
            </div>
            </div>`;

            $('div.notes').append(NewNote);
            $('.sidenav').sidenav();
            $('.sidenav a').click(function () {
                $('.spa').hide();
                $('#' + $(this).data('show')).show();
                $('.sidenav').sidenav('close');
            });
        }

        });
    }


    let init = function(){
        console.log('de notepad app start op...');
        let notes_str = localStorage.getItem('note');
        if (notes_str !== null) {
            _notes = JSON.parse(notes_str);
        }
        let content_str = localStorage.getItem('content');
        if (content_str !== null) {
            _content = JSON.parse(content_str);
        }
        _noteList();
    }

    let addNote = function(){
        console.log('nieuwe note toevoegen');
        let name = prompt("Enter a name");
        if (name == null || _notes.includes(name) != 0){
            alert("Invalid name");
            return;
        }
        _notes.push(name);
        _content.push("");
        _setLocalStorage();
    };

    let editNote = function(id, note, content){
        console.log(`note bewerken: _notes[${id}] = ${note}`);
        console.log(`note bewerken: _content[${id}] = ${content}`);
        _notes[id] = note;
        _content[id] = content;
        _setLocalStorage();
    };

    let deleteNote = function(id){
        console.log(`note wissen: id = ${id}`);
        if(confirm('Deze note wissen?')) {
            _notes.splice(id, 1);   // Verwijder het x-de element uit de array
            _content.splice(id, 1);
            _setLocalStorage();
        }
    };


    return {
        init: init,
        addNote: addNote,
        editNote: editNote,
        deleteNote: deleteNote
    };
}();
