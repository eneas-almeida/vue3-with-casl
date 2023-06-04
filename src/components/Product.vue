<template>
    <div>
        <button @click="changeAbility('admin')">Login admin</button>
        <button @click="changeAbility('user')">Login user</button>
        <br />
        <br />
        <div v-if="active">is {{ memberStore.getRole }}</div>
        <br />
        <div v-if="can('manage', 'all')">[Ability enabled for admin]</div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useAbility } from '@casl/vue';
import ability from '../services/ability';
import { useMemberStore } from '../store/member';

export default {
    name: 'Member',
    setup() {
        const { can } = useAbility();

        const active = ref(false);

        const memberStore = useMemberStore();

        const changeAbility = (role: string): void => {
            memberStore.changeRole(role);

            active.value = true;

            if (memberStore.getRole === 'admin') {
                ability.update([{ action: 'manage', subject: 'all' }]);
                return;
            }

            memberStore.getAbilities.forEach(({ action, subject }) => {
                ability.update([{ action, subject }]);
            });
        };

        return {
            can,
            changeAbility,
            memberStore,
            active,
        };
    },
};
</script>
