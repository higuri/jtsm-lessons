// Now we want to use Promise object !
export function myFunction(s: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        resolve(s + ' with Promise Object');
    });
}
