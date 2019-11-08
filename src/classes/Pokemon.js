class Pokemon {
    constructor(id, name, type, species, height, weight, abilities, stats) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.stats = stats;
        this.desc = "";
    }

    calculateTotalStats() {
        var total = 0.0;
        this.stats.forEach(element => {
            total += element;
        });

        return total;
    }

    setDesc(desc) {
        this.desc = desc;
    }
}

export default Pokemon;