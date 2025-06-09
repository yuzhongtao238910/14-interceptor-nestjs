import { from ,of,mergeMap} from 'rxjs'


// from(Promise.resolve(1)).subscribe({
//     next(val) {
//         console.log(val)
//     }
// })

from(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000)
})).pipe(
    mergeMap((val: any) => {
        console.log(val, "++++")
        return 2+val
    })
).subscribe({
    next(val) {
        console.log(val)
    }
})






