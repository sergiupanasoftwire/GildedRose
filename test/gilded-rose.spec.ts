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

    it('should update quality of Aged Brie correctly', function () {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 100, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].quality).to.equal(21);
        expect(items[0].sellIn).to.equal(99);
    });


    it('testing one item update', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-1);
    });

    it('should update quality of item correctly after sell by date', function () {
        const gildedRose = new GildedRose([ new Item('Car', 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Car');
        expect(items[0].quality).to.equal(8);
        expect(items[0].sellIn).to.equal(-1);
    });

    it('should not update quality of Aged Brie above 50', function () {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 100, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].quality).to.equal(50);
        expect(items[0].sellIn).to.equal(99);
    });

    it('should not drop quality below 0', function () {
        const gildedRose = new GildedRose([ new Item('Car', 0, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Car');
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-1);

        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].name).to.equal('Car');
        expect(updatedItems[0].quality).to.equal(0);
        expect(updatedItems[0].sellIn).to.equal(-2);
    });

    it('should update quality of Backstage pass correctly when there are between 5 and 10 days to concert', function () {
        const gildedRose = new GildedRose(
            [
                new Item('Backstage passes to a TAFKAL80ETC concert', 8, 20)
            ]
        );

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[0].sellIn).to.equal(7);
        expect(updatedItems[0].quality).to.equal(22);
    });

    it('should update quality of Backstage pass correctly when there are between 0 and 5 days to concert', function () {
        const gildedRose = new GildedRose(
            [
                new Item('Backstage passes to a TAFKAL80ETC concert', 3, 20)
            ]
        );

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[0].sellIn).to.equal(2);
        expect(updatedItems[0].quality).to.equal(23);
    });

    it('should update quality of Backstage pass correctly when there are 0 days to concert', function () {
        const gildedRose = new GildedRose(
            [
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
            ]
        );

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[0].sellIn).to.equal(-1);
        expect(updatedItems[0].quality).to.equal(0);
    });

    it('should check if random item, Backstage pass and Sulfuras have their values upated correctly', function () {
        const items: Array<Item> = [
            new Item('Car', 10, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20),
            new Item('Sulfuras, Hand of Ragnaros', 100, 80)
        ];
        const gildedRose: GildedRose = new GildedRose(items);
        const updatedItems: Array<Item> = gildedRose.updateQuality();

        expect(updatedItems[0].name).to.equal('Car');
        expect(updatedItems[0].quality).to.equal(9);
        expect(updatedItems[0].sellIn).to.equal(9);

        expect(updatedItems[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[1].quality).to.equal(21);
        expect(updatedItems[1].sellIn).to.equal(19);

        expect(updatedItems[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(updatedItems[2].quality).to.equal(80);
        expect(updatedItems[2].sellIn).to.eq(100);
    });
});
