import { resolve } from 'path';

const alias_path = [
    { find: '@', replacement: resolve(__dirname, "src") },
    { find: '@shared', replacement: resolve(__dirname, "src/shared") },
    {
		find: "@components",
		replacement: resolve(__dirname, "src/shared/components"),
	},
    { find: '@public', replacement: resolve(__dirname, "src/public") },
    { find: '@assets', replacement: resolve(__dirname, "src/assets") },
    { find: '@private', replacement: resolve(__dirname, "src/private") }
]


export default alias_path;