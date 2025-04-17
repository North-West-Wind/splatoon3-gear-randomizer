import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
	mode: "development",
	entry: "./client/index.ts",
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: "/node_modules/"
		}]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public")
	}
};

export default config;