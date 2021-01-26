const table = {
  legs: 4,
  color: "red",
  material: "tree",
};
const production = Object.create(table);
production.country = "Russia";
function func(obj) {
    for (let entries in obj) {
        if (obj.hasOwnProperty(entries)) {
            console.log(Object.entries(obj));
        }
    }
}
func(production);