import { Immutable, NgxsDataPluginModule, StateRepository, NgxsDataRepository } from '@ngxs-labs/data';
import { NgxsDataMutablePipe, NgxsDataUtilsModule } from '@ngxs-labs/data/utils';
import { Component, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxsModule, State } from '@ngxs/store';

describe('Mutable', () => {
    interface A {
        a: number;
        b: number;
    }

    it('Immutable<A> to A', () => {
        const a: Immutable<A> = { a: 1, b: 2 };
        const mutableA = new NgxsDataMutablePipe().transform(a);

        mutableA.b++;
        expect(a).toEqual({ a: 1, b: 3 });
    });

    it('Immutable<A>[] to A[]', () => {
        const arr: Array<Immutable<A>> = [
            { a: 1, b: 2 },
            { a: 2, b: 3 }
        ];

        const mutableArr = new NgxsDataMutablePipe().transform(arr);

        mutableArr[0].a++;
        mutableArr[1].b++;

        expect(mutableArr).toEqual([
            { a: 2, b: 2 },
            { a: 2, b: 4 }
        ]);
    });

    it('should be correct work pipe in template', () => {
        @StateRepository()
        @State({ name: 'app', defaults: 0 })
        @Injectable()
        class AppState extends NgxsDataRepository<number> {}

        @Component({ selector: 'app', template: '{{ app.state$ | async | mutable }}' })
        class AppComponent {
            constructor(public app: AppState) {}
        }

        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [NgxsModule.forRoot([AppState]), NgxsDataPluginModule.forRoot(), NgxsDataUtilsModule]
        }).compileComponents();

        const app = TestBed.createComponent(AppComponent);
        app.autoDetectChanges();

        expect(parseFloat(app.nativeElement.innerHTML)).toEqual(0);
    });
});
