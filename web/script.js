const macos = navigator.platform.indexOf('Mac') > -1;
const modifier = macos ? '\u2318' : 'Ctrl';
document.getElementById('modifier').innerText = modifier;

document.addEventListener('keydown', function(event) {
    if ((macos ? event.metaKey : event.ctrlKey) && event.key === 'b') {
        event.preventDefault();
        boop();
    }
});

const dialog = document.querySelector('#selector');
const input = document.querySelector('#selector > input');
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        action(input.value);
        input.value = '';
        dialog.close();
    }
});

function boop() {
    document.querySelectorAll('header > div').forEach(x => x.hidden = !x.hidden);
    document.querySelector('#selector').showModal();
}

function action(a) {
    document.querySelectorAll('header > div').forEach(x => x.hidden = !x.hidden);
    if(!a) return;
    
}