require('datejs');

const combineUsers = (...userArrays) => {
  const combinedObject = {
    users: userArrays.flat(),
    merge_date: Date.today().toString('M/d/yyyy')
  };

  return combinedObject;
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

