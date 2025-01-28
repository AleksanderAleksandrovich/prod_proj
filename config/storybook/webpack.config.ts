import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";

import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

function isRuleWithTest(
  rule: RuleSetRule | "..."
): rule is RuleSetRule & { test: RegExp } {
  return (
    typeof rule === "object" &&
    rule !== null &&
    "test" in rule &&
    rule.test instanceof RegExp
  );
}

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    locales: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.module.rules = config.module.rules.map((rule) => {
    if (isRuleWithTest(rule) && /svg/.test(rule.test.toString())) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });

  config.module?.rules?.push(buildCssLoader(true));

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: false,
    })
  );

  return config;
};
