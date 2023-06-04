import { defineStore } from 'pinia';

interface Abilities {
    action: string;
    subject: string;
}

export const useMemberStore = defineStore('member', {
    state: () => ({
        name: 'Tiago Rizzo',
        role: 'user',
        abilities: [
            {
                action: 'create',
                subject: 'user',
            },
        ],
    }),
    actions: {
        changeRole(role: string): void {
            this.role = role;
        },
    },
    getters: {
        getAbilities(): Abilities[] {
            return this.abilities;
        },
        getRole(): string {
            return this.role;
        },
    },
});
