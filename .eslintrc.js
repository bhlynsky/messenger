module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'eslint:recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'import', 'react-hooks'],
    rules: {
        'react/prop-types': 'off',
        // 'react-hooks/exhaustive-deps': 'warn',
    },
};
