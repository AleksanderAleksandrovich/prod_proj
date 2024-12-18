type BuildMode = "development" | "production";

export type BuildPaths = {
  html: string;
  entry: string;
  build: string;
};

export type Options = {
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean,
  port: number
};

export type BuildEnv = {
  mode: BuildMode,
  port: number
}