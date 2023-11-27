module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'@stylistic',
		'import'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true
			}
		],
		'semi': [
			'error',
			'always'
		],
		'@stylistic/array-bracket-newline': [
			'error',
			{
				multiline: true
			}
		],
		'@stylistic/array-element-newline': [
			'error',
			{
				ArrayExpression: {
					multiline: true,
					minItems: 2
				},
				ArrayPattern: 'never'
			}
		],
		'@stylistic/object-curly-newline': [
			'error',
			{
				multiline: true,
				minProperties: 2
			}
		],
		'@stylistic/object-property-newline': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					['internal', 'parent', 'sibling', 'index', 'type'],
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				warnOnUnassignedImports: true,
				'newlines-between': 'always'
			}
		]
	}
};
