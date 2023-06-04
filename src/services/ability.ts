import { defineAbility } from '@casl/ability';

export default defineAbility((can, cannot) => {
    cannot('manage', 'all');
});
