import HtmlWebpackPlugin from "html-webpack-plugin";

import webpack from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { Options } from "./types/config";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import CopyPlugin from "copy-webpack-plugin";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import path from "path";

export function buildPlugins({
  paths,
  isDev,
}: Options): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: path.join(paths.build, "locales") },
      ],
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:8].css" }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }
  return plugins;
}
