export function pageBack(param){
    return (event) => {
        history.go(param);
    };
}
