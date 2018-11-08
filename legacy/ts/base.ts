export function extend(self: any, obj: any) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            self[i] = obj[i];
        }
    }
}

export function identity<T>(self: T): T {return self;}