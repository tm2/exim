const utils = {}

utils.getWithoutFields = function (outcast, target) {
  if (!target) throw new Error('TypeError: target is not an object.');
  var result = {};
  if (typeof outcast === 'string') outcast = [outcast];
  for (let fieldName in outcast)
    for (let key in target)
      if (target.hasOwnProperty(key) && key !== fieldName)
        result[key] = target[key];
  return result;
};

utils.objectToArray = function (object) {
  return Object.keys(object).map(key => object[key])
}

// 1. will
// 2. while(true)
// 3. on
// 4. while(false)
// 5. did or didNot
utils.mapActionNames = function(object) {
  const list = [];
  const prefixes = ['will', 'whileStart', 'on', 'whileEnd', 'did', 'didNot']
  prefixes.forEach(item => {
    let name = item;
    if (item === 'whileStart' || item === 'whileEnd') {
      name = 'while';
    }
    if (object[name]) {
      list.push([item, object[name]]);
    }
  });
  return list;
};

utils.capitalize = function (str) {
  const first = str.charAt(0).toUpperCase();
  const rest = str.slice(1);
  return `${first}${rest}`;
}

export default utils
