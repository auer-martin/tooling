/**
 * Since the ecosystem hasn't fully migrated to ESLint's new FlatConfig system yet,
 * we "need" to type some of the plugins manually :(
 */

declare module 'eslint-plugin-import' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module 'eslint-plugin-drizzle' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module 'eslint-plugin-unicorn' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module 'eslint-plugin-react' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
    all: { rules: Linter.RulesRecord };
    'jsx-runtime': { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module 'eslint-plugin-react-hooks' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: {
      rules: {
        'rules-of-hooks': Linter.RuleEntry;
        'exhaustive-deps': Linter.RuleEntry;
      };
    };
  };
  export const rules: Record<string, Rule.RuleModule>;
}
