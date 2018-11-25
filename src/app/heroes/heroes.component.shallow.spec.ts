import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {HeroService} from '../hero.service';
import {of} from 'rxjs/internal/observable/of';
import {Hero} from '../hero';
import {By} from '@angular/platform-browser';

describe('HeroesComponent', () => {

    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    let HEROES;

    @Component({
        selector: 'app-hero',
        template: '<div></div>',
    })

    class FakeHeroComponent {
        @Input() hero: Hero;
        // @Output() delete = new EventEmitter();
    }

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'hero1', strength: 9},
            {id: 2, name: 'hero2', strength: 10},
            {id: 3, name: 'hero3', strength: 11}
        ];

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            providers: [{provide: HeroService, useValue: mockHeroService}],
            // schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('should create one li foe each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    });
});