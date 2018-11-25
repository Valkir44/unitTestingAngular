import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/internal/observable/of';


describe('HeroComponent', () => {
   let component: HeroesComponent;
   let HEROES;
   let mockHeroService;

   beforeEach(() => {
      HEROES = [
          {id:1, name: 'hero1', strength: 9},
          {id:2, name: 'hero2', strength: 10},
          {id:3, name: 'hero3', strength: 11}
      ];

      mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

      component = new HeroesComponent(mockHeroService);
   });

    describe('delete', () => {
        it('should remove hero',  () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero',  () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });

});