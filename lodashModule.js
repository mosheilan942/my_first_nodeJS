import lodash from "lodash";

export function rev(text) {
    let newdata = lodash.reverse(text);
    return newdata;
}


export function uniq(text) {
    let newdata = lodash.uniq(text);
    return newdata;
}

