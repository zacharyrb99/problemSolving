// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    
    if (keys.length <= values.length) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            
            obj[key] = values[i];
        }
    } else if (keys.length > values.length) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let val = values[i] || null;

            obj[key] = val;
        }
    }

    return obj;
}
