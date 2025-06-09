import { from, of, mergeMap, Observable } from 'rxjs'

from(Promise.resolve(1))
.subscribe({
    next(val) {
        console.log(val)
    }
})



