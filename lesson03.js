
function handleObject(obj, key, action) {
    switch (action) {
        case 'get':
        case 'add':
            obj[key] = "";
            return obj;
        case 'delete':    
            delete obj[key];
            return obj;
        default:
            return obj;
    }
}

const student = {
    name: 'Ivan',
    programmingLanguage: 'JavaScript',
};

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); 