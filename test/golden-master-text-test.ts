import {expect} from "chai";
import {GildedRose, Item} from "../app/gilded-rose";

describe('Golden Master testing', function () {

    it('should update all items correctly', () => {

        const items: Item[] = [
            new Item('Sulfuras, Hand of Ragnaros', 100, 80),
            new Item('Aged Brie', 20, 20),
            new Item('Aged Brie', 20, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40),
            new Item('Basic item', 0, 0)
        ];

        const gildedRose = new GildedRose(items);

        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(updatedItems[0].quality).to.equal(80);
        expect(updatedItems[0].sellIn).to.equal(100);

        expect(updatedItems[1].name).to.equal('Aged Brie');
        expect(updatedItems[1].quality).to.equal(21);
        expect(updatedItems[1].sellIn).to.equal(19);

        expect(updatedItems[2].name).to.equal('Aged Brie');
        expect(updatedItems[2].quality).to.equal(50);
        expect(updatedItems[2].sellIn).to.equal(19);

        expect(updatedItems[3].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[3].quality).to.equal(11);
        expect(updatedItems[3].sellIn).to.equal(19);

        expect(updatedItems[4].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[4].quality).to.equal(22);
        expect(updatedItems[4].sellIn).to.equal(9);


        expect(updatedItems[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[5].quality).to.equal(33);
        expect(updatedItems[5].sellIn).to.equal(4);

        expect(updatedItems[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(updatedItems[6].quality).to.equal(0);
        expect(updatedItems[6].sellIn).to.equal(-1);

        expect(updatedItems[7].name).to.equal('Basic item');
        expect(updatedItems[7].quality).to.equal(0);
        expect(updatedItems[7].sellIn).to.equal(-1);

    });

});