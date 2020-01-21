import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Immutable, NgxsDataPluginModule, NgxsDataRepository, StateRepository } from '@ngxs-labs/data';
import { NgxsDataUtilsModule } from '@ngxs-labs/data/utils';
import { NgxsModule, State } from '@ngxs/store';
import { Observable } from 'rxjs';

export class InteralMutable {
    private _v1 = 0;
    private _v2 = 0;

    get val() {
        this._v1++;
        return this._v2 + this._v1;
    }
}

export abstract class CustomFreezeDataRepository<T> extends NgxsDataRepository<T> {
    public freezeState(state: Immutable<T>): Immutable<T> {
        // dont freeze the darn thing
        return state;
    }
}

describe('Freeze', () => {
    describe('should let you define your own freezing function', () => {
        it('custom freeze', (done) => {
            @StateRepository()
            @State({ name: 'app', defaults: { ref: null, count: 0 } })
            @Injectable()
            class AppState extends CustomFreezeDataRepository<any> {
                setValue(v: any) {
                    this.ctx.setState({
                        ref: v,
                        count: 0
                    });
                }
            }

            TestBed.configureTestingModule({
                imports: [NgxsModule.forRoot([AppState]), NgxsDataPluginModule.forRoot(), NgxsDataUtilsModule]
            }).compileComponents();

            const appState = TestBed.get<AppState>(AppState);

            expect(appState.getState()).toEqual(appState.initialState);

            appState.setValue(new InteralMutable());

            expect(appState.getState().ref.val).toBe(1);
            (appState.state$ as Observable<any>).subscribe((data) => {
                expect(data.ref.val).toBe(2);
                done();
            });
        });
    });
});
