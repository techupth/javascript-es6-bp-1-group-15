let height = undefined;

function checkHeight(height) {
    let result = height ?? "Height is not defined";
    return result;
}
let result = checkHeight(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
