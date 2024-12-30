import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Options } from "./types/config";

export function buildDevServer(options: Options): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
