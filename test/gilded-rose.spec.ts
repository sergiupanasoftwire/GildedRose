import {expect} from "chai";
import {Item, GildedRose} from "../app/gilded-rose";

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });


    it('should update quality of Sulfuras correctly', function () {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 100, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].quality).to.equal(80);
        expect(items[0].sellIn).to.equal(100);
    });
});
