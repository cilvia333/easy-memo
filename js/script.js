require('electron').remote.getCurrentWindow().on('hide',function(){
    document.getElementById("memo").value = null;
});

function dodo(text){
    console.log(text)
}

const WordCommand = {"#dodo":dodo}

function submit(){
    if(window.event.keyCode==13){
        var memo = document.getElementById("memo").value;
        var words = memo.split(' ')
        words.forEach(word => {
            if(WordCommand[word] != null){
                WordCommand[word](memo.replace(word,''));
            }
        });
    }
}