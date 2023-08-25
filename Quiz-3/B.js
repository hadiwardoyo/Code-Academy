/**
 * ===============================
 * CLASS GROUPING
 * ===============================

 */

const groupClass = (heroes) => {
  let result = {};
  heroes.forEach((element) => {
    let { name, type } = element;
    if (result[type]) {
      result[type].push(name);
    } else {
      result[type] = [name];
    }
  });
  return result;
};

console.log(
  groupClass([
    {
      name: "James the Butcher",
      type: "Warrior",
    },
    {
      name: "Jim spellcast",
      type: "Mage",
    },
    {
      name: "Firefly Stella",
      type: "Thrower",
    },
    {
      name: "Advance lance",
      type: "Warrior",
    },
    {
      name: "Gina poison",
      type: "Mage",
    },
  ])
);

/** 
 * Output :
{
  Warrior: [ 'James the Butcher', 'Advance lance' ],
  Mage: [ 'Jim spellcast', 'Gina poison' ],
  Thrower: [ 'Firefly Stella' ]
}
*/
