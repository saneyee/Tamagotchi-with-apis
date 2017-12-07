
import { Tamagotchi } from './../js/tama.js';

describe('Tamagotchi', function() {
  let snoopy = new Tamagotchi("Snoopy");

  beforeEach(function() {
    jasmine.clock().install();
    snoopy.setHunger();
    snoopy.setAttention();
    snoopy.setRest();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food,happiness and rest levels of 10 when it is created', function() {
    expect(snoopy.name).toEqual("Snoopy");
    expect(snoopy.foodLevel).toEqual(10);
    expect(snoopy.happinessLevel).toEqual(10);
    expect(snoopy.restLevel).toEqual(10);
  });

  it('should have a food,happiness and rest levels of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(snoopy.foodLevel).toEqual(7);
    expect(snoopy.happinessLevel).toEqual(7);
    expect(snoopy.restLevel).toEqual(7);
  });

  it('should have a food level of 10, happiness level of 5 if it is fed', function() {
    jasmine.clock().tick(9001);
    snoopy.feed();
    expect(snoopy.foodLevel).toEqual(10);
  });
  it('should have a happiness level of 10 if it is given attention', function() {
    jasmine.clock().tick(9001);
    snoopy.play();
    expect(snoopy.happinessLevel).toEqual(10);
  });

  it('should have a rest level of 10 if it is given the rest needed', function() {
    jasmine.clock().tick(9001);
    snoopy.rest();
    expect(snoopy.restLevel).toEqual(10);
  });

});
