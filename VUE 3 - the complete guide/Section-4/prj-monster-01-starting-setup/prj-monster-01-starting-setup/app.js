function getRandomDamage(min, max) {
    let attackValue = Math.floor(Math.random() * (max - min)) + min;
    return attackValue
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            winner: null,
            battleLog: []
        };
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'you lost!';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'you won!';
            }
        }
    },
    computed: {
        monsterBar() {
            return { width: this.monsterHealth + '%' };
        },
        playerBar() {
            return { width: this.playerHealth + '%' };
        }
    },
    methods: {
        attackMonster() {
            this.round++;
            let attackValue = getRandomDamage(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
            this.addLog('player', 'attack', attackValue)
        },
        attackPlayer() {
            let attackValue = getRandomDamage(8, 15)
            this.playerHealth = this.playerHealth - attackValue;
            this.addLog('monster', 'attack', attackValue)
        },
        specialAttack() {
            this.round++;
            let attackValue = getRandomDamage(10, 25);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
            this.addLog('player', 'special attack', attackValue)
        },
        healPlayer() {
            this.round++;
            let healAmmount = getRandomDamage(8, 20);
            if (this.playerHealth + healAmmount < 100) {
                this.playerHealth += healAmmount
            } else {
                this.playerHealth = 100;
            }
            this.attackPlayer();
            this.addLog('player', 'heal', healAmmount)
        },
        surrender() {
            this.playerHealth = 0;
        },
        addLog(who, what, value) {
            this.battleLog.unshift({
                by: who,
                type: what,
                value: value
            })
        }
    }

});

app.mount('#game');
