/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HeroesComponent } from './Heroes.component';

beforeEachProviders(() => [HeroesComponent]);

describe('App: Ng2lab', () => {
  it('should create the app',
      inject([HeroesComponent], (app: HeroesComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([HeroesComponent], (app: HeroesComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
