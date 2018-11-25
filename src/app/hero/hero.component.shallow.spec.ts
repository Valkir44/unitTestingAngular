import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroComponent} from './hero.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HeroComponent (shallow test)', () => {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero',  () => {
        fixture.componentInstance.hero = {id: 1, name: 'Hero', strength: 1};

        expect(fixture.componentInstance.hero.name).toEqual('Hero');
    });

    it('should render name of the HERO in a tag', () =>  {
        fixture.componentInstance.hero = {id: 1, name: 'Hero', strength: 1};
        fixture.detectChanges();

        let deA = fixture.debugElement.query(By.css('a'));

        expect(deA.nativeElement.textContent).toContain('Hero');;

        // expect(fixture.nativeElement.querySelector('a').textContent).toContain('Hero');
    });

});