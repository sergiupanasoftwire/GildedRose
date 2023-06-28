export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
                continue;
            }

            this.items[i].sellIn -= 1;

            if (this.items[i].name === 'Aged Brie') {
                if (this.items[i].quality < 50) {
                    this.items[i].quality += 1;
                }
                continue;
            }

            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'
                &&
                this.items[i].sellIn < 0) {

                this.items[i].quality = 0;
                continue;
            }

            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'
                &&
                this.items[i].quality < 50) {

                if (this.items[i].sellIn <= 5) {
                    this.items[i].quality = Math.min(this.items[i].quality + 3, 50);
                    continue;
                }

                if (this.items[i].sellIn <= 10) {
                    this.items[i].quality = Math.min(this.items[i].quality + 2, 50);
                    continue;
                }

                this.items[i].quality = this.items[i].quality + 1;
                continue;
            }

            if (this.items[i].name === 'Conjured Mana Cake') {
                if (this.items[i].sellIn < 0) {
                    this.items[i].quality = Math.max(this.items[i].quality - 4, 0)
                    continue;
                }

                this.items[i].quality = Math.max(this.items[i].quality - 2, 0)
                continue;
            }

            if (this.items[i].quality > 0 && this.items[i].sellIn < 0) {
                this.items[i].quality = Math.max(this.items[i].quality - 2, 0)
                continue;
            }

            if (this.items[i].quality > 0) {
                this.items[i].quality -= 1;
            }
        }

        return this.items;
    }
}
