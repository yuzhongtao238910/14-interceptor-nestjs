import { from, of } from "rxjs"



from(Promise.reject("1"))
    .subscribe({
        next(val) {
            console.log(val)
        },
        error(err) {
            console.log(err)
        },
        complete() {
            console.log("complete")
        }
    })








export {}