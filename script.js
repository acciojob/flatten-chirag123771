//your JS code here. If required.
function flatten(value) {
  if (Array.isArray(value)) {
    return value.reduce((acc, item) => acc.concat(flatten(item)), []);
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      return acc.concat({ [key]: flatten(value[key]) });
    }, []);
  } else {
    return value;
  }
}

module.exports=flatten;
