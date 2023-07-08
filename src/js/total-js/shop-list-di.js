

function safeLokalStor() {
    const info = {
        autor: 'dima',
        janr: 'fantazi'
    };
    
    localStorage.setItem('book', JSON.stringify(info));
}

safeLokalStor();