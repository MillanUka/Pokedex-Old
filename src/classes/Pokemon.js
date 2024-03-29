import React from 'react';
/**
 * This class represents a Pokemon 
 */
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

    formatType() {
        return this.type.map(({ pokemon }, index) => {
            var currentType = this.type[index]
            return (
                <React.Fragment id={currentType}>
                    <div className={currentType}>
                        <h3>{currentType}</h3>
                    </div>
                </React.Fragment>
            );
        });
    }

    formatAbilities() {
        return this.abilities.map(({ pokemon }, index) => {
            var currentAbility = this.abilities[index]
            return (
                <React.Fragment id={currentAbility}>
                    <h3>{currentAbility}</h3>
                </React.Fragment>
            );
        });
    }

    formatStats() {
        return this.stats.map(({ pokemon }, index) => {
            var currentStat = this.stats[index]
            var stat = "";
            switch (index) {
                case 0:
                    stat = "HP";
                    break;
                case 1:
                    stat = "Attack"
                    break;
                case 2:
                    stat = "Defense"
                    break;
                case 3:
                    stat = "Special Attack"
                    break;
                case 4:
                    stat = "Special Defense"
                    break;
                case 5:
                    stat = "Speed";
                default:
            }
            return (
                <h5>
                    <b>{stat}</b >
                    <br></br>
                    <progress value={currentStat} max="120" />
                </h5>
            )
        });
    }
}
export default Pokemon;