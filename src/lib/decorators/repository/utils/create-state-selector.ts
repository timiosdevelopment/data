import { isDevMode } from '@angular/core';
import { StateClass } from '@ngxs/store/internals';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { NgxsRepositoryMeta } from '../../../interfaces/external.interface';
import { Any, NGXS_DATA_EXCEPTIONS } from '../../../interfaces/internal.interface';
import { NgxsDataAccessor } from '../../../services/ngxs-data-accessor';
import { getRepository } from '../../../utils/internals/ensure-repository';
import { ngxsDeepFreeze } from '../../../utils/internals/freeze';

export function createStateSelector<T>(stateClass: StateClass): void {
    const repository: NgxsRepositoryMeta = getRepository(stateClass);
    const name: string | undefined | null = (repository.stateMeta && repository.stateMeta.name) || null;

    if (name) {
        const selectorId: string = `__${name}__selector`;

        Object.defineProperties(stateClass.prototype, {
            [selectorId]: {
                writable: true,
                enumerable: false,
                configurable: true
            },
            state$: {
                enumerable: true,
                configurable: true,
                get(): Observable<Any> {
                    if (!NgxsDataAccessor.store) {
                        throw new Error(NGXS_DATA_EXCEPTIONS.NGXS_DATA_MODULE_EXCEPTION);
                    }

                    return (
                        this[selectorId] ||
                        (this[selectorId] = NgxsDataAccessor.store.select(stateClass as Any).pipe(
                            map((state) => {
                                // freezing the some or all of the state
                                const freezeFn = this['freezeState'];
                                if (isDevMode() && typeof freezeFn === 'function') {
                                    return freezeFn(state);
                                } else if (isDevMode()) {
                                    return ngxsDeepFreeze(state);
                                }

                                return state;
                            }),
                            shareReplay({ refCount: true, bufferSize: 1 })
                        ))
                    );
                }
            }
        });
    }
}
