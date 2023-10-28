let height = undefined;
let result;

function CheckUndefined(value) {
    if (undefined ?? value) {
        return `Height is defined`;
    } else {
        return `Height is not defined`;
    };
};

result = CheckUndefined(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”