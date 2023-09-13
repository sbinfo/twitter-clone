export function getCurretDate () {
    let date = new Date();

    let options = {
        month: "short",
        day: "numeric",
    };


    return new Intl.DateTimeFormat("en-US", options).format(date)
}